import {printMovie, loadMoviesWithLocations} from '../data/movieData.js'
import {printLocation} from '../data/locationsData.js'


const writeMovie = (arrayOfMovies) => {
    let domString = '';
    arrayOfMovies.forEach((movie) => {
      domString += `
      <div id="movieWrap">
      <div class="d-flex flex-row p-2">
      <div class="card">
        <div class="movie-card col-md-offset-3 p-2">
        <div class="thumbnail">
          <div class="caption">
            <div id="${movie.id}">
              <h6 id="name1">Name : ${movie.Name}</h6>
              <h6 id="genre1">Genre : ${movie.Genre}</h6>
              <h6 id="date1">Date Release : ${movie.Name}</h6>
              <h6 id="description1">Description : ${movie.Description}</h6>
              <h6 id="locations">Locations : ${movie.Locations}</h6>
            </div>
            </div>
         </div>
        </div>
       </div>
      `
    })
    $("#movie").append(domString);
};

const bindEvents = () => {
    $('#toMainPage').click(() => {
        $('#mainPage').show(); 
        $('#single-movie-page').hide(); 
    })
}

const initializeMovieView = (locationId) => {
    loadMoviesWithLocations(locationId)
        .then(data => {
            writeMovie(data);
            bindEvents();
        })
        .catch(error => {
            console.error('this doesnt work', error);
        })
};

// const loadMovieLocations = (movieId) => {
//     movieLocations(movieId)
//     .then((movieLocations) => {
//         return setMovieLocations(movieLocations);
//     })
//     .then((moviesWithLocations) => {
//         printLocation(moviesWithLocations);
//     })
//     .catch((error) => {
//         console.error("initialMovieView error", error);
//     })
// }


export {writeMovie, initializeMovieView}