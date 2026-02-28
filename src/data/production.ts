import { Bird, ShieldCheck, Package, Truck, type LucideIcon } from 'lucide-react';

export interface ProductionStep {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
}

export const productionSteps: ProductionStep[] = [
    {
        id: 1,
        title: "تربية الدواجن بعناية",
        description: "نحرص على توفير بيئة صحية وآمنة وعلف طبيعي 100% لضمان إنتاج بيض عالي الجودة وخالي من الأمراض.",
        icon: Bird
    },
    {
        id: 2,
        title: "الفرز ومراقبة الجودة",
        description: "يمر البيض عبر أحدث أجهزة الفرز والتفتيش للتأكد من سلامة القشرة ومطابقتها لأقصى المعايير الصحية.",
        icon: ShieldCheck
    },
    {
        id: 3,
        title: "التعبئة والتغليف الآلي",
        description: "تتم عملية التعبئة بشكل آلي لضمان عدم تعرض البيض للتلوث، بحيث يوضع في صواني مخصصة تحافظ على سلامته.",
        icon: Package
    },
    {
        id: 4,
        title: "التوزيع السريع للأسواق",
        description: "أسطول شاحناتنا يضمن وصول البيض طازجاً من المزرعة إلى نقاط البيع الكبرى والأسواق في أسرع وقت.",
        icon: Truck
    }
];
