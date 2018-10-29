import {printMovie, moviesWithLocations, moviePromise} from './data/movieData.js'
import {printLocation} from './data/locationsData.js';
import {writeMovie, writeMovieDos} from './components/movieComponent.js';
import {writeLocation} from './components/locationComponent.js';
// import {initialMovieView} from './components/movieComponent.js'

// Final promise call for main.js //
const initializeEverythingView = () => {
  printMovie().then((data) => {
    writeMovie(data)
    writeMovieDos(data)
  })
  printLocation().then((data) => {
    writeLocation(data)
  })
  .then((data) => {
  })
  .catch((error) => {
    console.error(error)
  })
};

// Event Listeners for Buttons // 

$('body').on('click', 'button#morning', (e) => {
  $('.Morning').show();
  $('.Afternoon').hide();
  $('.Dark').hide();
  $('.Evening').hide();
})

$('body').on('click', 'button#afternoon', (e) => {
  $('.Afternoon').show();
  $('.Morning').hide();
  $('.Dark').hide();
  $('.Evening').hide();
})

$('body').on('click', 'button#dark', (e) => {
  $('.Dark').show();
  $('.Morning').hide();
  $('.Afternoon').hide();
  $('.Evening').hide();
})

$('body').on('click', 'button#evening', (e) => {
  $('.Evening').show();
  $('.Morning').hide();
  $('.Afternoon').hide();
  $('.Dark').hide();
})

// Search bar functionality // 
const initializeAction = () => {
  $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $("#locationSpace .delete").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
  };

export {initializeAction, initializeEverythingView};