import { CheckCircle2 } from 'lucide-react';

export interface Benefit {
    id: string;
    title: string;
    icon: any;
}

export const benefits: Benefit[] = [
    { id: '1', title: 'هل تعلم القيمة الغذائية للبيض', icon: CheckCircle2 },
    { id: '2', title: 'هل تعلم فوائد البيض للجسم', icon: CheckCircle2 },
    { id: '3', title: 'هل تعلم فوائد البيض لزوجين', icon: CheckCircle2 },
    { id: '4', title: 'هل تعلم فوائد البيض للاطفال', icon: CheckCircle2 },
    { id: '5', title: 'هل تعلم فوائد البيض للبشرة', icon: CheckCircle2 },
    { id: '6', title: 'هل تعلم فوائد البيض لدماغ', icon: CheckCircle2 },
    { id: '7', title: 'هل تعلم فوائد البيض لإنقاص الوزن', icon: CheckCircle2 },
    { id: '8', title: 'هل تعلم فوائد البيض للحامل', icon: CheckCircle2 },
];
