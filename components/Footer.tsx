import { MapPin, Phone, AtSign } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-maroon text-brand-cream py-12 mt-12 border-t-4 border-brand-gold">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Nasi Catering Bu Anis</h3>
                    <p className="text-brand-cream/80 text-sm leading-relaxed max-w-sm">
                        Hadir menyajikan makanan otentik Nusantara untuk setiap momen berharga Anda. Bersih, halal, dan dimasak dengan cinta dari resep keluarga.
                    </p>
                </div>
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-brand-gold mb-2">Hubungi Kami</h4>
                    <div className="flex items-start gap-3 text-sm text-brand-cream/90">
                        <MapPin size={18} className="shrink-0 mt-0.5 text-brand-gold" />
                        <p>Jl. Raya Kuliner Nusantara No. 88, <br />Jakarta Selatan, DKI Jakarta 12345</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-brand-cream/90">
                        <Phone size={18} className="text-brand-gold" />
                        <p>+62 812 3456 7890</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-brand-gold mb-2">Jam Operasional</h4>
                    <p className="text-sm text-brand-cream/90">Senin - Sabtu: 07:00 - 17:00 WIB<br />Minggu & Libur Nasional: Sesuai Pesanan</p>
                    <div className="pt-2">
                        <a href="#" className="inline-flex items-center gap-2 text-brand-cream hover:text-white transition-colors">
                            <AtSign size={20} />
                            <span className="text-sm">@nasicateringbuanis</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-white/10 text-center text-xs text-brand-cream/60">
                &copy; {new Date().getFullYear()} Nasi Catering Bu Anis. All rights reserved.
            </div>
        </footer>
    );
}