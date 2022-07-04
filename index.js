// Book class constructor
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

import Storage from './modules/localStorage.js';

import UI from './modules/userInterface.js'
// Event to Display Book
import {DateTime} from './modules/luxon.min.js'

document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event to Add Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent submit
  e.preventDefault();

  // Get values from the form
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  // Validation
  if (title === '' || author === '') {
    alert('Please fill in all fields');
  } else {
    // Start a new Book
    const book = new Book(title, author);

    // Add Book to UI
    UI.addbooktoList(book);

    // Add Book to LocalStorage
    Storage.addBook(book);

    // Clear fields
    UI.clearFields();
  }
});

// Event to Remove a Book

document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from Storage
  Storage.removeBook(e.target.parentElement.firstChild.textContent);
});

// Event for SPA functionality

document.getElementById('list-btn').addEventListener('click', () => {
  document.getElementById('list').classList.add('show');
  document.getElementById('add').classList.remove('show');
  document.getElementById('contact').classList.remove('show');
  document.getElementById('list-btn').classList.add('active');
  document.getElementById('add-btn').classList.remove('active');
  document.getElementById('contact-btn').classList.remove('active');
});

document.getElementById('add-btn').addEventListener('click', () => {
  document.getElementById('add').classList.add('show');
  document.getElementById('list').classList.remove('show');
  document.getElementById('contact').classList.remove('show');
  document.getElementById('add-btn').classList.add('active');
  document.getElementById('list-btn').classList.remove('active');
  document.getElementById('contact-btn').classList.remove('active');
});

document.getElementById('contact-btn').addEventListener('click', () => {
  document.getElementById('contact').classList.add('show');
  document.getElementById('add').classList.remove('show');
  document.getElementById('list').classList.remove('show');
  document.getElementById('contact-btn').classList.add('active');
  document.getElementById('add-btn').classList.remove('active');
  document.getElementById('list-btn').classList.remove('active');
});

// Get Date API 

const dateContainer = document.getElementById('date-container');
const dateP = document.createElement('p');
dateP.setAttribute('id', 'date');
dateP.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED) ;
dateContainer.appendChild(dateP);




