import React, { useState } from 'react';
import { Calculator, TrendingDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const SavingsCalculator: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
    const [weeklyConsumption, setWeeklyConsumption] = useState<number>(50); // in trays (30 eggs)
    const [marketPricePerTray, setMarketPricePerTray] = useState<number>(45); // e.g., 45 MAD per tray in market
    const [factoryPricePerTray, setFactoryPricePerTray] = useState<number>(38); // e.g., 38 MAD per tray from factory

    const weeklyMarketCost = weeklyConsumption * marketPricePerTray;
    const weeklyFactoryCost = weeklyConsumption * factoryPricePerTray;
    const weeklySaving = weeklyMarketCost - weeklyFactoryCost;

    const monthlySavings = weeklySaving * 4;
    const yearlySavings = weeklySaving * 52;

    return (
        <section id="calculator" className="py-24 bg-brand-50 dark:bg-gray-900/50 relative overflow-hidden transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-200 dark:bg-brand-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-300 dark:bg-brand-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-bold mb-6 text-sm">
                        {t('calc_badge')}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 relative inline-block">
                        {t('calc_title')}
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-brand-500 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
                        {t('calc_desc')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl shadow-brand-500/10 dark:shadow-black/40 border border-brand-100 dark:border-gray-700 overflow-hidden flex flex-col lg:flex-row transition-colors"
                >

                    {/* Input Area */}
                    <div className="lg:w-1/2 p-8 md:p-12 bg-white dark:bg-gray-800">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 rounded-2xl flex items-center justify-center">
                                <Calculator size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('calc_input_title')}</h3>
                        </div>

                        <div className="space-y-8">
                            {/* Slider 1 */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <label className="font-bold text-gray-700 dark:text-gray-300 text-lg">{t('calc_weekly_cons')}</label>
                                    <span className="font-black text-xl text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-gray-900 px-4 py-1 rounded-lg">
                                        {weeklyConsumption} {t('calc_trays')}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="500"
                                    step="10"
                                    value={weeklyConsumption}
                                    onChange={(e) => setWeeklyConsumption(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-500"
                                />
                                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">
                                    <span>{t('calc_small_rest')}</span>
                                    <span>{t('calc_large_hotel')}</span>
                                </div>
                            </div>

                            <hr className="border-gray-100 dark:border-gray-700" />

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-sm">{t('calc_market_price')}</label>
                                    <input
                                        type="number"
                                        value={marketPricePerTray}
                                        onChange={(e) => setMarketPricePerTray(Number(e.target.value))}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-bold text-gray-800 dark:text-gray-200 text-lg"
                                        dir="ltr"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2 text-sm">{t('calc_factory_price')}</label>
                                    <input
                                        type="number"
                                        value={factoryPricePerTray}
                                        onChange={(e) => setFactoryPricePerTray(Number(e.target.value))}
                                        className="w-full px-4 py-3 bg-brand-50 dark:bg-brand-900/10 border border-brand-200 dark:border-brand-800 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-bold text-brand-700 dark:text-brand-400 text-lg"
                                        dir="ltr"
                                    />
                                </div>
                            </div>
                            <p className="text-xs text-brand-600/80 dark:text-brand-400/80 font-medium">
                                {t('calc_note')}
                            </p>
                        </div>
                    </div>

                    {/* Output Area */}
                    <div className="lg:w-1/2 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 p-6 sm:p-8 md:p-12 text-gray-900 dark:text-white relative overflow-hidden flex flex-col justify-center transition-colors">
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-500/10 dark:bg-brand-500/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8 opacity-80">
                                <TrendingDown size={24} className="text-brand-600 dark:text-brand-400" />
                                <h3 className="text-xl font-medium tracking-wide text-gray-800 dark:text-gray-200">{t('calc_result_title')}</h3>
                            </div>

                            <div className="space-y-6 sm:space-y-8">
                                <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-sm dark:shadow-none">
                                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-2 text-sm">{t('calc_monthly')}</p>
                                    <div className="flex items-baseline gap-2" dir="ltr">
                                        <span className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">{monthlySavings.toLocaleString()}</span>
                                        <span className="text-brand-600 dark:text-brand-400 font-bold">MAD</span>
                                    </div>
                                </div>

                                <div className="bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.15)] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500/0 via-brand-500/10 to-brand-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    <p className="text-brand-700 dark:text-brand-100 font-medium mb-3 text-sm sm:text-base leading-snug">{t('calc_yearly')}</p>
                                    <div className="flex items-baseline gap-2" dir="ltr">
                                        <span className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-600 dark:text-brand-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.2)] dark:drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">{yearlySavings.toLocaleString()}</span>
                                        <span className="text-brand-600 dark:text-brand-400 font-bold text-lg sm:text-xl">MAD</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 sm:mt-10">
                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        const contactSection = document.getElementById('contact');
                                        if (contactSection) {
                                            e.preventDefault();
                                            contactSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-brand-500 hover:bg-brand-400 text-gray-900 font-black text-sm sm:text-base md:text-lg lg:text-xl py-4 sm:py-5 px-4 sm:px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-brand-500/20 text-center leading-snug"
                                >
                                    <span>{t('calc_cta')}</span>
                                    <ArrowIcon size={20} className={`shrink-0 ${isRTL ? "animate-bounce-x" : "animate-bounce-x-reverse"}`} />
                                </a>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default SavingsCalculator;
