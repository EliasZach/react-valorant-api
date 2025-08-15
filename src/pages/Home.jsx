import Navbar from "../components/general/Navbar";
import useValorantCharacters from "../hooks/useValorantCharacters";
import { useThemeContext } from "../context/ThemeContext";

export default function Home() {
  const {theme, toggleTheme} = useThemeContext()
  
  const { characters, loading, error } = useValorantCharacters();
  
  return (
    <>
      <Navbar/>
      <main className={`min-h-screen w-full background-image ${theme === 'light' ? 'background-light' : 'background-dark bg-gray-950'}`}>
        {/* Contenedor para ajustar el ancho y el contenido */}
        <div className={`max-w-[1750px] m-auto grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 gap-4 font-semibold transition-all duration-200 text-neutral-50`}>
          {loading && <p>Cargando personajes...</p>}
          {error && <p>Error en la carga de personajes: {error}</p>}
          {characters &&
            characters.map((character) => (
              // Verificamos si el personaje tiene rol para evitar null abajo al usar la propiedad .role
              character.role && (
                // Contenedor de informacion del personaje
                <div
                  key={character.uuid}
                  className={`shadow-2xl w-full max-w-[380px] rounded-md overflow-hidden border-2 transition-all duration-200 group hover:scale-105 border-neutral-50 ${theme === 'light' ? 'bg-valorantLogo' : ' bg-gray-800'}`}
                >
                  {/* Contenedor de imagenes del personaje */}
                  <div className="relative overflow-hidden" 
                    style={{
                      backgroundImage: `linear-gradient(45deg, ${character.backgroundGradientColors
                        .map(color => `#${color}`)
                        .join(", ")})`,
                    }}
                  >
                    <img className="absolute h-full left-[50%] translate-x-[-50%] transition-all duration-200 group-hover:translate-x-0 group-hover:left-0" src={character.background} alt={character.displayName} />
                    {/* Icono del rostro */}
                    <img className={`absolute w-20 top-1.5 right-1.5 border-2 rounded-md bg-gray-900 border-neutral-100 transition-all duration-200 ${theme === 'light' ? 'bg-valorantLogo' : ' bg-gray-800'}`} src={character.displayIconSmall} alt={character.displayName} />
                    <img className="relative z-10 group-hover:scale-115 transition-all duration-200" src={character.fullPortrait} alt={character.displayName} />
                  </div>
                  {/* Informacion del personaje */}
                  <div className="p-2 text-2xl flex justify-between items-center">
                    <div>
                      <p>{character.displayName}</p>
                      <span className="text-sm">{character.role.displayName}</span>
                    </div>
                    <div>
                      <img className="w-12" src={character.role.displayIcon} alt="" />
                    </div>
                  </div>
                </div> 
              )
            ))}
        </div>
      </main>
    </>
  );
}
