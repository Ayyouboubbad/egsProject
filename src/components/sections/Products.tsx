import React from 'react';
import { products } from '../../data/products';
import { ShoppingCart, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Products: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="products" className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors">
            <div className="container mx-auto px-4 md:px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-bold mb-6 text-sm">
                        {t('products_badge')}
                    </div>
                    <div className="relative inline-flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                            {t('products_title')}
                        </h2>
                        <span className="absolute -bottom-3 w-24 h-1.5 bg-brand-500 rounded-full"></span>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 md:mt-8 leading-relaxed">
                        {t('products_desc')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={product.id}
                            className="bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-500 transition-all duration-300 group flex flex-col h-full"
                        >

                            {/* Product Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                                <div className="absolute bottom-4 right-4 bg-brand-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                    {t(product.targetAudience)}
                                </div>
                            </div>

                            {/* Product Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">{t(product.name)}</h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-1">
                                    {t(product.description)}
                                </p>

                                <ul className="space-y-3 mb-8 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm font-medium text-gray-800 dark:text-gray-300">
                                            <CheckCircle2 size={18} className="text-brand-500 shrink-0 mt-0.5" />
                                            <span>{t(feature)}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-brand-500 hover:bg-brand-600 dark:hover:bg-brand-400 text-white font-bold py-4 rounded-xl transition-colors group-hover:shadow-lg mt-auto"
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
                                    {t('request_quote')}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* B2B Banner bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 bg-gradient-to-br from-brand-600 to-brand-500 rounded-[2rem] p-8 md:p-12 text-center shadow-2xl shadow-brand-500/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between"
                >
                    <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="text-right md:w-2/3 mb-8 md:mb-0 relative z-10 ltr:text-left rtl:text-right">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{t('distributor_title')}</h3>
                        <p className="text-brand-100 text-lg">
                            {t('distributor_desc')}
                        </p>
                    </div>

                    <div className="md:w-1/3 flex md:justify-end relative z-10 w-full justify-center">
                        <a href="#contact" className="w-full md:w-auto inline-flex items-center justify-center bg-white dark:bg-gray-900 text-brand-600 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 font-black text-xl px-8 py-4 rounded-xl shadow-lg transition-transform active:scale-95">
                            {t('contact_admin')}
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Products;
