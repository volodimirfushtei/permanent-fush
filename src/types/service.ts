// types/service.ts
export interface Service {
    id: string;
    slug: string;
    title: string;
    description: string;
    details: string;
    image: string;
    price: string;
    duration: string;
}

export type ServicesMap = Record<string, Service>;
