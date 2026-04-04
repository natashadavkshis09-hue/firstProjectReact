import MyComponent from "./MyComponent"
import { useState } from "react"
import { useEffect } from "react"
import SearchBlock from "./ui/SearchBlock"


function MyList(){
    const[items,setItems] = useState([])
    const[filteredItens,setFiltedItens] = useState([])
    const[seach,setSeach] = useState([])

        
    
    useEffect(()=>{ 
        setTimeout(()=>{
        const data= [{id: "1", name:"один", price:213},
                {id: "2",name: "два", price:213},
                {id: "2",name: "два", price:213},
                {id: "2",name: "два", price:213},
                {id: "3",name: "три", price:213}]
                setItems(data)  
                setFiltedItens(data)  
                },[])
        },3000)

        
    
    function removeItem(id) {
        const updateList = items.filter((item)=> item.id != id)

        setItems(updateList)

        console.log("Удален", id)
    }

    if (items.length == []){
        return <h3>Загрузка...</h3>
    }

    return(
        <div className="flex flex-col gap-10 w-50 ">
            use Effect 
            <SearchBlock items={items} setSearchFilter={setFiltedItens}/>

            {filteredItens.map((item)=>(
            <div key={items.id}>
                <h2 >{items["name"]}</h2>
                <p>{items["price"]}$</p>
                <button onClick={()=>removeItem(items["id"])}>Удалить</button>
            </div>
            ))}
            
        </div>
    )
}

export default MyList   