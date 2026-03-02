
//  --------------------------------------------------------------------------------------------
import { useState } from 'react'

export default function App() {

  const [checked, setChecked] = useState(false)

  console.log(checked);

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={() => (setChecked(!checked))} />
      {checked ? "Y" : "N"}
    </div>
  )
}


// ----------------------------------------------------------------------------------------

import { useReducer } from 'react'
export default function App() {
  const [checked, setChecked] = useReducer((checked) => (!checked), false)
  return (
    <div>
      <input type="checkbox" checked={checked} onChange={setChecked} />
      {checked ? "Y" : "N"}
    </div>
  )
}

// -------------------------------------------------------------------------------------------

import React from 'react'
import { useReducer } from 'react'

export default function App() {

  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function reducer(state, action) {
    if (action.type === 'add') {
      return { count: state.count + 1 }
    } else if (action.type === 'sub') {
      return { count: state.count - 1 }
    } else {
      return { count: 0 }
    }
  }

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'sub' })}>-</button>
      <button onClick={() => dispatch({ type: 'zeo' })}>0</button>
    </div>
  )
}
