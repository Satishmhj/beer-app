import React from "react";
import "../../Home/Testimonial/test.css"

const Testimonials = () => {
  return (
    <>
      <div class="items d-flex justify-content-evenly mb-4">
        <div class="card bg-primary ">
          <div class="card-body">
            <h4 class="card-title">
              <img src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png" />
            </h4>
            <div class="template-demo">
              <p>
                Online reviews can make or break a customer's decision to make a
                purchase. Read about these customer review sites where your
                customers'
              </p>
            </div>
            <hr />
            <div class="row">
              <div class="col-4">
                {" "}
                <img
                  class="profile-pic"
                  src="https://img.icons8.com/bubbles/100/000000/edit-user.png"
                />{" "}
              </div>
              <div class="col-sm-10">
                <div class="profile">
                  <h4 class="cust-name">Delbert Simonas</h4>
                  <p class="cust-profession">Store Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-primary">
          <div class="card-body">
            <h4 class="card-title">
              <img src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png" />
            </h4>
            <div class="template-demo">
              <p>
                When you think of Apple you automatically think expensive if
                your anything like me. When purchasing this laptop I was
                skeptical on laptops i purchased.
              </p>
            </div>
            <hr />
            <div class="row">
              <div class="col-4">
                {" "}
                <img
                  class="profile-pic"
                  src="https://img.icons8.com/bubbles/100/000000/edit-user.png"
                />{" "}
              </div>
              <div class="col-sm-10">
                <div class="profile">
                  <h4 class="cust-name">Tikoh Amin</h4>
                  <p
                    class="cust-profession
"
                  >
                    Salon Owner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-primary" >
          <div class="card-body">
            <h4 class="card-title">
              <img src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png" />
            </h4>
            <div class="template-demo">
              <p>
                I’ve wanted a MacBook for a while now because of the build
                quality and the simplicity of the OS. I spend an average 6 hours
                a day using it for college and the battery still has a fair.
              </p>
            </div>
            <hr />
            <div class="row">
              <div class="col-4">
                {" "}
                <img
                  class="profile-pic"
                  src="https://img.icons8.com/bubbles/100/000000/edit-user.png"
                />{" "}
              </div>
              <div class="col-sm-10">
                <div class="profile">
                  <h4 class="cust-name">Malachi Lensing</h4>
                  <p
                    class="cust-profession
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
    </>
  );
};

export default Testimonials;
