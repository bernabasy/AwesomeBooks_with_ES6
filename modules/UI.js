export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static displayBooks() {
    const books = Book.getBooks();
    books.forEach((book) => Book.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>"${book.title}" by ${book.author}</td>
      <td class="d-none">${book.author}</td>
      <td><a href="#" class="btn btn-sm btn-danger delete float-end">remove</a></td>
      `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(author) {
    const books = Book.getBooks();
    let index = 0;
    books.filter((book) => {
      if (book.author !== author) { index = +1; }
      return books;
    });
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}