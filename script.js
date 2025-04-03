console.log("Hello")

const myLibrary = [];

function Book(title, pages, summary) {
   this.title = title;
    this.pages = pages;
    this.summary = summary;
    this.sayTitle = function(){
        console.log(this.title)
    }
    // the constructor...
}

function addBookToLibrary(title, pages, summary) {
   const book = new Book(title, pages, summary)

   myLibrary.push(book)

   book.sayTitle()
  // take params, create a book then store it in the array
}


addBookToLibrary("huck", 15, "boy eats apple" )

console.log(myLibrary)

