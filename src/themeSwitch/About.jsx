import { useContext } from 'react'
import { ThemeContext } from '../App'

export default function About() {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div style={{
            backgroundColor: theme === 'Dark' ? "#1d1c1b" : "#f4f8fd",
            color: theme === 'Dark' ? "#f4f8fd" : "#1d1c1b"
        }}>
            <h1>About</h1>
            <p>Current theme: {theme}</p>
        </div>
    )
}
