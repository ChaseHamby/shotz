import {printLocation} from "../events.js"

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