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
      <section id="menu" className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        <div className="flex overflow-x-auto pb-4 mb-6 hide-scrollbar gap-2 sticky top-12 bg-brand-warmGray z-30 pt-4">
          {categories.map((cat) => (
            <button
              key={cat} onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full font-medium text-xs sm:text-sm transition-colors ${activeCategory === cat ? 'bg-brand-maroon text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-maroon'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {filteredProducts.map((product) => (
            <motion.div 
              layoutId={`card-${product.id}`} 
              key={product.id} 
              onClick={() => openProductModal(product)} 
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" loading="lazy" />
              </div>
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5">{product.name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4 flex-grow">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-brand-maroon font-bold text-base sm:text-lg">{formatRupiah(product.basePrice)}</span>
                  <button className="bg-brand-cream text-brand-maroon font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm group-hover:bg-brand-maroon group-hover:text-white transition-colors">
                    Pesan Yuk
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

