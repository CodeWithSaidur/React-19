import React, { useState } from 'react'

export default function Page() {

    const [fordata, setFordata] = useState({
        name: "",
        class: "",
        roll: "",
        email: "",
        password: "",
        age: "",
        mobile: ""
    })

    const hendelChange = (e) => {
        // setFordata({ ...fordata, [e.target.name]: e.target.value })
        const { name, value } = e.target;
        setFordata((prev) => ({
            ...prev, [name]: value
        }))
    }

    const hendelSubmit = (e) => {
        e.preventDefault()
        console.log(fordata);
    }

    return (
        <div>
            <form onSubmit={hendelSubmit}>
                <input onChange={hendelChange} value={fordata.name} type="text" name="name" placeholder="Enter your name" />
                <input onChange={hendelChange} value={fordata.class} type="text" name="class" placeholder="Enter your class" />
                <input onChange={hendelChange} value={fordata.roll} type="text" name="roll" placeholder="Enter your roll" />
                <input onChange={hendelChange} value={fordata.email} type="email" name="email" placeholder="Enter your email" />
                <input onChange={hendelChange} value={fordata.password} type="password" name="password" placeholder="Enter your password" />
                <input onChange={hendelChange} value={fordata.age} type="number" name="age" placeholder="Enter your age" />
                <input onChange={hendelChange} value={fordata.mobile} type="tel" name="mobile" placeholder="Enter your Mobile No" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
