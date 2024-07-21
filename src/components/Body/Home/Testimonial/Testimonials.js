import React from "react";
import "../../Home/Testimonial/test.css";

const Testimonials = () => {
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="card bg-primary ">
              <div className="card-body">
                <h4 className="card-title">
                  <img src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png" />
                </h4>
                <div className="template-demo">
                  <p>
                    Online reviews can make or break a customer's decision to
                    make a purchase. Read about these customer review sites
                    where your customers'
                  </p>
                </div>
                <hr />
                <div className="row">
                  <div className="col-4">
                    {" "}
                    <img
                      className="profile-pic"
                      src="https://img.icons8.com/bubbles/100/000000/edit-user.png"
                    />{" "}
                  </div>
                  <div className="col-sm-10">
                    <div className="profile">
                      <h4 className="cust-name">Delbert Simonas</h4>
                      <p className="cust-profession">Store Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card bg-primary">
              <div className="card-body">
                <h4 className="card-title">
                  <img src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png" />
                </h4>
                <div className="template-demo">
                  <p>
                    When you think of Apple you automatically think expensive if
                    your anything like me. When purchasing this laptop I was
                    skeptical on laptops i purchased.
                  </p>
                </div>
                <hr />
                <div className="row">
                  <div className="col-4">
                    {" "}
                    <img
                      className="profile-pic"
                      src="https://img.icons8.com/bubbles/100/000000/edit-user.png"
                    />{" "}
                  </div>
                  <div className="col-sm-10">
                    <div className="profile">
                      <h4 className="cust-name">Tikoh Amin</h4>
                      <p
                        className="cust-profession
"
                      >
                        Salon Owner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card bg-primary">
              <div className="card-body">
                <h4 className="card-title">
                  <img src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png" />
                </h4>
                <div className="template-demo">
                  <p>
                    I’ve wanted a MacBook for a while now because of the build
                    quality and the simplicity of the OS. I spend an average 6
                    hours a day using it for college and the battery still has a
                    fair.
                  </p>
                </div>
                <hr />
                <div className="row">
                  <div className="col-4">
                    {" "}
                    <img
                      className="profile-pic"
                      src="https://img.icons8.com/bubbles/100/000000/edit-user.png"
                    />{" "}
                  </div>
                  <div className="col-sm-10">
                    <div className="profile">
                      <h4 className="cust-name">Malachi Lensing</h4>
                      <p
                        className="cust-profession
"
                      >
                        Marketing Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
