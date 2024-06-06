// movie App => API => fetch the details of any movie that we want

// trending movies of the year
// genere=> thriller, drama, comedy
// fetch the most rated imdb movies


let api='https://www.omdbapi.com/?apikey=9b4fe2b1&t='
// fetch(api).then((data)=>{
//     return data.json()
// }).then((data)=>{
//     console.log(data)
// })
let title = document. querySelector('#title');
let released = document. querySelector('#released');
let genre = document. querySelector('#genre');
let director = document. querySelector('#director');
let writer = document. querySelector('#writer');
let actors = document. querySelector('#actors');
let desc = document. querySelector('#desc');
let language = document. querySelector('#language');
let awards = document. querySelector('#awards');
let poster = document. querySelector('#poster');
let imdbRating = document. querySelector('#imdbRating');
let boxOffice = document. querySelector('#boxOffice');


function search(){
    let movieInput=document.querySelector('#movieName');
    let query=api + movieInput.value;
    fetch(query).then(data=>data.json()).then(data=>{
        title.innerText = data.Title;
        released.innerText = data.Released;
        genre.innerText = data.Genre;
        director.innerText = data.Director;
        writer.innerText = data.Writer;
        actors.innerText = data.Actors;
        desc.innerText = data.Plot;
        language.innerText = data.Language;
        awards.innerText = data.Awards;
        imdbRating.innerText = data.imdbRating;
        boxOffice.innerText = data.BoxOffice;
        poster.src= data.Poster;
    })
}
