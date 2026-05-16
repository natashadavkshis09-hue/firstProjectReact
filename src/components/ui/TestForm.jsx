import { useState } from "react"

function TestForm(){
    const[text,SetText] = useState("Hello World")
 

    return (
        <div>
            <h1> Первая форма</h1>
            <input
                type="text"
                value={"text"}
                onClick={(event)=>
                    setText(event.target.value)

                }
            />
        </div>

    )
}

export default TestForm