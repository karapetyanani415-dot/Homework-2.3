class Book {
  #title;
  #author;
  #year;
  #isAvailable;
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.#isAvailable = true;
  }
  get year() {
    return this.#year;
  }
  set year(value) {
    if (value <= 0) {
      throw new Error("year must be a positive number");
    }
    this.#year = value;
  }
  get author() {
    return this.#author;
  }
  set author(value) {
    if (value.length === 0) {
      throw new Error("author must not be an empty string");
    }
    this.#author = value;
  }
  set title(value) {
    if (value.length === 0) {
      throw new Error("title must not be an empty string");
    }
    this.#title = value;
  }
  get title() {
    return this.#title;
  }
  get isAvailable() {
    return this.#isAvailable;
  }
  borrowBook() {
    if (!this.#isAvailable) {
      return "book is already unavailable";
    }
    this.#isAvailable = false;
  }
  returnBook() {
    if (this.#isAvailable) {
      return "book is already available";
    }
    this.#isAvailable = true;
  }
  matchesTitle(word) {
    return this.#title.includes(word);
  }
  getInfo() {
    return `title : ${this.#title}, author : ${this.#author}, year : ${this.#year}, isAvailable: ${this.#isAvailable}`;
  }
}

class Reader {
  #name;
  #borrowedBooks = [];
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    if (value.length === 0) {
      throw new Error("name must not be an empty string");
    }
    this.#name = value;
  }
  get borrowedBooks() {
    return this.#borrowedBooks;
  }
  get borrowedBooksCount() {
    return this.#borrowedBooks.length;
  }
  takeBook(book) {
    if (!book.isAvailable) {
      return "book is already unavailable";
    }
    this.#borrowedBooks.push(book);
    book.borrowBook();
  }
  giveBackBook(book) {
    if (!this.hasBook(book)) {
      return "Reader does not have this book";
    }
    this.#borrowedBooks = this.#borrowedBooks.filter((e) => e !== book);
    book.returnBook();
  }
  hasBook(book) {
    return this.#borrowedBooks.includes(book);
  }
  showBorrowedBooks() {
    return this.#borrowedBooks.map((e) => e.title);
  }
  getInfo() {
    return `${this.#name} has ${this.borrowedBooksCount} borrowed books`;
  }
}

class Library {
  #name;
  #books;
  #readers;
  constructor(name) {
    this.name = name;
    this.#books = [];
    this.#readers = [];
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    if (value.length === 0) {
      throw new Error("name must not be an empty string");
    }
    this.#name = value;
  }
  get books() {
    return this.#books;
  }
  get readers() {
    return this.#readers;
  }
  addBook(book) {
    this.#books.push(book);
  }
  registerReader(reader) {
    this.#readers.push(reader);
  }
  findBookByTitle(title) {
    let book = this.#books.find((t) => t.title === title);
    return book || null;
  }
  findBooksByAuthor(authorName) {
    return this.#books.filter((e) => e.author === authorName);
  }
  giveBookToReader(title, reader) {
    let book = this.findBookByTitle(title);
    if (!book) {
      return "Book not found";
    }
    reader.takeBook(book);
  }
  acceptBookFromReader(title, reader) {
    let found = this.findBookByTitle(title);
    if (!found) {
      return "book not find";
    }
    reader.giveBackBook(found);
  }
  showAvailableBooks() {
    return this.#books.filter((e) => e.isAvailable);
  }
  showAllBooks() {
    return this.#books.map((e) => e.getInfo());
  }
  getLibraryInfo() {
    return `${this.#name} Library: ${this.#books.length} books, ${this.#readers.length} readers`;
  }
}
const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);

console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
library.giveBookToReader("The Hobbit", reader2);

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());
