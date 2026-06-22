export const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(price);
};

export const categories = ["Semua", "Signature Box", "Nasi Kotak", "Paket Meeting", "Snack Box", "Tumpeng Mini"];

export const products = [
    {
        id: "1",
        name: "Nasi Box Ayam Bakar",
        description: "Nasi putih legit dengan ayam bakar bumbu rujak, lalapan segar, tahu tempe, dan sambal terasi khas Bu Anis.",
        basePrice: 35000,
        image: "/images/nasi-box-ayam-bakar.jpg",
        category: "Nasi Kotak",
    },
    {
        id: "2",
        name: "Nasi Langgi Komplit",
        description: "Sajian premium dengan empal daging empuk, sambal goreng ati, serundeng, kering tempe, dan telur dadar iris.",
        basePrice: 45000,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
        category: "Signature Box",
    },
    {
        id: "3",
        name: "Paket Meeting Hemat",
        description: "Cocok untuk rapat kantor. Nasi uduk, ayam goreng laos, bihun goreng, kerupuk, dan air mineral.",
        basePrice: 30000,
        image: "https://images.unsplash.com/photo-1626804475297-41609ea1c2eb?auto=format&fit=crop&q=80&w=800",
        category: "Paket Meeting",
    },
    {
        id: "4",
        name: "Tumpeng Mini Kuning",
        description: "Tumpeng porsi personal yang cantik. Nasi kuning, perkedel, ayam suwir pedas, telur rawis, dan kering tempe.",
        basePrice: 40000,
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800",
        category: "Tumpeng Mini",
    },
    {
        id: "5",
        name: "Snack Box Tradisional",
        description: "Kue lumpur, lemper ayam, risol mayo, dan air mineral gelas. Pas untuk pengajian atau coffee break.",
        basePrice: 15000,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
        category: "Snack Box",
    },
    {
        id: "6",
        name: "Nasi Box Rendang",
        description: "Rendang sapi empuk bumbu medok khas Padang, daun singkong rebus, sambal ijo, dan gulai nangka.",
        basePrice: 48000,
        image: "https://images.unsplash.com/photo-1627308595229-7830f5c90683?auto=format&fit=crop&q=80&w=800",
        category: "Nasi Kotak",
    }
];