export const bookList = document.querySelector('#list');
export const addBook = document.querySelector('#add-new');
export const contact = document.querySelector('#contact');
export const addSection = document.querySelector('.add');
export const contactSection = document.querySelector('.contact');
export const listSection = document.querySelector('.list');

export const onload = () => {
  contactSection.style.display = 'none';
  addSection.style.display = 'none';
  listSection.style.display = 'block';
  bookList.classList.add('active');
  contact.classList.remove('active');
  addBook.classList.remove('active');
};

export const addBookCall = () => {
  bookList.classList.remove('active');
  contact.classList.remove('active');
  contactSection.style.display = 'none';
  addSection.style.display = 'flex';
  addBook.classList.add('active');
  listSection.style.display = 'none';
};

export const contactCall = () => {
  addBook.classList.remove('active');
  bookList.classList.remove('active');
  contactSection.style.display = 'flex';
  addSection.style.display = 'none';
  listSection.style.display = 'none';
  contact.classList.add('active');
};
