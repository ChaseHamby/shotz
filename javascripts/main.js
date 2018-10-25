import {initializeAction, initializeEverythingView} from './events.js'

const initializeApp = () => {
  initializeEverythingView()
  initializeAction();
}

initializeApp();