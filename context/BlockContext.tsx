import { useContext, createContext, useState, useEffect, FunctionComponent } from "react"
import { IBlock, ICart, IBlockData } from '../interfaces/Block'
import { getTotalBlockCredits } from '../helper/blockHelper'

const initialData = {
    blocks: [],
    cart: [],
    addToCart: () => {},
    onCartQuantityChange: () => {},
    totalCredits: 10000,
    onBlocksBuy: () => {}
}

export const BlockContext = createContext<IBlockData>(initialData);

export const useBlockContext = () => {
    return useContext(BlockContext);
}

type Props = {
    data: IBlock[];
    children: React.ReactNode;
}

const BlockContextProvider: FunctionComponent<Props> = ({ data, children }) => {
    const [blocks, setBlocks] = useState<IBlock[]>([])
    const [cart, setCart] = useState<ICart[]>([])
    const [totalCredits, setTotalCredits] = useState(10000)

    useEffect(() => {
        setBlocks(data.filter(b => b.metadata.blockPricingStrategy.name === 'simple'))
    }, [data])

    const addToCart = (id : string) => {
        const cartBlockIdx = cart.findIndex(c => c.block.id === id)
        if (cartBlockIdx > -1) {
            cart[cartBlockIdx].count += 1
            setCart([...cart])
        } else {
            const block: IBlock | undefined = blocks.find(b => b.id === id)
            block && setCart([...cart, {count: 1, block}])
        }
    }

    const onCartQuantityChange = (id: string, qty: number) => {
        const cartBlockIdx = cart.findIndex(c => c.block.id === id)
        if (cartBlockIdx > -1) {
            if(qty === 0) {
                cart.splice(cartBlockIdx, 1)
            } else {
                cart[cartBlockIdx].count = qty
            }
            setCart([...cart])
        } 
    }

    const onBlocksBuy = () => {
        const cartCredits = getTotalBlockCredits(cart)
        setTotalCredits(totalCredits - cartCredits)
        setCart([])
    }

    const blockData = {
        blocks,
        cart,
        addToCart,
        onCartQuantityChange,
        totalCredits,
        onBlocksBuy
    }

    return (
        <BlockContext.Provider value={blockData}>
            {children}
        </BlockContext.Provider>    
    )
}

export default BlockContextProvider;