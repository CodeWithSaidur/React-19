import { createContext, useState } from 'react'
import About from './themeSwitch/about'
import Contact from './themeSwitch/Contact'


export const ThemeContext = createContext()

export default function App() {

    const [theme, setTheme] = useState('Dark')

    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <About />
                <Contact />
            </ThemeContext.Provider>
        </>
    )
}
