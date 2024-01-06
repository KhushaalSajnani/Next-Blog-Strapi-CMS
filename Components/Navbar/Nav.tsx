import * as React from "react";
import Image from "next/image";
import logo from '@/public/ks.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

function Nav() {
    return (
        <main className={'flex items-center justify-center sm:justify-between space-x-2 sm:px-10 py-5 flex-wrap'}>
           <div className={'flex flex-col sm:flex-row items-center sm:space-x-2 sm:w-[50%] w-screen'}>
               <Image src={logo} alt={'A logo'} height={50} width={80} className={'rounded-full object-cover'}/>
               <p className={'font-navTitle text-3xl tracking-widest'}>Techie-Tech</p>
           </div>
            <div className={'flex px-5 py-3 space bg-gray-900 text-[#F7AB0A] text-center rounded-full items-center space-x-5 mt-[20px]'}>
                <Link href={'https://www.linkedin.com/in/khushaal-sajnani-1454311b2/'} target={'_blank'}><LinkedInIcon/></Link>
                <Link href={'https://github.com/KhushaalSajnani'} target={'_blank'}><GitHubIcon/></Link>
                <InstagramIcon/>
                <TwitterIcon/>
            </div>
        </main>
    );
}

export default Nav;