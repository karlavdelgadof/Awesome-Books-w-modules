// UI class: Display books

import Storage from './localStorage.js';

export default class UI {
  static displayBooks() {
    const books = Storage.getBooks();

    books.forEach((book) => UI.addbooktoList(book));
  }

  static addbooktoList(book) {
    const list = document.querySelector('#book-list');

    const bookInfo = document.createElement('div');
    bookInfo.className = 'book';

    const btitle = document.createElement('h3');
    btitle.textContent = book.title;
    bookInfo.appendChild(btitle);

    const author = document.createElement('h3');
    author.textContent = ` by ${book.author} `;
    bookInfo.appendChild(author);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    bookInfo.appendChild(removeBtn);
    list.appendChild(bookInfo);
  }

  static deleteBook(el) {
    if (el.classList.contains('remove-btn')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}