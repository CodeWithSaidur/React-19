import { useEffect, useState } from 'react'

export default function Page() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count
        console.log('sabed', count);
    },[count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => (setCount(count + 1))}>Add</button>
        </div>
    )
}
