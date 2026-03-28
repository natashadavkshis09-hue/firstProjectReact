import MyComponent from "../components/MyComponent"
import SampleBlock from "../components/SampleBlock"
import Counter from "../components/ui/Counter"
import MyList from "../components/Mylist"
import FirstConditional from "../components/EduComponents/FirstConditional"
import { useState } from "react"

function Education() {
    const [number,setNumber] = useState(0)
    const [isVisible,setIsVisitble] = useState(true)



    return(
        <div className="flex flex-col  gap-10">
        <h1>Обучаюшая страница</h1>
        <MyComponent/>
        <SampleBlock 
        title={"Загаловак"}
        description={"Описание"}
        />
        <Counter/>
        <MyList/>

        <FirstConditional isVisible={isVisible} setIsVisible={setIsVisitble}/>
        <button onClick={()=>setIsVisitble(!isVisible)}>Изменить отображения</button>
        </div>          
    )
}

export default Education