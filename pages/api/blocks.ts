import type { NextApiRequest, NextApiResponse } from 'next';
import { IBlock } from '../../interfaces/Block';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IBlock[]>
) {
  const result = await fetch(`https://api.up42.com/marketplace/blocks`)
  const { data }: { data: IBlock[] } = await result.json()
  
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1000, stale-while-revalidate=1999'
  )

  res.status(200).json(data)
}