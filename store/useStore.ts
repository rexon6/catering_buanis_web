import { create } from 'zustand';

export interface Product {
    id: string;
    name: string;
    description: string;
    basePrice: number;
    image: string;
    category: string;
}

export interface CartItem {
    id: string;
    product: Product;
    quantity: number;
    options: {
        notes?: string;
    };
    totalPrice: number;
}

interface StoreState {
    cart: CartItem[];
    isCartOpen: boolean;
    selectedProduct: Product | null;
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, qty: number) => void;
    toggleCart: () => void;
    openProductModal: (product: Product) => void;
    closeProductModal: () => void;
    clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
    cart: [],
    isCartOpen: false,
    selectedProduct: null,
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id)
    })),
    updateQuantity: (id, qty) => set((state) => ({
        cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: qty, totalPrice: (item.totalPrice / item.quantity) * qty } : item
        )
    })),
    toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
    openProductModal: (product) => set({ selectedProduct: product }),
    closeProductModal: () => set({ selectedProduct: null }),
    clearCart: () => set({ cart: [] })
}));