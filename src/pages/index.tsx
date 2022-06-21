import type { NextPage } from 'next'
import { Profile } from '../Category/Profile'
import { Top } from '../Category/Top'
import { Layout } from '../components/layout'

const Home: NextPage = () => {
  return (
    <>
      <Layout title='EXAMSYSTEM'>
        <Top />
        <Profile />
      </Layout>
    </>
  )
}

export default Home
