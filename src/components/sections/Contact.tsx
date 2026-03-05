import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { contactInfo } from '../../data/contacts';
import { Mail, Send, CheckCircle2, AlertCircle, MapPin, MessageCircle } from 'lucide-react';
import { generateEmailTemplate } from '../../utils/emailTemplate';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { TFunction } from 'i18next';

// We need to create the schema inside the component to use translations
const createSchema = (t: TFunction) => yup.object({
    name: yup.string().required(t('err_name_req')).min(2, t('err_name_min')),
    phone: yup.string().required(t('err_phone_req')).matches(/^[0-9+ ]+$/, t('err_phone_inv')),
    email: yup.string().email(t('err_email_inv')).default(''),
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
        mode: 'onTouched'
    });

    const onSubmit = async (data: FormData) => {
        try {
            setSubmitStatus('idle'); // Starting submission

            // Add a default subject since we removed it from the UI, and ensure email is string
            const submissionData = {
                ...data,
                subject: 'New Website Inquiry',
                email: data.email || ''
            };

            // Generate the beautifully formatted plain text template
            const messageContent = generateEmailTemplate(submissionData);

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
                    subject: `🚨 رسالة جديدة من الموقع: ${data.name}`,
                    from_name: data.name,
                    message: messageContent,
                    replyto: data.email || contactInfo.email
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
        <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-[#0f1423] dark:text-white mb-4">
                        <span className="text-[#e6a246]">{t('contact_new_title').split(' ')[0]}</span> {t('contact_new_title').split(' ').slice(1).join(' ')}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 font-medium md:text-lg max-w-2xl">
                        {t('contact_new_desc')}
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-[55%] bg-[#fafafa] dark:bg-gray-800/50 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-700/50"
                    >
                        <div className={`mb-10 text-${isRTL ? 'right' : 'left'}`}>
                            <h3 className="text-3xl font-black text-[#0f1423] dark:text-white mb-2">{t('contact_form_title')}</h3>
                            <p className="text-gray-400 dark:text-gray-500">{t('contact_form_desc')}</p>
                        </div>

                        {submitStatus === 'success' && (
                            <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800/50 flex items-center gap-3 text-green-700 dark:text-green-400">
                                <CheckCircle2 size={24} />
                                <div>
                                    <p className="font-bold">{t('success_title')}</p>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800/50 flex items-center gap-3 text-red-700 dark:text-red-400">
                                <AlertCircle size={24} />
                                <div>
                                    <p className="font-bold">{t('error_title')}</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className={`text-${isRTL ? 'right' : 'left'}`}>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                        {t('name_label')} <span className="text-[#e6a246]">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        {...register('name')}
                                        className={`w-full px-5 py-4 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} bg-white dark:bg-gray-700 focus:outline-none focus:border-[#e6a246] focus:ring-1 focus:ring-[#e6a246] transition-colors`}
                                        placeholder={t('name_ph')}
                                    />
                                </div>

                                {/* Phone */}
                                <div className={`text-${isRTL ? 'right' : 'left'}`}>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                        {t('phone_label')} <span className="text-[#e6a246]">*</span>
                                    </label>
                                    <input
                                        id="phone"
                                        type="text"
                                        {...register('phone')}
                                        className={`w-full px-5 py-4 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} bg-white dark:bg-gray-700 focus:outline-none focus:border-[#e6a246] focus:ring-1 focus:ring-[#e6a246] transition-colors text-${isRTL ? 'right' : 'left'}`}
                                        placeholder="+212 6XX XXX XXX"
                                        dir="ltr"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className={`text-${isRTL ? 'right' : 'left'}`}>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                    {t('msg_label')} <span className="text-[#e6a246]">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    {...register('message')}
                                    className={`w-full px-5 py-4 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} bg-white dark:bg-gray-700 focus:outline-none focus:border-[#e6a246] focus:ring-1 focus:ring-[#e6a246] transition-colors resize-none`}
                                    placeholder={t('msg_ph')}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={!isValid || isSubmitting}
                                className="w-full mt-4 flex items-center justify-center gap-2 bg-[#e6a246] hover:bg-[#d69236] text-white font-bold text-lg px-8 py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98]"
                            >
                                {isSubmitting ? (
                                    <span className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        {t('send_btn')}
                                        <Send size={20} className={isRTL ? "rotate-180" : ""} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Column: Map & Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-[45%] flex flex-col gap-6"
                    >
                        {/* Map Container */}
                        <div className="w-full h-64 md:h-72 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm relative bg-gray-100 dark:bg-gray-800">
                            {/* We use a real iframe map pointing to Rhamna */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13543.834168661608!2d-7.9654167!3d31.9348924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdaf17758774daeb%3A0xc0d2ecb0caadc055!2sSte%20%C5%92ufs%20Rhamna!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="filter grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            ></iframe>
                        </div>

                        {/* Contact Cards Container */}
                        <div className="bg-[#fafafa] dark:bg-gray-800/50 rounded-3xl p-6 border border-gray-100 dark:border-gray-700/50 flex flex-col gap-4">

                            {/* WhatsApp Card */}
                            <a
                                href={`https://wa.me/${contactInfo.phones[0].number.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-5 bg-[#e8f6ed] dark:bg-green-900/20 hover:bg-[#d6f0df] dark:hover:bg-green-900/40 transition-colors rounded-2xl group"
                            >
                                <div className="flex flex-col text-start">
                                    <span className="font-bold text-[#20a359] dark:text-green-400 text-lg mb-1">{t('whatsapp')}</span>
                                    <span className="text-[#20a359]/70 dark:text-green-500 text-sm">{t('whatsapp_desc')}</span>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-[#20a359] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <MessageCircle size={24} />
                                </div>
                            </a>

                            {/* Email Card */}
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="flex items-center justify-between p-5 bg-white dark:bg-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-2xl shadow-sm border border-gray-100 dark:border-gray-600/50 group"
                            >
                                <div className="flex flex-col text-start">
                                    <span className="font-bold text-[#0f1423] dark:text-white text-lg mb-1">{t('email')}</span>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm" dir="ltr">{contactInfo.email}</span>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-[#fff6e8] dark:bg-[#e6a246]/20 text-[#e6a246] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                            </a>

                            {/* Address Card */}
                            <div className="flex items-center justify-between p-5 bg-white dark:bg-gray-700/50 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-600/50">
                                <div className="flex flex-col text-start">
                                    <span className="font-bold text-[#0f1423] dark:text-white text-lg mb-1">{t('address')}</span>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm">{contactInfo.address}</span>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-[#fff6e8] dark:bg-[#e6a246]/20 text-[#e6a246] flex items-center justify-center shrink-0">
                                    <MapPin size={24} />
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
