export default function imageLoader({src, width, quality}:{
    src: string,
    width: number,
    quality: number,
}) {
    return  `https://eo-img.mint.ac.cn${src}`

}