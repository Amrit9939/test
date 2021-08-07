import {Meteor} from 'meteor/meteor';

// const socket = require('socket.io-client')('http://localhost:3000');
 const socket = new WebSocket('ws://localhost:3000');


 socket.on('connection');

Template.header.onRendered(()=> {



  // export const socket = new WebSocket('ws:localhost:3000/__meteor__hmr__/websocket');

 // $.getScript("https://cdn.socket.io/socket.io-3.0.1.min.js")
 // .done(function (script,textStatus){
 //   socket = io('http://localhost:3000')
 //   socket.on('connection')
 //
 //   console.log("in cdn");
 // })




  // Connection opened
  // socket.addEventListener('open', function (event) {
  //     console.log("connected to ws server");
  // });
  //
  // // Listen for messages
  // socket.addEventListener('message', function (event) {
  //     console.log('Message from server ', event.data);
  // });



   // alert("");
  $.getScript("/assets/js/jquery.min.js");


  $.getScript("/assets/revolution/js/jquery.themepunch.tools.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })


  $.getScript("/assets/revolution/js/jquery.themepunch.revolution.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })


  $.getScript("/assets/revolution/js/extensions/revolution.extension.actions.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })


  $.getScript("/assets/revolution/js/extensions/revolution.extension.carousel.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("assets/revolution/js/extensions/revolution.extension.kenburn.min.js")

  $.getScript("/assets/revolution/js/extensions/revolution.extension.layeranimation.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/revolution/js/extensions/revolution.extension.migration.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/revolution/js/extensions/revolution.extension.navigation.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/revolution/js/extensions/revolution.extension.parallax.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/revolution/js/extensions/revolution.extension.slideanims.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/revolution/js/extensions/revolution.extension.video.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/js/modernizr-2.8.3.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/js/odometer.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/js/jquery.appear.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/js/bootstrap.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/js/owl.carousel.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/js/slick.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/js/jquery.magnific-popup.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/js/aos.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/js/isotope.pkgd.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/js/imagesloaded.pkgd.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/js/wow.min.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/js/rsmenu-main.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/js/plugins.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })

  $.getScript("/assets/js/main.js")
  .done(function (script,textStatus){
  console.log(textStatus);
  })


})
