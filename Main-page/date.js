  // Function to update the current weekday and date
  function updateCurrentDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
   
    // Get the weekday and date elements
    const weekdayElement = document.getElementById('weekday');
    const dateElement = document.getElementById('date');

    // Set the text content
     weekdayElement.textContent = today.toLocaleString('en-US', { weekday: 'long' })+',';
    dateElement.textContent = today.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
}

// Call the function to display the date initially
updateCurrentDate();

// Update the date every second (1000 milliseconds)
setInterval(updateCurrentDate, 1000);