
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
  document.addEventListener('DOMContentLoaded', () => {
    const notificationBellBtn = document.getElementById('notification-bell-btn');
    const notificationContainer = document.querySelector('.notification-container');
    const bellIcon = notificationBellBtn.querySelector('i'); // Select the bell icon

    // Initially hide the notification container
    notificationContainer.style.display = 'none';

    notificationBellBtn.addEventListener('click', () => {
      // Toggle the display of the notification container
      if (notificationContainer.style.display === 'none' || notificationContainer.style.display === '') {
        notificationContainer.style.display = 'block'; // Show the container 
        bellIcon.classList.add('active'); // Add active class
        // bellIcon.style.color = '#282828'; // Change to your desired color
      } else {
        notificationContainer.style.display = 'none'; // Hide the container
        bellIcon.classList.remove('active'); // Remove active class
        // bellIcon.style.color = ''; // Reset to original color
      }
    });
  });
}
fullDetails();
openNotification();