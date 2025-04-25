import React from 'react';

const AboutMasjidilHaram = () => {
  return (
    <div className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1591604159758-680f22f77d24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFzamlkaWwlMjBoYXJhbXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Masjidil Haram"
          className="absolute w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Tentang Masjidil Haram
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              Masjid paling suci dalam Islam, jantung spiritual umat Muslim di seluruh dunia.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-6 sm:px-10 md:px-20 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
          Sejarah & Keutamaan
        </h2>
        <div className="space-y-6 text-justify text-gray-700 leading-relaxed">
          <p>
            Masjidil Haram terletak di kota suci Makkah, Arab Saudi. Ini adalah masjid terbesar di dunia dan mengelilingi Ka'bah, kiblat umat Islam. Setiap tahun, jutaan umat Islam dari seluruh dunia datang ke sini untuk menunaikan ibadah haji dan umrah.
          </p>
          <p>
            Masjid ini telah mengalami banyak perluasan sejak zaman Nabi Ibrahim hingga era modern. Pemerintah Arab Saudi terus meningkatkan kapasitas dan fasilitas agar jamaah dapat beribadah dengan nyaman dan aman.
          </p>
          <p>
            Ibadah di Masjidil Haram memiliki keutamaan besar. Satu salat di Masjidil Haram lebih baik dari 100.000 salat di masjid lainnya. Ini menjadikannya tempat yang sangat istimewa bagi umat Islam.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutMasjidilHaram;
