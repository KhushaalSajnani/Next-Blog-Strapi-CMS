import {getSingleData} from "@/ApiLIBs/GetData";
import moment from 'moment';
function FindOne({data}:any){
    console.log(data)
    return<main className={'h-screen mt-10'}>
        <div>
            <p>{data.data.attributes.title}</p>
        </div>
        <p>
            {moment(data.data.attributes.publishedAt).format('MM/DD/YYYY')}
        </p>
        <div>
            <img src={`http://localhost:1337${data.data.attributes.coverimg.data.attributes.url}`} />
        </div>
        <p>
            {data.data.attributes.textarea_top[0].children[0].text}
        </p>
        <div>
            <img src={`http://localhost:1337${data.data.attributes.imageTwo.data.attributes.url}`} />
        </div>
        <p>
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

