import { useState } from 'react';
import { X, Check, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductDetailModal({ product, onClose, onAddToCart }: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddWithQty = () => {
    onAddToCart(product, quantity);
    onClose();
    setQuantity(1); // Reset local quantity
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      id="product-detail-modal-overlay"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-in zoom-in-95 duration-300 md:flex"
        id={`product-detail-card-${product.id}`}
        onClick={(e) => e.stopPropagation()} // Stop bubbling
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition-all hover:bg-orange-50 hover:text-orange-600 focus:outline-none"
          id="modal-close-btn"
          aria-label="Close product details modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left Side: Dynamic Image */}
        <div className="w-full bg-slate-100 md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover min-h-[300px] md:max-h-[500px]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right Side: Information Pane */}
        <div className="flex w-full flex-col p-6 sm:p-8 md:w-1/2">
          {/* Category */}
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-600" id="modal-category">
            {product.category}
          </span>
          {/* Title */}
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900" id="modal-product-title">
            {product.name}
          </h2>
          {/* Price */}
          <p className="mt-2 text-2xl font-extrabold text-slate-950" id="modal-product-price">
            ${product.price.toFixed(2)}
          </p>

          <hr className="my-4 border-slate-100" />

          {/* Description */}
          <p className="text-sm font-light leading-relaxed text-slate-500" id="modal-product-description">
            {product.description}
          </p>

          {/* Features Checklist */}
          {product.features && product.features.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">Key Features:</h3>
              <ul className="mt-3 space-y-2" id="modal-product-features">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quantity and Actions Footer */}
          <div className="mt-auto pt-6">
            <div className="flex flex-wrap items-center gap-4">
              {/* Counter Buttons */}
              <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1 font-semibold text-slate-800">
                <button
                  onClick={handleDecrement}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm transition-colors hover:bg-orange-50 hover:text-orange-600 active:scale-95"
                  aria-label="Decrease quantity"
                  id="modal-qty-decrease"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-mono text-sm font-bold" id="modal-qty-display">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm transition-colors hover:bg-orange-50 hover:text-orange-600 active:scale-95"
                  aria-label="Increase quantity"
                  id="modal-qty-increase"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {/* Add to Cart button */}
              <button
                onClick={handleAddWithQty}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 px-6 text-sm font-bold text-white transition-all hover:bg-orange-700 active:scale-[0.98] shadow-md shadow-orange-500/10"
                id="modal-add-to-cart-action"
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
