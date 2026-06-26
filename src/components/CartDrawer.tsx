import React, { useState, ChangeEvent, FormEvent } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

interface ShippingForm {
  name: string;
  email: string;
  address: string;
  zip: string;
  cardNumber: string;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [formData, setFormData] = useState<ShippingForm>({
    name: '',
    email: '',
    address: '',
    zip: '',
    cardNumber: '4111 2222 3333 4444',
  });
  const [orderComplete, setOrderComplete] = useState(false);
  const [errors, setErrors] = useState<Partial<ShippingForm>>({});

  if (!isOpen) return null;

  // Compute values
  const itemsSubtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shippingFee = itemsSubtotal > 75 ? 0 : itemsSubtotal > 0 ? 9.99 : 0;
  const estimatedTax = itemsSubtotal * 0.08;
  const grandTotal = itemsSubtotal + shippingFee + estimatedTax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ShippingForm]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ShippingForm> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.address.trim()) newErrors.address = 'Street address is required';
    if (!formData.zip.trim()) newErrors.zip = 'ZIP code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate placing order
    setTimeout(() => {
      setOrderComplete(true);
      onClearCart();
    }, 600);
  };

  const resetDrawerState = () => {
    setIsCheckingOut(false);
    setOrderComplete(false);
    setFormData({ name: '', email: '', address: '', zip: '', cardNumber: '4111 2222 3333 4444' });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      id="cart-overlay-backdrop"
      onClick={onClose}
    >
      <div
        className="relative flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-in slide-in-from-right duration-300"
        id="cart-drawer-panel"
        onClick={(e) => e.stopPropagation()} // Stop bubbling
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 p-6">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-orange-600" />
            <span className="text-lg font-bold text-slate-900">Your Training Cart</span>
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-800">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 text-slate-500 transition-colors hover:border-orange-200 hover:text-orange-600 focus:outline-none"
            aria-label="Close cart"
            id="cart-close-btn"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content State: Order Complete */}
        {orderComplete ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center" id="checkout-success-view">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 animate-bounce">
              <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
            </div>
            <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-900">Order Placed Successfully!</h2>
            <p className="mt-3 text-sm font-light text-slate-500 leading-relaxed max-w-xs">
              Thank you for choosing **Fitzee**! Your premium muscle-building hardware has been captured for warehouse processing. We will send shipping confirmations shortly.
            </p>
            <button
              onClick={resetDrawerState}
              className="mt-8 w-full max-w-xs rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white transition-all hover:bg-orange-600"
            >
              Continue Exploring
            </button>
          </div>
        ) : isCheckingOut ? (
          /* Content State: Form checkout */
          <div className="flex-1 overflow-y-auto p-6" id="checkout-form-view">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-bold text-slate-800">Secure Checkout Details</h3>
              <button
                onClick={() => setIsCheckingOut(false)}
                className="text-xs font-bold text-orange-600 hover:underline"
              >
                Back to Cart list
              </button>
            </div>

            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              {/* Grand Total Bar */}
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 text-sm">
                <div className="flex justify-between font-medium text-slate-700">
                  <span>Subtotal:</span>
                  <span>${itemsSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Shipping:</span>
                  <span>{shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Est. Tax:</span>
                  <span>${estimatedTax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-extrabold text-slate-900 text-base mt-2 border-t border-slate-200/60 pt-2">
                  <span>Total AmountDue:</span>
                  <span className="text-orange-600">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Input: Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Sarah Johnson"
                  className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                    errors.name
                      ? 'border-red-300 focus:ring-red-500/20'
                      : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20'
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Input: Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="sarah@example.com"
                  className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-red-300 focus:ring-red-500/20'
                      : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20'
                  }`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Input: Delivery Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Delivery Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="125 Wellness Avenue"
                  className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                    errors.address
                      ? 'border-red-300 focus:ring-red-500/20'
                      : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20'
                  }`}
                />
                {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
              </div>

              {/* Input: ZIP code */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">ZIP / Postal Code</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  placeholder="10001"
                  className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
                    errors.zip
                      ? 'border-red-300 focus:ring-red-500/20'
                      : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/20'
                  }`}
                />
                {errors.zip && <p className="mt-1 text-xs text-red-500">{errors.zip}</p>}
              </div>

              {/* Payment Details (Simulated card) */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Secure Testing Card Details</span>
                </div>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-mono focus:outline-none"
                  disabled
                />
                <p className="mt-1.5 text-[10px] text-slate-400 font-light">
                  Testing Mode auto-activated. No real financial credentials required.
                </p>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 text-sm font-bold text-white transition-colors hover:bg-orange-700"
                id="submit-order-btn"
              >
                Place Fitzee Order — ${grandTotal.toFixed(2)}
              </button>
            </form>
          </div>
        ) : cartItems.length === 0 ? (
          /* Content State: Empty Cart */
          <div className="flex flex-1 flex-col items-center justify-center p-6 text-center" id="empty-cart-view">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-400">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-lg font-bold text-slate-900">Your Cart is Empty</h3>
            <p className="mt-2 text-sm font-light text-slate-400 max-w-[240px] leading-relaxed">
              Explore our best-sellers or products catalog and start power-fitting your workouts!
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-xl bg-slate-900 px-6 py-3 text-xs font-bold text-white transition-colors hover:bg-orange-600"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          /* Content State: Items list */
          <div className="flex flex-1 flex-col justify-between overflow-hidden">
            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4" id="cart-items-list">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 p-3 transition-colors hover:bg-slate-50/50"
                  id={`cart-item-${item.product.id}`}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-16 w-16 rounded-xl object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="truncate text-sm font-bold text-slate-900" id={`cart-item-name-${item.product.id}`}>
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-slate-400">{item.product.category}</p>
                    <span className="mt-1 block text-sm font-extrabold text-slate-900">
                      ${item.product.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Qty Operations */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-slate-400 transition-colors hover:text-red-500"
                      title="Remove from cart"
                      aria-label="Remove item from cart"
                      id={`btn-cart-remove-${item.product.id}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <div className="flex items-center rounded-lg border border-slate-200 bg-white p-0.5 text-xs text-slate-800">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="flex h-6 w-6 items-center justify-center rounded transition-colors hover:bg-slate-50"
                        aria-label="Decrease quantity"
                        id={`btn-cart-qty-dec-${item.product.id}`}
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-8 text-center font-mono font-bold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="flex h-6 w-6 items-center justify-center rounded transition-colors hover:bg-slate-50"
                        aria-label="Increase quantity"
                        id={`btn-cart-qty-inc-${item.product.id}`}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Calculations & Checkout Actions */}
            <div className="border-t border-slate-100 bg-slate-50/50 p-6 space-y-4 shadow-inner">
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-bold text-slate-900">${itemsSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Est. Shipping:</span>
                  <span className="font-bold text-slate-900">
                    {shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                {shippingFee > 0 && (
                  <p className="text-[10px] text-right text-slate-400 font-light mt-0.5">
                    Add ${(75.0 - itemsSubtotal).toFixed(2)} more for **FREE shipping**!
                  </p>
                )}
                <div className="flex justify-between text-xs">
                  <span>Estimated Tax (8%):</span>
                  <span className="font-bold text-slate-900">${estimatedTax.toFixed(2)}</span>
                </div>
                <hr className="border-slate-200" />
                <div className="flex justify-between text-base font-extrabold text-slate-950">
                  <span>Grand Total:</span>
                  <span className="text-orange-600">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Primary checkout action button */}
              <button
                onClick={() => setIsCheckingOut(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 text-sm font-bold text-white transition-all hover:bg-orange-700 hover:shadow-lg active:scale-[0.99]"
                id="cart-checkout-proceed-btn"
              >
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
