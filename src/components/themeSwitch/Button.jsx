import React, { useContext } from 'react'
import { ThemeContext } from '../App'

export default function Button() {

    const { theme, setTheme } = useContext(ThemeContext)


    return (
        <div >
            <button onClick={(e) => (setTheme(theme === 'Dark' ? "Lite" : "Dark"))}>{theme}</button>
        </div>
    )
}
