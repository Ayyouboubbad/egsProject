import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-900 text-white"
        >
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=2000&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/40"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 font-medium text-sm mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                        جودة، سرعة، أمانة
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                        شركة بيــض <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
                            الرحامنــة
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl text-balance leading-relaxed">
                        أكثر من 30 سنة في انتاج البيض الاستهلاك. نفخر بتقديم أفضل جودة لكم.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="#services"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-500/30"
                        >
                            اكتشف خدماتنا
                            <ArrowLeft size={20} className="animate-bounce-x" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold backdrop-blur-md transition-all border border-white/10 hover:border-white/30"
                        >
                            تواصل معنا
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative Egg Shape */}
            <div className="absolute -right-40 -bottom-40 w-[600px] h-[800px] bg-brand-500/10 rounded-full blur-3xl rounded-t-[50%] rounded-b-[45%] rounded-l-[50%] rounded-r-[50%] -rotate-12 z-0 pointer-events-none"></div>
        </section>
    );
};

export default Hero;
