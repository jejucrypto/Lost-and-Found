document.getElementById('reportForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const itemType = document.getElementById('itemType').value;
  const itemName = document.getElementById('itemName').value;
  const description = document.getElementById('description').value;
  const dateReported = document.getElementById('dateReported').value;

  // Create a new item element
  const itemElement = document.createElement('div');
  itemElement.classList.add('reported-item');
  itemElement.innerHTML = `
    <h3>${itemType}</h3>
    <p><strong>Name:</strong> ${itemName}</p>
    <p><strong>Description:</strong> ${description}</p>
    <p><strong>Date Reported:</strong> ${dateReported}</p>
  `;

  // Append the new item element to a container (assuming there's a container with id 'itemsContainer')
  document.getElementById('itemsContainer').appendChild(itemElement);
});