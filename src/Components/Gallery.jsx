import { useState } from "react"
import img1 from '@/Images/img1.jpeg'
import img2 from '@/Images/img2.jpeg'
import img3 from '@/Images/img3.jpeg'
import img4 from '@/Images/img4.jpeg'
import img5 from '@/Images/img5.jpeg'
import img6 from '@/Images/img6.jpeg'
import img7 from '@/Images/img7.jpeg'
import img8 from '@/Images/img8.jpeg'
import img9 from '@/Images/img9.jpeg'
import img10 from '@/Images/img10.jpeg'
import img11 from '@/Images/img11.jpeg'
import img12 from '@/Images/img12.jpeg'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)
    
    const images = [
        {img: img12, desc:"Wave Brava 2025"},
        {img: img11, desc:"Blue Bird 2025"},
        {img: img1, desc: "Edificio Burnett 2024"},
        {img: img7, desc: "Torres Blancas 2024"},
        {img: img8, desc:"Grey Stone 2024"},
        {img: img2, desc:"Porto Scala 2023"},
        {img: img5, desc:"Edificio Continental 2022"},
        {img: img6, desc:"Surfside 2022"},
        {img: img9, desc:"Tiburon III 2020"},
        {img: img10, desc:"Tiburon II 2020"},
        {img: img4, desc:"Tiburon Terrazas Barra 2020"}
    ]
    
    return(
        <>
        <div id="trabajos" data-aos="fade-up" className="lg:min-h-[calc(90vh-80px)] bg-white flex flex-col items-center px-8 pt-8 pb-16 scroll-mt-54 sm:scroll-mt-54 md:scroll-mt-18 lg:scroll-mt-20">
            <div className="flex flex-col items-start w-full max-w-6xl">
                <div className="w-full sm:max-w-4xl mb-8">
                    <p className="text-4xl font-montserrat">Trabajos</p>
                    <div className="w-3xs h-0.5 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full mb-16 mt-5"></div>
                </div>
            </div>
            <div className="w-full max-w-6xl min-h-screen mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {images.map((item, index) => (
                    <div key={index} className="flex flex-col gap-3 group">
                        <div 
                        key={index}
                        className="relative bg-cover bg-center bg-no-repeat w-auto h-80 rounded-sm shadow-md cursor-pointer" 
                        style={{backgroundImage:`url(${item.img})`}}
                        onClick={() => {setOpen(true), setIndex(index)}}
                        >
                            <div className="absolute inset-0 group-hover:bg-black/0 transition-colors duration-300 bg-black/30"></div>
                        </div>
                        <div className="text-center relative flex items-center justify-center">
                            <span className="relative inline-block font-semibold font-inter">
                                {item.desc}
                                <span className={`absolute left-0 -bottom-1 h-1 w-0 bg-[#c75353] transition-all duration-300 group-hover:w-full`}></span> 
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images.map((item) => ({src: item.img}))}
                >

            </Lightbox>
        </div>  
        </>
    )
}