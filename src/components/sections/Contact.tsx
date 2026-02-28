import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { contactInfo } from '../../data/contacts';
import { MapPin, Mail, Send, CheckCircle2, AlertCircle, Phone } from 'lucide-react';

const schema = yup.object().shape({
    name: yup.string().required('الاسم مطلوب').min(2, 'الاسم يجب أن يكون أكثر من حرفين'),
    phone: yup.string().required('رقم الهاتف مطلوب').matches(/^[0-9+ ]+$/, 'رقم هاتف غير صالح'),
    email: yup.string().email('بريد إلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
    message: yup.string().required('الرسالة مطلوبة').min(10, 'الرسالة يجب أن تحتوي على 10 أحرف على الأقل'),
});

type FormData = yup.InferType<typeof schema>;

const Contact: React.FC = () => {
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, reset } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: 'onTouched',
    });

    const onSubmit = async (data: FormData) => {
        try {
            setSubmitStatus('idle');
            const response = await fetch("https://formspree.io/f/mnjbyqql", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "الاسم": data.name,
                    "البريد الإلكتروني": data.email,
                    "رقم الهاتف": data.phone,
                    "الرسالة": data.message,
                    "_replyto": data.email,
                    "_subject": "رسالة جديدة من موقع شركة بيض الرحامنة"
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                reset();
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-gray-50 border-t border-gray-100 relative">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-100 text-brand-700 font-bold mb-6 text-sm">
                        تواصل معنا
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 relative inline-block">
                        للاتصال بنا
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-brand-500 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-6">
                        نحن هنا للإجابة على جميع استفساراتكم. متواجدون على مدار 24 ساعة، طيلة أيام الأسبوع.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">

                    {/* Contact Information Sidebar */}
                    <div className="lg:w-1/3 flex flex-col gap-6 h-fit">

                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-brand-500/5">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <MapPin className="text-brand-500" size={28} />
                                مقر الشركة
                            </h3>

                            <div className="space-y-6">
                                <div className="border-b border-gray-100 pb-6">
                                    <h4 className="font-bold text-gray-900 text-lg mb-2">العنوان</h4>
                                    <p className="text-gray-600 leading-relaxed text-lg">{contactInfo.address}<br />الرمز البريدي: {contactInfo.postalCode}</p>
                                </div>

                                <div className="pt-2">
                                    <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                        <Mail size={20} className="text-brand-500" />
                                        البريد الإلكتروني
                                    </h4>
                                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-brand-600 font-medium text-lg transition-colors flex block break-all" dir="ltr">
                                        {contactInfo.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-brand-600 to-brand-500 text-white p-8 rounded-[2rem] shadow-xl shadow-brand-500/20 relative overflow-hidden">
                            {/* Decorative background circle */}
                            <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                                <Phone size={28} className="text-white" />
                                أرقام الهواتف
                            </h3>
                            <ul className="space-y-5 relative z-10">
                                {contactInfo.phones.map((phone, idx) => (
                                    <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-brand-400/50 pb-4 last:border-0 last:pb-0 gap-2">
                                        <span className="font-bold text-brand-50 text-lg">{phone.name}</span>
                                        <a href={`tel:${phone.number.replace(/\s+/g, '')}`} className="font-black text-xl hover:text-brand-100 transition-colors" dir="ltr">{phone.number}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-gray-900/5 border border-gray-100">
                        <h3 className="text-3xl font-black text-gray-900 mb-2">أرسل لنا رسالة</h3>
                        <p className="text-gray-500 mb-8 border-b border-gray-100 pb-8">استخدم النموذج أدناه لإرسال استفسارك مباشرة إلى قسم المبيعات لدينا.</p>

                        {submitStatus === 'success' && (
                            <div className="mb-8 p-6 bg-green-50 rounded-2xl border-2 border-green-200 flex items-center gap-4 text-green-700 shadow-sm">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <CheckCircle2 size={32} className="text-green-600" />
                                </div>
                                <div>
                                    <p className="font-black text-xl">تم الإرسال بنجاح!</p>
                                    <p className="text-green-800 font-medium">لقد توصلنا برسالتك، سنتصل بك قريباً.</p>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-8 p-6 bg-red-50 rounded-2xl border-2 border-red-200 flex items-center gap-4 text-red-700 shadow-sm">
                                <div className="bg-red-100 p-2 rounded-full">
                                    <AlertCircle size={32} className="text-red-600" />
                                </div>
                                <div>
                                    <p className="font-black text-xl">عذراً، حدث خطأ!</p>
                                    <p className="text-red-800 font-medium">تعذر إرسال رسالتك. المرجو المحاولة مرة أخرى أو الاتصال بنا هاتفياً.</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="text-right">
                                    <label htmlFor="name" className="block text-base font-bold text-gray-800 mb-2">الاسم الكامل <span className="text-brand-500">*</span></label>
                                    <input
                                        id="name"
                                        type="text"
                                        {...register('name')}
                                        className={`w-full px-5 py-4 rounded-xl border-2 ${errors.name ? 'border-red-500 bg-red-50/50' : 'border-gray-200 bg-gray-50 hover:border-brand-300 focus:border-brand-500'} focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-gray-800 text-lg placeholder-gray-400`}
                                        placeholder="محمد رحماني"
                                    />
                                    {errors.name && <p className="mt-2 text-sm text-red-500 font-bold">{errors.name.message}</p>}
                                </div>

                                <div className="text-right">
                                    <label htmlFor="phone" className="block text-base font-bold text-gray-800 mb-2">رقم الهاتف <span className="text-brand-500">*</span></label>
                                    <input
                                        id="phone"
                                        type="text"
                                        {...register('phone')}
                                        className={`w-full px-5 py-4 rounded-xl border-2 ${errors.phone ? 'border-red-500 bg-red-50/50' : 'border-gray-200 bg-gray-50 hover:border-brand-300 focus:border-brand-500'} focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-gray-800 text-lg placeholder-gray-400 text-right`}
                                        placeholder="+212 600 000 000"
                                        dir="ltr"
                                    />
                                    {errors.phone && <p className="mt-2 text-sm text-red-500 font-bold text-right">{errors.phone.message}</p>}
                                </div>
                            </div>

                            <div className="text-right">
                                <label htmlFor="email" className="block text-base font-bold text-gray-800 mb-2">البريد الإلكتروني <span className="text-brand-500">*</span></label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register('email')}
                                    className={`w-full px-5 py-4 rounded-xl border-2 ${errors.email ? 'border-red-500 bg-red-50/50' : 'border-gray-200 bg-gray-50 hover:border-brand-300 focus:border-brand-500'} focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-gray-800 text-lg placeholder-gray-400 text-right`}
                                    placeholder="example@email.com"
                                    dir="ltr"
                                />
                                {errors.email && <p className="mt-2 text-sm text-red-500 font-bold text-right">{errors.email.message}</p>}
                            </div>

                            <div className="text-right">
                                <label htmlFor="message" className="block text-base font-bold text-gray-800 mb-2">نص الرسالة <span className="text-brand-500">*</span></label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    {...register('message')}
                                    className={`w-full px-5 py-4 rounded-xl border-2 ${errors.message ? 'border-red-500 bg-red-50/50' : 'border-gray-200 bg-gray-50 hover:border-brand-300 focus:border-brand-500'} focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all resize-none text-gray-800 text-lg placeholder-gray-400`}
                                    placeholder="كيف يمكننا مساعدتك؟"
                                ></textarea>
                                {errors.message && <p className="mt-2 text-sm text-red-500 font-bold">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={!isValid || isSubmitting}
                                className="w-full inline-flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white font-black text-xl px-8 py-5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98] shadow-xl shadow-brand-500/30 mt-4"
                            >
                                {isSubmitting ? (
                                    <span className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        إرسال الرسالة الآن
                                        <Send size={24} className="rotate-180" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
