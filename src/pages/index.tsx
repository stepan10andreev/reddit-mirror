import Head from 'next/head'
import { Layout } from '@/components/Layout/Layout'
import { Header } from '@/components/Header/Header'
import { Content } from '@/components/Content/Content'
import { CardList } from '@/components/CardList/CardList'
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import { ICardProps } from '@/components/CardList/Card/Card'
import { getOptimizatedData } from '@/utils/getOptimizatedData'


const props = ['id', 'title', 'thumbnail', 'permalink', 'author', 'score', 'num_comments', 'created', 'media']

export const getServerSideProps: GetServerSideProps = async ({ req, res }: GetServerSidePropsContext) => {
  const token = getCookie('token', { req, res })

  if (!token) return {
    props: {postsData: []}
  }

  const {data} = await axios.get('https://oauth.reddit.com/r/all/hot.json?sr_detail=true', {
    headers: { Authorization: `bearer ${token}` },
    params: {
      // limit: 10,
      // after: afterNext,
    }
  })
  const postsData = data.data.children.map((item: { data: any }) => item.data)

  const optimizatedData = getOptimizatedData(postsData, props)

  return {
    props: {postsData: optimizatedData},
  }
}

export interface IHomePageProps {
  postsData: ICardProps[];
}

const HomePage: NextPage<IHomePageProps> = ({postsData}) => {
  return (
    <>
      <Head>
        <title>Reddit-mirror | Bestposts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Layout>
        <Header />
        <Content>
          <CardList postsData={postsData}/>
        </Content>
      </Layout>
    </>
  )
}


export default HomePage
