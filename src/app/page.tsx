'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { products, categories, formatRupiah } from '@/data';
import { useStore } from '@/store/useStore';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const openProductModal = useStore((state) => state.openProductModal);

  const filteredProducts = activeCategory === "Semua"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <section className="bg-brand-cream w-full pt-8 pb-16 md:pt-16 md:pb-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-maroon leading-tight">
              Pesan Nasi Box & Catering Praktis Untuk Acara Anda
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              Melayani catering harian, rapat kantor, pengajian, ulang tahun, dan berbagai acara spesial dengan cita rasa rumahan khas Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#menu" className="bg-brand-maroon text-white text-center font-semibold px-8 py-4 rounded-lg hover:bg-brand-maroon/90 transition-colors shadow-lg">Pesan Sekarang</a>
              <a href="#menu" className="bg-white text-brand-maroon border border-brand-maroon text-center font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors">Lihat Menu</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className="relative h-64 md:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=1200" alt="Catering Bu Anis" className="object-cover w-full h-full" />
          </motion.div>
        </div>
      </section>

      <section id="menu" className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar gap-2 sticky top-16 bg-brand-warmGray z-30 pt-4">
          {categories.map((cat) => (
            <button
              key={cat} onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-medium text-sm transition-colors ${activeCategory === cat ? 'bg-brand-maroon text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-maroon'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <motion.div layoutId={`card-${product.id}`} key={product.id} onClick={() => openProductModal(product)} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" loading="lazy" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-brand-maroon font-bold text-lg">{formatRupiah(product.basePrice)}</span>
                  <button className="bg-brand-cream text-brand-maroon font-semibold px-4 py-2 rounded-lg text-sm group-hover:bg-brand-maroon group-hover:text-white transition-colors">Pesan Yuk</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
