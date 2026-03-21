import ProductCard from "./Productcard"

function ProductList() {



const cards = [
  { id: "1", title: "ноутбук", price: "185$", opis: "Портативный компьютер для работы и учебы" },
  { id: "2", title: "телефон", price: "300$", opis: "Смартфон для связи, интернета и приложений" },
  { id: "3", title: "компьютер", price: "900$", opis: "Мощный настольный ПК для работы и игр" },
  { id: "4", title: "наушники", price: "39$", opis: "Удобные наушники для музыки и звонков" },
  { id: "5", title: "мышка", price: "20$", opis: "Компьютерная мышь для точного управления" },
  { id: "6", title: "монитор", price: "200$", opis: "Экран высокого качества для компьютера" }
]

  return (
   <div class="flex flex-wrap gap-25">
    {cards.map((card)=>(
        <ProductCard
        title={card .title}
        price={card.price}
        opis={card.opis}
        />
    ))}

  
   </div>
   
  )
}

export default ProductList
