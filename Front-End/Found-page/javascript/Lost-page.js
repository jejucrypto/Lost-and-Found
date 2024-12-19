
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