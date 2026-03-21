import MyComponent from "./MyComponent"
import { useState } from "react"

function MyList(){
    const[items,setItems] = useState([   
        {id: "1", name:"один", price:213},
        {id: "2",name: "два", price:213},
        {id: "3",name: "три", price:213}
    ])

    function removeItem(id) {
        const updateList = items.filter((item)=> item.id != id)

        setItems(updateList)

        console.log("Удален", id)
    }

    return(
        <div className="flex flex-col gap-10 w-50 ">
            {items.map((item)=>(
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