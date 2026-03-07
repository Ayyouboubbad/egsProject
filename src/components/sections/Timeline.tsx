import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TrendingUp, Factory, MapPin, Star } from 'lucide-react';

const Timeline: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const milestones = [
        {
            year: t('tl_1_year', '1997'),
            title: t('tl_1_title'),
            desc: t('tl_1_desc'),
            icon: TrendingUp,
            color: 'bg-[#4f80ff]', // Blue like image
            textColor: 'text-[#4f80ff]'
        },
        {
            year: t('tl_2_year', '2002'),
            title: t('tl_2_title'),
            desc: t('tl_2_desc'),
            icon: Factory,
            color: 'bg-[#ff9d2e]', // Orange like image
            textColor: 'text-[#ff9d2e]'
        },
        {
            year: t('tl_3_year', '2003'),
            title: t('tl_3_title'),
            desc: t('tl_3_desc'),
            icon: MapPin,
            color: 'bg-[#21c55d]', // Green like image
            textColor: 'text-[#21c55d]'
        },
        {
            year: t('tl_4_year', '2007'),
            title: t('tl_4_title'),
            desc: t('tl_4_desc'),
            icon: Star,
            color: 'bg-[#f59e0b]', // Yellow like image
            textColor: 'text-[#f59e0b]'
        }
    ];

    return (
        <section id="timeline" className="py-24 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 transition-colors overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mx-auto mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-[#0f1423] dark:text-white mb-4">
                        {t('timeline_title').split(' ').map((word, idx, arr) => (
                            <span key={idx} className={idx === arr.length - 1 && isRTL ? 'text-brand-500' : (idx === 0 && !isRTL ? 'text-brand-500' : '')}>
                                {word}{' '}
                            </span>
                        ))}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 font-medium md:text-xl max-w-3xl">
                        {t('timeline_desc')}
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto">

                    {/* Central Vertical Line */}
                    <div className="absolute top-0 bottom-0 start-8 md:start-1/2 md:-translate-x-1/2 rtl:translate-x-1/2 w-1 bg-brand-200 dark:bg-brand-900/50 rounded-full z-0"></div>

                    <div className="space-y-12 md:space-y-0 relative z-10 w-full">
                        {milestones.map((item, index) => {
                            const isFirstCol = index % 2 === 0;
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    key={index}
                                    className="relative group md:flex md:w-full md:items-center"
                                >

                                    {/* Mobile Icon (absolute aligned with mobile line) */}
                                    <div
                                        className="absolute start-8 md:hidden top-4 flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 shadow-md shadow-brand-500/20 z-20 -translate-x-1/2 rtl:translate-x-1/2 ms-[2px] transition-transform group-hover:scale-110"
                                        style={{ backgroundColor: item.color.replace('bg-[', '').replace(']', '') }}
                                    >
                                        <Icon size={20} className="text-white" />
                                    </div>

                                    {/* --- MOBILE LAYOUT --- */}
                                    <div className="md:hidden w-full ps-[4.5rem] sm:ps-20 pe-4 relative">
                                        <div className="bg-white dark:bg-gray-800/80 p-5 sm:p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl transition-all relative">
                                            <div className={`absolute -top-3 end-4 sm:end-6 px-3 py-1 rounded-full text-white font-black text-xs sm:text-sm shadow-md ${item.color}`}>
                                                {item.year}
                                            </div>
                                            <h3 className={`text-base sm:text-lg font-black mb-2 mt-2 ${item.textColor} flex items-center gap-2`}>
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed text-xs sm:text-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* --- DESKTOP LAYOUT --- */}

                                    {/* Column 1 (Physically Left in LTR, Right in RTL) */}
                                    <div className={`hidden md:flex w-[calc(50%-2rem)] items-center`}>
                                        {isFirstCol && (
                                            <>
                                                <div className="bg-white dark:bg-gray-800/80 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-gray-300/40 transition-all flex-1 relative">
                                                    <div className={`absolute -top-4 end-8 px-4 py-1.5 rounded-full text-white font-black shadow-lg ${item.color}`}>
                                                        {item.year}
                                                    </div>
                                                    <h3 className={`text-xl md:text-2xl font-black mb-3 mt-2 ${item.textColor}`}>{item.title}</h3>
                                                    <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                                                </div>
                                                <div className="w-8 h-px bg-brand-200 dark:bg-brand-900/50 relative z-0"></div>
                                            </>
                                        )}
                                    </div>

                                    {/* Center Icon */}
                                    <div className="hidden md:flex w-16 items-center justify-center shrink-0 z-20 my-16 group-hover:scale-110 transition-transform">
                                        <div
                                            className="w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center shadow-md shadow-brand-500/20"
                                            style={{ backgroundColor: item.color.replace('bg-[', '').replace(']', '') }}
                                        >
                                            <Icon size={20} className="text-white" />
                                        </div>
                                    </div>

                                    {/* Column 2 (Physically Right in LTR, Left in RTL) */}
                                    <div className={`hidden md:flex w-[calc(50%-2rem)] items-center`}>
                                        {!isFirstCol && (
                                            <>
                                                <div className="w-8 h-px bg-brand-200 dark:bg-brand-900/50 relative z-0"></div>
                                                <div className="bg-white dark:bg-gray-800/80 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-gray-300/40 transition-all flex-1 relative">
                                                    <div className={`absolute -top-4 start-8 px-4 py-1.5 rounded-full text-white font-black shadow-lg ${item.color}`}>
                                                        {item.year}
                                                    </div>
                                                    <h3 className={`text-xl md:text-2xl font-black mb-3 mt-2 ${item.textColor}`}>{item.title}</h3>
                                                    <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                                                </div>
                                            </>
                                        )}
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

export default Timeline;
