import { useEffect, useRef, useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

export default function () {
  const {theme, toggleTheme} = useThemeContext()
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }

  }, [isMenuOpen]);

  return (
    <div className="relative">
      <button
        className={`px-2.5 py-2 rounded-md cursor-pointer font-semibold ${theme === 'light' ? 'bg-gray-200 hover:bg-gray-300':'bg-gray-800 hover:bg-gray-700'}`}
        ref={buttonRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      
      {isMenuOpen && (
        <div ref={menuRef} className={`absolute top-[115%] right-0 rounded-md overflow-hidden ${theme === 'light' ? 'bg-gray-200':'bg-gray-800'}`}>
          <ul className={`*:**:block *:**:px-8 *:**:py-2 *:**:font-semibold ${theme === 'light' ? '*:hover:bg-gray-300':'*:hover:bg-gray-700'}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li onClick={toggleTheme} className="px-8 py-2 whitespace-nowrap cursor-pointer font-semibold select-none">Theme: {theme} {theme === 'light' ? '☀️' : '🌙'}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
