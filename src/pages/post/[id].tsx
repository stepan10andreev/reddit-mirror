import { getOptimizatedData } from "@/utils/getOptimizatedData";
import axios from "axios";
import { getCookie } from "cookies-next";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import Image from 'next/image';
import styles from './[id].module.scss';
import { PostInfoCard } from "@/components/PostInfoCard/PostInfoCard";
import { SubredditInfoCard } from "@/components/SubredditInfoCard/SubredditInfoCard";
import { Modal } from "@/components/ui-components/Modal/Modal";

const postProps = ['title', 'thumbnail', 'permalink', 'author', 'media', 'subreddit_name_prefixed', 'selftext']
const subredditProps = ['title', 'public_description', 'url', 'icon_img', 'banner_img', 'subscribers']

export const getServerSideProps: GetServerSideProps = async ({ query, req, res }: GetServerSidePropsContext) => {
  const token = getCookie('token', { req, res });

  if (!token) return {
    props: {postsData: []},
  };

  const {data} = await axios.get(`https://oauth.reddit.com/api/info.json?id=t3_${query.id}`, {
    headers: { Authorization: `bearer ${token}` },
  })

  const postData = data.data.children.map((item: { data: any }) => item.data)
  const optimizatedPostData = getOptimizatedData(postData, postProps)
  // console.log(postData)

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

export interface IPostData {
  title: string;
  media: null | {reddit_video: {scrubber_media_url: string}};
  thumbnail: string;
  selftext: string;
  permalink: string;
  author: string;
  subreddit_name_prefixed: string;
}

export interface ISubredditData {
  banner_img: string;
  icon_img: string;
  title: string;
  public_description: string;
  subscribers: string;
  url: string;
}

export interface IPostPageProps {
  postData: IPostData;
  subredditData: ISubredditData;
}

export const PostPage: NextPage<IPostPageProps>  = ({postData, subredditData}) => {
  return (
    <div className={styles.post}>
      <PostInfoCard postData={postData}/>

      <SubredditInfoCard subredditData={subredditData} prefix={postData.subreddit_name_prefixed}/>
    </div>
  )
}

export default PostPage
