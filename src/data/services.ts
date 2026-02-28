import { ShieldCheck, Truck, PackageCheck } from 'lucide-react';

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: any;
}

export const services: Service[] = [
    {
        id: 'quality',
        title: 'جودة المنتوج',
        description: 'تعتبر ضيعتكم من افضل الضيعات على الصعيد الدولي و الافريقي',
        icon: ShieldCheck,
    },
    {
        id: 'delivery',
        title: 'توصيل البضاعة',
        description: 'تصلكم بضاعتكم اينما كنتم في جميع انحاء المغرب',
        icon: Truck,
    },
    {
        id: 'receipt',
        title: 'استلامكم المنتوج',
        description: 'نحرص على استلامكم المنتوج',
        icon: PackageCheck,
    },
];
