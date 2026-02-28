import React from 'react';
import { products } from '../../data/products';
import { ShoppingCart, CheckCircle2 } from 'lucide-react';

const Products: React.FC = () => {
    return (
        <section id="products" className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-100 text-brand-700 font-bold mb-6 text-sm">
                        منتجاتنا التجارية
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 relative inline-block">
                        تشكيلة البيض للمحترفين
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-brand-500 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                        نقدم حلولاً مخصصة لتعبئة وتغليف البيض تلبي كافة احتياجات عملائنا من المطاعم، المخابز، والأسواق التجارية بأسعار تنافسية وجودة لا يعلى عليها.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-brand-300 transition-all duration-300 group flex flex-col h-full">

                            {/* Product Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                                <div className="absolute bottom-4 right-4 bg-brand-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                    {product.targetAudience}
                                </div>
                            </div>

                            {/* Product Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-black text-gray-900 mb-3">{product.name}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                                    {product.description}
                                </p>

                                <ul className="space-y-3 mb-8 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                                            <CheckCircle2 size={18} className="text-brand-500 shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-brand-600 text-white font-bold py-4 rounded-xl transition-colors group-hover:shadow-lg mt-auto"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const contactSection = document.getElementById('contact');
                                        if (contactSection) {
                                            contactSection.scrollIntoView({ behavior: 'smooth' });
                                            // Optionally, map this click to auto-fill a subject in the contact form later
                                        }
                                    }}
                                >
                                    <ShoppingCart size={20} />
                                    طلب تسعيرة الآن
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* B2B Banner bottom */}
                <div className="mt-16 bg-gradient-to-br from-brand-600 to-brand-500 rounded-[2rem] p-8 md:p-12 text-center shadow-2xl shadow-brand-500/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
                    <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="text-right md:w-2/3 mb-8 md:mb-0 relative z-10">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4">هل أنت موزع أو تمثل شركة كبرى؟</h3>
                        <p className="text-brand-100 text-lg">
                            نقدم عقود توريد سنوية بأسعار تفضيلية للموزعين المعتمدين، السلاسل الفندقية الكبرى والشركات الصناعية.
                        </p>
                    </div>

                    <div className="md:w-1/3 flex justify-end relative z-10 w-full">
                        <a href="#contact" className="w-full md:w-auto inline-flex items-center justify-center bg-white text-brand-600 hover:bg-gray-50 font-black text-xl px-8 py-4 rounded-xl shadow-lg transition-transform active:scale-95">
                            تواصل مع الإدارة
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Products;
