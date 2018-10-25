import {writeLocation} from "../components/locationComponent.js"

const printLocation = () => {
    return new Promise ((resolve, reject) => {
    $.get('../db/locations.json')
    .done((data) => {
      resolve (writeLocation(data.locations));
    })
    .fail((error) => {
      console.error(error);
      reject(error)
      });
  });
};

export {printLocation}
