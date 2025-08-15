import Navbar from "../components/general/Navbar";
import { useThemeContext } from "../context/ThemeContext";

export default function About() {
  const { theme } = useThemeContext();
  
  return (
    <>
      <Navbar />
      <main className={`min-h-screen w-full flex items-center justify-center p-4 transition-colors duration-200 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
        <div className={`max-w-3xl mx-auto p-8 rounded-lg shadow-2xl transition-all duration-300 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-gray-100'}`}>
          <h1 className={`text-4xl font-bold mb-6 text-center ${theme === 'light' ? 'text-valorant-red' : 'text-valorant-light-red'}`}>
            Valorant Characters Hub
          </h1>
          
          <div className="space-y-4 text-lg">
            <p>
              Bienvenido a <span className="font-bold">Valorant Characters Hub</span>, tu fuente definitiva para explorar todos los personajes del popular juego Valorant.
            </p>
            
          </div>
          
          <div className={`mt-8 pt-6 border-t ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
            <p className="text-center text-sm">
              © {new Date().getFullYear()} Valorant Characters Hub - No afiliado a Riot Games
            </p>
          </div>
        </div>
      </main>
    </>
  );
}