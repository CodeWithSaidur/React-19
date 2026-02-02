import { useState } from 'react';

export default function Page() {
    const [formdata, setFormdata] = useState({
        username: "",
        password: "",
        error: ''
    });

    const handleClick = (e) => {
        e.preventDefault();

        if (!formdata.username || !formdata.password) {
            setFormdata({ ...formdata, error: "All fields are required" });
        } else {
            setFormdata({ ...formdata, error: "" });
            alert("Form submitted");
            console.log(formdata);
        }
    };

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClick(e);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    id="username"
                    type="text" 
                    name="username" 
                    value={formdata.username}
                    onChange={handleChange} 
                />

                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    type="password" 
                    name="password" 
                    value={formdata.password}
                    onChange={handleChange} 
                />

                {formdata.error && <p>{formdata.error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
