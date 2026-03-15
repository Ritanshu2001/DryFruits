import { Package, Truck, Settings, Zap, MapPin, Headphones, RefreshCw, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Package, title: 'Bulk & Wholesale Supply', description: 'Large quantity orders at competitive prices' },
    { icon: Settings, title: 'Industrial Contract Orders', description: 'Long-term supply agreements for businesses' },
    { icon: Zap, title: 'Custom Size Manufacturing', description: 'Tailored products to meet your specifications' },
    { icon: Truck, title: 'Urgent Same Day Dispatch', description: 'Fast processing for urgent requirements' },
    { icon: MapPin, title: 'Doorstep Delivery', description: 'Direct delivery to your location across India' },
    { icon: Headphones, title: 'Vendor Management', description: 'Complete support for your procurement needs' },
    { icon: RefreshCw, title: 'Replacement Policy', description: 'Hassle-free returns and replacements' },
    { icon: Shield, title: 'After Sales Support', description: 'Ongoing assistance and customer care' }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet all your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition border border-slate-200 hover:border-blue-300"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
