import React from 'react';
import { productionSteps } from '../../data/production';

const ProductionProcess: React.FC = () => {
    return (
        <section id="production" className="py-24 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-bl-[100px] -z-10 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 rounded-tr-[100px] -z-10 opacity-50"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-100 text-brand-700 font-bold mb-6 text-sm">
                        رحلة البيضة من المزرعة
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 relative inline-block">
                        مراحل الإنتاج
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-brand-500 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                        في شركة بيض الرحامنة، نلتزم بأعلى معايير الجودة والسلامة الغذائية في كل مرحلة من مراحل الإنتاج لضمان وصول أفضل منتج إلى مائدتكم.
                    </p>
                </div>

                {/* Timeline Grid */}
                <div className="relative">
                    {/* Connecting Line for Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-brand-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
                        {productionSteps.map((step) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.id} className="relative group perspective">
                                    <div className="bg-white p-8 rounded-[2rem] border-2 border-gray-50 shadow-xl shadow-gray-200/40 hover:border-brand-300 transition-all duration-500 h-full flex flex-col items-center text-center group-hover:-translate-y-4">

                                        {/* Step Number Badge */}
                                        <div className="absolute -top-4 -right-4 w-10 h-10 bg-gray-900 text-white font-black text-xl rounded-full flex items-center justify-center shadow-lg border-4 border-white z-20 group-hover:bg-brand-500 transition-colors">
                                            {step.id}
                                        </div>

                                        <div className="w-20 h-20 rounded-[1.5rem] bg-brand-50 text-brand-600 flex items-center justify-center mb-6 shadow-inner group-hover:bg-brand-500 group-hover:text-white transition-colors duration-500 rotate-3 group-hover:-rotate-3">
                                            <Icon size={40} strokeWidth={1.5} />
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                        <p className="text-gray-500 leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProductionProcess;
