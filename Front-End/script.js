reportForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const itemType = document.getElementById("itemType").value;
    const itemName = document.getElementById("itemName").value;
    const whenLost = document.getElementById("whenLost").value;
    const whereLost = document.getElementById("whereLost").value;
    const description = document.getElementById("description").value;
    const dateReported = document.getElementById("dateReported").value;

    // Store data in local storage
    localStorage.setItem('itemType', itemType);
    localStorage.setItem('itemName', itemName);
    localStorage.setItem('whenLost', whenLost);
    localStorage.setItem('whereLost', whereLost);
    localStorage.setItem('description', description);
    localStorage.setItem('dateReported', dateReported);

    // Redirect to another HTML page
    window.location.href = 'anotherPage.html';
});