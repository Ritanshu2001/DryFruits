import { ShoppingCart } from 'lucide-react';
import type { Product } from '../lib/supabase';

type ProductsProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

export default function Products({ products, onAddToCart }: ProductsProps) {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Products</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse our extensive collection of office supplies and stationery products
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition group"
              >
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  {product.stock === 0 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">Out of Stock</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">₹{product.price.toFixed(2)}</span>
                    <button
                      onClick={() => onAddToCart(product)}
                      disabled={product.stock === 0}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
