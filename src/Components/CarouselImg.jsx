import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { FaTools, FaBrush, FaBuilding } from "react-icons/fa"
import img1 from '@/Images/img1.jpeg'
import img2 from '@/Images/img2.jpeg'
import img3 from '@/Images/img3.jpeg'
import img4 from '@/Images/img4.jpeg'
import img5 from '@/Images/img5.jpeg'
import img6 from '@/Images/img6.jpeg'
import img7 from '@/Images/img7.jpeg'
import img8 from '@/Images/img8.jpeg'

export default function CarouselImg()
{

    const items = [
        {
            icon:<FaTools color="white" size={30}/>, title:"Trabajos en la altura", description:"Mantenimiento y remodelaciones de lorem ipsun", pic: img1
        },
        {
            icon:<FaBrush color="white" size={30}/>, title:"Proyectos en remodelacion", description:"Mantenimiento y remodelaciones de lorem ipsun", pic: img2
        },
        {
            icon:<FaBuilding color="white" size={30}/>, title:"Sobre", description:"Mantenimiento y remodelaciones de lorem ipsun", pic: img3
        },
        {
            icon:<FaBrush color="white" size={30}/>, title:"Llamadas", description:"Mantenimiento y remodelaciones de lorem ipsun", pic: img4
        },
        {
            icon:<FaBrush color="white" size={30}/>, title:"Tramites", description:"Mantenimiento y remodelaciones de lorem ipsun", pic: img5
        },
        {
            icon:<FaBrush color="white" size={30}/>, title:"Personal", description:"Mantenimiento y remodelaciones de lorem ipsun", pic: img6
        },
        {
            icon:<FaBrush color="white" size={30}/>, title:"Nosotros", description:"Mantenimiento y remodelaciones de lorem ipsun", pic: img7
        },
        {
            icon:<FaBrush color="white" size={30}/>, title:"Nosotros2", description:"Mantenimiento y remodelaciones de lorem ipsun", pic: img8
        }

    ]

    return (
        <div className="w-screen min-h-screen flex flex-col items-center p-8">
            <div className="w-full h-[40vh] lg:w-[115vh] xl:w-[140vh]">
                <Carousel
                    plugins={[Autoplay({delay:3000})]}
                    opts={{
                        align: "start",
                        loop:true
                    }}
                    className="w-full h-full"
                >
                    <CarouselContent className="w-full h-full">
                    {items.map((item, index) => (
                        <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/4 pl-8 group relative'>
                            <div
                                className="relative flex flex-col bg-center justify-center bg-cover gap-2 h-full w-full"
                                style={{ backgroundImage: `url(${item.pic})` }}
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-[#c75353] transition-colors duration-400"></div>
                                <div className="relative flex flex-col p-4 gap-2 items-center justify-center group-hover:opacity-0 group-hover:translate-y-2 transition-all duration-300">
                                    <div className="text-center">
                                        {item.icon}
                                    </div>
                                    <div className="text-center">
                                        <label className="text-2xl font-semibold text-white">
                                            {item.title}
                                        </label>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-lg font-semibold text-white">
                                            {item.description}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-center absolute p-4 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center">
                                    <span className="text-lg font-semibold text-white">
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
