import { useState } from "react"


function ComponentUseState() {
        const [count,setCount] = useState(0)
    return (
        <div className="p-4">
           
            <p>{count}</p>

            <button onClick={()=>setCount(count + 1)}>
                Увеличить
            </button>

            <button onClick={()=>setCount(count - 1)}>
                Уменшить
            </button>
        
        </div>
    )
}

export default ComponentUseState