import BlogCard from "@/Components/BlogCard/BlogCard";
import {blogDetailsStrapi} from "@/DataMap.d";


const BlogContainer = ({data}:any) => {
    return <div className={'flex sm:justify-evenly justify-center flex-wrap w-[100%]'}>
        {data.map((blog: any) =>
            <BlogCard id={blog.id} coverImg={blog.attributes.coverimg.data.attributes.url} title={blog.attributes.title}/>
        )}
    </div>
}

export default BlogContainer;