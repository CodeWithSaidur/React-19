import { useEffect, useEffectEvent, useState } from 'react'

export default function App() {

  const [formData, setFormData] = useState({ name: "", email: "" })

  useEffect(() => {
    let inter = setInterval(() => {
      data() // call
    }, 3000);

    return () => clearInterval(inter)
  }, [])

  let data = useEffectEvent(() => { 
    console.log(formData); // getform data by "formdata" 
  })

  return (
    <div>
      <form>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => (setFormData({ ...formData, name: e.target.value }))}
        />

        <input
          type="email"
          value={formData.email}
          onChange={(e) => (setFormData({ ...formData, email: e.target.value }))}
        />
      </form>
    </div>
  )
}
