/* Owl carousel (карусель) */
$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
      dots: false,
      // loop: true,
      items: 3,
      responsive: {
         // breakpoint from 0 up
         0 : {
            items: 2,
            margin: 32,
            // stagePadding: 90,
         },
         // breakpoint from 480 up
         601 : {
             items: 2,
         },
         // breakpoint from 768 up
         1001 : {
             items: 3,
             margin: 48,
         },
     },
   });
 });

 /* Video */

 const videoBtn = document.querySelector('#video-btn');
 const videoPicture = document.querySelector('.video__picture');
 const videoWrapper = document.querySelector('.video');
 const video = document.querySelector('#video-file');

 videoWrapper.addEventListener('click', function ( ) {
   if (video.paused) {
      videoPicture.classList.add('none');
      videoWrapper.classList.remove('video-overlay');
      videoBtn.classList.add('none');
      video.play();
   } else {
      videoWrapper.classList.add('video-overlay');
      videoBtn.classList.remove('none');
      video.pause();
   }
 })

//  videoBtn.addEventListener('click', function ( ) {
//    if (video.paused) {
//       videoPicture.classList.add('none');
//       videoWrapper.classList.remove('video-overlay');
//       videoBtn.classList.add('none');
//       video.play();
//    } else {
//       videoWrapper.classList.add('video-overlay');
//       videoBtn.classList.remove('none');
//       video.pause();
//    }
//  })