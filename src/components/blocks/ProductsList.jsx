import { useState, useEffect } from "react";
import ProductCard from "./Productcard";
import ProductFilter from "../ui/ProductFilter";

function ProductList() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  useEffect(() => {
    setTimeout(() => {
      const data = [
        { id: "1", title: "ноутбук", price: 185, opis: "Портативный компьютер" },
        { id: "2", title: "телефон", price: 300, opis: "Смартфон" },
        { id: "3", title: "компьютер", price: 900, opis: "ПК" },
        { id: "4", title: "наушники", price: 39, opis: "Музыка" },
        { id: "5", title: "мышка", price: 20, opis: "Мышь" },
        { id: "6", title: "монитор", price: 200, opis: "Экран" },
        { id: "7", title: "виар шлем", price: 250, opis: "VR" }
      ];
      setCards(data);
    }, 1000);
  }, []);

  // 🔥 ОДИН общий фильтр
  const filteredCards = cards.filter((card) => {
    return (
      card.title.toLowerCase().includes(search.toLowerCase()) &&
      card.price >= minPrice &&
      card.price <= maxPrice
    );
  });

  // фильтр по цене просто обновляет состояние
  const handleFilter = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <div>
      <ProductFilter onFilter={handleFilter} />

      <input
        type="text"
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      <div className="flex flex-wrap gap-5">
        {filteredCards.map((card) => (
          <ProductCard
            key={card.id}
            title={card.title}
            price={card.price}
            opis={card.opis}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;