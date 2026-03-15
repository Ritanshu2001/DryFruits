import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';

type HeaderProps = {
  cartCount: number;
  onCartClick: () => void;
};

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <Leaf className="w-8 h-8 text-amber-700" />
            <div>
              <h1 className="text-2xl font-bold text-amber-900">CarryVary</h1>
              <p className="text-xs text-amber-600 font-semibold">Premium Dry Fruits</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-amber-700 transition font-medium">Home</button>
            <button onClick={() => scrollToSection('products')} className="text-slate-700 hover:text-amber-700 transition font-medium">Products</button>
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-amber-700 transition font-medium">About</button>
            <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-amber-700 transition font-medium">Services</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-amber-700 transition font-medium">Contact</button>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-slate-700 hover:text-amber-700 transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-amber-50">Home</button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-amber-50">Products</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-amber-50">About</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-amber-50">Services</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-amber-50">Contact</button>
          </nav>
        )}
      </div>
    </header>
  );
}
