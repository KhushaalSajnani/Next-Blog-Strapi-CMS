import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import * as React from "react";
import {ReactNode} from "react";

type LinkProps = {
    // Link: HTMLAnchorElement,
    children: ReactNode
}

export default function LinkMapping({children}:LinkProps){
    return<>
        {children}
    </>
}

export const Linkedin = () =>{
    return <LinkMapping>
        <Link href={'https://www.linkedin.com/in/khushaal-sajnani-1454311b2/'} target={'_blank'}><LinkedInIcon/></Link>
    </LinkMapping>
}
export const Github = () =>{
    return <LinkMapping>
        <Link href={'https://github.com/KhushaalSajnani'} target={'_blank'}><GitHubIcon/></Link>
    </LinkMapping>
}
export const Insta = () =>{
    return <LinkMapping>
        <Link href={'https://github.com/KhushaalSajnani'} target={'_blank'}><InstagramIcon/></Link>
    </LinkMapping>
}
export const Xt = () =>{
    return <LinkMapping>
        <Link href={'https://github.com/KhushaalSajnani'} target={'_blank'}><TwitterIcon/></Link>
    </LinkMapping>
}