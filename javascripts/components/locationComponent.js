import {initializeMovieView} from '../components/movieComponent.js'
import {printLocation} from '../data/locationsData.js'
import {loadMoviesOnLocations} from '../data/movieData.js';

const writeLocation = (arrayOfLocations) => {
    let domString = '';
    arrayOfLocations.forEach((location) => {
        domString += `
        <div id="divWrap">
        <div class="${location.TimeOfDay} delete mb-5 mt-5">
        <div class="thumbnail">
            <img src="${location.Image}"
                alt="" width="20%">
            <div class="caption mb-5">
                <div id="${location.locationId}">
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
       </div>
      `
    })
    $("#available").append(domString);
};

const bindEvents = () => {
    $('#movie').on('click', '.movie-card', (e) => {
      const clickedMovieId = $(e.target).closest('.movie-card').attr('id');
      $('#mainPage').hide();
      $('#single-movie-page').show();
      initializeMovieView(clickedMovieId);
    })
  }
  
const initializeLocationView = () => {
    printLocation().then((locations) => {
      return loadMoviesOnLocations(locations);
    }).then((moviesWithLocations) => {
      writeLocation(moviesWithLocations);
      bindEvents();
    }).catch((error) => {
      console.error(error);
    })
  }
  

export {writeLocation, initializeLocationView}

