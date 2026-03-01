import React, { useState } from 'react'
import Child from './child'

export default function Parent() {

    const [text, setText] = useState("")

  return (
    <div>
        <h1>Parent</h1>
        <p>{text}</p>
        <Child changeHendeler={setText}/>
    </div>
  )
}
