import ServiceCard from "../Components/ServiceCard";
import paintIcon from "../Images/LOGO.PNG";

export default function ServicePage() {
  return (
    <div className="w-screen min-h-screen bg-white flex flex-col items-center p-8">
      <div className="mb-8 w-full max-w-4xl">
        <p className="text-5xl mb-20">Servicios</p>
        <div className="w-80 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700 rounded-full mb-16"></div>
      </div>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-18 gap-x-63 justify-items-center">
        <ServiceCard icon={paintIcon} text="Restauracion de fachadas" />
        <ServiceCard icon={paintIcon} text="Hidrolavados" />
        <ServiceCard icon={paintIcon} text="Enduidos" />
        <ServiceCard icon={paintIcon} text="Fascerit" />
        <ServiceCard icon={paintIcon} text="Lustres" />
        <ServiceCard icon={paintIcon} text="Empapelados" />
      </div>
    </div>
  );
}
