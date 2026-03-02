import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AboutUs: React.FC = () => {
    const { t } = useTranslation();

    const features = [
        t('about_feat_1', 'جودة استثنائية (Exceptional Quality)'),
        t('about_feat_2', 'توزيع وطني (National Distribution)'),
        t('about_feat_3', 'أمانة وثقة (Honesty and Trust)')
    ];

    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* Decorative Background blob */}
                        <div className="absolute -top-10 -left-10 w-full h-full bg-brand-100/50 dark:bg-brand-900/20 rounded-[3rem] -z-10 transform -rotate-3"></div>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-700 aspect-square max-h-[500px] flex items-center justify-center">
                            {/* Using the public/US.png requested by the user */}
                            <img
                                src="/US.png"
                                alt="About Us - Rhamna Eggs"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Fallback if image doesn't load
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1590082871808-72534e402868?q=80&w=1000&auto=format&fit=crop';
                                }}
                            />

                            {/* Experience Badge */}
                            <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col items-center">
                                <span className="text-4xl font-black font-sans text-brand-500">{t('about_years')}</span>
                                <span className="text-sm font-bold font-sans text-gray-600 dark:text-gray-300 whitespace-nowrap">{t('about_years_label')}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-500/30 text-brand-600 dark:text-brand-400 font-medium text-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                            {t('about')}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
                            {t('about_title')}
                        </h2>

                        <h3 className="text-2xl text-brand-500 font-bold mb-6">
                            {t('about_subtitle')}
                        </h3>

                        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                            <p className="font-medium">
                                {t('about_desc_1')}
                            </p>
                            <p>
                                {t('about_desc_2')}
                            </p>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-800 dark:text-gray-200 font-bold text-lg">
                                    <CheckCircle2 className="text-brand-500 flex-shrink-0" size={24} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#products"
                            className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-lg transition-transform active:scale-95"
                        >
                            {t('hero_cta1')}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
