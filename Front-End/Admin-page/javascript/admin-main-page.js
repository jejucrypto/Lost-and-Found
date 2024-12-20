function cardSwiper() {
  new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive Breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
    }
  });
}

// FOR FULL DETAILS WHEN CLICKED THE CARD
function fullDetails() {
  const boxesContainers = document.querySelectorAll('.boxes-container');

  // Add click event listener to each container
  boxesContainers.forEach((container) => {
    container.addEventListener('click', () => {
      const overlay = document.getElementById('overlay');
      if (overlay) {
        overlay.style.display = 'flex';
      }
    });
  });

  // Close the full details of the card
  const closeButton = document.getElementById('close');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      const overlay = document.getElementById('overlay');
      if (overlay) {
        overlay.style.display = 'none';
      }
    });
  }

}
function openNotification() {
  const notificationBellBtn = document.getElementById('notification-bell-btn');
  const notificationContainer = document.querySelector('.notification-container');
  const bellIcon = notificationBellBtn.querySelector('i'); // Select the bell icon

  // Initially hide the notification container
  notificationContainer.style.display = 'none';

  notificationBellBtn.addEventListener('click', () => {
    // Toggle the display of the notification container
    if (getComputedStyle(notificationContainer).display === 'none') {
      notificationContainer.style.display = 'block'; // Show the container 
      bellIcon.classList.add('active'); // Add active class
      // bellIcon.style.color = '#282828'; // Change to your desired color
    } else {
      notificationContainer.style.display = 'none'; // Hide the container
      bellIcon.classList.remove('active'); // Remove active class
      // bellIcon.style.color = ''; // Reset to original color
    }
  });
}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', openNotification);

openNotification();