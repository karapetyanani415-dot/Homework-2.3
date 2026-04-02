function Book(id, title, author, year) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.year = year;
  this.isAvailable = true;
}

function Library(name) {
  this.name = name;
  this.books = [];
}

Library.prototype.addBook = function (book) {
  if (!book.id) {
    throw new Error("do not add a book without id");
  }
  if (!book.title) {
    throw new Error("do not add a book without title");
  }
  if (!book.author) {
    throw new Error("do not add a book without author");
  }
  if (typeof book.year !== "number") {
    throw new Error("year must be a number");
  }
  let id = book.id;
  let books = this.books;
  let unique = books.some((e) => e.id === id);
  if (unique) {
    throw new Error("ID must be unique");
  }
  this.books.push(book);
};
Library.prototype.removeBook = function (id) {
  let books = this.books;
  let unique = books.some((e) => e.id === id);
  if (!unique) {
    throw new Error("ID must be unique");
  }
  for (let i = 0; i < books.length; ++i) {
    if (books[i].id === id) {
      books[i] = null;
    }
  }
};
Library.prototype.findBookByTitle = function (title) {
  let book = this.books.find((e) => e.title === title);
  return book;
};
Library.prototype.findBookByAuthor = function (author) {
  return this.books.filter((b) => b.author === author);
};
Library.prototype.borrowBook = function (id) {
  let book = this.books.find((e) => e.id === id);
  if (!book) {
    throw new Error("Book not found");
  }
  if (!book.isAvailable) {
    throw new Error("Book already borrowed");
  }
  book.isAvailable = false;
};
Library.prototype.returnBook = function (id) {
  let book = this.books.find((e) => e.id === id);
  if (!book) {
    return "Book not found";
  }
  if (book.isAvailable) {
    return "Book already borrowed";
  }
  book.isAvailable = true;
};
Library.prototype.listAvailableBooks = function () {
  let book = this.books.filter((e) => e.isAvailable);
  return book;
};
Library.prototype.listBorrowedBooks = function () {
  let book = this.books.filter((e) => !e.isAvailable);
  return book;
};
Library.prototype.showLibraryInfo = function () {
  console.log(`Library name: ${this.name}`);
  console.log(`Total books: ${this.books.length}`);
  console.log(`Available: ${this.listAvailableBooks().length}`);
  console.log(`Borrowed: ${this.listBorrowedBooks().length}`);
};
