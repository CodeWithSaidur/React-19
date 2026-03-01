import { useContext } from 'react'
import { ContextUser } from '../App'

export default function Child() {

    let user = useContext(ContextUser)

    return (
        <div style={{ border: "2px solid green" }}>
            <h1>Child</h1>
            {user.name} |
            {user.age} |
            {user.message}
        </div>
    )
}
