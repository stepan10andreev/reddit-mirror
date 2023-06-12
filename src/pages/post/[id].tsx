import { getOptimizatedData } from "@/utils/getOptimizatedData";
import axios from "axios";
import { getCookie } from "cookies-next";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import Image from 'next/image';
import styles from './[id].module.scss';

const postProps = ['title', 'thumbnail', 'permalink', 'author', 'media', 'subreddit_name_prefixed', 'selftext']
const subredditProps = ['title', 'public_description', 'url', 'icon_img', 'banner_img', 'subscribers']

export const getServerSideProps: GetServerSideProps = async ({ query, req, res }: GetServerSidePropsContext) => {
  const token = getCookie('token', { req, res });

  if (!token) return {
    props: {postsData: []},
    // redirect: {
    //   destination: '/auth',
    //   permanent: false,
    // },
  };

  const {data} = await axios.get(`https://oauth.reddit.com/api/info.json?id=t3_${query.id}`, {
    headers: { Authorization: `bearer ${token}` },
  })

  const postData = data.data.children.map((item: { data: any }) => item.data)
  const optimizatedPostData = getOptimizatedData(postData, postProps)
  console.log(postData)
  const subreddit = await axios.get(`https://oauth.reddit.com/api/info.json?id=${postData[0].subreddit_id}`, {
    headers: { Authorization: `bearer ${token}` },
  })

  const subredditData = subreddit.data.data.children.map((item: { data: any }) => item.data)
  const optimizatedSubredditData = getOptimizatedData(subredditData, subredditProps)
  // console.log(subredditData)

  return {
    props: {postData: optimizatedPostData[0], subredditData: optimizatedSubredditData[0]},
  }
}
export interface IPostPageProps {
  postData: any;
  subredditData: any;
}

export const PostPage: NextPage<IPostPageProps>  = ({postData, subredditData}) => {
  const router = useRouter()
  // const { id } = router.query;
  const postUrl = "https://www.reddit.com" + postData.permalink;
  const subredditUrl = "https://www.reddit.com" + subredditData.url;
  console.log(subredditData)
  console.log(postData)
  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <h1 className={styles.title}>
          {postData.title}
        </h1>
        {postData.media != null ? (
            <video className={styles.media} src={postData.media.reddit_video.scrubber_media_url} autoPlay></video>
        ) : (
          <Image src={postData.thumbnail} width={200} height={110} alt="preview image"/>
        )}
        {postData.selftext != null && (
          <p className={styles.description}>{postData.selftext}</p>
        )}
        <a href={postUrl} className={styles.link}>
          Link to this post on Reddit
        </a>
      </div>

      <div className={styles.subredditInfo}>
          <h3 className={styles.heading}>About Community</h3>
          <div className={styles.bannerImg}>
            <Image src={subredditData.banner_img} width={375} height={100} alt="subreddit_banner_image"/>
          </div>
          <div className={styles.subredditName}>
            <Image src={subredditData.icon_img} width={30} height={30} alt="subreddit_icon_image"/>
            <h2 className={styles.subredditTitle}>{subredditData.title}</h2>
          </div>
          <small className={styles.prefix}>{postData.subreddit_name_prefixed}</small>
          <p className={styles.subredditDescr}>{subredditData.public_description}</p>
          <p className={styles.subscribers}>Subscribers: {subredditData.subscribers}</p>
          <a href={subredditUrl} className={styles.subredditUrl}>LINK</a>
      </div>
    </div>
  )
}


export default PostPage
