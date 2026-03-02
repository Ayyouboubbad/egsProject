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
        title: "prod_step_1_title",
        description: "prod_step_1_desc",
        icon: Bird
    },
    {
        id: 2,
        title: "prod_step_2_title",
        description: "prod_step_2_desc",
        icon: ShieldCheck
    },
    {
        id: 3,
        title: "prod_step_3_title",
        description: "prod_step_3_desc",
        icon: Package
    },
    {
        id: 4,
        title: "prod_step_4_title",
        description: "prod_step_4_desc",
        icon: Truck
    }
];
