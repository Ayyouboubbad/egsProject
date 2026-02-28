import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { contactInfo } from '../../data/contacts';
import { MapPin, Mail, Send, CheckCircle2 } from 'lucide-react';

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
            // Using Formspree for easy email delivery
            // The user needs to create a form on formspree.io to get an endpoint like:
            // https://formspree.io/f/YOUR_FORM_ID
            const response = await fetch("https://formspree.io/f/mnjbyqql", { // Use a real placeholder or instruct the user
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
                    // Special Formspree fields
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
        <section id="contact" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-600 font-bold mb-4">
                        تواصل معنا
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 relative inline-block">
                        للاتصال بنا
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-brand-500 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        نحن هنا للإجابة على جميع استفساراتكم. لا تترددوا في الاتصال بنا.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Contact Details sidebar */}
                    <div className="lg:w-1/3 space-y-8 h-fit">

                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-brand-100 pb-4">معلوماتنا</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">العنوان</h4>
                                        <p className="text-gray-600">{contactInfo.address}<br />{contactInfo.postalCode}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">البريد الإلكتروني</h4>
                                        <a href={`mailto:${contactInfo.email}`} className="text-brand-600 hover:underline" dir="ltr">{contactInfo.email}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand-500 text-white p-8 rounded-3xl shadow-lg shadow-brand-500/20">
                            <h3 className="text-2xl font-bold mb-6">أرقام الهواتف</h3>
                            <ul className="space-y-4">
                                {contactInfo.phones.map((phone, idx) => (
                                    <li key={idx} className="flex items-center justify-between border-b border-brand-400 pb-2 last:border-0">
                                        <span className="font-medium text-brand-100">{phone.name}</span>
                                        <span className="font-bold" dir="ltr">{phone.number}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8">أرسل لنا رسالة</h3>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 rounded-xl border border-green-200 flex items-start gap-3 text-green-700">
                                <CheckCircle2 className="shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold">تم إرسال رسالتك بنجاح!</p>
                                    <p className="text-sm mt-1">شكراً لتواصلك معنا، سنرد عليك في أقرب وقت ممكن.</p>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 rounded-xl border border-red-200 text-red-700">
                                <p className="font-bold">حدث خطأ أثناء الإرسال.</p>
                                <p className="text-sm mt-1">يرجى التحقق من إعدادات Formspree.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">الاسم الكامل *</label>
                                    <input
                                        id="name"
                                        type="text"
                                        {...register('name')}
                                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand-500 focus:ring-brand-100'} focus:outline-none focus:ring-4 transition-all bg-gray-50 focus:bg-white`}
                                        placeholder="محمد رحماني"
                                    />
                                    {errors.name && <p className="mt-2 text-sm text-red-500 font-medium">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">رقم الهاتف *</label>
                                    <input
                                        id="phone"
                                        type="text"
                                        {...register('phone')}
                                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand-500 focus:ring-brand-100'} focus:outline-none focus:ring-4 transition-all bg-gray-50 focus:bg-white`}
                                        placeholder="+212 600 000 000"
                                        dir="ltr"
                                    />
                                    {errors.phone && <p className="mt-2 text-sm text-red-500 font-medium">{errors.phone.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني *</label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register('email')}
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand-500 focus:ring-brand-100'} focus:outline-none focus:ring-4 transition-all bg-gray-50 focus:bg-white`}
                                    placeholder="example@email.com"
                                    dir="ltr"
                                />
                                {errors.email && <p className="mt-2 text-sm text-red-500 font-medium">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">نص الرسالة *</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    {...register('message')}
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand-500 focus:ring-brand-100'} focus:outline-none focus:ring-4 transition-all bg-gray-50 focus:bg-white resize-none`}
                                    placeholder="كيف يمكننا مساعدتك؟"
                                ></textarea>
                                {errors.message && <p className="mt-2 text-sm text-red-500 font-medium">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={!isValid || isSubmitting}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 shadow-lg shadow-brand-500/30"
                            >
                                {isSubmitting ? (
                                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        إرسال الرسالة
                                        <Send size={20} className="mr-2 rotate-180" /> {/* rotate-180 for RTL */}
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
