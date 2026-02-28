import React from 'react';

const Gallery: React.FC = () => {
    const images = [
        'https://images.unsplash.com/photo-1588675685714-250a5fcc165e?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1548450125-9989a3111f14?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1554316688-2ed3f1737f19?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1598965402089-8b8eb300c0f0?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?q=80&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616892550186-b4d0ed61b782?q=80&w=600&auto=format&fit=crop',
    ];

    return (
        <section id="gallery" className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 relative inline-block">
                        Gallery
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-brand-500 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        ألبوم صور يبرز جودة منتجاتنا وعملية الإنتاج.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="group relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer border border-gray-100 bg-white"
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${idx + 1}`}
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-brand-600/0 group-hover:bg-brand-600/20 transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;
