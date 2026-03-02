import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Import all logos from assets
import alfSahel from '../../assets/alf-sahel.png';
import casaHotel from '../../assets/casa-hotel.png';
import delice from '../../assets/delice.png';
import fisa from '../../assets/fisa.png';
import fourSeasons from '../../assets/four-seasons.png';
import hyLine from '../../assets/hy-line.png';
import idouAnfa from '../../assets/idou-anfa.png';
import kardFilahi from '../../assets/kard-filahi.jpg';
import lassite from '../../assets/lassite.png';
import leMarocVert from '../../assets/le-maroc-vert.png';
import naseem from '../../assets/naseem.png';
import mhadenRhamna from '../../assets/محاضن-الرحامنة.png';

const partners = [
    { name: 'Alf Sahel', src: alfSahel },
    { name: 'Casa Hotel', src: casaHotel },
    { name: 'Delice', src: delice },
    { name: 'FISA', src: fisa },
    { name: 'Four Seasons', src: fourSeasons },
    { name: 'Hy-Line', src: hyLine },
    { name: 'Idou Anfa', src: idouAnfa },
    { name: 'Kard Filahi', src: kardFilahi },
    { name: 'Lassite', src: lassite },
    { name: 'Le Maroc Vert', src: leMarocVert },
    { name: 'Naseem', src: naseem },
    { name: 'محاضن الرحامنة', src: mhadenRhamna },
];

const Patronage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="patronage" className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-500/30 text-brand-600 dark:text-brand-400 font-medium text-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        {t('patronage_badge', 'Patronage')}
                    </div>
                    <div className="relative inline-flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                            {t('patronage_title', 'Our Partners & Clients')}
                        </h2>
                        <span className="absolute -bottom-3 w-24 h-1.5 bg-brand-500 rounded-full"></span>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 md:mt-8">
                        {t('patronage_desc', 'We are proud to work with the best institutions and companies in the market.')}
                    </p>
                </motion.div>

                {/* Partners Logo Slider (Framer Motion) */}
                <div className="relative flex overflow-hidden group py-4" dir="ltr">
                    {/* Fade gradients */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

                    {/* Infinite Scrolling Wrapper */}
                    <motion.div
                        className="flex w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 80,
                        }}
                    >
                        {[...partners, ...partners].map((partner, idx) => (
                            <motion.div
                                key={`${partner.name}-${idx}`}
                                whileHover={{ scale: 1.05 }}
                                className="w-36 md:w-48 aspect-[3/2] shrink-0 mx-4 relative flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-colors duration-300 grayscale hover:grayscale-0 dark:brightness-90 dark:hover:brightness-100 cursor-pointer"
                            >
                                <img
                                    src={partner.src}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain drop-shadow-sm pointer-events-none"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Patronage;
