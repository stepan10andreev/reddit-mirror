'use client'
import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, NextPage, Redirect } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useParams } from 'next/navigation';

export const getServerSideProps: GetServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const response = await axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: { username: process.env.NEXT_PUBLIC_CLIENT_ID ? process.env.NEXT_PUBLIC_CLIENT_ID : '', password: '7gdUYpGN3MqdRwsVWzAxVAW8XzffdA' },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
  )
  const data = response.data
  // axios.post(
  //   'https://www.reddit.com/api/v1/access_token',
  //   `grant_type=authorization_code&code=${query.code}&redirect_uri=http://localhost:3000/auth`,
  //   {
  //     auth: { username: process.env.NEXT_PUBLIC_CLIENT_ID ? process.env.NEXT_PUBLIC_CLIENT_ID : '', password: '7gdUYpGN3MqdRwsVWzAxVAW8XzffdA' },
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  //   }
  // )
  //   .then(({ data }) => {
  //     return {
  //       props: {token: data['access_token']},
  //       // redirect: {
  //       //   destination: '/',
  //       //   permanent: false,
  //       // },
  //      }
  //   })
  //   // .catch((error) => {
  //   //   return {
  //   //     props: {error: error}
  //   //   }
  //   // })
    return {
      props: {token: data['access_token']},
    }
}

interface IAuthPageProps {
  token: string;
}

const AuthPage: NextPage<IAuthPageProps> = ({ token }) => {
  console.log(token);
  const router = useRouter();
  useEffect(() => {
    // if (!(user || loading)) {
      // router.push('/');
    // }
  }, []);

  return (
    <p>Redirecting...</p>
  )
}

export default AuthPage
