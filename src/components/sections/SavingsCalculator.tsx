import React, { useState, useEffect } from 'react';
import { Calculator, TrendingDown, ArrowLeft } from 'lucide-react';

const SavingsCalculator: React.FC = () => {
    const [weeklyConsumption, setWeeklyConsumption] = useState<number>(50); // in trays (30 eggs)
    const [marketPricePerTray, setMarketPricePerTray] = useState<number>(45); // e.g., 45 MAD per tray in market
    const [factoryPricePerTray, setFactoryPricePerTray] = useState<number>(38); // e.g., 38 MAD per tray from factory

    const [monthlySavings, setMonthlySavings] = useState<number>(0);
    const [yearlySavings, setYearlySavings] = useState<number>(0);

    useEffect(() => {
        // Assume 4 weeks per month, 52 weeks per year
        const weeklyMarketCost = weeklyConsumption * marketPricePerTray;
        const weeklyFactoryCost = weeklyConsumption * factoryPricePerTray;
        const weeklySaving = weeklyMarketCost - weeklyFactoryCost;

        setMonthlySavings(weeklySaving * 4);
        setYearlySavings(weeklySaving * 52);
    }, [weeklyConsumption, marketPricePerTray, factoryPricePerTray]);

    return (
        <section id="calculator" className="py-24 bg-brand-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-100 text-brand-700 font-bold mb-6 text-sm">
                        ميزة حصرية للمحترفين
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 relative inline-block">
                        حاسبة توفير تكاليف الشراء
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-brand-500 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                        اكتشف حجم الأموال التي يمكنك توفيرها سنوياً عند التعاقد المباشر معنا وتجاوز الوسطاء. أداة تفاعلية صممت خصيصاً للمطاعم والفنادق.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-brand-500/10 border border-brand-100 overflow-hidden flex flex-col lg:flex-row">

                    {/* Input Area */}
                    <div className="lg:w-1/2 p-8 md:p-12 bg-white">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center">
                                <Calculator size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">أدخل معدل استهلاكك</h3>
                        </div>

                        <div className="space-y-8">
                            {/* Slider 1 */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <label className="font-bold text-gray-700 text-lg">الاستهلاك الأسبوعي</label>
                                    <span className="font-black text-xl text-brand-600 bg-brand-50 px-4 py-1 rounded-lg">
                                        {weeklyConsumption} بلاطو
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
                                <div className="flex justify-between text-sm text-gray-400 mt-2 font-medium">
                                    <span>مطعم صغير (10)</span>
                                    <span>فندق كبير (500)</span>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-bold text-gray-700 mb-2 text-sm">متوسط سعر السوق (درهم/بلاطو)</label>
                                    <input
                                        type="number"
                                        value={marketPricePerTray}
                                        onChange={(e) => setMarketPricePerTray(Number(e.target.value))}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-bold text-gray-800 text-lg"
                                        dir="ltr"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold text-gray-700 mb-2 text-sm">سعر المصنع المتوقع (درهم/بلاطو)</label>
                                    <input
                                        type="number"
                                        value={factoryPricePerTray}
                                        onChange={(e) => setFactoryPricePerTray(Number(e.target.value))}
                                        className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-bold text-brand-700 text-lg"
                                        dir="ltr"
                                    />
                                </div>
                            </div>
                            <p className="text-xs text-brand-600/80 font-medium">
                                * أسعار المصنع تقريبية وتعتمد على الكمية ومدة التعاقد.
                            </p>
                        </div>
                    </div>

                    {/* Output Area */}
                    <div className="lg:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8 opacity-80">
                                <TrendingDown size={24} className="text-brand-400" />
                                <h3 className="text-xl font-medium tracking-wide">النتيجة: حجم التوفير المتوقع</h3>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                                    <p className="text-gray-400 font-medium mb-2 text-sm">التوفير الشهري</p>
                                    <div className="flex items-baseline gap-2" dir="ltr">
                                        <span className="text-4xl md:text-5xl font-black text-white">{monthlySavings.toLocaleString()}</span>
                                        <span className="text-brand-400 font-bold">MAD</span>
                                    </div>
                                </div>

                                <div className="bg-brand-500/10 border border-brand-500/20 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.15)] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500/0 via-brand-500/10 to-brand-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    <p className="text-brand-100 font-medium mb-2">التوفير السنوي (أرباح إضافية لمشروعك)</p>
                                    <div className="flex items-baseline gap-2" dir="ltr">
                                        <span className="text-5xl md:text-6xl font-black text-brand-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">{yearlySavings.toLocaleString()}</span>
                                        <span className="text-brand-400 font-bold text-xl">MAD</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        const contactSection = document.getElementById('contact');
                                        if (contactSection) {
                                            e.preventDefault();
                                            contactSection.scrollIntoView({ behavior: 'smooth' });
                                            // Provide visual feedback or auto fill later
                                        }
                                    }}
                                    className="w-full inline-flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-400 text-gray-900 font-black text-xl py-5 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-brand-500/20"
                                >
                                    تعاقد معنا الآن وبدأ التوفير
                                    <ArrowLeft size={24} className="animate-bounce-x" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default SavingsCalculator;
