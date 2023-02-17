import List from '@/List'
import HeadMeta from '@/pages/src/HeadMeta'
import Layout from '@/pages/src/Layout'




export default function Home() {
  return (
    <>
    <Layout>
      <HeadMeta title="index"/>
      <List></List>
    </Layout>
    </>
  )
}
