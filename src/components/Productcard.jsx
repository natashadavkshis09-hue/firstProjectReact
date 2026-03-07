import ProductCount from "./ProductCount"

function ProductCard({title,opis,price}) {

    return (
        <div className="max-w-sm p-6 bg-white rounded-2xl shadow-lg">
    
  
    <div className="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center mb-4 text-gray-500"> 📦  </div>

    <h3 className="text-xl font-semibold mb-2">загаловак:{title}</h3>
    
    <p className="text-gray-600 mb-2"> Краткое описание:{opis}</p>

 
    <p className="text-lg font-bold text-blue-600 mb-4"> цена : {price}</p>
        <ProductCount/>
    <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"> Купить </button>
  </div>
    )
}

export default ProductCard