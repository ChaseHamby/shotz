import {printLocation} from "../events.js"

  $('body').on('click', 'button#morning', (e) => {
    $('.Afternoon').hide();
    $('.Dark').hide();
    $('.Evening').hide();
  })

  $('body').on('click', 'button#afternoon', (e) => {
    $('.Morning').hide();
    $('.Dark').hide();
    $('.Evening').hide();
  })

  $('body').on('click', 'button#dark', (e) => {
    $('.Morning').hide();
    $('.Afternoon').hide();
    $('.Evening').hide();
  })
  
  $('body').on('click', 'button#evening', (e) => {
    $('.Morning').hide();
    $('.Afternoon').hide();
    $('.Dark').hide();
  })