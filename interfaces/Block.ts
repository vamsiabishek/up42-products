interface IPricingStrategy { 
    type: string;
    credits: number;
}

interface IBlockPricingStrategy { 
    name : string;
    unit : string
    direction : string;
    credits : number
}

interface IMetadata { 
    blockThumbnailUrl: string;
    pricingStrategy: IPricingStrategy;
    blockPricingStrategy: IBlockPricingStrategy;
}

export interface IBlock {
    id: string;
    displayId: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string | null;
    updatedBy: string | null;
    name: string;
    displayName: string;
    description: string;
    provider: string;
    type: string;
    metadata: IMetadata;
    version : string;
    isPublic : boolean
    isValid : boolean
    isRestricted : boolean
    isAccessGranted : boolean
    isCreditPurchaseRequired : boolean;
    tags: string[];
    isPublicVersion : boolean;
    manifestVersion : number;
}

export interface ICart {
    count: number;
    block: IBlock;
}

export interface IBlockData {
    blocks: IBlock[],
    cart: ICart[],
    addToCart: (id: string) => void;
    onCartQuantityChange: (id: string, qty: number) => void;
    totalCredits: number;
    onBlocksBuy: () => void;
}