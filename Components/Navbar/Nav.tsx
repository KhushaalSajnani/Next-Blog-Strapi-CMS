import * as React from "react";
import Image from "next/image";
import logo from '@/public/ks.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import {Github, Insta, Linkedin, Xt} from "@/Components/Navbar/LinkMapping";
import { motion } from "framer-motion";
import {Links} from "@/Components/Navbar/LinkJSON";


const fadeInAnimationVariants= {
    initial:{
        scale:0,
        opacity:0
    },
    animate: (indexValueFromCustom: number) => ({
        opacity: 1,
        scale:[1,2,0,1.5,1],
        transition:{
            delay:0.5 * indexValueFromCustom
        }
    })
}

function Nav() {
    return (
        <main className={'flex items-center justify-center sm:justify-between space-x-2 sm:px-10 py-5 flex-wrap'}>
           <div className={'flex flex-col sm:flex-row items-center sm:space-x-2 sm:w-[50%] w-screen'}>
               <Image src={logo} alt={'A logo'} height={50} width={80} className={'rounded-full object-cover'}/>
               <p className={'font-navTitle text-3xl tracking-widest'}>Techie-Tech</p>
           </div>
            <section>
                <ul  className={'flex px-5 py-3 space bg-gray-900 text-[#F7AB0A] text-center rounded-full items-center space-x-5 mt-[20px]'}>
                    {Links.map((url) => (
                        <>
                            <motion.li key={url.id}
                                variants={fadeInAnimationVariants} initial={"initial"} animate={"animate"} viewport={{once:true}}
                                       custom={url.id}
                            >
                                <url.link />
                            </motion.li>
                        </>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Nav;
