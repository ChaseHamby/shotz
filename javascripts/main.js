import {printLocation, printMovie, initializeAction} from './events.js'

const initializeApp = () => {
  printLocation();
  printMovie();
  initializeAction();
}

initializeApp();