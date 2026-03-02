import { ShieldCheck, Truck, PackageCheck, type LucideIcon } from 'lucide-react';

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

export const services: Service[] = [
    {
        id: 'quality',
        title: 'service_1_title',
        description: 'service_1_desc',
        icon: ShieldCheck,
    },
    {
        id: 'delivery',
        title: 'service_2_title',
        description: 'service_2_desc',
        icon: Truck,
    },
    {
        id: 'receipt',
        title: 'service_3_title',
        description: 'service_3_desc',
        icon: PackageCheck,
    },
];
