class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }
    getTitile() {
        return `Title: ${this.title}`
    }
    getAuthor() {
        return `Author: ${this.author}`
    }
}
let HP = new Book('Harry Potter', 'J.K Rowling')
console.log(HP.title); //Harry Potter
console.log(HP.author); //J.K Rowling
console.log(HP.getTitile()); //Title: Harry Potter
console.log(HP.getAuthor()); //Author: J.K Rowling
