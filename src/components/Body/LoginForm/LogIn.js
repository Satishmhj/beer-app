import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const loginPageStyle = {
  margin: "40px auto 37px",
  maxWidth: "530px",
  background: "#fff",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
};

const LogIn = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <b className="display-4 text-primary mt-3 ">LogIn</b>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form style={loginPageStyle}>
              <b className="display-6">Email</b>
              <div>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <b className="display-6">Password</b>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                />
                <ErrorMessage name="password" component="div" />
              </div>
              <br />
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LogIn;
