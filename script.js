//Library Array
const myLibrary = ["Harry Potter", "The Lion King", "Lord of the Rings"];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

myLibrary.map(book => {
  console.log(book);   
});

// function addBookTo Library(){

// }