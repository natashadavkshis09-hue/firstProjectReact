import { useState } from "react"
import CounterView from "./CounterView"
import CounterButtons from "./CounterButtons"

function Counter (){
    const [count,setCount] = useState(0)

    

    return(
        <div className="p-4">
            <h2>Общий стечик</h2>
        <CounterView count1={count}/>
        <CounterButtons 
        count={count}
        setCount={setCount}
        />
        

        </div>
    )
}

export default Counter