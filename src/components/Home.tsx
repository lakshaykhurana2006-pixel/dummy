import { ShieldCheck, Flame, Users, Scale, Star, ArrowRight, Play, Award, Truck, ShieldAlert, BadgeHelp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { CATEGORIES, PRODUCTS, TESTIMONIALS } from '../data';
import ProductCard from './ProductCard';

interface HomeProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export default function Home({ onAddToCart, onQuickView }: HomeProps) {
  const navigate = useNavigate();
  // Best sellers are featured ones or first 4
  const bestSellers = PRODUCTS.slice(0, 4);

  // Return dynamic lucide icon based on name
  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Premium Quality':
        return <Award className="h-6 w-6 text-orange-600" />;
      case 'Fast Shipping':
        return <Truck className="h-6 w-6 text-orange-600" />;
      case 'Expert Support':
        return <Users className="h-6 w-6 text-orange-600" />;
      case 'Affordable Pricing':
        return <Scale className="h-6 w-6 text-orange-600" />;
      default:
        return <ShieldCheck className="h-6 w-6 text-orange-600" />;
    }
  };

  // Features list for Why Choose Section
  const features = [
    {
      title: 'Premium Quality',
      description: 'All products are tested for durability and performance.',
    },
    {
      title: 'Fast Shipping',
      description: 'Quick and reliable delivery nationwide.',
    },
    {
      title: 'Expert Support',
      description: 'Fitness specialists ready to assist your journey.',
    },
    {
      title: 'Affordable Pricing',
      description: 'Professional-grade equipment at competitive prices.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white" id="home-view-container">
      <Helmet>
        <title>Fitzee - Premium Gym Equipment & Fitness Accessories</title>
        <meta name="title" content="Fitzee Gym Products & Accessories" />
        <meta name="description" content="Buy premium gym equipment and fitness accessories online" />
        <link rel="canonical" href="https://fitzzee.netlify.app/" />
      </Helmet>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white" id="home-hero-section">
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600"
            alt="Gym Atmosphere"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            {/* Tagline label */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-600/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-orange-400 border border-orange-500/25">
              <Flame className="h-3.5 w-3.5 text-orange-500 animate-pulse" />
              Power Your Fitness Journey
            </span>

            {/* Main title */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl" id="hero-main-title">
              Transform Your Fitness Journey
            </h1>

            {/* Description */}
            <p className="mt-6 text-base font-light text-slate-300 leading-relaxed sm:text-lg">
              Premium gym equipment, fitness accessories, and workout gear designed to help you train smarter, stronger, and better.
            </p>

            {/* Tagline text */}
            <p className="mt-3 text-sm italic text-orange-300 font-light">
              "Transform your workouts with equipment trusted by fitness enthusiasts."
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/products')}
                className="group flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-bold text-white transition-all shadow-lg hover:bg-orange-500 hover:shadow-orange-500/20 active:scale-[0.98]"
                id="hero-cta-shop-now"
              >
                Shop Now
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate('/products')}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/40 px-6 py-3.5 text-sm font-bold text-slate-200 backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-slate-800"
                id="hero-cta-explore"
              >
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Categories Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="featured-categories-section">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Product Categories
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm font-light leading-relaxed text-slate-500">
            Browse our curated selections built specifically for distinct metabolic energy and strength conditioning goals.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate('/products')}
              className="group relative flex h-72 cursor-pointer flex-col justify-end overflow-hidden rounded-2xl border border-slate-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
              id={`cat-card-${cat.id}`}
            >
              <div className="absolute inset-0">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
              </div>

              <div className="relative z-10 text-white">
                <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors duration-200">
                  {cat.name}
                </h3>
                <p className="mt-1.5 text-xs text-slate-300 font-light leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Fitzee Section */}
      <section className="bg-slate-50 py-20 border-y border-slate-100" id="why-choose-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              Why Choose Fitzee
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm font-light text-slate-500">
              We stand apart in fitness engineering by committing ourselves to reliable materials, direct help, and accessibility.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md"
                id={`feature-item-${idx}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 shadow-sm">
                  {getFeatureIcon(feat.title)}
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{feat.title}</h3>
                <p className="mt-2 text-xs font-light leading-relaxed text-slate-500">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Products / Best Sellers Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="featured-products-section">
        <div className="flex flex-col items-center justify-center text-center border-b border-slate-100 pb-10 mb-10 w-full relative">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 absolute opacity-0 pointer-events-none">
            Featured Products
          </h2>
          <div className="flex w-full items-end justify-between gap-4">
            <div className="text-left w-full sm:w-auto">
              <h2 className="text-3xl font-black tracking-tight text-slate-900">
                Featured Products
              </h2>
              <h3 className="mt-4 text-xl font-bold text-orange-600">
                Best Selling Products
              </h3>
              <p className="mt-2 text-sm font-light text-slate-500 max-w-lg">
                The high-performance, space-saving essentials trusted most by our growing community.
              </p>
            </div>
            <button
              onClick={() => navigate('/products')}
              className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700 hover:underline shrink-0"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>
        
        <button
          onClick={() => navigate('/products')}
          className="mt-8 flex w-full justify-center sm:hidden items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700 hover:underline"
        >
          View All Products
          <ArrowRight className="h-4 w-4" />
        </button>
      </section>

      {/* 5. Customer Testimonials Section */}
      <section className="bg-slate-900 py-20 text-white overflow-hidden" id="testimonials-section">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black tracking-tight text-white uppercase sm:text-3xl">
            Customer Testimonials
          </h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-orange-500">
            Real Reviews From Real Trainers
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="flex flex-col items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/50 p-8 text-center"
                id={`testimonial-card-${test.id}`}
              >
                {/* 5 Stars */}
                <div className="flex gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="mt-5 text-sm font-light leading-relaxed italic text-slate-300">
                  "{test.quote}"
                </p>

                <div className="mt-6 border-t border-slate-800/80 pt-4 w-full">
                  <h4 className="text-sm font-bold tracking-tight text-white">{test.author}</h4>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mt-0.5">
                    {test.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Newsletter Banner */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="home-newsletter">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 to-amber-600 py-12 px-6 sm:px-12 shadow-xl shadow-orange-500/10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/5" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 z-10 w-full">
            <div>
              <h3 className="text-2xl font-black tracking-tight text-white">Join the Fitzee Athletic Crew</h3>
              <p className="mt-2 text-sm text-amber-100 font-light max-w-md leading-relaxed">
                Unlock exclusive fitness tips, gear releases, first-look articles, and a **10% discount** code instantly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 shrink-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-xl bg-white/20 border border-white/10 px-4 py-3 text-sm text-white placeholder-amber-100 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                className="rounded-xl bg-white px-5 py-3 text-xs font-bold text-orange-600 shadow-md hover:bg-orange-50 active:scale-95"
                onClick={() => alert('Welcome to the Crew! Check your inbox for your 10% discount.')}
              >
                Sign Me Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
