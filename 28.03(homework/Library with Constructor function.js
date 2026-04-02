function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.isAvailable = true;
}
Book.prototype.getInfo = function () {
  return `title: ${this.title}, auther: ${this.author}, year: ${this.year}, isAvailable: ${this.isAvailable}`;
};
Book.prototype.borrowBook = function () {
  if (!this.isAvailable) {
    return "book is already unavailable";
  }
  this.isAvailable = false;
};
Book.prototype.returnBook = function () {
  if (this.isAvailable) {
    return "book is already available";
  }
  this.isAvailable = true;
};
Book.prototype.matchesAuthor = function (authorName) {
  return authorName.toLowerCase() === this.author.toLowerCase();
};
Book.prototype.matchesAuthor = function (authorName) {
  return authorName.toLowerCase() === this.author.toLowerCase();
};
Book.prototype.matchesTitle = function (word) {
  return this.title.includes(word);
};

function Library(books = []) {
  this.books = books;
}
Library.prototype.addBook = function (book) {
  this.books.push(book);
};

Library.prototype.removeBook = function (title) {
  let idx = this.books.findIndex((b) => b.title === title);
  if (idx !== -1) {
    this.books.splice(idx, 1);
  } else {
    return "Book not found";
  }
};
Library.prototype.findBookByTitle = function (title) {
  return this.books.find((b) => b.title === title) || null;
};
Library.prototype.findBooksByAuthor = function (authorName) {
  return this.books.filter((a) => a.author === authorName);
};
Library.prototype.getAvailableBooks = function () {
  return this.books.filter((a) => a.isAvailable);
};
Library.prototype.borrowBook = function (title) {
  let book = this.findBookByTitle(title);
  if (!book) {
    return console.log("Book not found");
  }
  let msg = book.borrowBook();
  if (msg) console.log(msg);
};
Library.prototype.returnBook = function (title) {
  let book = this.books.find((t) => t.title === title);
  if (book) {
    return book.returnBook();
  } else {
    return "Book not found";
  }
};
Library.prototype.showAllBooks = function () {
  this.books.forEach((b) => console.log(b.getInfo()));
};
Library.prototype.countBooks = function () {
  return this.books.length;
};
Library.prototype.countAvailableBooks = function () {
  return this.books.filter((a) => a.isAvailable).length;
};
Library.prototype.searchBooks = function (word) {
  return this.books.filter((e) => e.matchesTitle(word));
};
Library.prototype.getOldestBook = function () {
  if (this.books.length === 0) {
    return null;
  }
  let oldest = this.books[0];
  for (let book of this.books) {
    if (book.year < oldest.year) {
      oldest = book;
    }
  }
  return oldest;
};

const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log("=== All books ===");
library.showAllBooks();

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
library.showAllBooks();
