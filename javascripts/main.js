import {initializeAction} from './events.js'
import {initializeLocationView} from './components/locationComponent.js'

const initializeApp = () => {
  // initializeEverythingView()
  initializeLocationView()
  initializeAction();
}

initializeApp();