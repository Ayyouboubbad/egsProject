import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
    const { t } = useTranslation();
    const images = [
        '/box-2.png',
        '/box-3.png',
        '/boxes.png',
        '/egg-boxes.jpeg',
        '/box-4.jpeg',
        '/box-5.jpeg',
    ];

    return (
        <section id="gallery" className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors">
            <div className="container mx-auto px-4 md:px-6">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 relative inline-block">
                        {t('gallery')}
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-brand-500 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {t('gallery_desc')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {images.map((src, idx) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            key={idx}
                            className="group relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800"
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${idx + 1}`}
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-brand-600/0 group-hover:bg-brand-600/20 transition-colors duration-500"></div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;
