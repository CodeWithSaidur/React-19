import { useState } from 'react';

export default function Five() {

    let [a, seta] = useState(0)

    let clickHendeler = () => {
        seta(a + 1)
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={clickHendeler}>Click</button>
        </div>
    )
}

// ----------------------------------------------------------
import { useState } from 'react'

export default function Page() {

    const [user, setUser] = useState({
        name: 'John',
        age: 30,
        gender: 'male'
    })

    let Change = () => {
        setUser({
            ...user,
            name: 'Doe',
            gender: 'female',
            age: Math.floor(Math.random() * 100)
        })
    }

    return (
        <div>
            <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>
            <p>Gender : {user.gender}</p>
            <button onClick={Change}>Change</button>
        </div>
    )
}

// ----------------------------------------------------------

import { useState } from 'react'

export default function Page() {

    let [a, seta] = useState('')

    return (
        <div>
            {
                console.log(a)
            }
            <p>{a}</p>
            <input type="text" onChange={(e) => seta(e.target.value)} />
        </div>
    )
}
