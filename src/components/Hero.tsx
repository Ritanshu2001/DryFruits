import { ArrowRight } from 'lucide-react';

type HeroProps = {
  onShopNow: () => void;
};

export default function Hero({ onShopNow }: HeroProps) {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Complete Office & Stationery Solutions
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 mb-4">
            Best Quality | Competitive Price | Fast Delivery
          </p>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            Your trusted supplier for all office essentials, packing materials, and industrial supplies.
            Serving businesses across India with quality products and reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onShopNow}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              Shop Now <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
