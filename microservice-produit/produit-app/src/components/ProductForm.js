import React from 'react';
import { Form, Input, InputNumber, Button, Card, Space } from 'antd';
import { SaveOutlined, CloseOutlined } from '@ant-design/icons';

const ProductForm = ({ onSubmit, initialValues, isEditing, onCancel }) => {
    const [form] = Form.useForm();

    // Pré-remplir le formulaire lors de l'édition
    React.useEffect(() => {
        if (initialValues) {
            form.setFieldsValue(initialValues);
        }
    }, [initialValues, form]);

    const handleFinish = (values) => {
        onSubmit(values);
        form.resetFields();
    };

    return (
        <Card
            title={isEditing ? 'Modifier le livre' : 'Ajouter un livre'}
            bordered={false}
            style={{
                maxWidth: 600,
                margin: '20px auto',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
            }}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                initialValues={initialValues}
            >
                <Form.Item
                    name="description"
                    label="Titre"
                    rules={[{ required: true, message: 'Veuillez entrer un titre' }]}
                >
                    <Input placeholder="Description du produit" allowClear />
                </Form.Item>

                <Form.Item
                    name="quantite"
                    label="Quantité disponible"
                    rules={[{ required: true, message: 'Veuillez entrer une quantité' }]}
                >
                    <InputNumber min={1} placeholder="Quantité" style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="prix"
                    label="Prix du livre"
                    rules={[{ required: true, message: 'Veuillez entrer un prix' }]}
                >
                    <InputNumber
                        min={0}
                        step={0.01}
                        placeholder="Prix"
                        style={{ width: '100%' }}
                    />
                </Form.Item>

                <Form.Item>
                    <Space>
                        <Button
                            type="primary"
                            htmlType="submit"
                            icon={<SaveOutlined />}
                            style={{ background: '#1890ff', borderColor: '#1890ff' }}
                        >
                            {isEditing ? 'Mettre à jour' : 'Ajouter'}
                        </Button>
                        {isEditing && (
                            <Button
                                onClick={onCancel}
                                icon={<CloseOutlined />}
                                style={{ background: '#ff4d4f', borderColor: '#ff4d4f', color: '#fff' }}
                            >
                                Annuler
                            </Button>
                        )}
                    </Space>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default ProductForm;
