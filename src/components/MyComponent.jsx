import MyElement from "./MyElement"
import SampleButtom from "./SampleButtom"
import ComponentUseState from "./ComponentUserState"
import SampleBlockUseState from "./SampleBlockUseState"

function MyComponent() {

    const name = "Demo Name"
    const price = 100

    return (
        <div>
            <h2>Родительский компонент</h2>
            <h2>{name}</h2>
            <p>Price: {price} </p>
            <p>Price with tax: {price * 0.5}</p>
            <SampleButtom>В корзину </SampleButtom>
            <ComponentUseState/>
            <SampleBlockUseState/>
        </div>
    )
}

export default MyComponent