import {writeMovie} from "../javascripts/components/movieComponent.js"
import {writeMovieDos} from "../javascripts/components/locationComponent.js"

$.get('../db/movie.json')
  .done((data) => {
    console.log(data);
    writeMovie(data.movie);
  })
  .fail((error) => {
    console.error(error);
  });

// Location below //

const printLocation = () => {
  $.get('../db/locations.json')
  .done((data) => {
    console.log(data);
    writeMovieDos(data.locations);
  })
  .fail((error) => {
    console.error(error);
  });
};

printLocation();

