import { useThemeContext } from "../../context/ThemeContext";

export default function ThemeButton(){
  const {theme, toggleTheme} = useThemeContext()

  return (
    <button onClick={toggleTheme} className={`px-2.5 py-2 rounded-md cursor-pointer ${theme === 'light' ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-800 hover:bg-gray-700'}`}>{`${theme === 'light' ? '☀️' : '🌙'}`}</button>
  )
}