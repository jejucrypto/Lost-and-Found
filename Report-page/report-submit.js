
// // FORM
// const Form = document.getElementById('reportForm');

// // Collect form data
// const statusType = document.getElementById("itemType");
// const itemName = document.getElementById("itemName");
// const whenLost = document.getElementById("whenLost");
// const whereLost = document.getElementById("whereLost");
// const description = document.getElementById("description");
// const dateReported = document.getElementById("dateReported");

// // function reportForm() {
// //   Form.addEventListener('submit', function (event) {
// //     event.preventDefault(); // Prevent the default form submission

// //     const statusTypeValue = statusType.value;
// //     const itemNameValue = itemName.value;
// //     const whenLostValue = whenLost.value;
// //     const whereLostValue = whereLost.value;
// //     const descriptionValue = description.value;
// //     const dateReportedValue = dateReported.value;

// //     const formDatasObject = {
// //       statusTypeValue,
// //       itemNameValue,
// //       whenLostValue,
// //       whereLostValue,
// //       descriptionValue,
// //       dateReportedValue
// //     };

// //     // Retrieve existing data from local storage
// //     const existingData = localStorage.getItem('datasObject');
// //     let datas = [];

// //     // If there is existing data, parse it into an array
// //     if (existingData) {
// //       datas = JSON.parse(existingData);
// //       console.log("Existing data:", datas); // Debugging: log existing data
// //     }

// //     // Add the new object to the array
// //     datas.push(formDatasObject);
// //     console.log("New object added:", formDatasObject); // Debugging: log new object

// //     // Store the updated array back in local storage
// //     localStorage.setItem('datasObject', JSON.stringify(datas));
// //     console.log("Updated data in local storage:", datas); // Debugging: log updated data

// //     // Reset the form fields
// //     Form.reset();
// //   });
// // }

// //For removing DATAs
// // localStorage.clear();
// //localStorage.remove('formDatasObject');
// Form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const statusTypeValue = statusType.value;
//   const itemNameValue = itemName.value;
//   const whenLostValue = whenLost.value;
//   const whereLostValue = whereLost.value;
//   const descriptionValue = description.value;
//   const dateReportedValue = dateReported.value;

//   // Store the data in localStorage
//   localStorage.setItem("statusType", statusTypeValue);
//   localStorage.setItem("itemName", itemNameValue);
//   localStorage.setItem("whenLost", whenLostValue);
//   localStorage.setItem("whereLost", whereLostValue);
//   localStorage.setItem("description", descriptionValue);
//   localStorage.setItem("dateReported", dateReportedValue);


// });
// // document.addEventListener('DOMContentLoaded', () => {
// //   reportForm();
// // });


document.getElementById("reportForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const itemType = document.getElementById("itemType").value;
  const itemName = document.getElementById("itemName").value;
  const whenLost = document.getElementById("whenLost").value;
  const whereLost = document.getElementById("whereLost").value;
  const description = document.getElementById("description").value;
  const dateReported = document.getElementById("dateReported").value;

  // Create an object to store the report
  const report = {
      itemType,
      itemName,
      whenLost,
      whereLost,
      description,
      dateReported
  };

  // Get existing reports from localStorage or initialize an empty array
  const existingReports = JSON.parse(localStorage.getItem("reports")) || [];
  existingReports.push(report); // Add the new report to the array

  // Store the updated reports array back to localStorage
  localStorage.setItem("reports", JSON.stringify(existingReports));


  document.getElementById("reportForm").reset(); // Reset the form
});