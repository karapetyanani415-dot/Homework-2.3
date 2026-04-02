class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
  }
  getInfo() {
    return `title: ${this.title}, auther: ${this.author}, year: ${this.year}, isAvailable: ${this.isAvailable}`;
  }
  borrowBook() {
    if (!this.isAvailable) {
      return "book is already unavailable";
    }
    this.isAvailable = false;
  }
  returnBook() {
    if (this.isAvailable) {
      return "book is already available";
    }
    this.isAvailable = true;
  }
  matchesAuthor(authorName) {
    return authorName.toLowerCase() === this.author.toLowerCase();
  }
  matchesTitle(word) {
    return this.title.includes(word);
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  removeBook(title) {
    let idx = this.books.findIndex((b) => b.title === title);
    if (idx !== -1) {
      this.books.splice(idx, 1);
    } else {
      return "Book not found";
    }
  }
  findBookByTitle(title) {
    return this.books.find((b) => b.title === title) || null;
  }
  findBooksByAuthor(authorName) {
    return this.books.filter((a) => a.author === authorName);
  }
  getAvailableBooks() {
    return this.books.filter((a) => a.isAvailable);
  }
  borrowBook(title) {
    let book = this.findBookByTitle(title);
    if (!book) {
      return console.log("Book not found");
    }
    let msg = book.borrowBook();
    if (msg) console.log(msg);
  }
  returnBook(title) {
    let book = this.books.find((t) => t.title === title);
    if (book) {
      return book.returnBook();
    } else {
      return "Book not found";
    }
  }
  showAllBooks() {
    this.books.forEach((b) => console.log(b.getInfo()));
  }
  countBooks() {
    return this.books.length;
  }
  countAvailableBooks() {
    return this.books.filter((a) => a.isAvailable).length;
  }
  searchBooks(word) {
    return this.books.filter((e) => e.matchesTitle(word));
  }
  getOldestBook() {
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
  }
}

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
