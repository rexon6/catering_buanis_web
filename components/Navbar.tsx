'use client';
import { ShoppingBag, Menu, MessageCircle } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function Navbar() {
    const { toggleCart, cart } = useStore();
    const cartCount = cart.reduce((acc: number, item) => acc + item.quantity, 0);

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-40 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button className="md:hidden text-brand-maroon">
                        <Menu size={24} />
                    </button>
                    <a href="#" className="text-xl md:text-2xl font-bold text-brand-maroon tracking-tight">
                        Nasi Catering Bu Anis
                    </a>
                </div>
                <nav className="hidden md:flex items-center gap-6 font-medium text-gray-600">
                    <a href="#" className="hover:text-brand-maroon transition-colors">Home</a>
                    <a href="#menu" className="hover:text-brand-maroon transition-colors">Menu Catering</a>
                    <a href="#menu" className="hover:text-brand-maroon transition-colors">Paket Acara</a>
                </nav>
                <div className="flex items-center gap-3 md:gap-4">
                    <a href="https://wa.me/6281234567890" target="_blank" className="hidden md:flex items-center gap-2 text-sm font-medium text-green-700 bg-green-50 px-3 py-2 rounded-md hover:bg-green-100 transition-colors">
                        <MessageCircle size={18} />
                        Tanya Admin
                    </a>
                    <button onClick={toggleCart} className="relative p-2 text-brand-maroon hover:bg-brand-cream rounded-full transition-colors">
                        <ShoppingBag size={24} />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-brand-gold text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}