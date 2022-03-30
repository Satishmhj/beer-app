import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const validation = Yup.object({
    name: Yup.string().required("name is required"),
    billingAddress: Yup.string().required("billing address required"),
    deliverAddress: Yup.string().required("delivery address is required"),
    telephoneNumber: Yup.number().required("telephone number is required"),
    currentDate: Yup.date().required("date is required"),
  });

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div>
          <h1
            className="display-3 text-success  text-center "
            style={{ marginTop: "70px" }}
          >
            CheckOut Form
          </h1>
        </div>
        <div className="container">
          <Formik
            initialValues={{
              name: "",
              billingAddress: "",
              deliverAddress: "",
              telephoneNumber: "",
              currentDate: "",
            }}
            validationSchema={validation}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 200);

              resetForm();
              handleClick();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <b className="display-6">Full Name : </b>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="form-control mt-3 bg-light"
                />
                <a className="text-danger">
                  {errors.name && touched.name && errors.name}
                </a>
                <br />
                <b className="display-6">Billing Address : </b>
                <input
                  type="text"
                  name="billingAddress"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.billingAddress}
                  className="form-control mt-3 bg-light"
                />
                <a className="text-danger">
                  {errors.billingAddress &&
                    touched.billingAddress &&
                    errors.billingAddress}
                </a>
                <br />
                <b className="display-6">Delivery Address : </b>
                <input
                  type="text"
                  name="deliverAddress"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.deliverAddress}
                  className="form-control mt-3 bg-light"
                />
                <a className="text-danger">
                  {errors.deliverAddress &&
                    touched.deliverAddress &&
                    errors.deliverAddress}
                </a>
                <br />
                <b className="display-6">Telephone Number : </b>
                <input
                  type="number"
                  name="telephoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.telephoneNumber}
                  className="form-control mt-3 bg-light"
                />
                <a className="text-danger">
                  {errors.telephoneNumber &&
                    touched.telephoneNumber &&
                    errors.telephoneNumber}
                </a>
                <br />
                <b className="display-6">Date : </b>
                <input
                  type="date"
                  name="currentDate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currentDate}
                  className="form-control mt-3 bg-light"
                />
                <a className="text-danger">
                  {errors.currentDate &&
                    touched.currentDate &&
                    errors.currentDate}
                </a>
                <br />

                <div className="d-flex justify-content-center ">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-outline-primary btn-lg "
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Checkout;
