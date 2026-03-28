class Book {
    constructor(id, title, author, year) {
        this.id = id
        this.title = title
        this.author = author
        this.year = year
        this.isAvailable = true
    }
}
class Library {
    constructor(name) {
        this.name = name
        this.books = []
    }
    addBook(book) {
        if (!book.id) {
            throw new Error("do not add a book without id")
        }
        if (!book.title) {
            throw new Error("do not add a book without title")
        }
        if (!book.author) {
            throw new Error("do not add a book without author")
        }
        if (typeof book.year !== "number") {
            throw new Error("year must be a number")
        }
        let id = book.id
        let books = this.books
        let unique = books.some(e => e.id === id)
        if (unique) {
            throw new Error("ID must be unique")
        }
        this.books.push(book)
    }
    removeBook(id) {
        let books = this.books
        let unique = books.some(e => e.id === id)
        if (!unique) {
            throw new Error("ID must be unique")
        }
        for (let i = 0; i < books.length; ++i) {
            if (books[i].id === id) {
                books[i] = null
            }
        }
    }
    findBookByTitle(title) {
        let book = this.books.find(e => e.title === title)
        return book
    }
    findBookByAuthor(author) {
        return this.books.filter(b => b.author === author)
    }
    borrowBook(id) {
        let book = this.books.find(e => e.id === id)
        if (!book) {
            throw new Error("Book not found");
        }
        if (!book.isAvailable) {
            throw new Error("Book already borrowed");
        }
        book.isAvailable = false;
    }
    returnBook(id) {
        let book = this.books.find(e => e.id === id)
        if (!book) {
            throw new Error("Book not found");
        }
        if (book.isAvailable) {
            throw new Error("Book already borrowed");
        }
        book.isAvailable = true;
    }
    listAvailableBooks() {
        let book = this.books.filter(e => e.isAvailable)
        return book
    }
    listBorrowedBooks() {
        let book = this.books.filter(e => !e.isAvailable)
        return book
    }
    showLibraryInfo() {
        console.log(`library name : ${this.name}`)
        console.log(`total number of books : ${this.books.length}`)
        let available = this.listAvailableBooks()
        console.log(`number of available books : ${available.length}`)
        let borrow = this.listBorrowedBooks()
        console.log(`number of borrowed books : ${borrow.length}`)
    }
}