import { useState } from "react";

const Books = [
  { title: "Fourth Wing", author: "Rebecca Yarros" },
  { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
];

function Bookshelf() {
  const [book, setBook] = useState({ title: "", author: "" });
  const [books, setBooks] = useState(Books);
  console.log(book, books);

  console.log("this is book", book);

  function handleSubmit(e) {
    e.preventDefault();
    const newBooks = structuredClone(books);
    newBooks.push(book);
    setBooks(newBooks);
  }

  function handleInputChange(e){
    const newBook = structuredClone(book)
    newBook[e.target.name] = e.target.value
    // line 24 is  creating a template for the title 
    //and author to be inserted into [e.target.name] to replace name
    // with  either title or author based on the below input name value.
    setBook(newBook)
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter book name here"
            type="text"
            onChange={handleInputChange}
            //alternative way to using the handleInputChange Function outside the return:

            // onChange={(e) => setBook({ ...book, title: e.target.value })}

            // the ... is making a copy of this: 
            //const [book, setBook] = useState({ title: "", author: "" });
            // because when setBook happens, it is just being set to the title without
            // the author. so we need a copy that will keep both title and author.
            value={book.title}
            name='title'
          />
          <input
            placeholder="Enter Author name here"
            type="text"
            onChange={handleInputChange}
            value={book.author}
            name='author'

          />
          <button>Add to bookshelf</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((item, index) => {
          return (
            <div className="bookCard" key={index}>
              <h2> {item.title}</h2>
              <p> {item.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bookshelf;
