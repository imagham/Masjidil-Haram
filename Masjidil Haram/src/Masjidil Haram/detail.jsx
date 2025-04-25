import { useParams, Link } from "react-router-dom";
import { haramData } from "./data";

const DetailPage = () => {
  const { id } = useParams();
  const item = haramData.find((i) => i.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
        <p className="text-center text-gray-600 text-xl font-semibold">Konten tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-20 py-14 bg-gradient-to-br from-emerald-50 via-white to-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden border border-gray-200">

        {/* Decorative Gradient Circles */}
        <div className="absolute -top-28 -left-28 w-96 h-96 bg-gradient-to-r from-emerald-100 to-teal-200 rounded-full opacity-40 blur-2xl z-0" />
        <div className="absolute -bottom-36 -right-28 w-96 h-96 bg-gradient-to-r from-yellow-200 to-amber-400 rounded-full opacity-30 blur-2xl z-0" />

        {/* Content (z-10) */}
        <div className="relative z-10">
          {/* Back Link */}
          <Link
            to="/"
            className="text-emerald-600 hover:text-emerald-500 transition ease-in-out duration-300 mb-8 inline-block text-sm font-medium tracking-wide"
          >
            ← Kembali ke Beranda
          </Link>

          {/* Title */}
          <h1 className="text-5xl font-extrabold text-gray-800 mb-3 leading-tight tracking-tight">{item.title}</h1>
          <h2 className="text-xl text-gray-600 mb-6 font-light italic">{item.subtitle}</h2>

          {/* Image with glowing border */}
          <div className="overflow-hidden rounded-xl mb-8 shadow-2xl ring-4 ring-emerald-300 transform transition-all duration-500 hover:scale-105">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Description */}
          <p className="text-gray-800 leading-relaxed text-justify text-lg md:text-xl font-medium tracking-wide space-y-4">
            {item.description}
          </p>

          {/* Additional Visual Separation */}
          <div className="mt-8 border-t-2 border-gray-300 pt-6">
            <p className="text-gray-500 text-sm text-center italic">Tempat yang penuh berkah dan kedamaian.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
