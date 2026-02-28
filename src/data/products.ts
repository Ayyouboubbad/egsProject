export interface Product {
    id: number;
    name: string;
    description: string;
    targetAudience: string;
    features: string[];
    imageUrl: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "صناديق بيض كبيرة متكاملة",
        description: "مخصصة للشركات، الفنادق، ومراكز الإعاشة التي تتطلب كميات ضخمة يومياً بضمان الجودة والطراوة.",
        targetAudience: "B2B (فنادق، مستشفيات، شركات إعاشة)",
        features: ["كميات كبيرة بأسعار تفضيلية", "تغليف مقوى للنقل الآمن", "جدولة توريد مرنة"],
        // Placeholder image resembling bulk eggs / boxes
        imageUrl: "https://images.unsplash.com/photo-1516448620398-c5f44bfdb2ba?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "باليتات مخصصة للموزعين",
        description: "شحنات متكاملة على باليتات للموزعين المعتمدين وتجار الجملة في مختلف المناطق لضمان سرعة التوزيع.",
        targetAudience: "تجار الجملة والموزعين",
        features: ["جاهزة للشحن المباشر", "تواريخ إنتاج حديثة وموحدة", "دعم لوجستي"],
        // Placeholder image resembling warehouse / bulk transport
        imageUrl: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "بلاطو 30 بيضة (عقود توريد)",
        description: "توريد حصري بعقود مستمرة للمطاعم ومصانع الحلويات الكبرى التي تحتاج لبيض طازج بشكل مستمر.",
        targetAudience: "المطاعم الكبرى والمصانع",
        features: ["التزام بالمواعيد", "حجم بيض متناسق للوصفات", "أسعار ثابتة للمتعاقدين"],
        // Placeholder image resembling trays
        imageUrl: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=800&auto=format&fit=crop"
    }
];
