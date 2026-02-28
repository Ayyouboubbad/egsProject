import React from 'react';
import { EggFried, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '../../data/contacts';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-[6px] border-brand-500">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-1 border-b md:border-b-0 border-gray-800 pb-8 md:pb-0">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white">
                                <EggFried size={28} />
                            </div>
                            <span className="font-bold text-2xl text-white">
                                بيض الرحامنــة
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            أكثر من 30 سنة في انتاج البيض الاستهلاك. الجودة، السرعة، الثقة، والامانة شعارنا.
                            لسنا الوحيدين لكننا الافضل.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            روابط سريعة
                            <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-brand-500 rounded"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#home" className="hover:text-brand-400 transition-colors flex items-center gap-2 relative group pl-4">الرئيسية</a></li>
                            <li><a href="#services" className="hover:text-brand-400 transition-colors flex items-center gap-2 relative group pl-4">خدامتنا</a></li>
                            <li><a href="#did-you-know" className="hover:text-brand-400 transition-colors flex items-center gap-2 relative group pl-4">هـَـلْ تَعْــلَمْ ؟</a></li>
                            <li><a href="#production" className="hover:text-brand-400 transition-colors flex items-center gap-2 relative group pl-4">مراحل الإنتاج</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            معلومات الاتصال
                            <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-brand-500 rounded"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm">
                                <MapPin size={20} className="text-brand-500 shrink-0 mt-0.5" />
                                <span>{contactInfo.address}<br />{contactInfo.postalCode}</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <Mail size={20} className="text-brand-500 shrink-0 mt-0.5" />
                                <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-400 transition-colors" dir="ltr">{contactInfo.email}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                            ساعات العمل
                            <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-brand-500 rounded"></span>
                        </h3>
                        <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 text-center">
                            <p className="text-brand-400 font-bold text-2xl mb-2">{contactInfo.hours}</p>
                            <p className="text-sm">نحن في خدمتكم على مدار الساعة، طوال أيام الأسبوع.</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-gray-800 text-center flex flex-col items-center justify-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} شركة بيض الرحامنة. جميع الحقوق محفوظة.
                    </p>
                    <div className="flex items-center gap-4 justify-center">
                        <span className="text-xs text-brand-600 font-medium px-3 py-1 bg-brand-600/10 rounded-full border border-brand-600/20">
                            Oeufs Zaime SPA
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
