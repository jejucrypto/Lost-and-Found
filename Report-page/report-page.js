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

document.addEventListener('DOMContentLoaded', ()=>{
  openNotification();
  openSettings(); 
  
});











