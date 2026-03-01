export default function Child({ changeHendeler }) {
    return (
        <div>
            <h1>child</h1>
            <input type="text" onChange={(e) => (changeHendeler(e.target.value))} />
        </div>
    )
}
