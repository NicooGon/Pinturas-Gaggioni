import logo from "../Images/LOGO.PNG";
import logo2 from "../Images/LOGO2.PNG";

export default function TopBar() {
  return (
    <div className="w-screen bg-black px-4 md:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
      
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <img src={logo} alt="Logo Pinturas Gaggioni" className="h-12" />
        <a href="/" className="text-3xl font-bold text-yellow-600 font-quicksand">
          PINTURAS GAGGIONI
        </a>
      </div>

      <div className="flex flex-col md:flex-row md:gap-8 text-yellow-600 font-medium">
        <a href="#quienes-somos" className="hover:text-gray-300 mb-2 md:mb-0">Quienes Somos</a>
        <a href="#servicios" className="hover:text-gray-300 mb-2 md:mb-0">Servicios</a>
        <a href="#trabajos" className="hover:text-gray-300 mb-2 md:mb-0">Trabajos</a>
        <a href="#contactanos" className="hover:text-gray-300">Contáctanos</a>
      </div>
      
    </div>
  );
}
