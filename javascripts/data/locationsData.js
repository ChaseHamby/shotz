import {writeLocation} from "../components/locationComponent.js"

const printLocation = () => {
    return new Promise ((resolve, reject) => {
    $.get('../db/locations.json')
    .done((data) => {
      resolve ((data.locations));
    })
    .fail((error) => {
      console.error(error);
      reject(error)
      });
  });
};


export {printLocation}
