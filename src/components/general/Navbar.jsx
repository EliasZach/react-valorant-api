import valorantLogo from "../../assets/valorant-seeklogo.png";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import ThemeButton from "./ThemeButton";
import MenuButton from "./MenuButton";
export default function Navbar() {
  const {theme} = useThemeContext()
  return (
    <section className={`sticky top-0 z-100 shadow-[0_10px_15px_-10px_rgba(0,0,0,0.5)] transition duration-200 ${theme === 'light' ? 'bg-gray-50 text-gray-950' : 'bg-gray-900 text-gray-50'}`}>
      <nav className="m-auto max-w-7xl h-20 flex justify-between items-center px-3">
        {/* left */}
        <img src={valorantLogo} alt="Valorant Logo" width="50" />
        {/* right */}
        <ul className={`hidden sm:flex gap-4 font-semibold *:cursor-pointer *:rounded-sm *:p-1 ${theme === 'light' ? '*:hover:bg-neutral-200' : '*:hover:bg-valorantLogo'}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="sm:hidden">
          <MenuButton/>
        </div>
        <div className="hidden sm:block">
          <ThemeButton/>
        </div>
      </nav>
    </section>
  );
}
