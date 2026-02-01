import React, { useState } from 'react'

export default function Page() {

    const [formdata, setFormdata] = useState({
        gender: ''
    })

    let hendelChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    let hendelSubmit = (e) => {
        e.preventDefault()
        console.log(formdata);
    }

    return (
        <div>
            <form>
                <label>
                    <input
                        name='gender'
                        type="radio"
                        value='m'
                        onChange={hendelChange}
                    /> Mail
                </label>
                <label>
                    <input
                        name='gender'
                        type="radio"
                        value='f'
                        onChange={hendelChange}
                    /> Femail
                </label>
                <button onClick={hendelSubmit}>Click</button>
            </form>
        </div>
    )
}
