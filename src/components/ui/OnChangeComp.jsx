


function OnChangeComp(){

    function handleChange(even){
        console.log(even.target.value)
    }

    return (
        <div>
            <h2>Событие onChange</h2>

            <input type="text"placeholder="ведите текст" onChange={handleChange} />
            
        </div>
    )
}


export default OnChangeComp