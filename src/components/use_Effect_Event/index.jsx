import { useEffect, useEffectEvent, useState } from 'react'

export default function Index() {

  const [count, setCount] = useState(0)
  let change = useEffectEvent(() => {

    console.log(count);

    setCount(ex => ex + 1)

  })

  useEffect(() => {
    let a = setInterval(() => {
      change()
    }, 1000);

    return () => clearInterval(a)


  }, [])




  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}
