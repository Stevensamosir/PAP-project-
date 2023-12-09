// Add your custom JavaScript code here

// Sample function for adding an activity
function addActivity() {
    alert('Tambahkan fungsi aktivitas yang disebut.');
  }
  
  // Sample function for deleting an activity
  function deleteActivity() {
    alert('Hapus fungsi aktivitas yang dipanggil..');
  }
  
  // You can add more JavaScript functions and logic as needed
  

  // Sample JavaScript for handling form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get form values
      const newsTitle = document.getElementById('newsTitle').value;
      const newsContent = document.getElementById('newsContent').value;
  
      // Create a new news item
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
  
      newsItem.innerHTML = `
        <h3>${newsTitle}</h3>
        <p>${newsContent}</p>
        <button>Edit</button>
        <button>Delete</button>
      `;
  
      // Append the news item to the news list
      const newsList = document.querySelector('.news-list');
      newsList.appendChild(newsItem);
  
      // Clear form fields
      form.reset();
    });
  });
  
// Add your custom JavaScript code here

// Sample function for adding an announcement
function addAnnouncement() {
  var announcementForm = document.getElementById('announcementForm');
  var announcementName = document.getElementById('announcementName').value;

  // Sample logic to add the announcement (replace with actual logic)
  announcements.push({ id: announcements.length + 1, name: announcementName });

  // Display updated announcements
  displayAnnouncements();

  // Reset the form
  announcementForm.reset();
}

// Sample function for editing an announcement
function editAnnouncement(id) {
  // Sample logic to edit the announcement (replace with actual logic)
  var announcement = announcements.find(a => a.id === id);
  var newName = prompt('Enter the new name:', announcement.name);

  if (newName !== null) {
    announcement.name = newName;
    displayAnnouncements();
  }
}

// Sample function for deleting an announcement
function deleteAnnouncement(id) {
  // Sample logic to delete the announcement (replace with actual logic)
  announcements = announcements.filter(a => a.id !== id);
  displayAnnouncements();
}

// Sample data (replace with actual data retrieved from server)
var announcements = [
  { id: 1, name: 'Announcement 1' },
  { id: 2, name: 'Announcement 2' },
  // Add more announcements as needed
];

function displayAnnouncements() {
  var tableBody = document.getElementById('announcementTableBody');
  tableBody.innerHTML = '';

  for (var i = 0; i < announcements.length; i++) {
    var row = tableBody.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = i + 1;
    cell2.innerHTML = announcements[i].name;
    cell3.innerHTML = '<button onclick="editAnnouncement(' + announcements[i].id + ')">Edit</button> | <button onclick="deleteAnnouncement(' + announcements[i].id + ')">Delete</button>';
  }
}

// Display the initial announcements
displayAnnouncements();
  
// Add your custom JavaScript code here

function initializePrograms() {
    // Add initialization logic here if needed
  }
  
  function addProgram() {
    // Add logic to add a new program here
  }
  
  function addProgramToTable(program) {
    // Add logic to add a program to the table here
  }
  
  function deleteProgram(programId) {
    // Add logic to delete a program here
  }
  
  function generateUniqueId() {
    // Add logic to generate a unique ID here
  }
  
  window.onload = initializePrograms;
  