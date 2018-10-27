import {initializeAction, initializeEverythingView} from './events.js'
// import {bindEvents} from './components/locationComponent.js'

const initializeApp = () => {
  initializeEverythingView()
  // initializeLocationView()
  initializeAction();
  // bindEvents();
}

initializeApp();