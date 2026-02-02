export default function Button({ text, hendeler }) {
    return (
        <>
            <button onClick={hendeler}>{text}</button>
        </>
    )
}
