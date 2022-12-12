import Book from './modules/UI.js';
import Date from './modules/date.js';
import * as module from './modules/selector.js';

window.addEventListener('load', Date());

module.contact.addEventListener('click', module.contactCall);
module.addBook.addEventListener('click', module.addBookCall);
window.addEventListener('load', module.onload);
module.bookList.addEventListener('click', module.onload);
document.addEventListener('DOMContentLoaded', Book.displayBooks);
const Form = document.querySelector('#book-form');
Form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  Book.addBookToList(book);

  Book.addBook(book);

  Book.clearField();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  Book.removeBook(e.target.parentElement.previousElementSibling.innerHTML);
  Book.deleteBook(e.target);
});