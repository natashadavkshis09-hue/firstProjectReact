import ProductCard from "./Productcard"

function ProductList() {
  
  return (
   <div class="flex flex-wrap gap-25">

   <ProductCard
   title="ноутбку"
   price="185$"

   />
   <ProductCard
   title="телефон"
   price="300$"

   />
   <ProductCard
   title="компьютер"
   price="900$"

   />
   <ProductCard
   title="наушники"
   price="39$"

   />
   <ProductCard
   title="мышка"
   price="20$"
   
   />
   <ProductCard
   title="монитор"
   price="200$"
   
   />
   </div>
   
  )
}

export default ProductList
