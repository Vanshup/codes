// app.ts
var Book = /** @class */ (function () {
    function Book(id, title, author, isIssued) {
        if (isIssued === void 0) { isIssued = false; }
        this.id = id;
        this.title = title;
        this.author = author;
        this.isIssued = isIssued;
    }
    return Book;
}());
var User = /** @class */ (function () {
    function User(id, name, borrowedBooks) {
        if (borrowedBooks === void 0) { borrowedBooks = []; }
        this.id = id;
        this.name = name;
        this.borrowedBooks = borrowedBooks;
    }
    return User;
}());
var Transaction = /** @class */ (function () {
    function Transaction(books, users) {
        this.books = books;
        this.users = users;
    }
    Transaction.prototype.issueBook = function (userId, bookId) {
        var user = this.users.find(function (u) { return u.id === userId; });
        var book = this.books.find(function (b) { return b.id === bookId; });
        if (!user)
            return "❌ Error: User not found.";
        if (!book)
            return "❌ Error: Book not found.";
        if (book.isIssued)
            return "❌ Error: Book is already issued.";
        book.isIssued = true;
        user.borrowedBooks.push(bookId);
        return "\u2705 Book \"".concat(book.title, "\" issued to ").concat(user.name, ".");
    };
    Transaction.prototype.returnBook = function (userId, bookId) {
        var user = this.users.find(function (u) { return u.id === userId; });
        var book = this.books.find(function (b) { return b.id === bookId; });
        if (!user)
            return "❌ Error: User not found.";
        if (!book)
            return "❌ Error: Book not found.";
        if (!book.isIssued)
            return "❌ Error: Book was not issued.";
        book.isIssued = false;
        user.borrowedBooks = user.borrowedBooks.filter(function (id) { return id !== bookId; });
        return "\u2705 Book \"".concat(book.title, "\" returned by ").concat(user.name, ".");
    };
    Transaction.prototype.listIssuedBooks = function () {
        var issued = this.books.filter(function (book) { return book.isIssued; });
        if (issued.length === 0)
            return ["📚 No books currently issued."];
        return ["📖 Issued Books:"].concat(issued.map(function (book) { return "- ".concat(book.title, " by ").concat(book.author); }));
    };
    return Transaction;
}());
// Setup sample data
var books = [
    new Book(1, "1984", "George Orwell"),
    new Book(2, "The Great Gatsby", "F. Scott Fitzgerald"),
    new Book(3, "To Kill a Mockingbird", "Harper Lee")
];
var users = [
    new User(1, "Alice"),
    new User(2, "Bob")
];
var library = new Transaction(books, users);
// DOM Elements
var userIdInput = document.getElementById("userId");
var bookIdInput = document.getElementById("bookId");
var outputDiv = document.getElementById("output");
document.getElementById("issueBtn").onclick = function () {
    var userId = parseInt(userIdInput.value);
    var bookId = parseInt(bookIdInput.value);
    outputDiv.textContent = library.issueBook(userId, bookId);
};
document.getElementById("returnBtn").onclick = function () {
    var userId = parseInt(userIdInput.value);
    var bookId = parseInt(bookIdInput.value);
    outputDiv.textContent = library.returnBook(userId, bookId);
};
document.getElementById("listBtn").onclick = function () {
    var issuedBooks = library.listIssuedBooks();
    outputDiv.innerHTML = issuedBooks.map(function (line) { return "<div>".concat(line, "</div>"); }).join("");
};
