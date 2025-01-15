import React, { useState } from 'react';
import { Card, Button, Row, Col, Tooltip, message, Popconfirm, Pagination } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ProductList = ({ produits, onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // You can adjust this based on your preference

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate the products to display based on the current page
    const paginatedProduits = produits.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
                {paginatedProduits.map((produit) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={produit.id}>
                        <Card
                            hoverable
                            title={produit.description}
                            extra={
                                <Tooltip title="Prix total">
                                    <span style={{ fontWeight: 'bold', color: '#1890ff' }}>
                                        {produit.prix} DH
                                    </span>
                                </Tooltip>
                            }
                            actions={[
                                <Tooltip title="Éditer le produit">
                                    <Button
                                        type="text"
                                        icon={<EditOutlined />}
                                        onClick={() => onEdit(produit)}
                                    />
                                </Tooltip>,
                                <Tooltip title="Supprimer le produit">
                                    <Popconfirm
                                        title="Êtes-vous sûr de vouloir supprimer ce produit ?"
                                        onConfirm={() => onDelete(produit.id)}
                                        okText="Oui"
                                        cancelText="Non"
                                        placement="topRight"
                                    >
                                        <Button
                                            type="text"
                                            danger
                                            icon={<DeleteOutlined />}
                                        />
                                    </Popconfirm>
                                </Tooltip>,
                            ]}
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.03)';
                                e.currentTarget.style.boxShadow =
                                    '0 8px 20px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow =
                                    '0 4px 10px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <div
                                style={{
                                    padding: '16px',
                                    textAlign: 'center',
                                    backgroundColor: '#f9f9f9',
                                    borderRadius: '10px',
                                }}
                            >
                                <p style={{ marginBottom: '8px', fontSize: '16px' }}>
                                    <strong>Quantité:</strong> {produit.quantite}
                                </p>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Pagination Component */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Pagination
                    current={currentPage}
                    total={produits.length}
                    pageSize={itemsPerPage}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                    showQuickJumper
                />
            </div>
        </>
    );
};

export default ProductList;
