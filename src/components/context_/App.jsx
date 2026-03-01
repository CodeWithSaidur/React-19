import React from 'react'

import Parent from './components/Parent'

import { createContext } from 'react'

export const ContextUser = createContext()

export default function App() {

  let user = { name: "Jabed", age: 25, message: "Hello World!" }

  return (
    <ContextUser.Provider value={user}>
      <h1>App</h1>
      <Parent />
    </ContextUser.Provider>
  )
}
