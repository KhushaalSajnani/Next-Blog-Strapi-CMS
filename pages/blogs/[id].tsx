import {getSingleData} from "@/ApiLIBs/GetData";
import moment from 'moment';
import Image from "next/image";
function FindOne({data}:any){
    return<main className={'mt-10'}>
        <div>
            <p className={'font-blog-title sm:text-5xl text-5xl text-center sm:py-10'}>{data.data.attributes.title}</p>
        </div>
        <div className={'mt-5 mb-5'}>
            <img className={'sm:h-[500px] sm:mx-auto object-contain object-center'} src={`http://localhost:1337${data.data.attributes.coverimg.data.attributes.url}`} />
        </div>
        <p className={'text-gray-500 italic ml-4'}>
            Published: {moment(data.data.attributes.publishedAt).format('MM/DD/YYYY')}
        </p>
        <div>
            <p className={'font-blog-title text-2xl text-center mt-10 mb-10 sm:py-10'}>
                {data.data.attributes.textarea_top[0].children[0].text}
            </p>
        </div>
        <div className={'mt-5 mb-5'}>
            <img className={'sm:h-[500px] sm:mx-auto object-contain object-center'} src={`http://localhost:1337${data.data.attributes.imageTwo.data.attributes.url}`} />
        </div>
        <p className={'font-blog-title text-2xl text-center mt-10 mb-10 sm:py-10'}>
            {data.data.attributes.textarea_bottom[0].children[0].text}
        </p>
    </main>
}

export default FindOne;


export async function getServerSideProps(context: any){
    const {params} = context;
    const blogData = await getSingleData(params.id)
    console.log(blogData)

    if(blogData.data === null){
        return {
            notFound: true
        }
    }

    return{
        props:{
            data:blogData
        }
    }
}

