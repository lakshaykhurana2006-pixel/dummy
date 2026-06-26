import React from 'react';
import { Eye, Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  key?: string | number;
}

export default function ProductCard({ product, onAddToCart, onQuickView }: ProductCardProps) {
  const formattedPrice = `$${product.price.toFixed(2)}`;

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-md hover:shadow-orange-500/5"
      id={`product-card-${product.id}`}
    >
      {/* Category Badge */}
      <span className="absolute left-4 top-4 z-10 rounded-full bg-slate-900/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
        {product.category}
      </span>

      {/* Product Image & Hover Action Overlay */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
          id={`product-image-${product.id}`}
        />
        {/* Hover overlay with modern actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-950/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={() => onQuickView(product)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg transition-transform duration-200 hover:scale-110 hover:bg-orange-50 hover:text-orange-600"
            title="Quick view product details"
            aria-label="Quick view product details"
            id={`btn-quick-view-${product.id}`}
          >
            <Eye className="h-5 w-5" />
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-600 text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:bg-orange-500"
            title="Add directly to cart"
            aria-label="Add directly to cart"
            id={`btn-add-cart-quick-${product.id}`}
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-1 text-base font-bold text-slate-900 transition-colors duration-200 group-hover:text-orange-600">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-slate-500 leading-relaxed font-light">
          {product.description}
        </p>

        {/* Action and Price footer */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-extrabold text-slate-900" id={`price-tag-${product.id}`}>
            {formattedPrice}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white transition-colors duration-200 hover:bg-orange-600"
            id={`btn-add-cart-text-${product.id}`}
          >
            <Plus className="h-4 w-4" />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
