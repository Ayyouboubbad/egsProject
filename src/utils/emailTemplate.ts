export const generateEmailTemplate = (data: {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
}) => {
    // A highly structured plain-text format that prevents LTR/RTL text scrambling in email clients
    return `
========================================
             إشعار طلب جديد 🔔             
========================================

نوع الطلب 📌
${data.subject}

اسم العميل أو الشركة 🏢
${data.name}

رقم الهاتف 📞
${data.phone}

البريد الإلكتروني ✉️
${data.email}

تفاصيل الطلب 📝
----------------------------------------
${data.message}
----------------------------------------

رسالة تلقائية من موقعك الإلكتروني.
`;
};
