import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { FaTools, FaBuilding, FaRoad, FaStar } from "react-icons/fa"
import { RiTeamFill } from "react-icons/ri"
import img2 from '@/Images/img2.jpeg'
import img5 from '@/Images/img5.jpeg'
import img6 from '@/Images/img6.jpeg'
import img7 from '@/Images/img7.jpeg'
import img8 from '@/Images/img8.jpeg'

export default function CarouselImg() {
  const items = [
    { icon: <FaTools color="white" size={30} />, title: "Proyectos de remodelación", description: "Transformamos tus espacios con calidad y estilo", pic: img2 },
    { icon: <FaBuilding color="white" size={30} />, title: "Gestión de proyectos", description: "Acompañamiento en cada etapa para asegurar los mejores resultados", pic: img5 },
    { icon: <FaRoad color="white" size={30} />, title: "Sobre nosotros", description: "Una empresa con trayectoria y compromiso en cada trabajo", pic: img7 },
    { icon: <RiTeamFill color="white" size={30} />, title: "Equipo especializado", description: "Personal capacitado que garantiza eficiencia y confianza", pic: img6 },
    { icon: <FaStar color="white" size={30} />, title: "Nuestra misión", description: "Ofrecer servicios de calidad que superen tus expectativas", pic: img8 }
  ]

  return (
    <div className="w-full flex flex-col items-center px-4">
      <div className="w-full max-w-6xl h-[40vh] sm:h-[50vh]">
        <Carousel
        plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
        opts={{
            align: "start",
            loop: true,
            containScroll: "trimSnaps",
            dragFree: true,
            skipSnaps: false  
        }}
        className="w-full h-full"
        >
          <CarouselContent className="w-full h-full">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 group relative"
              >
                <div
                  className="relative flex flex-col bg-center justify-center bg-cover gap-2 h-[40vh] sm:h-[50vh] w-full rounded-xl overflow-hidden shadow-lg"
                  style={{ backgroundImage: `url(${item.pic})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-[#c75353] transition-colors duration-400"></div>
                  <div className="relative flex flex-col p-4 gap-2 items-center justify-center group-hover:opacity-0 group-hover:translate-y-2 transition-all duration-300">
                    <div className="text-center">{item.icon}</div>
                    <div className="text-center">
                      <label className="text-xl sm:text-2xl font-semibold text-white font-roboto">
                        {item.title}
                      </label>
                    </div>
                    <div className="text-center">
                      <span className="text-sm sm:text-lg font-semibold text-white font-montserrat">
                        {item.description}
                      </span>
                    </div>
                  </div>
                  <div className="text-center absolute p-4 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center">
                    <span className="text-sm sm:text-lg font-semibold text-white font-montserrat">
                      {item.description}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
