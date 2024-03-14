import {useState, useEffect} from "react"
import {ThemeContext, themes} from "./ThemeContext.js"
let localTheme = localStorage.getItem("theme") =="true"? themes.light : themes.dark
console.log({localTheme})
export function ThemeContextWrapper (props) {
	const [theme, setTheme] = useState(localTheme)

	function changeTheme (theme) {
		setTheme(theme)
	}

	useEffect(() =>{
		switch (theme) {
			case themes.light:
				document.documentElement.setAttribute('data-theme', 'light')
				break;
			case themes.dark:
			default:
				document.documentElement.setAttribute('data-theme', 'dark')
				break;
		}
	},[theme])

	return(
		<ThemeContext.Provider value={{theme:theme , changeTheme:changeTheme}}>
			{props.children}
		</ThemeContext.Provider>
		)
}