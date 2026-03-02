import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { contactInfo } from '../../data/contacts';
import { MapPin, Mail, Send, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import { generateEmailTemplate } from '../../utils/emailTemplate';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { TFunction } from 'i18next';

// We need to create the schema inside the component to use translations
const createSchema = (t: TFunction) => yup.object().shape({
    name: yup.string().required(t('err_name_req')).min(2, t('err_name_min')),
    phone: yup.string().required(t('err_phone_req')).matches(/^[0-9+ ]+$/, t('err_phone_inv')),
    email: yup.string().email(t('err_email_inv')).required(t('err_email_req')),
    subject: yup.string().required(t('err_sub_req')),
    message: yup.string().required(t('err_msg_req')).min(10, t('err_msg_min')),
});

type FormData = yup.InferType<ReturnType<typeof createSchema>>;

const Contact: React.FC = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Memoize schema so it updates when language changes
    const schema = React.useMemo(() => createSchema(t), [t]);

    const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, reset } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: 'onTouched',
        defaultValues: {
            subject: t('sub_quote')
        }
    });

    // Reset default subject when language changes
    useEffect(() => {
        reset({ subject: t('sub_quote') });
    }, [t, reset]);

    const onSubmit = async (data: FormData) => {
        try {
            setSubmitStatus('idle'); // Starting submission

            // Generate the beautifully formatted plain text template
            const messageContent = generateEmailTemplate(data);

            const accessKey = "c20e0ac9-b527-4fc6-a51c-a8d03d7f11df";

            // Using Web3Forms for ultra-reliable plain text delivery
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject: `🚨 رسالة جديدة من الموقع: ${data.subject} - ${data.name}`,
                    from_name: data.name,
                    message: messageContent,
                    replyto: data.email
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                reset({ subject: t('sub_quote') });
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
        <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 relative transition-colors">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-bold mb-6 text-sm">
                        {t('contact_badge')}
                    </div>
                    <div className="relative inline-flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                            {t('contact_title')}
                        </h2>
                        <span className="absolute -bottom-3 w-20 h-1.5 bg-brand-500 rounded-full"></span>
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 md:mt-8">
                        {t('contact_desc')}
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">

                    {/* Contact Information Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/3 flex flex-col gap-6 h-fit"
                    >

                        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl shadow-brand-500/5 dark:shadow-black/20 transition-colors">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                                <MapPin className="text-brand-500" size={28} />
                                {t('hq')}
                            </h3>

                            <div className="space-y-6">
                                <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{t('address')}</h4>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{contactInfo.address}<br />{t('postal')} {contactInfo.postalCode}</p>
                                </div>

                                <div className="pt-2">
                                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2 flex items-center gap-2">
                                        <Mail size={20} className="text-brand-500" />
                                        {t('email')}
                                    </h4>
                                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium text-lg transition-colors flex block break-all" dir="ltr">
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
                                {t('phones')}
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

                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-2/3 bg-white dark:bg-gray-800 p-8 md:p-12 rounded-[2rem] shadow-xl shadow-gray-900/5 dark:shadow-black/20 border border-gray-100 dark:border-gray-700 transition-colors"
                    >
                        <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-2">{t('form_title')}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 border-b border-gray-200 dark:border-gray-700 pb-8">{t('form_desc')}</p>

                        {submitStatus === 'success' && (
                            <div className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl border-2 border-green-200 dark:border-green-800 flex items-center gap-4 text-green-700 dark:text-green-400 shadow-sm">
                                <div className="bg-green-100 dark:bg-green-800/50 p-2 rounded-full">
                                    <CheckCircle2 size={32} className="text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <p className="font-black text-xl">{t('success_title')}</p>
                                    <p className="text-green-800 dark:text-green-300 font-medium">{t('success_desc')}</p>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl border-2 border-red-200 dark:border-red-800 flex items-center gap-4 text-red-700 dark:text-red-400 shadow-sm">
                                <div className="bg-red-100 dark:bg-red-800/50 p-2 rounded-full">
                                    <AlertCircle size={32} className="text-red-600 dark:text-red-400" />
                                </div>
                                <div>
                                    <p className="font-black text-xl">{t('error_title')}</p>
                                    <p className="text-red-800 dark:text-red-300 font-medium">{t('error_desc')}</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className={`text-${isRTL ? 'right' : 'left'}`}>
                                    <label htmlFor="name" className="block text-base font-bold text-gray-800 dark:text-gray-200 mb-2">{t('name_label')} <span className="text-brand-500">*</span></label>
                                    <input
                                        id="name"
                                        type="text"
                                        {...register('name')}
                                        className={`w-full px-5 py-4 rounded-xl border-2 ${errors.name ? 'border-red-500 bg-red-50/50 dark:bg-red-900/10' : 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-brand-400 dark:hover:border-brand-500 focus:border-brand-500'} focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-gray-900 dark:text-white text-lg placeholder-gray-500 dark:placeholder-gray-400`}
                                        placeholder={t('name_ph')}
                                    />
                                    {errors.name && <p className="mt-2 text-sm text-red-500 font-bold">{errors.name.message}</p>}
                                </div>

                                <div className={`text-${isRTL ? 'right' : 'left'}`}>
                                    <label htmlFor="phone" className="block text-base font-bold text-gray-800 dark:text-gray-200 mb-2">{t('phone_label')} <span className="text-brand-500">*</span></label>
                                    <input
                                        id="phone"
                                        type="text"
                                        {...register('phone')}
                                        className={`w-full px-5 py-4 rounded-xl border-2 ${errors.phone ? 'border-red-500 bg-red-50/50 dark:bg-red-900/10' : 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-brand-400 dark:hover:border-brand-500 focus:border-brand-500'} focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-gray-900 dark:text-white text-lg placeholder-gray-500 dark:placeholder-gray-400 text-${isRTL ? 'right' : 'left'}`}
                                        placeholder="+212 600 000 000"
                                        dir="ltr"
                                    />
                                    {errors.phone && <p className={`mt-2 text-sm text-red-500 font-bold text-${isRTL ? 'right' : 'left'}`}>{errors.phone.message}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className={`text-${isRTL ? 'right' : 'left'}`}>
                                    <label htmlFor="email" className="block text-base font-bold text-gray-800 dark:text-gray-200 mb-2">{t('email_label')} <span className="text-brand-500">*</span></label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register('email')}
                                        className={`w-full px-5 py-4 rounded-xl border-2 ${errors.email ? 'border-red-500 bg-red-50/50 dark:bg-red-900/10' : 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-brand-400 dark:hover:border-brand-500 focus:border-brand-500'} focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-gray-900 dark:text-white text-lg placeholder-gray-500 dark:placeholder-gray-400 text-${isRTL ? 'right' : 'left'}`}
                                        placeholder="contact@company.com"
                                        dir="ltr"
                                    />
                                    {errors.email && <p className={`mt-2 text-sm text-red-500 font-bold text-${isRTL ? 'right' : 'left'}`}>{errors.email.message}</p>}
                                </div>

                                <div className={`text-${isRTL ? 'right' : 'left'}`}>
                                    <label htmlFor="subject" className="block text-base font-bold text-gray-800 dark:text-gray-200 mb-2">{t('subject_label')} <span className="text-brand-500">*</span></label>
                                    <select
                                        id="subject"
                                        {...register('subject')}
                                        className={`w-full px-5 py-4 rounded-xl border-2 ${errors.subject ? 'border-red-500 bg-red-50/50 dark:bg-red-900/10' : 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-brand-400 dark:hover:border-brand-500 focus:border-brand-500'} focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-gray-900 dark:text-white text-lg appearance-none cursor-pointer`}
                                    >
                                        <option value={t('sub_quote')}>{t('sub_quote')}</option>
                                        <option value={t('sub_dist')}>{t('sub_dist')}</option>
                                        <option value={t('sub_general')}>{t('sub_general')}</option>
                                    </select>
                                    {errors.subject && <p className={`mt-2 text-sm text-red-500 font-bold text-${isRTL ? 'right' : 'left'}`}>{errors.subject.message}</p>}
                                </div>
                            </div>

                            <div className={`text-${isRTL ? 'right' : 'left'}`}>
                                <label htmlFor="message" className="block text-base font-bold text-gray-800 dark:text-gray-200 mb-2">{t('msg_label')} <span className="text-brand-500">*</span></label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    {...register('message')}
                                    className={`w-full px-5 py-4 rounded-xl border-2 ${errors.message ? 'border-red-500 bg-red-50/50 dark:bg-red-900/10' : 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-brand-400 dark:hover:border-brand-500 focus:border-brand-500'} focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all resize-none text-gray-900 dark:text-white text-lg placeholder-gray-500 dark:placeholder-gray-400`}
                                    placeholder={t('msg_ph')}
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
                                        {t('send_btn')}
                                        <Send size={24} className={isRTL ? "rotate-180" : ""} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
