import React, { useState, useEffect } from 'react';

function AddProduct() {
    const [cards, setCards] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.title || !formData.description || !formData.price) {
            alert('Заполните все поля');
            return;
        }

        // Очистка формы
        setFormData({
            title: '',
            description: '',
            price: ''
        });
        
        alert('Продукт добавлен!');
    };

    // Функция удаления продукта
    const handleDelete = (id) => {
        console.log("удален")
    };

    useEffect(() => {
        fetch("https://69eb79f897482ad5c527c20a.mockapi.io/priducts")
            .then(res => res.json())
            .then((data) => {
                setCards(data);
            })
    }, []);

    return (
        <div className="max-w-md mx-auto mt-10 p-6">
            <h1 className="text-2xl font-bold mb-4">Добавить продукт</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Название"
                    className="w-full p-2 border rounded"
                />

                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Описание"
                    className="w-full p-2 border rounded"
                />

                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Цена"
                    className="w-full p-2 border rounded"
                />

                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Добавить
                </button>
            </form>

            {/* Отображение продуктов */}
            <div>
                <h2 className="text-xl font-bold mb-4">Список продуктов</h2>
                <div className="space-y-4">
                    {cards.map((product) => (
                        <div key={product.id} className="border rounded p-4">
                            <h3 className="font-bold text-lg">{product.title}</h3>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-green-600 font-bold mt-2">
                                {product.price} ₽
                            </p>
                            <button 
                                onClick={() => handleDelete(product.id)}
                                className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                            >
                                Удалить
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AddProduct;