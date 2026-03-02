import React from 'react';
import { services } from '../../data/services';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-bold mb-6 text-sm">
                        {t('services_badge')}
                    </div>
                    <div className="relative inline-flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                            {t('services_title')}
                        </h2>
                        <span className="absolute -bottom-3 w-24 h-1.5 bg-brand-500 rounded-full"></span>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 md:mt-8 leading-relaxed">
                        {t('services_desc')}
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                key={service.id}
                                className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-xl dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 hover:border-brand-100 dark:hover:border-brand-500 transition-all duration-300 hover:-translate-y-2 overflow-hidden z-10"
                            >
                                {/* Decorative background element */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 dark:bg-brand-900/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>

                                <div className="w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 flex items-center justify-center mb-6 shadow-inner group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                                    <Icon size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t(service.title)}</h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                    {t(service.description)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
