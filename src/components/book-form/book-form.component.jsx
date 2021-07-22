import "./book-form.styles.scss";
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { postBookAsync } from "../../redux/library/library.actions";

function BookForm() {
  // validation:
  // book title required, min length ==5. max length =10
  // book pages required, min length pages = 1
  const validate = (values) => {
    //automatically triggered onblur, onsubmit, onchange only on 'touched' field
    const errors = {};
    if (values.title) {
      errors.title = "Book title is required";
    } else if (values.title.length < 5 || values.title.length > 10) {
      errors.title = "Book title should be proper length";
    }
    if (!values.pages) {
      errors.pages = "Book pages is required";
    } else if (values.pages < 1) {
      errors.pages = "Book pages length to be min 1";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{
        title: "",
        price: 0,
        pages: 0,
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string()
          .min(5, "min length should be 5")
          .max(10, "max length cannot be more than 10")
          .required("required"),
        pages: Yup.number().min(1, "more than 1").required("required"),
      })}
      // validate={validate}
    >
      <Form>
        <p>
          <Field type="text" name="title" placeholder="Enter book title" />
          <br />
          <ErrorMessage name="title" />
        </p>
        <p>
          <Field type="number" name="price" placeholder="Enter book price" />
        </p>
        <p>
          <Field type="number" name="pages" placeholder="Enter pages amount" />
          <br />
          <ErrorMessage name="pages" />
        </p>
        <p>
          <button>Save</button>
        </p>
      </Form>
    </Formik>
  );
}

export default BookForm;
