import { CheckCircle } from 'lucide-react';

export default function About() {
  const features = [
    'Consistent product quality',
    'Competitive bulk pricing',
    'Timely doorstep delivery',
    'Long-term partnership support',
    'One Stop Vendor for All Needs',
    'Customer-centric approach'
  ];

  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Us</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              <span className="font-semibold">StationaryHub</span> is a trusted and leading industrial supplier
              serving businesses across <span className="font-semibold">India</span>. With a strong commitment
              to quality and reliability, we cater to the diverse procurement needs of industries, factories,
              offices, and commercial establishments.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              We specialize in supplying a comprehensive range of industrial essentials, including
              <span className="font-semibold"> Stationery, Packing Materials, Safety Equipment, Adhesive Tapes,
              and Electrical Items</span> — all under one roof. Our goal is to simplify procurement by becoming
              a dependable, single-point vendor for all operational requirements.
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Backed by decades of industry experience, our team understands the dynamic needs of manufacturing
              units and corporate offices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
