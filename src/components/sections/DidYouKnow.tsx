import React from 'react';
import { benefits } from '../../data/benefits';
import { ArrowLeft } from 'lucide-react';

const DidYouKnow: React.FC = () => {
    return (
        <section id="did-you-know" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-50 rounded-l-[100px] -z-10 opacity-70 blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-600 font-bold mb-4">
                        معلومات تهمك
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 relative inline-block">
                        هـَـلْ تَعْــلَمْ ؟
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-brand-500 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        اكتشف الفوائد المذهلة للبيض وكيف يساهم في بناء صحة أفضل لك ولعائلتك.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, idx) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={benefit.id}
                                className="group p-6 rounded-2xl bg-white border-2 border-gray-50 hover:border-brand-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative"
                            >
                                <div className="absolute top-0 right-0 w-8 h-8 bg-brand-100 rounded-bl-2xl rounded-tr-xl flex items-center justify-center text-brand-600 font-bold text-sm">
                                    {idx + 1}
                                </div>

                                <div>
                                    <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 leading-snug">
                                        {benefit.title}
                                    </h3>
                                </div>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 group-hover:text-brand-700 mt-4 self-start"
                                >
                                    اعرف أكثر
                                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DidYouKnow;
