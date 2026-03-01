import { useContext } from 'react'
import Child from './Child'
import { ContextUser } from '../App'

export default function Parent() {

    let user = useContext(ContextUser)

    return (
        <div style={{ border: "2px solid red" }}>
            <h1>Parent</h1>
            {(user.name === "Sabed") && "Walcome Saidur Rohman Barbhuiya"}
            <Child />
        </div>
    )
}
