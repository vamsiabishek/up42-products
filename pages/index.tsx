import { IBlock } from '../interfaces/Block';
import BlocksTemplate from '../components/molecules/block/BlocksTemplate'
import BlockContextProvider from '../context/BlockContext'

import { GetServerSidePropsContext } from "next";


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const result = await fetch(`http://${context.req.headers.host}/api/blocks`)
  const data = await result.json()

  return { props: { data } }
}

const Blocks = ({ data }: {data: IBlock[]}) => {
  return (
    <BlockContextProvider data={data}>
      <BlocksTemplate />
    </BlockContextProvider>
  )
}

export default Blocks
