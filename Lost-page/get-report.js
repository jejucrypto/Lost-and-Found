function displayAndHandleReportedItems() {
    const lostSection = document.getElementById("lostSection");
    const fullDetails = document.getElementById('overlay-content');
    const overlay = document.getElementById('overlay');


    lostSection.innerHTML = "";
 // Clear existing items
    fullDetails.innerHTML = "";

    // Retrieve reports from localStorage
    const reports = JSON.parse(localStorage.getItem("reports")) || [];

    // Loop through each report and create a box for it
    reports.forEach(report => {
        // If the status is Lost
        if (report.itemType === 'lost') {
            let html = `
            <div class="boxes-container" data-item-name="${report.itemName}" data-report='${JSON.stringify(report)}'>
                <div class="item-lost-txt">Item Lost:</div>
                <div class="item-lost-name">${report.itemName.charAt(0).toUpperCase() + report.itemName.slice(1)}</div>
                <div class="item-status">Status: ${report.itemType.charAt(0).toUpperCase() + report.itemType.slice(1)}</div>
                <div class="date-reported-text">Date Reported: ${report.dateReported}</div>
            </div>
            `;
            lostSection.innerHTML += html;
        } 
    });

    // Add click event listener to each container || it will open the FULL DETAILS
    const boxesContainers = document.querySelectorAll('.boxes-container');
    boxesContainers.forEach((container) => {
        container.addEventListener('click', () => {
            const report = JSON.parse(container.getAttribute('data-report'));
            if (overlay) {
                // Clear previous content
                fullDetails.innerHTML = `
                    <div class="item-lost-name text-center my-1 mb-4">
                        <h3 class="fw-bold">${report.itemName.charAt(0).toUpperCase() + report.itemName.slice(1)}</h3>
                    </div>
                    <div class="description-container">
                        <p class="fw-bold fs-5 mb-3">Description:</p>
                        <p class="mt-0">&#8195;&#8195;&#8195;${report.description.charAt(0).toUpperCase() + report.description.slice(1)}</p>
                    </div>
                    <div class="etc-labels">
                        <p class="m-0">When: ${report.whenLost.charAt(0).toUpperCase() + report.whenLost.slice(1)}</p>
                        <p class="m-0">Status: ${report.itemType.charAt(0).toUpperCase() + report.itemType.slice(1)}</p>
                        <p class="m-0">Date Reported: ${report.dateReported}</p>
                    </div>
                    <div class ="close-message-buttons" id="close-message-buttons">
                        <button class="close-button" id="close">Close</button>
                        <button class="message-button" id="message-btn">Message</button>
                    </div>
                `;
                overlay.style.display = 'flex';

                const closeButton = document.getElementById('close');
                // Close the full details of the card
                if (closeButton) {
                    closeButton.onclick = () => {
                        overlay.style.display = 'none';
                    };
                }

                const messageButton = document.querySelectorAll('.message-button');
                const messageOverlay = document.getElementById('message-overlay');

                // Open the Message Overlay
                messageButton.forEach((clickedMesage) => {
                    clickedMesage.addEventListener('click', () => {
                        if (messageOverlay) {
                            messageOverlay.innerHTML = `
                            
                                <div class="message-design-top">
                                    <div class="close-btn-message-overlay-container">
                                        <button class="close-btn-message-overlay" id="close-btn-message-overlay">
                                            <i class="fa-solid fa-arrow-left fa-xl"></i>
                                        </button>
                                    </div>
                                    <img src="/Reference/ctu-danao-campus.jpg" class="message-user-profile">
                                    <div class="message-user-name fw-bold fs-6">User  Name</div>
                                </div>
                                <div class="message-chat-container">
                                     <!-- USER1  RIGHT SIDE -->
                                                      <div class="chat-container-inner">
                                                            <div class="user-chat-container ">
                                                                  <img src="/Reference/ctu-danao-campus.jpg"
                                                                        class="user-chat-profile">
                                                                  <div class="user-chat-container-content-outer">
                                                                        <p class="user-chat-name">Jiji De Guzaro
                                                                        </p>
                                                                        <div class="user-chat-container-content">
                                                                              <p class="chats">EYyyy</p>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <!--  USER2 LEFT SIDE -->
                                                      <div class="chat-container-inner chat-container-inner-user2">
                                                            <div class="user-chat-container">
                                                                  <div class="user-chat-container-content-outer"
                                                                        style="align-items: flex-end;">
                                                                        <p class="user-chat-name">Momo Ayase</p>
                                                                        <div class="user-chat-container-content">
                                                                              <p class="chats">
                                                                                    asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
                                                                              </p>
                                                                        </div>
                                                                  </div>
                                                                  <img src="/Reference/ctu-danao-logo.png"
                                                                        class="user-chat-profile"
                                                                        style=" margin-left:15px;">
                                                            </div>
                                                      </div>
                                </div>
                                <div class="message-design-bottom">
                                    <div class="message-upload-pic-container">
                                        <button class="message-upload-pic-btn">
                                            <i class="fa-regular fa-upload fa-lg"></i>
                                        </button>
                                    </div>
                                    <div class="message-input-container">
                                        <input id="message-input2" type="text" class="message-input" placeholder="Input messages...">
                                    </div>
                                    <div class="message-send-container">
                                        <button class="message-send-btn">
                                            <i class="fa-regular fa-arrow-right fa-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            `;

                            // Show the message overlay
                            messageOverlay.style.display = 'flex';

                            const closeBtnMessageOverlay = document.getElementById('close-btn-message-overlay');
                            if (closeBtnMessageOverlay) {
                                closeBtnMessageOverlay.onclick = () => {
                                    messageOverlay.style.display = 'none';
                                };
                            }
                        }
                    });

                })


            }
        });
    });
}

window.onload = displayAndHandleReportedItems;