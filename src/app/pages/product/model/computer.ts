export interface Type {
    id: string;
    category: string;
    prices: Price[];
    images: Images[];
}

export interface Price {
    id: string;
    price: number;
    isActive: boolean;
}

export interface Images {
    id: string;
    filename: string;
    url: string;
}

export interface Specification {
    id: string;
    processor: string;
    ram: string;
    monitor: string;
    ssd: string;
    vga: string;
}

export interface Computer {
    id: string;
    name: string;
    code: string;
    type: Type;
    specification: Specification;
    status: boolean;
}