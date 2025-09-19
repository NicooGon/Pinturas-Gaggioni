import logo from "../Images/LOGO.PNG";
import logo2 from "../Images/LOGO2.PNG";

export default function TopBar() {
  return (
    <div className="sticky top-0 z-20 w-screen bg-black px-4 md:px-8 py-4 flex flex-col items-center md:flex-row md:justify-between">
      
      <div className="flex items-center gap-4 mb-2 md:mb-0" >
        <img src={logo} alt="Logo Pinturas Gaggioni" className="h-12 text-yellow-200" />
        <a href="/" className="text-3xl md:w-40 lg:w-full font-bold text-yellow-500 font-quicksand">
          PINTURAS GAGGIONI
        </a>
      </div>
        <div className="flex flex-col md:flex-row md:gap-8 text-yellow-500 font-medium items-center">
          <a href="#quienes-somos" className="hover:text-gray-300 lg:text-base md:text-sm mb-2 md:mb-0 font-montserrat transition-colors">Quienes Somos</a>
          <a href="#servicios" className="hover:text-gray-300 mb-2 lg:text-base md:text-sm font-montserrat md:mb-0 transition-colors">Servicios</a>
          <a href="#trabajos" className="hover:text-gray-300 mb-2 lg:text-base md:text-sm font-montserrat md:mb-0 transition-colors">Trabajos</a>
          <a href="#contactanos" className="hover:text-gray-300 lg:text-base md:text-sm font-montserrat transition-colors">Contáctanos</a>
      </div>
    </div>
  );
}
