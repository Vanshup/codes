// app.ts

class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public isIssued: boolean = false
  ) {}
}

class User {
  constructor(
    public id: number,
    public name: string,
    public borrowedBooks: number[] = []
  ) {}
}

class Transaction {
  constructor(private books: Book[], private users: User[]) {}

  issueBook(userId: number, bookId: number): string {
    const user = this.users.find(u => u.id === userId);
    const book = this.books.find(b => b.id === bookId);

    if (!user) return "❌ Error: User not found.";
    if (!book) return "❌ Error: Book not found.";
    if (book.isIssued) return "❌ Error: Book is already issued.";

    book.isIssued = true;
    user.borrowedBooks.push(bookId);
    return `✅ Book "${book.title}" issued to ${user.name}.`;
  }

  returnBook(userId: number, bookId: number): string {
    const user = this.users.find(u => u.id === userId);
    const book = this.books.find(b => b.id === bookId);

    if (!user) return "❌ Error: User not found.";
    if (!book) return "❌ Error: Book not found.";
    if (!book.isIssued) return "❌ Error: Book was not issued.";

    book.isIssued = false;
    user.borrowedBooks = user.borrowedBooks.filter(id => id !== bookId);
    return `✅ Book "${book.title}" returned by ${user.name}.`;
  }

  listIssuedBooks(): string[] {
    const issued = this.books.filter(book => book.isIssued);
    if (issued.length === 0) return ["📚 No books currently issued."];

    return ["📖 Issued Books:"].concat(
      issued.map(book => `- ${book.title} by ${book.author}`)
    );
  }
}

// Setup sample data
const books: Book[] = [
  new Book(1, "1984", "George Orwell"),
  new Book(2, "The Great Gatsby", "F. Scott Fitzgerald"),
  new Book(3, "To Kill a Mockingbird", "Harper Lee")
];

const users: User[] = [
  new User(1, "Alice"),
  new User(2, "Bob")
];

const library = new Transaction(books, users);

// DOM Elements
const userIdInput = document.getElementById("userId") as HTMLInputElement;
const bookIdInput = document.getElementById("bookId") as HTMLInputElement;
const outputDiv = document.getElementById("output") as HTMLDivElement;

(document.getElementById("issueBtn") as HTMLButtonElement).onclick = () => {
  const userId = parseInt(userIdInput.value);
  const bookId = parseInt(bookIdInput.value);
  outputDiv.textContent = library.issueBook(userId, bookId);
};

(document.getElementById("returnBtn") as HTMLButtonElement).onclick = () => {
  const userId = parseInt(userIdInput.value);
  const bookId = parseInt(bookIdInput.value);
  outputDiv.textContent = library.returnBook(userId, bookId);
};

(document.getElementById("listBtn") as HTMLButtonElement).onclick = () => {
  const issuedBooks = library.listIssuedBooks();
  outputDiv.innerHTML = issuedBooks.map(line => `<div>${line}</div>`).join("");
};
