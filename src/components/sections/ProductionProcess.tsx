import React from 'react';
import { productionSteps } from '../../data/production';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ProductionProcess: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="production" className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden transition-colors">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 dark:bg-brand-900/10 rounded-bl-[100px] -z-10 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 dark:bg-gray-900/30 rounded-tr-[100px] -z-10 opacity-50"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-bold mb-6 text-sm">
                        {t('prod_badge')}
                    </div>
                    <div className="relative inline-flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                            {t('prod_title')}
                        </h2>
                        <span className="absolute -bottom-3 w-24 h-1.5 bg-brand-500 rounded-full"></span>
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 md:mt-8 leading-relaxed">
                        {t('prod_desc')}
                    </p>
                </motion.div>

                {/* Timeline Grid */}
                <div className="relative">
                    {/* Connecting Line for Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-brand-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
                        {productionSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    key={step.id}
                                    className="relative group perspective"
                                >
                                    <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border-2 border-gray-50 dark:border-gray-800 shadow-xl shadow-gray-200/40 dark:shadow-black/20 hover:border-brand-300 dark:hover:border-brand-500 transition-all duration-500 h-full flex flex-col items-center text-center group-hover:-translate-y-4">

                                        {/* Step Number Badge */}
                                        <div className="absolute -top-4 right-1/2 translate-x-1/2 w-10 h-10 bg-gray-900 dark:bg-gray-700 text-white font-black text-xl rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-800 z-20 group-hover:bg-brand-500 transition-colors">
                                            {step.id}
                                        </div>

                                        <div className="w-20 h-20 rounded-[1.5rem] bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-300 flex items-center justify-center mb-6 shadow-inner group-hover:bg-brand-500 group-hover:text-white transition-colors duration-500 rotate-3 group-hover:-rotate-3 mt-4">
                                            <Icon size={40} strokeWidth={1.5} />
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t(step.title)}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                            {t(step.description)}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProductionProcess;
