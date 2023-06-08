import { getOptimizatedData } from "@/utils/getOptimizatedData";
import axios from "axios";
import { getCookie } from "cookies-next";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import Image from 'next/image';
import styles from './[id].module.scss';

const props = ['id', 'title', 'thumbnail', 'permalink', 'author', 'score', 'num_comments', 'created', 'media']

export const getServerSideProps: GetServerSideProps = async ({ query, req, res }: GetServerSidePropsContext) => {
  const token = getCookie('token', { req, res })
  console.log(token)

  if (!token) return {
    props: {postsData: []},
    // redirect: {
    //   destination: '/auth',
    //   permanent: false,
    // },
  };
  console.group(query.id)
  const {data} = await axios.get(`https://oauth.reddit.com/api/info.json?id=t3_${query.id}`, {
    headers: { Authorization: `bearer ${token}` },
  })

  const postData = data.data.children.map((item: { data: any }) => item.data)
  // const optimizatedData = getOptimizatedData(postsData, props)
  // console.log(postsData)
  return {
    props: {postData: postData},
  }
}
export interface IPostPageProps {
  postData: any[];
}

export const PostPage: NextPage<IPostPageProps>  = ({postData}) => {
  const router = useRouter()
  const { id } = router.query;
  const postUrl = "https://www.reddit.com" + postData[0].permalink;
  console.log(postData)
  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <h1 className={styles.title}>
          {postData[0].title}
        </h1>
        {postData[0].media != null ? (
            <video className={styles.media} src={postData[0].media.reddit_video.scrubber_media_url} autoPlay></video>
        ) : (
          <Image src={postData[0].thumbnail} width={200} height={110} alt="preview image"/>
        )}
        <a href={postUrl}>
          Link to post on Reddit
        </a>
      </div>
      <div className={styles.subredditInfo}>
          <h2>{postData[0].subreddit_name_prefixed}</h2>
          <p>Description</p>
          <p>subreddit_subscribers</p>
          <a href="subreddit_name_prefixed">LINK</a>
      </div>
    </div>
  )
}


export default PostPage
