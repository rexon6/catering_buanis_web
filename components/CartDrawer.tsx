'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { formatRupiah } from '@/data';

export default function CartDrawer() {
    const { isCartOpen, toggleCart, cart, removeFromCart, updateQuantity } = useStore();
    const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);

    const handleCheckoutWA = () => {
        let message = `Halo Nasi Catering Bu Anis, saya mau pesan:\n\n`;
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.product.name}\n   Jumlah: ${item.quantity} box\n`;
            if (item.options.notes) message += `   Catatan: ${item.options.notes}\n`;
            message += `   Harga: ${formatRupiah(item.totalPrice)}\n\n`;
        });
        message += `*Total Pesanan: ${formatRupiah(subtotal)}*\n\nMohon info ongkos kirim dan cara pembayarannya ya. Terima kasih!`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/6285143252624?text=${encodedMessage}`, '_blank');
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={toggleCart} className="fixed inset-0 bg-black/40 z-50" />
                    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }} className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 flex flex-col">
                        <div className="p-5 flex items-center justify-between border-b border-gray-100 bg-white">
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2"><ShoppingBag size={20} className="text-brand-maroon" /> Keranjang</h2>
                            <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><X size={20} /></button>
                        </div>
                        <div className="flex-grow overflow-y-auto p-5 space-y-6 bg-brand-warmGray/30">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                                    <ShoppingBag size={48} strokeWidth={1} />
                                    <p>Keranjang masih kosong nih.</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                                        <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded-lg" />
                                        <div className="flex-grow flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-bold text-gray-800 text-sm leading-tight">{item.product.name}</h4>
                                                {item.options.notes && <p className="text-xs text-gray-500 mt-1 line-clamp-1 border-l-2 border-brand-gold pl-1">&quot;{item.options.notes}&quot;</p>}
                                                <p className="text-brand-maroon font-semibold text-sm mt-1">{formatRupiah(item.totalPrice)}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2 border border-gray-200 rounded-md p-1 bg-gray-50">
                                                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-2 text-gray-600 font-bold">-</button>
                                                    <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 text-gray-600 font-bold">+</button>
                                                </div>
                                                <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 p-1"><Trash2 size={16} /></button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        {cart.length > 0 && (
                            <div className="p-5 border-t border-gray-100 bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.02)]">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-gray-600 font-medium">Subtotal</span>
                                    <span className="text-xl font-bold text-gray-900">{formatRupiah(subtotal)}</span>
                                </div>
                                <button onClick={handleCheckoutWA} className="w-full bg-brand-maroon text-white font-bold py-4 rounded-xl hover:bg-brand-maroon/90 shadow-md transition-all active:scale-[0.98]">
                                    Checkout via WhatsApp
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}