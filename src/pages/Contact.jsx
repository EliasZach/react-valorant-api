import Navbar from "../components/general/Navbar";
import { useThemeContext } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useThemeContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado (esto es una simulación)');
  };

  return (
    <>
      <Navbar />
      <main className={`min-h-screen w-full flex items-center justify-center p-4 transition-colors duration-200 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
        <div className={`max-w-2xl w-full mx-auto p-6 md:p-8 rounded-lg shadow-2xl transition-all duration-300 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-gray-100'}`}>
          <h1 className={`text-3xl md:text-4xl font-bold mb-6 text-center ${theme === 'light' ? 'text-valorant-red' : 'text-valorant-light-red'}`}>
            Contacta con Nosotros
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className={`block mb-2 text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`w-full p-3 rounded-md border ${theme === 'light' 
                  ? 'bg-white border-gray-300 focus:ring-valorant-red focus:border-valorant-red' 
                  : 'bg-gray-700 border-gray-600 focus:ring-valorant-light-red focus:border-valorant-light-red'
                }`}
                placeholder="Ingresa tu nombre"
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                className={`block mb-2 text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full p-3 rounded-md border ${theme === 'light' 
                  ? 'bg-white border-gray-300 focus:ring-valorant-red focus:border-valorant-red' 
                  : 'bg-gray-700 border-gray-600 focus:ring-valorant-light-red focus:border-valorant-light-red'
                }`}
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            
            <div>
              <label 
                htmlFor="subject" 
                className={`block mb-2 text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
              >
                Asunto
              </label>
              <select
                id="subject"
                name="subject"
                required
                className={`w-full p-3 rounded-md border ${theme === 'light' 
                  ? 'bg-white border-gray-300 focus:ring-valorant-red focus:border-valorant-red' 
                  : 'bg-gray-700 border-gray-600 focus:ring-valorant-light-red focus:border-valorant-light-red'
                }`}
              >
                <option value="">Selecciona un asunto</option>
                <option value="feedback">Feedback/Sugerencias</option>
                <option value="bug">Reporte de Error</option>
                <option value="collaboration">Colaboración</option>
                <option value="other">Otro</option>
              </select>
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                className={`block mb-2 text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className={`w-full p-3 rounded-md border ${theme === 'light' 
                  ? 'bg-white border-gray-300 focus:ring-valorant-red focus:border-valorant-red' 
                  : 'bg-gray-700 border-gray-600 focus:ring-valorant-light-red focus:border-valorant-light-red'
                }`}
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 cursor-pointer text-white ${theme === 'light' 
                  ? 'bg-valorantLogo hover:bg-valorantLogo/50' 
                  : 'bg-gray-600 text-gray-900 hover:bg-gray-700'
                }`}
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}