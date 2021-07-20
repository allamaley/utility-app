import "./book-form.styles.scss";
import { useState } from "react";

function BookForm() {
  const [newBook, setNewBook] = useState({
    title: "",
    price: 0,
    pages: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newBook);
  };

  const { title, price, pages } = newBook;
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="enter book title"
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          type="number"
          name="price"
          value={price}
          placeholder="enter book pages"
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          type="number"
          name="pages"
          value={pages}
          placeholder="enter book price"
          onChange={handleChange}
        />
      </p>
      <p>
        <button>Save</button>
      </p>
    </form>
  );
}

export default BookForm;
