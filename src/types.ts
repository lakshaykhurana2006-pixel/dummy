export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface BlogArticle {
  id: string;
  title: string;
  publishDate: string;
  excerpt: string;
  content: string; // Dynamic rich text content for details view
  readTime: string;
  image: string;
}

export interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}

export type TabType = 'home' | 'products' | 'about' | 'blog' | 'contact';
