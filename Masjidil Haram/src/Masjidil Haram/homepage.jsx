import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { haramData } from "./data";

const hargaDestinasi = [
  {
    id: 'masjid-haram',
    destinasi: 'Masjidil Haram',
    harga: 'Rp 30.000.000',
    keterangan: 'Paket Umrah & Haji, termasuk transportasi dan akomodasi.',
  },
  {
    id: 'masjid-nabawi',
    destinasi: 'Masjid Nabawi',
    harga: 'Rp 28.000.000',
    keterangan: 'Paket Umrah dengan kunjungan ke Madinah.',
  },
  {
    id: 'pilgrimage',
    destinasi: 'Ibadah Haji di Masjidil Haram',
    harga: 'Rp 45.000.000',
    keterangan: 'Paket lengkap haji, termasuk akomodasi dan fasilitas.',
  },
  {
    id: 'kaabah-view',
    destinasi: 'Ka\'bah View',
    harga: 'Rp 35.000.000',
    keterangan: 'Paket khusus mengelilingi Ka\'bah, tanpa Haji.',
  },
];
function Herosection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative h-screen">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1589827577276-65d717348780?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Masjidil Haram"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navbar */}
      <div className="relative z-20 px-4 md:px-20 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Logo</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-white font-medium">
            <Link to="/" className="hover:text-blue-300 transition">
              Home
            </Link>
            <Link to="/About" className="hover:text-blue-300 transition">
              About
            </Link>
            <a href="#" className="hover:text-blue-300 transition">
              Services
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50 relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded px-4 py-2 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Popup */}
        {isMenuOpen && (
          <div className="absolute z-50 top-16 right-4 bg-white rounded shadow-lg p-3 w-1/3 sm:w-1/3 md:hidden">
            <Link to="/">
            {/* <a href="#" className="block text-gray-800 py-1 hover:text-blue-600"> */}
              Home
            {/* </a> */}
            </Link>
            <Link to="/About">
            {/* <a href="" className="block text-gray-800 py-1 hover:text-blue-600"> */}
              About
            {/* </a> */}
            </Link>
            <a href="#" className="block text-gray-800 py-1 hover:text-blue-600">
              Services
            </a>
            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded px-3 py-1 transition">
              Sign Up
            </button>
          </div>
        )}
      </div>

      {/* Hero text with animation */}
      <div className="relative z-10 flex flex-col items-center h-full text-center px-4  md:-mt-5 ">
        <motion.h1
          className="text-orange-500 text-3xl md:text-6xl font-bold max-w-3xl mt-14 md:mb-54 md:hidden"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          المسجد الحرام
        </motion.h1>
        <motion.h2
          className="text-white py-2 px-4 rounded-full bg-black bg-opacity-300 bg-opacity-50 capitalize mb-4 text-xs md:text-base w-fit mt-20  md:absolute top-20 left-20 "
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          A place where all Muslims worship and place their hopes
        </motion.h2>
        <motion.h1
          className="text-white text-3xl md:text-6xl font-bold max-w-3xl mt-2 md:absolute top-56 md:mt-10 left-20 md:text-left capitalize"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A very memorable experience from Masjidil Haram
        </motion.h1>
        <motion.button
          className="mt-16 bg-orange-600 bg-opacity-60 capitalize text-white font-semibold rounded-full px-4 py-2 transition md:absolute top-[55%] left-20 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Explore Now
        </motion.button>
        <motion.p
          className="text-white text-sm max-w-3xl mt-28 md:absolute top-[73%] md:text-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          Masjidil Haram is a mosque located in the city of Mecca, Saudi Arabia.
        </motion.p>
      </div>

      <section className="min-h-screen bg-white px-6 md:px-20 py-16">
        <div className="max-w-screen-xl mx-auto">
          {/* Header Section */}
          <div className="text-center md:text-left mb-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              The Journey of <br /> Al-Haramain
            </h1>
            <p className="text-gray-600 max-w-xl">
              Discover the sacred journey through the two holy mosques, Masjidil
              Haram and Masjid Nabawi. A spiritual experience that has inspired
              millions for centuries.
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <button className="bg-black text-white px-6 py-2 rounded-full">
                Get Reminder
              </button>
              <button className="border border-black px-6 py-2 rounded-full">
                Learn More
              </button>
            </div>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {haramData.map((item) => (
              <Link to={`/detail/${item.id}`} key={item.id} className="relative group rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 p-4 flex flex-col justify-end">
                  <p className="text-white text-sm">{item.subtitle}</p>
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-teal-100 to-indigo-200 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-12 drop-shadow-lg">Tabel Harga Perjalanan Destinasi</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hargaDestinasi.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500 p-6 relative overflow-hidden">
              {/* Decorative Gradient Circle */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-teal-200 to-indigo-300 rounded-full opacity-30 blur-2xl z-0" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-teal-100 to-emerald-200 rounded-full opacity-30 blur-2xl z-0" />
              
              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.destinasi}</h3>
              <p className="text-lg font-medium text-teal-600 mb-4">{item.harga}</p>
              <p className="text-sm text-gray-600 mb-6">{item.keterangan}</p>
              
              <Link 
                to={`/detail/${item.id}`} 
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-teal-600 hover:text-teal-500 font-semibold text-md transition duration-300"
              >
                Lihat Detail
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
      <footer className="bg-[#0f172a] text-white py-16 px-6 md:px-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
    
    {/* Brand Section */}
    <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
      <h2 className="text-4xl font-extrabold text-emerald-400 tracking-wide drop-shadow-lg">
        Masjidil Haram
      </h2>
      <p className="text-gray-300 text-lg max-w-md md:max-w-sm">
        Pusat spiritual umat Islam di seluruh dunia, tempat penuh keberkahan dan ketenangan spiritual.
      </p>
      <div className="flex gap-4 justify-center md:justify-start mt-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-300 transition duration-200">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-300 transition duration-200">
          <i className="fab fa-facebook text-2xl"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-300 transition duration-200">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
      </div>
    </div>

    {/* Navigation Section */}
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
      {['Beranda', 'Tentang', 'Galeri', 'Kontak'].map((item, idx) => (
        <a
          key={idx}
          href="#"
          className="text-gray-300 hover:text-emerald-300 transition duration-200 text-lg font-semibold"
        >
          {item}
        </a>
      ))}
    </div>
    
  </div>

  {/* Divider and Copyright */}
  <div className="border-t border-emerald-600 mt-12 pt-4 text-center">
    <p className="text-sm text-gray-400">
      &copy; {new Date().getFullYear()} Masjidil Haram. Semua hak dilindungi.
    </p>
  </div>
</footer>

    </div>
  );
}

export default Herosection;
