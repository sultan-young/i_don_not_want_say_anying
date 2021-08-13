const imgResource:Map<string, HTMLElement> = new Map();

export function loadImgResource(url: string): Promise<HTMLElement> {
    return new Promise((resolve)=> {
        const img = new Image()
        img.src = url;
        img.onload = ()=> {
            resolve(img)
        }
    })
}

export async function getImgByUrl(url: string) {
    return new Promise((resolve)=> {
        const result = imgResource.has(url)
        if(result) {
            resolve(imgResource.get(url))
        }else {
             loadImgResource(url).then((img)=> {
                 resolve(img)
             })
        }
    })
}