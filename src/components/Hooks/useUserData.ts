import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react"

interface IUserData {
  name?: string;
  iconImg?: string;
}

export const useUserData =  () => {
  const [userData, setUserData] = useState<IUserData>({});
  const [isLoading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  // const token = useAppSelector((state) => state.token);

  useEffect(() => {

    const token = getCookie('token')

    if(!token) return;

    setLoading(true);

    const getUserData = async () => {
      const response = await axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${token}` }
      })

      const data = response.data;

      setUserData({ name: data.name, iconImg: data.snoovatar_img})
      setLoading(false);
      setIsAuth(true)
    }
    getUserData();
  }, [])

  return {
    userData,
    isLoading,
    isAuth
  }
}
