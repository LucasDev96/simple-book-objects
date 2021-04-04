const bookContainer = document.querySelector("#bookContainer");
const library = [];

class Book {
    constructor(name, author, pages, read) {
        this._name = name;
        this._author = author;
        this._pages = pages;
        this._read = read;
    }
}

const book1 = new Book("egg", "eggerton", 314, true);
const book2 = new Book("eggsalad", "eggies", 845, false);
const book3 = new Book("bookname", "book writer", 123, true);

library.push(book1, book2, book3);

updateVisuals();

function updateVisuals() {
    library.forEach(book => {
        const name = book._name;
        const author = book._author;
        const pages = book._pages;
        const read = book._read;

        let bookDiv = document.createElement("div");
        bookDiv.classList = "bookDiv";
        bookDiv.textContent = name + " was written by " + author + 
        "." + " It has " + pages + " pages and read = " + read;

        bookContainer.append(bookDiv);
    });
}

function addBookToLibrary() {
    // take data from some sort of prompt and store in vars
    // give error if all fields aren't filled out
    // if all info looks correct, add to library 
    // refresh library visuals
}

function removeBookFromLibrary() {
    // find the index of a particular book in the library
    // remove the book from the library
    // refresh visuals 
}