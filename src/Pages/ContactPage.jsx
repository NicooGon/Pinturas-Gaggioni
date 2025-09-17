import { useState } from "react";
import image from "../Images/img4.jpeg";

export default function ContactPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <div
    id="contactanos"
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-24 gap-x-16 w-full max-w-5xl bg-gray-100/70 p-8 rounded-lg">

        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Pinturas Gaggioni</h2>
          <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
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

            <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=nicoogames2018@gmail.com&su=Hola, soy ${encodeURIComponent(nombre)}&body=${encodeURIComponent(mensaje)}`}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded text-center transition"
            target="_blank"
            rel="noopener noreferrer"
            >
            Enviar
            </a>
          </form>
        </div>

        <div className="flex flex-col space-y-10">
          <p className="font-medium text-gray-800">Contáctenos</p>
          <p className="text-3xl max-w-xs leading-snug text-gray-900">
            Comuníquese para <br /> solicitar cotizaciones <br /> sin cargo.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full"></div>
          <p className="font-medium text-gray-800">Punta del Este, Maldonado</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 font-medium">
            <a href="tel:42488580" className="text-gray-800 hover:text-white">📞 42488580</a>
            <span className="hidden sm:inline">/</span>
            <a href="https://wa.me/59899810279?text=Hola,%20quiero%20información" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-400">
              💬 +598 099-810-279
            </a>
          </div>
          <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=edpinturasgaggioni@gmail.com&su=Consulta&body=Hola,%20quiero%20información" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-800 hover:text-white" > 
          ✉️ Gmail: edpinturasgaggioni@gmail.com 
          </a>
        </div>

      </div>
    </div>
  );
}
