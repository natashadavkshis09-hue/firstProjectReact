import { useState, useEffect } from "react";
import ProductCard from "./Productcard";
import ProductFilter from "../ui/ProductFilter";

function ProductList() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  

  useEffect(()=>{
        fetch("https://69eb79f897482ad5c527c20a.mockapi.io/priducts")
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            setCards(data)
            setCards(data)
        })
     },[])


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
            id={card.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;