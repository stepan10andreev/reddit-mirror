import axios from "axios";
import { useEffect, useState } from "react"
import { useAppSelector } from "./useApp";

interface IUserData {
  name?: string;
  iconImg?: string;
}

export const useUserData =  () => {
  const [userData, setUserData] = useState<IUserData>({});
  const [isLoading, setLoading] = useState(false);

  // const token = useAppSelector((state) => state.token);

  useEffect(() => {

    let token = '';
    const localtoken =  localStorage.getItem('token');
    if (localtoken) {
      token = JSON.parse(localtoken);
    }
    if(!token) return

    setLoading(true);
    const getUserData = async () => {
      const response = await axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${token}` }
      })
      const data = response.data;
      setUserData({ name: data.name, iconImg: data.snoovatar_img})
      setLoading(false);
    }
    getUserData();
  }, [])
  return {
    userData,
    isLoading
  }
}
