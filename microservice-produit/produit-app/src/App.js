import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { Layout, message, Input, Button } from 'antd';
import './App.css';

// Importer l'image depuis le dossier src
import imageb from './assets/images/imageb.png';

const { Content } = Layout;

function App() {
    const [produits, setProduits] = useState([]);
    const [filteredProduits, setFilteredProduits] = useState([]);
    const [currentProduit, setCurrentProduit] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchProduits();
    }, []);

    const fetchProduits = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/produits');
            setProduits(response.data);
            setFilteredProduits(response.data); // Initialisation des produits filtrés
        } catch (error) {
            message.error('Erreur lors de la récupération des produits.');
        }
    };

    const handleSearch = () => {
        const query = searchQuery.toLowerCase();
        const filtered = produits.filter(
            (produit) =>
                produit.description && // Vérifie que description existe
                produit.description.toLowerCase().includes(query) // Recherche insensible à la casse
        );
        setFilteredProduits(filtered);
    };

    const addOrUpdateProduit = async (produit) => {
        try {
            if (currentProduit) {
                await axios.put(`http://localhost:8081/api/produits/${currentProduit.id}`, produit);
                message.success('Produit mis à jour avec succès.');
            } else {
                await axios.post('http://localhost:8081/api/produits', produit);
                message.success('Produit ajouté avec succès.');
            }
            fetchProduits();
            setCurrentProduit(null);
        } catch (error) {
            message.error('Erreur lors de l\'ajout ou de la mise à jour du produit.');
        }
    };

    const deleteProduit = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/api/produits/${id}`);
            message.success('Produit supprimé avec succès.');
            fetchProduits();
        } catch (error) {
            message.error('Erreur lors de la suppression du produit.');
        }
    };

    return (
        <Layout>
            <Header />
            <Content
                style={{
                    padding: '24px',
                    backgroundImage: `url(${imageb})`, // Utilisation de l'image importée
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                }}
            >
                {/* Barre de recherche */}
                <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                    <Input
                        placeholder="Rechercher un produit"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ width: '300px' }}
                    />
                    <Button type="primary" onClick={handleSearch}>
                        Rechercher
                    </Button>
                </div>

                <ProductForm
                    onSubmit={addOrUpdateProduit}
                    initialValues={currentProduit}
                    isEditing={!!currentProduit}
                    onCancel={() => setCurrentProduit(null)}
                />
                <ProductList
                    produits={filteredProduits} // Utilisation des produits filtrés
                    onEdit={setCurrentProduit}
                    onDelete={deleteProduit}
                />
            </Content>
        </Layout>
    );
}

export default App;
