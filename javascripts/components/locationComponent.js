// import {initializeMovieView} from '../components/movieComponent.js'
import {printLocation} from '../data/locationsData.js'
// import {loadMoviesOnLocations} from '../data/movieData.js';

const writeLocation = (arrayOfLocations) => {
    let domString = '';
    arrayOfLocations.forEach((location) => {
        domString += `
      <div id="divWrap">
      <div class="${location.id} delete col-5 p-5">
          <img src="${location.Image}" alt="${location.Name}" height="auto" width="193">
              <div id="${location.locationId}">
              <h5 id="nameId">Name: ${location.Name}</h5>
              <h6 class="address"> Address: ${location.Address}</h6>
              <h6 class="time"> Time to Shoot: ${location.Time}</h6>
              <h6 class="description">Lighting: ${location.TimeOfDay}</h6>
            </div>
          </div>
      </div>
    `
    })
    $("#available").append(domString);
};

// Click back button function
const bindEvents2 = () => {
    $('#toMainPage').click(() => {
        $('#mainPage').show(); 
        $('#single-movie-page').hide(); 
    })
}
  bindEvents2();

  // const clickedMovieId = $(e.target).closest('.movie-card').attr('id');
  // console.log('not working', clickedMovieId)
  // $('#mainPage').hide();
  // $('#single-movie-page').show();
  // initializeMovieView(clickedMovieId);
  
// const initializeLocationView = () => {
//     printLocation().then((locations) => {
//       return loadMoviesOnLocations(locations);
//     }).then((moviesWithLocations) => {
//       writeLocation(moviesWithLocations);
//       bindEvents();
//     }).catch((error) => {
//       console.error(error);
//     })
//   }

  // $('.body').on('click', '#movieList', (e) => {
  //   console.log('no?');
  //   $('#mainPage').remove();
  // });
  
export {writeLocation}

