async function fetchComicID(email: string) : Promise<string> {
    const params : URLSearchParams = new URLSearchParams();
    if (email) {
        params.append('email', email);
    }
    let url : string ='https://fwd.innopolis.app/api/hw2?' + params.toString()
    let resp : string = await fetch(url, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      }).then((r: Response) => r.json());
    return resp
}

async function requestSite(id: string) {
    let url : string = "https://getxkcd.vercel.app/api/comic?num="+id
    let resp = await fetch(url).then(r =>r.json());
    console.log(resp)
    let output : HTMLElement | null = document.getElementById("comic")
    let date : Date  = new Date(parseInt(resp.year),parseInt(resp.month)-1,parseInt(resp.day));
    let dat : string = date.toLocaleDateString('ru-RU');


    let img : HTMLImageElement = document.createElement("img")
    let img_src : Attr = document.createAttribute('src')
    let img_alt : Attr = document.createAttribute('alt')
    img_src.value = resp.img
    img_alt.value = resp.alt
    img.setAttributeNode(img_src)
    img.setAttributeNode(img_alt)
    
    
    let p1 : HTMLParagraphElement = document.createElement('p')
    p1.appendChild(document.createTextNode(dat))

    let h1 : HTMLHeadingElement = document.createElement('h1')
    h1.appendChild(document.createTextNode(resp.title))

    output?.appendChild(h1)
    output?.appendChild(img)
    output?.appendChild(p1)

}
fetchComicID("d.korneenko@innopolis.university").then(t => requestSite(t))