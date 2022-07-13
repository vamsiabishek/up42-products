import { IBlock } from '../interfaces/Block';
import BlocksTemplate from '../components/molecules/block/BlocksTemplate'
import BlockContextProvider from '../context/BlockContext'


export async function getServerSideProps() {
  const result = await fetch(`http://localhost:3000/api/blocks`)
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
