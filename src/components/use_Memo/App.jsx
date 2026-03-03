import React, { useMemo, useState } from 'react'

function App() {

  const [n, setN] = useState(1)
  const [m, setM] = useState(1)

  let res = useMemo(() => {
    console.log('Function Called');

    return n + 2
  }, [n])

  return (
    <div>
      <h1> Res {res}</h1>
      <button onClick={() => (setN(n + 1))}>{n}</button>
      <button onClick={() => (setM(m + 1))}>{m}</button>
    </div>
  )
}

export default App