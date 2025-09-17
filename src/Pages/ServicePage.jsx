import ServiceCard from "../Components/ServiceCard";
import { GiFamilyHouse, GiWaterSplash, GiCrystalShine, GiWoodCabin  } from "react-icons/gi";
import { LuDoorOpen } from "react-icons/lu";
import { PiWallDuotone } from "react-icons/pi";
import { FaSheetPlastic, FaPaintRoller } from "react-icons/fa6";
import { MdOutlineCleaningServices } from "react-icons/md";


export default function ServicePage() {
  return (
    <div id="servicios" className="min-h-screen bg-white flex flex-col items-center p-8">
      <div className="flex flex-col items-start w-full sm:w-auto">

        <div className="w-full sm:w-96 mb-8">
          <p className="text-5xl mb-6">Servicios</p>
          <div className="w-full h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full mb-16"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-24 gap-x-16 justify-items-start">
          <ServiceCard icon={GiFamilyHouse} text="Reparacion de fachadas" description="Restauración de superficies exteriores dañadas para mejorar su aspecto y durabilidad "/>
          <ServiceCard icon={GiWaterSplash} text="Hidrolavados" description="Limpieza profunda con agua a presión para eliminar suciedad, hongos y restos de pintura " />
          <ServiceCard icon={PiWallDuotone} text="Enduidos" description="Aplicación de enduido para alisar paredes y prepararlas para pintar" />
          <ServiceCard icon={FaSheetPlastic} text="Fascerit" description="Revestimiento plástico texturado que protege y decora superficies exteriores" />
          <ServiceCard icon={GiCrystalShine} text="Lustres" description="Acabado brillante que realza superficies interiores" />
          <ServiceCard icon={GiWoodCabin} text="Laqueados de puertas, marcos y contramarcos" description="Aplicación de laca para lograr un acabado liso, duradero y elegante, protegiendo la madera del uso y la humedad " />
          <ServiceCard icon={MdOutlineCleaningServices} text="Limpieza profunda de madera y barnices" description="Eliminación de suciedad, manchas y restos de productos para restaurar el brillar y la textura original de la madera tratada" />
          <ServiceCard icon={LuDoorOpen} text="Esmaltados de puertas y ventanas" description="Pintura con esmalte sintético o al agua para proteger y renovar superficies, con terminación mate, satinada o brillante" />
        </div>

      </div>
    </div>
  );
}

