async function fetchComicID(email) {
    const params = new URLSearchParams();
    if (email) {
        params.append('email', email);
    }
    let xhr = new XMLHttpRequest(); 
    let url ='https://fwd.innopolis.app/api/hw2?' + params.toString()
    xhr.open('GET', url)
    xhr.send()
    let responseObj;
    xhr.onload = function() {
        responseObj = xhr.responseText;
        alert(responseObj); 
    }
    return responseObj;
}

async function requestSite(mail) {

    let id = await fetchComicID(mail);    

    json = await fetch("https://xkcd.com/"+id+"/info.0.json").then(r =>r.json());
    console.log(result.month);
}

requestSite("d.korneenko@innopolis.university")