import React, { useState } from 'react';
import { recipes } from '../../data/recipes';

const Recipes: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'moroccan' | 'foreign'>('moroccan');

    const filteredRecipes = recipes.filter(r => r.category === activeTab);

    return (
        <section id="recipes" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-600 font-bold mb-4">
                        لذيذ ومغذي
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 relative inline-block">
                        وصفات تحضير البيــض
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-brand-500 rounded-full"></span>
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-white rounded-full p-2 shadow-sm border border-gray-100">
                        <button
                            onClick={() => setActiveTab('moroccan')}
                            className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${activeTab === 'moroccan'
                                    ? 'bg-brand-500 text-white shadow-md'
                                    : 'text-gray-600 hover:text-brand-500 hover:bg-brand-50'
                                }`}
                        >
                            وصفات مغربية
                        </button>
                        <button
                            onClick={() => setActiveTab('foreign')}
                            className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${activeTab === 'foreign'
                                    ? 'bg-brand-500 text-white shadow-md'
                                    : 'text-gray-600 hover:text-brand-500 hover:bg-brand-50'
                                }`}
                        >
                            وصفات أجنبية
                        </button>
                    </div>
                </div>

                {/* Recipe Grid */}
                {filteredRecipes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredRecipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-50 group flex flex-col h-full"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={recipe.imageUrl}
                                        alt={recipe.title}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                                        {recipe.title}
                                    </h3>
                                    <div className="mt-auto">
                                        <button className="text-brand-600 font-bold text-sm bg-brand-50 hover:bg-brand-100 px-4 py-2 rounded-lg transition-colors w-full group-hover:text-brand-700">
                                            اقرأ المزيد
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                        <p className="text-gray-500 text-xl font-medium">عذراً، لا توجد وصفات في هذا القسم حالياً.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Recipes;
