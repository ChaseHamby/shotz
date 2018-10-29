import {printMovie} from '../data/movieData.js'
import {printLocation} from '../data/locationsData.js'


const writeMovie = (arrayOfMovies) => {
    let domString = '';
    arrayOfMovies.forEach((movie) => {
      domString += `
      <div id="movieWrap" class="d-flex flex-row">
      <div class="col-5 movie-card m-2">
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

// Function below prints on single-movie page

const writeMovieDos = (arrayOfMovies) => {
    let domString = '';
    arrayOfMovies.forEach((movie) => {
      domString += `
      <div id="movieWrap" class="d-flex flex-row">
      <div class="col-5 movie-card m-2">
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
    $("#single-movie-page").append(domString);
};

// Click on movie function

const bindEvents1 = () => {
  $('body').on('click', (e) => {
    const clickedBoardId = $(e.target).closest('.movie-card').attr('id'); // attr targets the id within that specific div id
    $('#mainPage').hide();
    $('#single-movie-page').show();
    writeMovieDos(clickedBoardId)
  })
}
bindEvents1();


export {writeMovie, writeMovieDos}