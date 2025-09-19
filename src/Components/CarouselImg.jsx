import { Carousel, CarouselContent, CarouselItem} from "./ui/carousel"
import Autoplay from "embla-carousel-react"
import { FaTools, FaBrush, FaBuilding } from "react-icons/fa"
import { TextAnimate } from "./ui/text-animate"
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
    const color = '#c75353'

    const items = [
        {
            icon:<FaTools color="white" size={30}/>, title:"Trabajos en la altura", description:"a", pic: img1
        },
        {
            icon:<FaBrush color="white" size={30}/>, title:"Proyectos en remodelacion", description:"b", pic: img2
        },
        {
            icon:<FaBuilding color="white" size={30}/>, title:"Sobre", description:"c", pic: img3
        },
        {
            icon:<FaBrush size={30}/>, title:"Llamadas", description:"d", pic: img4
        },
        {
            icon:<FaBrush size={30}/>, title:"Tramites", description:"e", pic: img5
        },
        {
            icon:<FaBrush size={30}/>, title:"Personal", description:"f", pic: img6
        },
        {
            icon:<FaBrush size={30}/>, title:"Nosotros", description:"g", pic: img7
        },
        {
            icon:<FaBrush size={30}/>, title:"Nosotros2", description:"h", pic: img8
        }

    ]

    return (
        <div className="w-screen min-h-screen flex flex-col items-center p-8">
            <div className="w-[120vh] h-[40vh]">
                <Carousel
                    opts={{
                        align: "start",
                        loop:true
                    }}
                    className="w-full h-full"
                >
                    <CarouselContent className="-ml-8 w-full h-full">
                    {items.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 pl-8 lg:basis-1/4">
                            <div className="relative flex flex-col bg-center justify-center bg-cover gap-2 transition-all duration-300 h-full w-full" 
                                style={{
                                    backgroundImage: `url(${item.pic})`, 
                                }}>
                                <div className="absolute inset-0 bg-black/40 hover:bg-red-600/50 transition-colors duration-200"></div>
                                <div className="relative flex flex-col gap-2 items-center justify-center">
                                    <div className="text-center"> 
                                        {item.icon}
                                    </div>
                                    <div className="text-center">
                                        <label className="text-2xl font-semibold text-white">{item.title}</label>
                                    </div>
                                    <div className="text-center">
                                        <TextAnimate 
                                            by="text"
                                            animation="slideUp"
                                            className="text-lg font-semibold text-white">
                                            {item.description}
                                        </TextAnimate>
                                    </div>
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
