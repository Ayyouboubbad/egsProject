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
        name: "prod_1_name",
        description: "prod_1_desc",
        targetAudience: "prod_1_aud",
        features: ["prod_1_feat_1", "prod_1_feat_2", "prod_1_feat_3"],
        // Placeholder image resembling bulk eggs / boxes
        imageUrl: "/egg-boxes.jpeg"
    },
    {
        id: 2,
        name: "prod_2_name",
        description: "prod_2_desc",
        targetAudience: "prod_2_aud",
        features: ["prod_2_feat_1", "prod_2_feat_2", "prod_2_feat_3"],
        // Placeholder image resembling warehouse / bulk transport
        imageUrl: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "prod_3_name",
        description: "prod_3_desc",
        targetAudience: "prod_3_aud",
        features: ["prod_3_feat_1", "prod_3_feat_2", "prod_3_feat_3"],
        // Placeholder image resembling trays
        imageUrl: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=800&auto=format&fit=crop"
    }
];
