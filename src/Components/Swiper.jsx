import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { useState } from 'react'
import { motion } from 'framer-motion'
import img4 from '@/Images/img4.jpeg'
import img6 from '@/Images/img6.jpeg'
import img7 from '@/Images/img7.jpeg'
import img8 from '@/Images/img8.jpeg'
import 'swiper/css'
import 'swiper/css/effect-fade'

export default function SwiperImg() {

    const [ activeSlide, setActiveSlide ] = useState(0)
    const [ swiperInstance, setSwiper ] = useState(null)
    

    const images = [
        { img: img4, text: "1" },
        { img: img6, text: "2"},
        { img: img7, text: "3"},
        { img: img8, text: "4" }
    ]

    return(
        <>
            <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] relative">
                <Swiper 
                    spaceBetween={50}
                    modules={[EffectFade, Autoplay]}
                    effect="fade"
                    speed={2000}
                    autoplay={{delay:3000, disableOnInteraction:false}}
                    onSlideChange={(swiper) => {
                        const activeIndex = swiper.activeIndex
                        setActiveSlide(activeIndex)
                    }}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    className='h-full'
                >
                    {images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div 
                                className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
                                style={{backgroundImage:`url(${item.img})`}}
                            >
                                <div className='absolute w-full h-full bg-black/30'></div>
                                {activeSlide === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.9 }}
                                        className="text-6xl z-10 text-center text-white font-montserrat font-bold"
                                    >
                                        {item.text}
                                    </motion.div>
                                )}
                            </div>
                        </SwiperSlide>
                    )
                    )}
                </Swiper>
                <div className='absolute hidden bottom-4 left-1/2 transform -translate-x-1/2 md:flex gap-6 z-20'>
                    {images.map((item, index) => (
                        <button 
                            onClick={() => swiperInstance.slideTo(index)} 
                            className='relative text-2xl w-12 flex items-center justify-center text-center text-white font-semibold font-inter cursor-pointer group'
                        >
                            {index + 1}
                            <span className={`absolute left-0 -bottom-1 h-1 w-0 bg-[#c75353] transition-all duration-300 ${activeSlide === index ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}