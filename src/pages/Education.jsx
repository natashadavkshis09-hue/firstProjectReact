import MyComponent from "../components/MyComponent"
import SampleBlock from "../components/SampleBlock"
import Counter from "../components/Counter"

function Education() {

    return(
        <div className="flex flex-col  gap-10">
        <h1>Обучаюшая страница</h1>
        <MyComponent/>
        <SampleBlock 
        title={"Загаловак"}
        description={"Описание"}
        />
        <Counter/>
        </div>          
    )
}

export default Education