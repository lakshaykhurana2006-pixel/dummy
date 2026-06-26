import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Blog from './components/Blog';
import Contact from './components/Contact';
import CartDrawer from './components/CartDrawer';
import ProductDetailModal from './components/ProductDetailModal';
import { CartItem, Product } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const persistedCart = localStorage.getItem('fitzee_cart');
      if (persistedCart) {
        setCartItems(JSON.parse(persistedCart));
      }
    } catch (err) {
      console.error('Failed to load fitzee cart from cache:', err);
    }
  }, []);

  // Sync cart to localStorage when updated
  const syncCartItems = (newItems: CartItem[]) => {
    setCartItems(newItems);
    try {
      localStorage.setItem('fitzee_cart', JSON.stringify(newItems));
    } catch (err) {
      console.error('Failed to sync fitzee cart to cache:', err);
    }
  };

  // Add Item to Cart (increments quantity if already exists)
  const handleAddToCart = (product: Product, quantity = 1) => {
    const existingIndex = cartItems.findIndex((item) => item.product.id === product.id);

    let updatedCart: CartItem[] = [];
    if (existingIndex > -1) {
      updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += quantity;
    } else {
      updatedCart = [...cartItems, { product, quantity }];
    }

    syncCartItems(updatedCart);
    
    // Automatically trigger visual feedback - brief notification or open cart side drawer
    setIsCartOpen(true);
  };

  // Update Cart Quantity
  const handleUpdateQuantity = (productId: string, delta: number) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.product.id === productId) {
          return { ...item, quantity: item.quantity + delta };
        }
        return item;
      })
      .filter((item) => item.quantity > 0); // Clean up if quantity falls to 0

    syncCartItems(updatedCart);
  };

  // Remove Item Completely
  const handleRemoveItem = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item.product.id !== productId);
    syncCartItems(updatedCart);
  };

  // Clear Cart after successful Checkout simulation
  const handleClearCart = () => {
    syncCartItems([]);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800 antialiased" id="fitzee-app-root">
      
      {/* Sticky Navigation Header */}
      <Header
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onCartOpen={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections router wrapper */}
      <main className="flex-grow font-sans flex flex-col" id="fitzee-main-section">
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} onQuickView={setQuickViewProduct} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Products onAddToCart={handleAddToCart} onQuickView={setQuickViewProduct} />} />
          <Route path="/products" element={<Products onAddToCart={handleAddToCart} onQuickView={setQuickViewProduct} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Persistent global footer */}
      <Footer />

      {/* Cart Sliding Right Drawer Component */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Quick-View Dialog Modal Component */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />
      
    </div>
  );
}
