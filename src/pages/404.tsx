import { NextPage } from "next"
import Image from 'next/image';
import img from '../../public/404.webp';

const NotFoundPage: NextPage = () => {

  return (
    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%'}}>
      <Image src={img} alt="404-image"/>
    </div>
  )
}

export default NotFoundPage
