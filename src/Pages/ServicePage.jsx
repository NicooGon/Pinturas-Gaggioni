import { useEffect } from "react";
import ServiceCard from "../Components/ServiceCard";
import { GiFamilyHouse, GiWaterSplash, GiCrystalShine, GiWoodCabin } from "react-icons/gi";
import { LuDoorOpen } from "react-icons/lu";
import { PiWallDuotone } from "react-icons/pi";
import { FaSheetPlastic } from "react-icons/fa6";
import { MdOutlineCleaningServices } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    { icon: GiFamilyHouse, text: "Reparacion de fachadas", description: "Restauración de superficies exteriores dañadas para mejorar su aspecto y durabilidad" },
    { icon: GiWaterSplash, text: "Hidrolavados", description: "Limpieza profunda con agua a presión para eliminar suciedad, hongos y restos de pintura" },
    { icon: PiWallDuotone, text: "Enduidos", description: "Aplicación de enduido para alisar paredes y prepararlas para pintar" },
    { icon: FaSheetPlastic, text: "Fascerit", description: "Revestimiento plástico texturado que protege y decora superficies exteriores" },
    { icon: GiCrystalShine, text: "Lustres", description: "Acabado brillante que realza superficies interiores" },
    { icon: GiWoodCabin, text: "Laqueados de puertas, marcos y contramarcos", description: "Aplicación de laca para lograr un acabado liso, duradero y elegante, protegiendo la madera del uso y la humedad" },
    { icon: MdOutlineCleaningServices, text: "Limpieza profunda de madera y barnices", description: "Eliminación de suciedad, manchas y restos de productos para restaurar el brillar y la textura original de la madera tratada" },
    { icon: LuDoorOpen, text: "Esmaltados de puertas y ventanas", description: "Pintura con esmalte sintético o al agua para proteger y renovar superficies, con terminación mate, satinada o brillante" },
  ];

  return (
    <div
      id="servicios"
      className="lg:min-h-[calc(80vh-80px)] bg-white flex flex-col items-center p-8 scroll-mt-54 sm:scroll-mt-54 md:scroll-mt-18 lg:scroll-mt-20"
    >
      <div className="flex flex-col items-start w-full max-w-6xl" data-aos="fade-up">
        <div className="w-full sm:max-w-4xl mb-8">
          <p className="text-4xl font-montserrat">Servicios</p>
          <div className="w-3xs h-0.5 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full mb-16 mt-5"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-24 gap-x-8 justify-items-start">
        {services.map((s, i) => (
          <ServiceCard
            key={s.text}
            icon={s.icon}
            text={s.text}
            description={s.description}
            data-aos="fade-up"
            data-aos-delay={i * 150} 
          />
        ))}
      </div>
    </div>
  );
}
