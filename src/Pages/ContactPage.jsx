import { useState, useEffect } from "react";
import image from "../Images/img4.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser"; 

export default function ContactPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
     setNombre("");
     setEmail("");
     setMensaje("");

    const templateParams = {
      nombre,
      email,
      mensaje,
    };

    emailjs
      .send(
        "service_co4mf2f",  
        "template_qo1ym8b",  
        templateParams,
        "_ZNjolpch2zZwbvXL"    
      )
      .then(
        (response) => {
          alert("Correo enviado con éxito!");
        },
        (error) => {
          alert("Error al enviar el correo, intente nuevamente.");
          console.error(error);
        }
      );
  };

  return (
    <div
      id="contactanos"
      className="lg:min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-8 bg-cover bg-center scroll-mt-54 sm:scroll-mt-54 md:scroll-mt-18 lg:scroll-mt-20"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-y-24 gap-x-16 w-full max-w-5xl bg-gray-100/70 p-8 rounded-lg"
        data-aos="fade-up"
      >
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl font-bold mb-6 text-center">Pinturas Gaggioni</h2>
          <form className="flex flex-col space-y-4" onSubmit={sendEmail}>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Nombre *</label>
              <input
                type="text"
                placeholder="Ingrese su nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Email *</label>
              <input
                type="email"
                placeholder="Ingrese su email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Mensaje</label>
              <textarea
                placeholder="Escriba su mensaje"
                rows={4}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded text-center transition"
            >
              Enviar
            </button>
          </form>
        </div>

        <div className="flex flex-col space-y-10" data-aos="fade-up" data-aos-delay="200">
          <p className="font-medium text-gray-800">Contáctenos</p>
          <p className="text-3xl max-w-xs leading-snug text-gray-900">
            Comuníquese para <br /> solicitar cotizaciones <br /> sin cargo.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full"></div>
          <p className="font-medium text-gray-800">Punta del Este, Maldonado</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 font-medium">
            <a
              href="https://wa.me/59899810279?text=Hola,%20quiero%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-400"
            >
              💬 +598 099-810-279
            </a>
          </div>
          <a
            href="mailto:edpinturasgaggioni@gmail.com"
            className="text-gray-800 hover:text-white"
          >
            ✉️ Gmail: edpinturasgaggioni@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
