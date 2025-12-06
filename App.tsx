import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { Product } from './types';
import { CheckCircle, Truck, Wrench, Award } from 'lucide-react';

// Mock Data
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'CMT 250L Concrete Mixer',
    category: 'Concrete Mixers',
    price: 15900,
    oldPrice: 18000,
    image: 'https://picsum.photos/seed/mixer1/400/400',
    isNew: true
  },
  {
    id: '2',
    name: 'Walk-Behind Power Trowel',
    category: 'Construction Tools',
    price: 24500,
    image: 'https://picsum.photos/seed/trowel/400/400',
    isSale: true
  },
  {
    id: '3',
    name: 'Heavy Duty Plate Compactor',
    category: 'Compactors',
    price: 32000,
    oldPrice: 35000,
    image: 'https://picsum.photos/seed/compactor/400/400'
  },
  {
    id: '4',
    name: 'Construction Hoist 500KG',
    category: 'Lifting Equipment',
    price: 12500,
    image: 'https://picsum.photos/seed/hoist/400/400'
  },
  {
    id: '5',
    name: 'CMT 350L Concrete Mixer (Premium)',
    category: 'Concrete Mixers',
    price: 22000,
    image: 'https://picsum.photos/seed/mixer2/400/400',
    isNew: true
  },
  {
    id: '6',
    name: 'Rebar Cutter 32mm',
    category: 'Cutters',
    price: 45000,
    image: 'https://picsum.photos/seed/cutter/400/400'
  }
];

const categories = [
  { name: 'Mixers', img: 'https://picsum.photos/seed/mixercat/200/200' },
  { name: 'Compactors', img: 'https://picsum.photos/seed/compactcat/200/200' },
  { name: 'Trowels', img: 'https://picsum.photos/seed/trowelcat/200/200' },
  { name: 'Lifters', img: 'https://picsum.photos/seed/liftcat/200/200' },
  { name: 'Cutters', img: 'https://picsum.photos/seed/cuttercat/200/200' },
  { name: 'Motors', img: 'https://picsum.photos/seed/motorcat/200/200' },
];

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-marton-dark">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* Categories Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10 text-marton-dark uppercase tracking-wide">
              Product Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:border-marton-orange transition duration-300">
                    <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  </div>
                  <h3 className="mt-3 font-semibold text-sm md:text-base group-hover:text-marton-orange transition">{cat.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-black italic uppercase text-marton-dark">Best Sellers</h2>
                <div className="w-20 h-1 bg-marton-red mt-2"></div>
              </div>
              <a href="#" className="text-marton-gray hover:text-marton-red text-sm font-semibold underline">View All Products</a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-marton-dark text-white relative overflow-hidden">
           {/* Decorative background element */}
           <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-marton-red/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Marton?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Standard quality accepted worldwide. We are committed to developing products to meet the needs of technicians.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white/5 p-6 rounded-lg text-center hover:bg-white/10 transition duration-300 border border-white/10">
                <CheckCircle className="w-12 h-12 text-marton-orange mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">High Quality</h3>
                <p className="text-sm text-gray-400">Manufactured with premium grade materials and strict QC.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg text-center hover:bg-white/10 transition duration-300 border border-white/10">
                <Truck className="w-12 h-12 text-marton-orange mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
                <p className="text-sm text-gray-400">Nationwide shipping network to reach your site on time.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg text-center hover:bg-white/10 transition duration-300 border border-white/10">
                <Wrench className="w-12 h-12 text-marton-orange mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">After-Sales Service</h3>
                <p className="text-sm text-gray-400">Dedicated support team and spare parts availability.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg text-center hover:bg-white/10 transition duration-300 border border-white/10">
                <Award className="w-12 h-12 text-marton-orange mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Warranty</h3>
                <p className="text-sm text-gray-400">Comprehensive warranty on all our machinery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-12 bg-marton-orange">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to upgrade your equipment?</h2>
            <p className="mb-8 text-white/90">Contact us today for a catalog and special dealer pricing.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-3 rounded-full text-marton-dark focus:outline-none w-full sm:w-96"
              />
              <button className="bg-marton-dark hover:bg-black text-white px-8 py-3 rounded-full font-bold transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
