import { useRef } from 'react';

export default function Page() {

    const nameRef = useRef();
    const ageRef = useRef();

    let hendelClick = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(ageRef.current.value);
        
    }

    return (
        <div>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" name="name" ref={nameRef} />

                <label htmlFor="">Age</label>
                <input type="number" name="age" ref={ageRef} />

                <button onClick={hendelClick}>Click</button>
            </form>
        </div>
    )
}
