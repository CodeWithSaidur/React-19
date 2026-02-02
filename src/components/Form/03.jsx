import { useState } from 'react'

export default function Page() {

  const [formdata, setFormdata] = useState({
    gender: "",
    country: "india",
    agree: false
  })

  const handelChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(formdata);
  }

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label>
          <input type="radio" name="gender" value='mail' onChange={handelChange} />
          Mail
        </label>
        <label>
          <input type="radio" name="gender" value='femail' onChange={handelChange} />
          Femail
        </label>

        <br />

        <label htmlFor="">
          <select name="country" id="" onChange={handelChange} value={formdata.country}>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
          </select>
        </label>

        <br />

        <label htmlFor="">
          <input type="checkbox" name="agree" onChange={handelChange} checked={formdata.agree} />
          I agree terms and conditions
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
