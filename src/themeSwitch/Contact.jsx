import { useContext } from 'react'
import Button from './Button'
import { ThemeContext } from '../App'

export default function Contact() {

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div style={{
                backgroundColor: theme === 'Dark' ? "#1d1c1b" : "#f4f8fd",
                color: theme === 'Dark' ? "#f4f8fd" : "#1d1c1b"
            }}>
                <h1>Contact {theme}</h1>
            </div>
            <Button />
        </>
    )
}
