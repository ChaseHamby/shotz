import {writeMovie} from "../javascripts/components/movieComponent.js"
import {writeMovieDos} from "../javascripts/components/locationComponent.js"

const printLocation = () => {
  return new Promise ((resolve, reject) => {
  $.get('../db/locations.json')
  .done((data) => {
    console.log(data);
    resolve (writeMovieDos(data.locations));
  })
  .fail((error) => {
    console.error(error);
    reject(error)
  });
});
};

printLocation();

const printMovie = () => {
return new Promise ((resolve, reject) => {
$.get('../db/movie.json')
  .done((data2) => {
    resolve (writeMovie(data2.movie));
  })
  .fail((error) => {
    console.error(error);
    reject(error)
  });
});
};

export {printLocation, printMovie};