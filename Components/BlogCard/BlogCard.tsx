import Button from '@mui/material/Button';
import Link from "next/link";

function BlogCard(props:any) {
    console.log(props)
    return (
        <div className={"h-[450px] sm:w-[450px] w-[90%] shadow-2xl sm:m-10 mb-10 mt-10 flex flex-col justify-evenly"}>
            <div>
                <img
                    src={`http://127.0.0.1:1337${props.coverImg}`}
                    className={"object-cover h-[350px] w-[100%]"}
                />
            </div>
            <div>
                <p className={"tracking-widest truncate text-ellipsis overflow-hidden "}>{props.title}</p>
            </div>
            <Link href={`/blogs/${props.id}`} className={'flex items-center justify-center'}><Button color={'primary'}> Read More </Button></Link>
        </div>
    );
}

export default BlogCard;