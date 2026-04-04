import { useState } from "react"


function SearchBlock({items,setSearchFilter}) {
    const [query,setQuery] = useState("")
    function handleChange(event){
        const value = event.target.value
         const listFiltered = items.filter(items=>
            items.name.toLoweCase().includes(value.toLocaleLowerCase())
         )
            setSearchFilter(listFiltered)
        setQuery(value)



        console.log(value)
    }

    return (
        <input type="text" value={query} placeholder="поиск..." onChange={handleChange} />
    )
}

export default SearchBlock