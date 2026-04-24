import { useState } from "react"
import { useEffect } from "react"

function Users (){
     const [users,setUsers] = useState([])

     useEffect(()=>{
        fetch("https://69eb79f897482ad5c527c20a.mockapi.io/users")
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            setUsers(data)
        })
     },[])


    return(
        <div>
            <h2>Пользавотели</h2>
            {users.map((user)=>(
                
                <div>
                    <img width={250} src={user.avatar} />
                    <p>Имя: {user.name}</p>
                    <p>Возраст: {user.age}</p>
                </div>
            ))}
        </div>
    )
}

export default Users