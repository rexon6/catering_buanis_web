'use client';
import { useState } from 'react';
import { ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { translations } from '@/lib/data';

export default function Navbar() {
    const { toggleCart, cart, language, setLanguage } = useStore();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartCount = cart.reduce((acc: number, item) => acc + item.quantity, 0);

    const t = translations[language];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 h-10 bg-white border-b border-gray-200 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-3 h-full grid grid-cols-3 items-center">
                    {/* Left: Hamburger (Mobile) or Nav Links (Desktop) */}
                    <div className="flex items-center justify-start">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-brand-maroon p-1 hover:bg-brand-cream rounded transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
                        </button>
                        <nav className="hidden md:flex items-center gap-5 font-semibold text-gray-600 text-sm">
                            <a href="#" className="hover:text-brand-maroon transition-colors">{t.home}</a>
                            <a href="#menu" className="hover:text-brand-maroon transition-colors">{t.menuCatering}</a>
                            <a href="#menu" className="hover:text-brand-maroon transition-colors">{t.paketAcara}</a>
                        </nav>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex justify-center">
                        <a href="#" className="flex items-center">
                            <img 
                                src="/images/logo.svg" 
                                alt="Nasi Catering Bu Anis" 
                                className="h-6 md:h-9 w-auto object-contain" 
                            />
                        </a>
                    </div>

                    {/* Right: WhatsApp, Language, & Cart */}
                    <div className="flex items-center justify-end gap-1.5 md:gap-4">
                        <a 
                            href="https://wa.me/6285143252624" 
                            target="_blank" 
                            className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-md hover:bg-green-100 transition-colors"
                        >
                            <MessageCircle size={13} />
                            {t.tanyaAdmin}
                        </a>

                        {/* Language Selector */}
                        <div className="flex items-center border border-gray-200 rounded-md p-0.5 bg-gray-50 text-[10px] sm:text-xs font-bold shrink-0">
                            <button
                                onClick={() => setLanguage('id')}
                                className={`px-1.5 py-0.5 rounded transition-all duration-150 ${language === 'id' ? 'bg-brand-maroon text-white shadow-sm' : 'text-gray-500 hover:text-brand-maroon'}`}
                            >
                                ID
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-1.5 py-0.5 rounded transition-all duration-150 ${language === 'en' ? 'bg-brand-maroon text-white shadow-sm' : 'text-gray-500 hover:text-brand-maroon'}`}
                            >
                                EN
                            </button>
                        </div>

                        <button 
                            onClick={toggleCart} 
                            className="relative p-1 text-brand-maroon hover:bg-brand-cream rounded-full transition-colors"
                            aria-label="Open cart"
                        >
                            <ShoppingBag size={16} />
                            {cartCount > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 bg-brand-gold text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed top-10 left-0 right-0 bg-white border-b border-gray-200 shadow-md z-30 py-2 px-4 flex flex-col gap-1 font-medium text-gray-700 animate-fadeIn">
                    <a 
                        href="#" 
                        onClick={() => setIsMobileMenuOpen(false)} 
                        className="hover:text-brand-maroon hover:bg-brand-cream px-3 py-1.5 text-sm rounded-md transition-all"
                    >
                        {t.home}
                    </a>
                    <a 
                        href="#menu" 
                        onClick={() => setIsMobileMenuOpen(false)} 
                        className="hover:text-brand-maroon hover:bg-brand-cream px-3 py-1.5 text-sm rounded-md transition-all"
                    >
                        {t.menuCatering}
                    </a>
                    <a 
                        href="#menu" 
                        onClick={() => setIsMobileMenuOpen(false)} 
                        className="hover:text-brand-maroon hover:bg-brand-cream px-3 py-1.5 text-sm rounded-md transition-all"
                    >
                        {t.paketAcara}
                    </a>
                    <hr className="border-gray-100 my-1" />
                    <a 
                        href="https://wa.me/6285143252624" 
                        target="_blank" 
                        className="flex items-center justify-center gap-2 text-xs font-semibold text-green-800 bg-green-50 px-3 py-2 rounded-lg hover:bg-green-100 transition-colors mb-1"
                    >
                        <MessageCircle size={13} />
                        {t.tanyaAdminWA}
                    </a>
                </div>
            )}
        </>
    );
}