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
function cardfullDetails() {
  const boxesContainers = document.querySelectorAll('.card-item');
  const closeButton = document.getElementById('card-close');


  // Add click event listener to each container
  boxesContainers.forEach((container) => {
      container.addEventListener('click', () => {
          const overlay = document.getElementById('swiper-overlay');
          if (overlay) {
              overlay.style.display = 'flex';
          }
      });
  });

  // Close the full details of the card

  if (closeButton) {
      closeButton.addEventListener('click', () => {
          const overlay = document.getElementById('swiper-overlay');
          if (overlay) {
              overlay.style.display = 'none';
          }
      });
  }

  // Handle send message button click
  // const sendButton = document.querySelector('.message-send-btn');
  // if (sendButton) {
  //     sendButton.addEventListener('click', () => {
  //         const messageInput = document.querySelector('.message-input');
  //         const message = messageInput.value;
  //         if (message) {
  //             // Here you can handle the message (e.g., send it to a server or display it)
  //             console.log("Message sent:", message);
  //             messageInput.value = ''; // Clear the input after sending
  //         } else {
  //             alert("Please enter a message before sending.");
  //         }
  //     });
  // }
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
      bellIcon.style.color = '#282828'; // Change to your desired color
    } else {
      notificationContainer.style.display = 'none'; // Hide the container
      bellIcon.classList.remove('active'); // Remove active class
      bellIcon.style.color = ''; // Reset to original color
    }
  });

}

function openSettings(){
    const settingsBtn = document.getElementById('settings-btn');
    const settingsDropdown = document.querySelector('.dropdown-content');

    settingsDropdown.style.display = 'none';

    settingsBtn.addEventListener('click',()=>{
          if(getComputedStyle(settingsDropdown).display==='none'){
            settingsDropdown.style.display ='block';

          }else{
            settingsDropdown.style.display ='none';
          }
    });

}
function cardOpenMessage(){
  const messageBtn = document.getElementById('card-message-btn');
  const messageOverlay = document.getElementById('card-message-overlay');
  const messageCloseBtn = document.getElementById('card-close-btn-message-overlay');

  messageOverlay.style.display = 'none';

  messageBtn.addEventListener('click',()=>{
        if(getComputedStyle(messageOverlay).display==='none'){
            messageOverlay.style.display ='flex';
        }else{
            messageOverlay.style.display = 'none';
        }
  });

  if(messageCloseBtn){
      messageCloseBtn.addEventListener('click',()=>{
        if(messageOverlay){
          messageOverlay.style.display='none';
        }  
      });
  }
}



// Ensure the function runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', ()=>{
  cardSwiper();
  openNotification();
  openSettings(); 
  cardfullDetails();
  cardOpenMessage()
});








