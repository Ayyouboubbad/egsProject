import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors">
            <div className="container mx-auto px-4 md:px-6">

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 dark:border-gray-700"
                >

                    {/* Left Column (Text Content) */}
                    <div className="w-full lg:w-[60%] p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                        <div>
                            {/* Title */}
                            <div className="mb-10 inline-block relative">
                                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                                    {t('about_story_title', 'قصة النجاح')}
                                </h2>
                                <span className="absolute -bottom-2 md:-bottom-3 rtl:right-0 ltr:left-0 h-1.5 bg-brand-500 rounded-full w-24"></span>
                            </div>

                            {/* Quote */}
                            <div className="mb-8 px-6 rtl:pr-6 rtl:pl-0 ltr:pl-6 ltr:pr-0 border-brand-500 rtl:border-r-4 ltr:border-l-4">
                                <p className="text-xl md:text-2xl font-bold text-brand-600 dark:text-brand-400 leading-relaxed">
                                    {t('about_story_quote', '"مسيرة من العمل الجاد والشغف المستمر لبناء منظومة متكاملة لإنتاج البيض في المغرب"')}
                                </p>
                            </div>

                            {/* Paragraphs */}
                            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed font-medium md:text-lg">
                                <p>{t('about_story_p1')}</p>
                                <p>{t('about_story_p2')}</p>
                                <p>{t('about_story_p3')}</p>
                            </div>
                        </div>

                        {/* Bottom Info Row */}
                        <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-100 dark:border-gray-700">
                            {/* Slogan (Appears on Right in RTL due to flex order) */}
                            <div className="text-start">
                                <p className="text-gray-400 dark:text-gray-500 text-sm mb-1">{t('about_slogan_sub', 'تأسست لتكون الأفضل')}</p>
                                <p className="text-brand-500 font-black tracking-widest uppercase">{t('about_slogan_main', 'OEUFS REHAMNA')}</p>
                            </div>

                            {/* AZ Badge (Appears on Left in RTL due to flex order) */}
                            <div className="w-14 h-14 rounded-full bg-brand-50 flex shrink-0 items-center justify-center text-brand-600 font-bold text-xl shadow-inner">
                                AZ
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Dark Founder Box) */}
                    <div className="w-full lg:w-[40%] bg-[#0f1423] relative flex flex-col items-end justify-end min-h-[400px] overflow-hidden">

                        {/* Founder Image Overlay */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <img
                                src="/US.png"
                                alt="Abdellatif Zaim"
                                className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                            />
                            {/* Gradient to make bottom text readable */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1423] via-[#0f1423]/40 to-transparent"></div>
                        </div>

                        {/* Faint 'Founder' watermark top right (LTR) top left (RTL) */}
                        <div className="absolute top-4 rtl:left-4 ltr:right-4 text-white/10 font-black text-6xl select-none z-10">
                            Founder
                        </div>

                        {/* Bottom Text */}
                        <div className="w-full rtl:text-right ltr:text-left mt-auto z-10 flex flex-col rtl:items-end ltr:items-start p-8 md:p-12">
                            <span className="inline-block bg-[#825e1c] text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                                • {t('about_founder_role', 'المؤسس والمدير العام')}
                            </span>
                            <h3 className="text-white text-3xl md:text-4xl font-black mb-2">
                                {t('about_founder_name_ar', 'السيد عبد اللطيف زعيم')}
                            </h3>
                            <p className="text-gray-400 font-medium tracking-wide">
                                {t('about_founder_name_en', 'M. Abdellatif Zaim')}
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
