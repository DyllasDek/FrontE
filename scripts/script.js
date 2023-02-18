async function fetchComicID(email) {
    const params = new URLSearchParams();
    if (email) {
        params.append('email', email,true);
    }


    let xhr = new XMLHttpRequest(); 
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
    url = "https://cors-anywhere.herokuapp.com/https://xkcd.com/"+id+"/info.0.json"
    let resp = await fetch(url, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      }).then(r =>r.json());
    console.log(resp)
    let output = document.createElement("div")
    let date = new Date(parseInt(resp.year),parseInt(resp.month)-1,parseInt(resp.day));
    let dat = date.toLocaleDateString('ru-RU');
  
    
    output.innerHTML = 
    '<img src='+resp.img+' alt='+resp.alt+'>\n\
     <h3>'+dat+'</h3>                       \n\
    ';
    
    let out = document.getElementById("comic")
    out.appendChild(output)
}
fetchComicID("d.korneenko@innopolis.university").then(t => requestSite(t))