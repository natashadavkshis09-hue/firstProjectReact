import { useState, useEffect } from "react"
import ProductCard from "./Productcard"

function ProductList() {

  const [cards, setCards] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    setTimeout(() => {
      const data = [
        { id: "1", title: "ноутбук", price: "185$", opis: "Портативный компьютер для работы и учебы" },
        { id: "2", title: "телефон", price: "300$", opis: "Смартфон для связи, интернета и приложений" },
        { id: "3", title: "компьютер", price: "900$", opis: "Мощный настольный ПК для работы и игр" },
        { id: "4", title: "наушники", price: "39$", opis: "Удобные наушники для музыки и звонков" },
        { id: "5", title: "мышка", price: "20$", opis: "Компьютерная мышь для точного управления" },
        { id: "6", title: "монитор", price: "200$", opis: "Экран высокого качества для компьютера" },
        { id: "7", title: "виар шлем", price: "250$", opis: "Шлем виртуальной реальности для полного погружения в игры и интерактивные 3D-миры" }
      ]

      setCards(data)
    }, 3000)
  }, [])
    
 
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      
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
  )
}

export default ProductList
