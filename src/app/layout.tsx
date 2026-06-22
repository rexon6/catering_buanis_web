import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import ProductModal from '@/components/ProductModal'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Nasi Catering Bu Anis | Pesan Catering Mudah & Praktis',
  description: 'Melayani nasi box, tumpeng, snack box, dan catering acara.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-brand-warmGray text-gray-800 antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-10">
          {children}
        </main>
        <Footer />
        <CartDrawer />
        <ProductModal />
        <WhatsAppFloat />
      </body>
    </html>
  )
}