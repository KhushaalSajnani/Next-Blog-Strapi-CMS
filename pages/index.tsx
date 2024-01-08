import {getData} from "@/ApiLIBs/GetData";
import Banner from "@/Components/Banner/Banner";
import BlogContainer from "@/Components/Blog/BlogContainer";


export default function Home(props:any) {
    return(

        <main>
            <Banner/>
            <hr className={'mt-5'}/>
            <BlogContainer data={props.data}/>
            <footer className={'mt-[300px]'}></footer>
        </main>
    )
}

export const getServerSideProps = async () =>{
    let resData = await getData();
    console.log(resData.data);
    return{
        props:{
            data: resData.data
        }
    }
}

