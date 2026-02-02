import { useEffect, useState } from 'react'

export default function Page() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => setUsers(json)
            )
    }, [])

    return (
        <div>
            {
                users.map((user)=>(
                    <li key={user.id}>Name:- {user.name} Email:- {user.email}</li>
                    
                ))
            }
        </div>
    )
}
