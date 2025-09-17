import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "./ui/carousel"
import { FaTools, FaBrush, FaBuilding } from "react-icons/fa"

export default function CarouselImg()
{
    const items = [
        {
            icon:<FaTools color="white" size={30}/>, title:"Trabajos en la altura", description:"a", pic: ""
        },
        {
            icon:<FaBrush color="white" size={30}/>, title:"Proyectos en remodelacion", description:"b", pic: ""
        },
        {
            icon:<FaBuilding color="white" size={30}/>, title:"Sobre", description:"c", pic: ""
        },
        {
            icon:<FaBrush size={30}/>, title:"Llamadas", description:"d", pic: ""
        },
        {
            icon:<FaBrush size={30}/>, title:"Tramites", description:"e", pic: ""
        },
        {
            icon:<FaBrush size={30}/>, title:"Personal", description:"f", pic: ""
        },
        {
            icon:<FaBrush size={30}/>, title:"Nosotros", description:"g", pic: ""
        },
        {
            icon:<FaBrush size={30}/>, title:"Nosotros2", description:"h", pic: ""
        }

    ]

    return (
        <div className="w-[100vh] h-[40vh]">
            <Carousel 
                opts={{
                    loop:true
                }}
                className="w-full h-full"
            >
                <CarouselContent className="flex h-full gap-2">
                    {items.map((item, index) => {
                        return (
                            <CarouselItem key={index} className="border-2 flex-[0_0_25%] pl-4 h-full flex flex-col">
                                <div className="flex flex-col space-y-5 items-center justify-center h-full w-full">
                                    <div>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <label className="text-2xl font-semibold text-white">{item.title}</label>
                                    </div>
                                    <div>
                                        <label className="text-lg font-semibold text-white">{item.description}</label>
                                    </div>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselNext></CarouselNext>
            </Carousel>
        </div>
    )
}
