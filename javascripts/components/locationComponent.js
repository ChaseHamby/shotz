// import {initializeMovieView} from '../components/movieComponent.js'
import {printLocation} from '../data/locationsData.js'
// import {loadMoviesOnLocations} from '../data/movieData.js';
import {initializeAction} from '../events.js'



const writeLocation = (arrayOfLocations) => {
    let domString = '';
    arrayOfLocations.forEach((location) => {
        domString += `
         <div id="divWrap" class="divWrapper delete ${location.TimeOfDay}">
        <div class="${location.TimeOfDay} delete col-5 p-5"
        <div class="thumbnail p-3">
            <img src="${location.Image}"
                alt="" width="100%">
            <div class="caption ml-5">
                <h4 id="nameId" class="centerText">Name: ${location.Name}</h4>
                <h6 class="address" Location: >${location.Address}</h6>
                <h6 class="time">Time For Shot: ${location.Time}</h6>
                <h6 class="light">Lighting: ${location.TimeOfDay}</h6>
                </div>
            </div>
        </div>
    </div>`
    })
    $("#locationSpace").append(domString);
    initializeAction();
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

export {writeLocation}

