function displayAndHandleReportedItems() {
    const lostSection = document.getElementById("lostSection");
    const foundSection = document.getElementById("foundSection");
    const fullDetails = document.getElementById('overlay-content');
    const overlay = document.getElementById('overlay');
    let countBoxesLost = 0;
    let countBoxesFound = 0;

    lostSection.innerHTML = "";
    foundSection.innerHTML = ""; // Clear existing items

    // Retrieve reports from localStorage
    const reports = JSON.parse(localStorage.getItem("reports")) || [];

    // Loop through each report and create a box for it
    reports.forEach(report => {
        // If the status is Lost
        if (report.itemType === 'lost' && countBoxesLost < 6) {
            let html = `
            <div class="boxes-container">
                <div class="item-lost-txt">Item Lost:</div>
                <div class="item-lost-name">${report.itemName.charAt(0).toUpperCase() + report.itemName.slice(1)}</div>
                <div class="item-status">Status: ${report.itemType.charAt(0).toUpperCase() + report.itemType.slice(1)}</div>
                <div class="date-reported-text">Date Reported: ${report.dateReported}</div>
            </div>
            `;
            lostSection.innerHTML += html;
            countBoxesLost++;
        } else if (report.itemType === 'found' && countBoxesFound < 6) { // If the status is Found
            let html = `
            <div class="boxes-container">
                <div class="item-lost-txt">Item Lost:</div>
                <div class="item-lost-name">${report.itemName.charAt(0).toUpperCase() + report.itemName.slice(1)}</div>
                <div class="item-status">Status: ${report.itemType.charAt(0).toUpperCase() + report.itemType.slice(1)}</div>
                <div class="date-reported-text">Date Reported: ${report.dateReported}</div>
            </div>
            `;
            foundSection.innerHTML += html;
            countBoxesFound++;
        }
    });

    // Add click event listener to each container || it will open the FULL DETAILS
    const boxesContainers = document.querySelectorAll('.boxes-container');
    boxesContainers.forEach((container) => {
        container.addEventListener('click', () => {
            if (overlay) {
                let html = `<div class="item-lost-name text-center my-1 mb-4">
                                          <h3 class="fw-bold">ID</h3>
                                    </div>
                                    <div class="description-container">
                                          <p class="fw-bold fs-5 mb-3">Description:</p>
                                          <p class="mt-0">&#8195;&#8195;&#8195;The ID is found at Centrum.Gwapo
                                                ang ID.Kuwaa lang didto sa SSG office kung mo claim</p>
                                    </div>
                                    <div class="etc-labels">
                                          <p class="m-0">When: December 9,2024</p>
                                          <p class="m-0">Status: Found</p>
                                          <p class="m-0">Owner: Godwin H. Tamayo</p>
                                          <p class="m -0">Date Reported: December 18,2024</p>
                                    </div>
                                   
                              `;
                fullDetails.innerHTML+= html;// Clear previous content and set new content
                overlay.style.display = 'flex';

                const closeButton = document.getElementById('close');
                // Close the full details of the card
                if (closeButton) {
                    closeButton.addEventListener('click', () => {
                        if (overlay) {
                            overlay.style.display = 'none';
                        }
                    });
                }

                // Create the message overlay 
            //    const messageOverlay = document.createElement('div');
            //     messageOverlay.className = 'message-overlay';
            //     messageOverlay.id = 'message-overlay';
            //     messageOverlay.style.display = 'none'; // Initially hidden

            //     messageOverlay.innerHTML = `
            //         <div class="message-design-top">
            //             <div class="close-btn-message-overlay-container">
            //                 <button class="close-btn-message-overlay" id="close-btn-message-overlay">
            //                     <i class="fa-solid fa-arrow-left fa-xl"></i>
            //                 </button>
            //             </div>
            //             <img src="/Front-End/Reference/ctu-danao-campus.jpg" class="message-user-profile">
            //             <div class="message-user-name fw-bold fs-6">User  Name</div>
            //         </div>
            //         <div class="message-chat-container">
            //             <!-- Chat entries will be dynamically added here -->
            //         </div>
            //         <div class="message-design-bottom">
            //             <div class="message-upload-pic-container">
            //                 <button class="message-upload-pic-btn">
            //                     <i class="fa-regular fa-upload fa-lg"></i>
            //                 </button>
            //             </div>
            //             <div class="message-input-container">
            //                 <input id="inputMessagesSection" type="text" class="message-input" placeholder="Input messages...">
            //             </div>
            //             <div class="message-send-container">
            //                 <button class="message-send-btn">
            //                     <i class="fa-regular fa-arrow-right fa-lg"></i>
            //                 </button>
            //             </div>
            //         </div>
            //     `;

            //     document.body.appendChild(messageOverlay); // Append the message overlay to the body

            //     const messageBtn = document.getElementById('message-btn');
            //     messageBtn.addEventListener('click', () => {
            //         messageOverlay.style.display = (messageOverlay.style.display === 'none') ? 'flex' : 'none';
            //     });

            //     const messageCloseBtn = document.getElementById('close-btn-message-overlay');
            //     messageCloseBtn.addEventListener('click', () => {
            //         messageOverlay.style.display = 'none';
            //     });
            }
        });
    });
}

window.onload = displayAndHandleReportedItems;