import "./book-form.styles.scss";
import React, { useRef } from "react";

function BookForm() {
  const titleRef = useRef("");
  const priceRef = useRef(0);
  const pagesRef = useRef(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const pages = pagesRef.current.value;
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          name="title"
          placeholder="enter book title"
          ref={titleRef}
        />
      </p>
      <p>
        <input
          type="number"
          name="price"
          placeholder="enter book pages"
          defaultValue="0"
          ref={priceRef}
        />
      </p>
      <p>
        <input
          type="number"
          name="pages"
          placeholder="enter book price"
          ref={pagesRef}
        />
      </p>
      <p>
        <button>Save</button>
      </p>
    </form>
  );
}

export default BookForm;
