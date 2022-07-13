import { ICart } from '../interfaces/Block'

export const getTotalBlockCredits = (cart: ICart[]) => cart.reduce((sum, cart) => sum + (cart.block.metadata.blockPricingStrategy.credits * cart.count), 0)