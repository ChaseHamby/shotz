import {printMovie} from '../data/movieData.js'
import {printLocation} from '../data/locationsData.js'


const writeMovie = (arrayOfMovies) => {
    let domString = '';
    arrayOfMovies.forEach((movie) => {
      domString += `
      <div id="movieWrap" class="d-flex flex-row">
      <div class="col-5 m-2">
          <img src="${movie.Image}" alt="${movie.Name}" height="auto" width="193">
              <div id="${movie.id}">
              <h5 id="nameId">Name: ${movie.Name}</h5>
              <h6 class="genre"> Genre: ${movie.Genre}</h6>
              <h6 class="time">Release Date: ${movie.DateRelease}</h6>
              <h6 class="description">Description: ${movie.Description}</h6>
              <h7 class="location">Locations: ${movie.location_id}</h7>
            </div>
          </div>
      </div>
    `
    })
    $("#movie").append(domString);
};

// Click on movie function

const bindEvents1 = () => {
    $('#movie').on('click', (e) => {
      $('#mainPage').hide();
      $('#single-movie-page').show();
    })
  }
  bindEvents1();

// const initializeMovieView = (locationId) => {
//     loadMoviesWithLocations(locationId)
//         .then(data => {
//             writeMovie(data);
//             bindEvents();
//         })
//         .catch(error => {
//             console.error('this doesnt work', error);
//         })
// };

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


export {writeMovie}