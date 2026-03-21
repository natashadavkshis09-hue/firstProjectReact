import MyComponent from "../components/MyComponent"
import SampleBlock from "../components/SampleBlock"
import Counter from "../components/ui/Counter"
import MyList from "../components/Mylist"


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
        <MyList/>
        </div>          
    )
}

export default Education