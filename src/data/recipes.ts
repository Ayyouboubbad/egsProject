export interface Recipe {
    id: string;
    title: string;
    category: 'moroccan' | 'foreign';
    imageUrl: string;
}

export const recipes: Recipe[] = [
    {
        id: 'shakshuka',
        title: 'شكشوكه البيض',
        category: 'moroccan',
        imageUrl: 'https://images.unsplash.com/photo-1590412200988-a408ce2c3218?q=80&w=600&auto=format&fit=crop', // Stock image placeholder
    },
    {
        id: 'sffa',
        title: 'سفة تقليدية بالبيض',
        category: 'moroccan',
        imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'salad',
        title: 'سلطة خفيفة بالخضر والبيض',
        category: 'moroccan',
        imageUrl: 'https://images.unsplash.com/photo-1518133502591-628d08796582?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'potato-balls',
        title: 'كريات بطاطا محشية بالبيض والفرماج',
        category: 'moroccan',
        imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'briwat-turkey',
        title: 'بريوات بلحم الديك الرومي والبيض المسلوق',
        category: 'moroccan',
        imageUrl: 'https://images.unsplash.com/photo-1599813293026-b8cb8512530c?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'briwat-kefta',
        title: 'بريوات الكفتة والبيض',
        category: 'moroccan',
        imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'msemen',
        title: 'مسمن البيض',
        category: 'moroccan',
        imageUrl: 'https://images.unsplash.com/photo-1624462966581-bc567e411b98?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'tajine',
        title: 'طاجين البطاطا بالبيض والفرماج',
        category: 'moroccan',
        imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=600&auto=format&fit=crop',
    }
];
