import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
}

export default function Header({ cartCount, onCartOpen }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About Us', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          to="/"
          className="hover:opacity-90"
          id="nav-logo"
          aria-label="Fitzee Home"
        >
          <Logo variant="light" iconSize="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-8" id="desktop-nav">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
                location.pathname === item.path || (location.pathname === '/services' && item.path === '/products')
                  ? 'text-orange-600 font-extrabold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
              id={`nav-item-${item.label}`}
            >
              {item.label}
              {(location.pathname === item.path || (location.pathname === '/services' && item.path === '/products')) && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-orange-600" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Cart Trigger */}
          <button
            onClick={onCartOpen}
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:border-orange-500 hover:text-orange-600"
            aria-label="Toggle Shopping Cart"
            id="header-cart-btn"
          >
            <ShoppingCart className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white ring-2 ring-white animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 md:hidden hover:border-slate-300"
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-100 bg-white px-4 py-4 md:hidden animate-in slide-in-from-top duration-200" id="mobile-nav">
          <div className="grid gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center rounded-lg px-4 py-3 text-base font-semibold transition-all ${
                  location.pathname === item.path || (location.pathname === '/services' && item.path === '/products')
                    ? 'bg-orange-50 text-orange-600 font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
                id={`mobile-nav-item-${item.label}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
