'use client';
import { MapPin, Phone, AtSign } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { translations } from '@/data';

export default function Footer() {
    const language = useStore((state) => state.language);
    const t = translations[language];

    return (
        <footer className="bg-white text-gray-600 py-12 mt-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                    <img
                        src="/images/logo.svg"
                        alt="Nasi Catering Bu Anis"
                        className="h-14 w-auto object-contain"
                    />
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                        {t.footerDesc}
                    </p>
                </div>
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-brand-maroon mb-2">{t.hubungiKami}</h4>
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                        <MapPin size={18} className="shrink-0 mt-0.5 text-brand-gold" />
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Jln+Raya+Ngawen+RT+04+RW+01+Wedung+Demak"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brand-maroon hover:underline transition-colors"
                        >
                            Jln Raya Ngawen RT 04 RW 01,<br />Wedung, Demak, Jawa Tengah
                        </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Phone size={18} className="text-brand-gold" />
                        <a href="https://wa.me/6285143252624" target="_blank" rel="noopener noreferrer" className="hover:text-brand-maroon hover:underline transition-colors">+62 851-4325-2624</a>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-brand-maroon mb-2">{t.jamOperasional}</h4>
                    <p className="text-sm text-gray-600">{t.hariBuka}<br />{t.hariLibur}</p>
                    <div className="pt-2">
                        <a href="#" className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-maroon transition-colors">
                            <AtSign size={20} className="text-brand-gold" />
                            <span className="text-sm font-medium">@nasicateringbuanis</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
                &copy; {new Date().getFullYear()} Nasi Catering Bu Anis. All rights reserved.
            </div>
        </footer>
    );
}