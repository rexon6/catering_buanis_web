'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { formatRupiah, translations } from '@/data';

export default function ProductModal() {
    const { selectedProduct, closeProductModal, addToCart, language } = useStore();
    const [quantity, setQuantity] = useState(1);
    const [notes, setNotes] = useState("");

    const t = translations[language];

    useEffect(() => {
        if (selectedProduct) {
            setQuantity(1);
            setNotes("");
        }
    }, [selectedProduct]);

    if (!selectedProduct) return null;

    const prodName = language === 'en' ? selectedProduct.nameEn : selectedProduct.name;
    const prodDesc = language === 'en' ? selectedProduct.descriptionEn : selectedProduct.description;

    const handleAddToCart = () => {
        addToCart({
            id: Math.random().toString(36).substr(2, 9),
            product: selectedProduct,
            quantity,
            options: { notes },
            totalPrice: selectedProduct.basePrice * quantity
        });
        closeProductModal();
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 p-0 md:p-4">
                <motion.div
                     initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '100%' }} transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="bg-white w-full md:w-[600px] md:rounded-2xl rounded-t-2xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl relative"
                >
                    <button onClick={closeProductModal} className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-800 hover:bg-gray-200 z-10">
                        <X size={20} />
                    </button>
                    <div className="h-64 w-full relative shrink-0">
                        <img src={selectedProduct.image} alt={prodName} className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6 overflow-y-auto hide-scrollbar flex-grow bg-white">
                        <h2 className="text-2xl font-bold text-gray-900">{prodName}</h2>
                        <p className="text-brand-maroon font-bold text-xl mt-2">{formatRupiah(selectedProduct.basePrice)}</p>
                        <p className="text-gray-600 mt-4 leading-relaxed">{prodDesc}</p>
                        <hr className="my-6 border-gray-100" />
                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-gray-800">{t.catatanTambahan}</label>
                            <textarea
                                rows={3} placeholder={t.placeholderNotes} value={notes} onChange={(e) => setNotes(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-maroon focus:border-transparent outline-none resize-none"
                            />
                        </div>
                    </div>
                    <div className="p-4 md:p-6 bg-white border-t border-gray-100 flex items-center justify-between gap-4 shrink-0 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-lg p-2">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 rounded-md hover:bg-gray-200 text-brand-maroon disabled:opacity-30" disabled={quantity <= 1}>
                                <Minus size={20} />
                            </button>
                            <span className="font-semibold w-6 text-center text-gray-800">{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)} className="p-1 rounded-md hover:bg-gray-200 text-brand-maroon">
                                <Plus size={20} />
                            </button>
                        </div>
                        <button onClick={handleAddToCart} className="flex-grow bg-brand-maroon text-white font-bold py-3.5 px-4 rounded-lg hover:bg-brand-maroon/90 transition-colors shadow-md flex justify-between items-center">
                            <span>{t.tambah}</span>
                            <span>{formatRupiah(selectedProduct.basePrice * quantity)}</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}