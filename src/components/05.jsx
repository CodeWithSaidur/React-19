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
