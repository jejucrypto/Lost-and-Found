 // Function to display reported items
 function displayReportedItems() {
    const lostSection = document.getElementById("lostSection");
    const foundSection = document.getElementById("foundSection");
 

    lostSection.innerHTML = ""; // Clear existing items

    // Retrieve reports from localStorage
    const reports = JSON.parse(localStorage.getItem("reports")) || [];

    // Loop through each report and create a box for it
    reports.forEach(report => {
       // If the status is Lost
     if(report.itemType === 'lost'){
        let html=` 
        <div class="boxes-container">
            <div class="item-lost-txt">Item Lost:</div>
            <div class="item-lost-name">${report.itemName.charAt(0).toUpperCase()+report.itemName.slice(1)}</div>
            <div class="item-status">Status: ${report.itemType.charAt(0).toUpperCase() + report.itemType.slice(1)}</div>
            <div class="date-reported-text">Date Reported: ${report.dateReported}</div>
          
        </div>
        `;
            lostSection.innerHTML+=html;
     }
        
    });
}

// Call the function to display items when the page loads
window.onload = displayReportedItems;



  

