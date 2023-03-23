<script lang="ts">
  import "./info.css"
  export let email : string = "d.korneenko@innopolis.university"
  async function fetchComicID(email: string) : Promise<string> {
    const params : URLSearchParams = new URLSearchParams();
    if (email) {
        params.append('email', email);
    }
    let url : string ='https://fwd.innopolis.app/api/hw2?' + params.toString()
    let resp : string = await fetch(url).then((r: Response) => r.json());
    return resp
  }

  let dat : string;
  let img_src : string;
  let img_alt : string;
  let title : string;
  interface Joke {
    alt: string;
    day: string;
    month: string;
    year: string;
    img: string;
    title: string;
  }

  async function requestSite(nick: string) {
    let id : string = await fetchComicID(nick)
    let url : string = "https://getxkcd.vercel.app/api/comic?num="+id
    let resp : Joke = await fetch(url).then(r =>r.json());
    console.log(resp)

    let date : Date  = new Date(parseInt(resp.year),parseInt(resp.month)-1,parseInt(resp.day));

    dat = date.toLocaleDateString('ru-RU');
    img_src = resp.img
    img_alt = resp.alt
    title = resp.title
  }
  let comic = requestSite(email)
</script>

<div class="info" id="comic">
{#await comic}
  <h1>Waiting comic to load...</h1>
{:then _}
    <h1>{title}</h1>
    <img src = {img_src} alt = {img_alt} />
    <p>{dat}</p>
{:catch error}
<p style="color: red">{error.message}</p>
{/await}
</div>


