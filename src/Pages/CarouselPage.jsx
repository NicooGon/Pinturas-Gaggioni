import CarouselImg from "@/Components/CarouselImg";

export default function CarouselPage() {
    return (
        <>
            <div
            id="quienes-somos"
            className="bg-white items-center p-8"
            >
                <div className="flex flex-col items-center w-full">
                    <div className="w-full sm:w-96 mb-8">
                        <p className="text-5xl font-montserrat mb-6">Quienes Somos</p>
                        <div className="w-full h-0.5 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full mb-16"></div>
                    </div>
                    <CarouselImg></CarouselImg>
                </div>
            </div>
        </>
    )
}