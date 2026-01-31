
export default function Two() {

    const animals = ["Lion", "Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Kangaroo", "Panda", "Penguin", "Dolphin", "Cheetah"];

    let dev = {
        name: 'sabed',
        age: 25,
        project: '101 Chat app'
    }

    const students = [
        { name: "Arjun Sharma", class: "10th Grade", rollNo: 1, age: 15, gender: "Male" },
        { name: "Priya Patel", class: "10th Grade", rollNo: 2, age: 16, gender: "Female" },
        { name: "Rohan Das", class: "10th Grade", rollNo: 3, age: 15, gender: "Male" },
        { name: "Ananya Iyer", class: "10th Grade", rollNo: 4, age: 16, gender: "Female" },
        { name: "Vikram Singh", class: "10th Grade", rollNo: 5, age: 15, gender: "Male" },
        { name: "Sanya Kapoor", class: "10th Grade", rollNo: 6, age: 15, gender: "Female" },
        { name: "Kabir Verma", class: "10th Grade", rollNo: 7, age: 16, gender: "Male" },
        { name: "Ishani Bose", class: "10th Grade", rollNo: 8, age: 15, gender: "Female" },
        { name: "Zaid Khan", class: "10th Grade", rollNo: 9, age: 16, gender: "Male" },
        { name: "Meera Reddy", class: "10th Grade", rollNo: 10, age: 15, gender: "Female" }
    ];

    return (
        <>
            <div>
                {
                    animals.map((i, j) => (
                        <ul key={j}>
                            <li>{j} {i}</li>
                        </ul>
                    ))
                }
            </div>

            <div>
                <p> Name {dev.name}</p>
                <p> Age {dev.age}</p>
                <p> Product {dev.project}</p>
            </div>

            <div>
                {
                    students.map((i) => (
                        <div key={i.rollNo}>
                            <p>Roll {i.rollNo} Name {i.name} Class {i.class} age {i.age}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
