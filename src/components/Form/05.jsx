import { useState } from 'react';

export default function Page() {

    const [formdate, setFormdata] = useState({
        username: "",
        password: "",
        error: ''
    })

    let hendelClick = (e) => {
        e.preventDefault();

        if (!formdate.username || !formdate.password) {
            setFormdata((prev) => ({
                ...prev,
                error: "All fields are required"
            }))
            return;
        }

        alert("Form submitted");
        console.log(formdate);
    }

    let hendelChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            <form action="">
                <label htmlFor="">Username</label>
                <input type="text" name="username" onChange={hendelChange} />

                <label htmlFor="">Password</label>
                <input type="password" name="password" onChange={hendelChange} />
        
                <p>{formdate.error}</p>
                <button onClick={hendelClick}>Submit</button>
            </form>
        </div>
    )
}
