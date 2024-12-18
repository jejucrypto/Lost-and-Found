//  Card swiper
 new Swiper('.card-wrapper', {  

  loop: true,
  spaceBetween:30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//  Responsive Breakpoints

    breakpoints:{
      0:{
        slidesPerView : 1 
      },
      768:{
        slidesPerView : 2 
      },
      1024:{
        slidesPerView : 3 
      },

    }
});
const boxesContainers = document.querySelectorAll('.boxes-container');

boxesContainers.forEach(boxesContainers=>{
                boxesContainers.addEventListener('click',()=>{
                  const overlay = document.getElementById('overlay');
  overlay.style.display = 'flex'; // Show the overlay
                });
});

// boxesContainers.addEventListener('click', function() {
//   const overlay = document.getElementById('overlay');
//   overlay.style.display = 'flex'; // Show the overlay
// });

document.getElementById('close').addEventListener('click', function() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none'; // Hide the overlay
});