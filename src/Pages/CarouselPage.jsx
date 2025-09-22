import CarouselImg from "@/Components/CarouselImg";

export default function CarouselPage() {
  return (
    <div
      id="quienes-somos"
      className="lg:min-h-[calc(90vh-80px)] bg-white flex flex-col items-center p-8 scroll-mt-54 sm:scroll-mt-54 md:scroll-mt-18 lg:scroll-mt-20"
    >
      <div className="flex flex-col items-start w-full max-w-6xl"> 
        <p className="font-medium text-gray-400 mb-2">Quienes somos</p>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6">
          <p className="text-3xl sm:text-4xl max-w-md sm:max-w-lg lg:max-w-xl leading-snug text-gray-900 font-montserrat">
            Nos especializamos en reparación y mantenimiento de estructuras de difícil acceso.
          </p>

          <div className="flex flex-col gap-10">
            <div className="relative group">
              <p className="cursor-pointer">
                edpinturasgaggioni@gmail.com
              </p>
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-0.5 w-0 bg-gradient-to-r from-red-600 via-red-400 to-red-600 transition-all duration-500 ease-out group-hover:w-full rounded-full"></div>
              </div>
            </div>

            <a href="#contactanos">
              <button className="w-64 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-black font-semibold font-inter rounded-md transition">
                ¡Hace tu consulta!
              </button>
            </a>

          </div>
        </div>

        <div className="w-28 h-0.5 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full mt-6 mb-16"></div>
        
        <CarouselImg />
      </div>
    </div>
  );
}
