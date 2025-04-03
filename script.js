console.log("Hello")

const myLibrary = [];

function Book(author, title, pages, summary) {
    this.id = crypto.randomUUID(); // generate a unique id for each book instance
    this.author = author; // 'this' refers to the instance of the object being created
   this.title = title; // 'this' refers to the instance of the object being created
    this.pages = pages;
    this.summary = summary;
    this.sayTitle = function(){
        console.log(this.title)
    }
    // the constructor...
}

function addBookToLibrary(author, title, pages, summary) {
   const book = new Book(author, title, pages, summary)

   myLibrary.push(book)

   book.sayTitle()
  // take params, create a book then store it in the array
}

addBookToLibrary("J.K. Rowling", "Harry Potter and the Philosopher's Stone", 223, "A young wizard's journey begins.")
addBookToLibrary("J.R.R. Tolkien", "The Hobbit", 310, "A hobbit's adventure to reclaim a treasure.")
addBookToLibrary("George Orwell", "1984", 328, "A dystopian novel about totalitarianism and surveillance.")
addBookToLibrary("Harper Lee", "To Kill a Mockingbird", 281, "A novel about racial inequality and moral growth in the Deep South.")
addBookToLibrary("F. Scott Fitzgerald", "The Great Gatsby", 180, "A story about the American dream and the roaring twenties.")
addBookToLibrary("Jane Austen", "Pride and Prejudice", 279, "A romantic novel that also critiques the British landed gentry at the end of the 18th century.")

console.log(myLibrary)

function displayBooks() { 
    // this function will loop through myLibrary and display the books in the UI
    const container = document.querySelector("#book-container")
    container.innerHTML = "" // clear previous entries
    myLibrary.forEach(book => {
        const bookElement = document.createElement("div")
        bookElement.setAttribute("id", book.id) // set the id attribute to the book's unique id for potential future use
        bookElement.innerHTML = `<h2>${book.title}</h2><p>Pages: ${book.pages}</p><p>${book.summary}</p><h4>${book.author}</h4><button class="remove-book">Delete</button>`
        container.appendChild(bookElement)
    })
}

displayBooks()

function newBookForm() {
    // this function will show a form to add a new book
   const formContainer = document.createElement("div")
    formContainer.innerHTML = `<h2>Add a New Book</h2>
    <form id="book-form">
        <input type="text" id="author" placeholder="Author" required>
        <input type="text" id="title" placeholder="Title" required>
        <input type="number" id="pages" placeholder="Number of Pages" required>
        <textarea id="summary" placeholder="Summary" required></textarea>
        <button type="submit">Add Book</button>
    </form>`
    const container = document.querySelector("#book-container")
    container.appendChild(formContainer)
    const form = document.getElementById("book-form")
    form.addEventListener("submit", function(event) {
        event.preventDefault() // prevent the form from submitting in the traditional way
        const author = document.getElementById("author").value
        const title = document.getElementById("title").value
        const pages = document.getElementById("pages").value
        const summary = document.getElementById("summary").value

        addBookToLibrary(author, title, pages, summary) // add the new book to the library
        displayBooks() // refresh the display
        form.reset() // reset the form fields
    })
}

// Call the newBookForm function to display the form on page load
newBookForm()

// Event delegation to handle the removal of books
const bookContainer = document.querySelector("#book-container")
bookContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-book")) {
        const bookId = event.target.parentElement.getAttribute("id") // get the id of the book to be removed
        const bookIndex = myLibrary.findIndex(book => book.id === bookId) // find the index of the book in the library
        if (bookIndex > -1) {
            myLibrary.splice(bookIndex, 1) // remove the book from the array
            displayBooks() // refresh the display
        }
    }
})