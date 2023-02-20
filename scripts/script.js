async function fetchComicID(email) {
    const params = new URLSearchParams();
    if (email) {
        params.append('email', email,true);
    }

    let url ='https://fwd.innopolis.app/api/hw2?' + params.toString()
    let resp = await fetch(url, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      }).then(r =>r.json());
    return resp
}

async function requestSite(id) {
    url = "https://getxkcd.vercel.app/api/comic?num="+id
    let resp = await fetch(url).then(r =>r.json());
    console.log(resp)
    let output = document.getElementById("comic")
    let date = new Date(parseInt(resp.year),parseInt(resp.month)-1,parseInt(resp.day));
    let dat = date.toLocaleDateString('ru-RU');


    let img = document.createElement("img")
    let img_src = document.createAttribute('src')
    let img_alt = document.createAttribute('alt')
    img_src.value = resp.img
    img_alt.value = resp.alt
    img.setAttributeNode(img_src)
    img.setAttributeNode(img_alt)
    
    
    let p = document.createElement('p')
    p.appendChild(document.createTextNode(dat))

    output.appendChild(img)

    output.appendChild(p)

}
fetchComicID("d.korneenko@innopolis.university").then(t => requestSite(t))