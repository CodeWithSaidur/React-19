import { useEffect, useState } from 'react'

export default function Page() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            setSeconds((prev) => prev + 1)
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <h1>{seconds}</h1>
        </div>
    )
}
