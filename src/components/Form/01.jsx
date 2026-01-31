import { useState } from 'react'

export default function Page() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const hendelClick = (e) => {
    e.preventDefault()
    console.log({ name, email, password });
  }

  return (
    <div>
      <form action="">
        <input onChange={(e) => (setName(e.target.value))}
          type="text" name="name"
          placeholder="Enter your name"
        />
        <input onChange={(e) => (setEmail(e.target.value))}
          type="email" name="email"
          placeholder="Enter your email"
        />
        <input onChange={(e) => (setPassword(e.target.value))}
          type="password" name="password"
          placeholder="Enter your password"
        />
        <button type="submit" onClick={hendelClick}>Submit</button>
      </form>
    </div>
  )
}
