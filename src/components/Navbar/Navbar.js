import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { IoBeerSharp } from "react-icons/io";
import { GiBeerStein } from "react-icons/gi";
import { useNavigate } from "react-router";
import CartModal from "./CartModal";
import { useSelector } from "react-redux";
// import "bootstrap/dist/js/bootstrap";

const Navbar = (props) => {
  const { setCartData, cartData } = props;
  let navigate = useNavigate();

  const add = useSelector((state) => state.add.add);
  console.log(add);

  const [cartModal, setCartModal] = useState(false);
  return (
    <>
      {cartModal && (
        <CartModal
          setCartModal={setCartModal}
          cartModal={cartModal}
          cartData={cartData}
          setCartData={setCartData}
          add={add}
        />
      )}
      <nav className="navbar navbar-expand-lg navbar-light  d-flex justify-content-around bg-primary">
        <div className="">
          <img
            src="https://c8.alamy.com/comp/2BWGA6H/beer-icon-thin-line-for-web-and-mobile-modern-minimalistic-flat-design-2BWGA6H.jpg"
            alt="logo"
            style={{ width: "42px", height: "auto", borderRadius: "26px" }}
          />
          <a
            class="navbar-brand text-white"
            href="#"
            style={{ paddingLeft: "5px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            HangOver
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a
                  class="nav-link text-white d-flex justify-content-center"
                  href="#"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <AiFillHome />
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white d-flex justify-content-center"
                  href="#"
                  onClick={() => {
                    navigate("/content");
                  }}
                >
                  <GiBeerStein />
                  Cheers
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white  d-flex justify-content-center"
                  href="#"
                  onClick={() => {
                    setCartModal(true);
                  }}
                >
                  Cart
                  <BsFillCartFill />
                  <div>
                    <span
                      class="position-absolute  translate-middle badge rounded-pill bg-danger border rounded-circle"
                      style={{ marginLeft: "15px" }}
                    >
                      {add}
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white  d-flex justify-content-center"
                  href="#"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  login
                  <FaUserAlt />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
