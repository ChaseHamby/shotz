import {loadMovies} from '../data/movieData.js';
// import {loadLocationsOnMovies} from '../data/locationsData.js';
import {initialMovieView} from './movieComponent.js'

const writeMovieDos = (arrayOfMovies) => {
    let domString = '';
    arrayOfMovies.forEach((location) => {
        domString += `
        <div id="divWrap" >
        <div class="${location.id} delete mb-5 mt-5"
        <div class="${location.TimeOfDay} delete mb-5 mt-5"
        <div class="thumbnail">
            <img src="${location.Image}"
                alt="" width="20%">
            <div class="caption mb-5">
                <h4 id="nameId">${location.Name}</h4>
                <h6 class="address"> Address: ${location.Address}</h6>
                <h6 class="time">Time to Shoot: ${location.Time}</h6>
                <h6 class="light">Lighting: ${location.TimeOfDay}</h6>
                <div class="caption card-footer mb-5">
                 </div>
            </div>
      </div>
  </div>
  </div>
      `
    })
    $("#available").append(domString);
};


// const bindEvents = () => {
//     $('#available').on('click', '.location-card', (e) => {
//       const clickedLocationCard = $(e.target).closest('.location-card').attr('id');
//       $('#available').hide();
//       $('#pins-page').show();
//       initialMovieView(clickedLocationCard);
//     })
//   }

// const initializeLocationView = () => {
//     loadMovies().then((movies) => {
//         writeMovieDos(movies)
//         bindEvents();
//     }).catch((error) => {
//         console.error(error);
// });

