import { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data';
import ProductCard from './ProductCard';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

type SortOption = 'default' | 'price-low' | 'price-high' | 'name-asc';

export default function Products({ onAddToCart, onQuickView }: ProductsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('default');

  // Categories list
  const filterCategories = useMemo(() => {
    return [{ id: 'all', name: 'All Categories' }, ...CATEGORIES];
  }, []);

  // Filter and sort products
  const processedProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // 1. Search term match
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)
      );
    }

    // 2. Category match
    if (selectedCategory !== 'all') {
      // Find matching category name
      const catObj = CATEGORIES.find((c) => c.id === selectedCategory);
      if (catObj) {
        list = list.filter((p) => p.category === catObj.name);
      }
    }

    // 3. Sorting
    switch (sortBy) {
      case 'price-low':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // No custom ordering, remain in catalog order
        break;
    }

    return list;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen" id="products-view-container">
      <Helmet>
        <title>Gym Products & Accessories</title>
        <meta name="description" content="Browse our complete catalog of high-performance gym gear including dumbbells, resistance bands, yoga mats, and gym gloves." />
        <link rel="canonical" href="https://fitzzee.netlify.app/products" />
      </Helmet>
      {/* Banner */}
      <section className="bg-slate-900 py-16 text-center text-white" id="products-header-banner">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Our Products</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm font-light text-slate-400">
          Supercharge your training density with professional, high-durability accessories built to last. Explore top quality Dumbbells, Resistance Bands, Yoga Mats, and Gym Gloves.
        </p>
      </section>

      {/* Main filter and store catalog */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Search, Filter selection, Sorting interface */}
        <div className="flex flex-col gap-4 rounded-3xl bg-white border border-slate-100 p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          
          {/* Search bar input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              name="product-search"
              placeholder="Search gear (e.g. dumbbells, roller)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
              id="product-search-input"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <ArrowUpDown className="h-3.5 w-3.5" /> Sorting:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
                id="product-sort-select"
              >
                <option value="default">Release Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Alphabetical A-Z</option>
              </select>
            </div>
          </div>

        </div>

        {/* Categories selector track rail */}
        <div className="mt-8 flex flex-wrap gap-2 items-center" id="categories-pill-track">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mr-2 flex items-center gap-1">
            <SlidersHorizontal className="h-3.5 w-3.5 text-orange-500" /> Filters:
          </span>
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-xs font-bold tracking-wide transition-all ${
                selectedCategory === cat.id
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-500/10'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
              id={`pill-cat-${cat.id}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Store Catalog display grid */}
        <div className="mt-10" id="shop-catalog-results">
          {processedProducts.length === 0 ? (
            <div className="text-center py-20 bg-white border border-slate-100 rounded-3xl" id="no-products-view">
              <p className="text-sm font-semibold text-slate-800">No fitness gear matches your selection.</p>
              <p className="text-xs text-slate-400 mt-1">Try deleting some letters or resetting filters.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSortBy('default');
                }}
                className="mt-6 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-orange-600"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {processedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAddToCart={onAddToCart}
                  onQuickView={onQuickView}
                />
              ))}
            </div>
          )}
        </div>

      </section>
    </div>
  );
}
