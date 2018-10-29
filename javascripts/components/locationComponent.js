// import {printMovie, moviesWithLocations, moviePromise} from './data/movieData.js'
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

// Click back button function //

const backButton = () => {
    $('#toMainPage').click(() => {
        $('#mainPage').show(); 
        $('#single-movie-page').hide(); 
    })
}
  backButton();

export {writeLocation}

