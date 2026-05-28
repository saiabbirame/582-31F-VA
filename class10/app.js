function Book(title, author, available = true) {
  this.title = title;
  this.author = author;
  this.available = available;
}

function Author(name, country) {
  this.name = name;
  this.country = country;
}

Author.prototype.describe = function () {
  return `${this.name} is from ${this.country}`;
};

Book.prototype.borrow = function () {
  if (this.available) {
    this.available = false;
    return `${this.title} has been borrowed.`;
  }
  return `${this.title} is already borrowed.`;
};

Book.prototype.returnBook = function () {
  this.available = true;
  return `${this.title} has been returned.`;
};

Book.prototype.displayInfo = function () {
  return `${this.title} by ${this.author} | Available: ${this.available}`;
};

Book.prototype.toggleAvailability = function () {
  this.available = !this.available;
  return `${this.title} availability is now ${this.available}`;
};

Book.prototype.category = "General";

const runDemoBtn = document.getElementById("run-demo-btn");
const output = document.getElementById("output");

runDemoBtn.addEventListener("click", () => {
  const book1 = new Book("Clean Code", "Robert C. Martin");
  const book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke", false);

  const author1 = new Author("Julia Quinn", "USA");

  console.log(author1.describe());
  console.log(Object.getPrototypeOf(book1) === Book.prototype);
  console.log(book1.hasOwnProperty("title"));
  console.log(book1.hasOwnProperty("displayInfo"));
  console.log(book1.displayInfo === book2.displayInfo);
  console.log(book1.category);
  console.log(book2.category);

  console.log(book1.hasOwnProperty("title")); // title is an own property because it belongs directly to book1
  console.log(book1.hasOwnProperty("category")); // category comes from the prototype (line 38) so it's not an own property yet
  console.log(book1.hasOwnProperty("displayInfo")); // display info is a shared prototype method and not a property directly on book1
  book1.category = "Programming";
  console.log(book1.hasOwnProperty("title"));
  console.log(book1.hasOwnProperty("category")); // now category becomes an own property because we assigned it directly to book1 (line 60)
  console.log(book1.hasOwnProperty("displayInfo"));

  console.log(book1.category);
  console.log(book2.category);

  output.innerHTML = `
    <p>${author1.describe()}</p>
    <hr>
    <p>${book1.displayInfo()}</p>
    <p>${book1.borrow()}</p>
    <p>${book1.displayInfo()}</p>
    <p>${book1.toggleAvailability()}</p>
    <p>${book1.displayInfo()}</p>
    <hr>
    <p>${book2.displayInfo()}</p>
    <p>${book2.returnBook()}</p>
    <p>${book2.displayInfo()}</p>
  `;
});
