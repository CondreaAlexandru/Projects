const MovieDataBase = {
    url: "https://api.themoviedb.org/3/movie/",
    API: "293d0e4bf2cc5cbb6d249ee02685d93d",
    id: "597891"
}


const {url, API, id} = MovieDataBase;


const urlApi = `${url}${id}?api_key=${API}&language=ro-RO`;


fetch(urlApi)
    .then( (data) => data.json())
    .then( (movie) => movieHtml(movie) )

const movieHtml = (movieDB) => {
    const urlImg = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
    const urlImgBack = "https://www.themoviedb.org/t/p/original/"
    const movieDiv = `
        <h2>${movieDB.original_title}</h2>
        <img class="poster" src=${urlImg}${movieDB.poster_path}>
        <img class="poster2" src=${urlImgBack}${movieDB.backdrop_path}>
        <span></span>
        <div>Tag Line: ${movieDB.tagline === ""? "Not specifie" : movieDB.tagline }</div>
        <div>Description: ${movieDB.overview}</div>
        <div>Over 18+: ${movieDB.adult === false ? "No" : "Yes"}</div>
    `
    const wDiv = document.querySelector('.movieDb');
    wDiv.innerHTML = movieDiv;
}