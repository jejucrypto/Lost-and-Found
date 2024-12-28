document.addEventListener("DOMContentLoaded", function() {
  const itemType = localStorage.getItem('itemType');
  const itemName = localStorage.getItem('itemName');
  const whenLost = localStorage.getItem('whenLost');
  const whereLost = localStorage.getItem('whereLost');
  const description = localStorage.getItem('description');
  const dateReported = localStorage.getItem('dateReported');

  // Display the data on the page
  document.getElementById("displayItemType").innerText = itemType;
  document.getElementById("displayItemName").innerText = itemName;
  document.getElementById("displayWhenLost").innerText = whenLost;
  document.getElementById("displayWhereLost").innerText = whereLost;
  document.getElementById("displayDescription").innerText = description;
  document.getElementById("displayDateReported").innerText=dateReported;
});