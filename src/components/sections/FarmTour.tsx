import React from 'react';
import { Play } from 'lucide-react';

const FarmTour: React.FC = () => {
    return (
        <section id="farm-tour" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-600 font-bold mb-4">
                            نظرة من الداخل
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                            تعرفوا على ضيعتكم <br />
                            <span className="text-brand-500">من الداخل</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                            إنتاجنا يخضع لأحدث المعايير في الجودة والسلامة الصحية. نحن نحرص على تقديم منتجات آمنة، صحية وطازجة إلى موائدكم. لسنا الوحيدين لكننا الأفضل، نسعى دائماً لتلبية تطلعاتكم من خلال خبرة تزيد عن 30 سنة.
                        </p>

                        <figure className="bg-gray-50 p-6 rounded-2xl border-r-4 border-brand-500">
                            <blockquote className="text-xl text-gray-700 font-medium italic mb-2 rounded">
                                "لسنا الوحيدين، لكننا الافضل"
                            </blockquote>
                            <figcaption className="text-gray-500 font-medium">شركة بيض الرحامنة</figcaption>
                        </figure>
                    </div>

                    {/* Video / Graphic */}
                    <div className="lg:w-1/2 relative w-full">
                        <div className="absolute -inset-4 bg-brand-100 rounded-3xl rotate-3 -z-10"></div>
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-900 group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1548450125-9989a3111f14?q=80&w=1000&auto=format&fit=crop"
                                alt="Farm representation"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                            />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-brand-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-brand-500/50 group-hover:scale-110 transition-transform duration-300">
                                    <Play size={32} className="ml-2" /> {/* ml-2 because play icon naturally leans right */}
                                </div>
                            </div>

                            <div className="absolute bottom-6 right-6 text-white font-bold text-xl drop-shadow-md">
                                Un reportage télé
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FarmTour;
