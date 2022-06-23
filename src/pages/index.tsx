import type { NextPage } from 'next'
import { History } from '../Category/history'
import { Profile } from '../Category/Profile'
import { Top } from '../Category/Top'
import { Layout } from '../components/layout'

const Home: NextPage = () => {
  return (
    <>
      <Layout title='EXAMSYSTEM'>
        <Top />
        <Profile />
        <History />
      </Layout>
    </>
  )
}

export default Home
