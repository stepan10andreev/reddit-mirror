import { NextPage } from "next"
import Image from 'next/image';
import img from '../../public/505.png';

const Page505: NextPage = () => {

  return (
    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%'}}>
      <Image src={img} alt="500-image"/>
    </div>
  )
}

export default Page505
