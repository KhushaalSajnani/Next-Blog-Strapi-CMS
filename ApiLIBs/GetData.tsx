export async function getData(){
    try{
        const resData = await fetch('http://localhost:1337/api/blogs?populate=*');
        const jsonData = await resData.json();
        return jsonData;
    }catch (e) {
        return {}
    }
}
export async function getSingleData(id: string|number){
    try{
        const resData = await fetch(`http://localhost:1337/api/blogs/${id}?populate=*`);
        const jsonData = await resData.json();
        console.log(`http://localhost:1337/api/blogs/${id}?populate=*`)
        return jsonData;
    }catch (e) {
        return {}
    }
}