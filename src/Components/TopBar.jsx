import { useEffect, useState } from "react";
import logo from "../Images/LOGO1.png";
import { motion, AnimatePresence } from "framer-motion";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50){
        setScrolled(true)
      }
      else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 z-50 w-screen px-4 md:px-8 py-4 flex items-center justify-between transition-all duration-300 ${!scrolled && isOpen ? "bg-black" : ""}`}>

      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black z-[-1]"
        initial={{ y: -100, opacity: 0 }}
        animate={scrolled ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
      />

      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo Pinturas Gaggioni" className="h-9" />
        <a href="/" className="text-3xl font-bold font-inter text-yellow-500 max-[535px]:w-20">
          PINTURAS GAGGIONI
        </a>
      </div>

      <div className="block max-[1000px]:block min-[1001px]:hidden ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1 w-6 h-6 justify-center items-center"
        >
          <div className={`block h-0.5 w-full bg-yellow-500 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`block h-0.5 w-full bg-yellow-500 transition-all ${isOpen ? "opacity-0" : ""}`}></div>
          <div className={`block h-0.5 w-full bg-yellow-500 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>
      </div>

      <div className={`hidden min-[1001px]:flex flex-col md:flex-row md:gap-8 text-yellow-500 font-medium md:items-center`}>
        <a href="#quienes-somos" className="hover:text-gray-300 lg:text-base md:text-sm mb-2 md:mb-0 font-montserrat text-center md:text-left">Quienes Somos</a>
        <a href="#servicios" className="hover:text-gray-300 mb-2 lg:text-base md:text-sm font-montserrat md:mb-0 text-center md:text-left">Servicios</a>
        <a href="#trabajos" className="hover:text-gray-300 mb-2 lg:text-base md:text-sm font-montserrat md:mb-0 text-center md:text-left">Trabajos</a>
        <a href="#contactanos" className="hover:text-gray-300 lg:text-base md:text-sm font-montserrat text-center md:text-left">Contáctanos</a>
      </div>

       <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-full left-0 w-full bg-black flex flex-col text-yellow-500 font-medium p-4 gap-4 max-[1000px]:flex min-[1001px]:hidden overflow-hidden"
          >
            <a href="#quienes-somos" className="hover:text-gray-300">
              Quienes Somos
            </a>
            <a href="#servicios" className="hover:text-gray-300">
              Servicios
            </a>
            <a href="#trabajos" className="hover:text-gray-300">
              Trabajos
            </a>
            <a href="#contactanos" className="hover:text-gray-300">
              Contáctanos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
