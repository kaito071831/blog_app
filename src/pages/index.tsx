import type { NextPage } from 'next'
import { History } from '../Category/history'
import { Product } from '../Category/product'
import { Profile } from '../Category/Profile'
import { Top } from '../Category/Top'
import { Layout } from '../components/layout'

const Home: NextPage = () => {
  return (
    <>
      <Layout title='kaito071831'>
        <Top />
        <Profile />
        <History />
        <Product />
      </Layout>
    </>
  )
}

export default Home
