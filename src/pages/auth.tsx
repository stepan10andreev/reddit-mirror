import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch } from "@/components/Hooks/useApp";
import { setToken } from "@/store/token/token";
import { setCookie } from "cookies-next";

export const getServerSideProps: GetServerSideProps = async ({ query, req, res }: GetServerSidePropsContext) => {
  const response = await axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: { username: process.env.NEXT_PUBLIC_CLIENT_ID ? process.env.NEXT_PUBLIC_CLIENT_ID : '', password: process.env.PASSWORD_FOR_TOKEN ? process.env.PASSWORD_FOR_TOKEN : ''},
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
  )
  const data = response.data;
  setCookie('token', data['access_token'], { req, res, maxAge: 60 * 60 });
  return {
    props: {token: data['access_token']},
  }
}

interface IAuthPageProps {
  token: string;
}

const AuthPage: NextPage<IAuthPageProps> = ({ token }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token));
    dispatch(setToken(token));
    router.push('/')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <p>Redirecting...</p>
  )
}

export default AuthPage
