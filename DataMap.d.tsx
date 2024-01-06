export type dataCardStrapi = {
    title:string,
    img:string,
    coverImg:string
}

export type blogDetailsStrapi = {
    id:string | number,
    title:string,
    img:string,
    textAreaTop:string,
    textAreaBottom?:string,
    coverImg:string,
    imageTwo?:string
}