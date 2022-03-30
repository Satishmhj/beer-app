import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RemoveFromCart } from "../Redux/Action/AddToCart";

const CartModal = (props) => {
  const { setCartModal, cartData, setCartData } = props;

  const remove = useSelector((state) => state.add.add);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  console.log(remove);
  return (
    <>
      <div
        class="modal fade mt-4"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "block", opacity: "1" }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title mt-4" id="exampleModalLabel">
                Added Beers
              </h5>
              <button
                type="button"
                className="close btn btn-danger"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span
                  className="mt-4 "
                  aria-hidden="true"
                  onClick={() => {
                    setCartModal(false);
                  }}
                >
                  &times;
                </span>
              </button>
            </div>
            <div class="modal-body">
              {cartData.map((items, index) => {
                const { name, image_url } = items;
                return (
                  <div className="d-flex justify-content-around">
                    <div>
                      <img src={`${image_url}`} style={{ width: "15px" }} />
                    </div>
                    <div>
                      <b>{name}</b>
                    </div>
                    <div>
                      <a>
                        <FaTrash
                          onClick={() => {
                            let data = [...cartData];
                            data.splice(index, 1);
                            setCartData(data);
                            dispatch(RemoveFromCart());
                          }}
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                onClick={() => {
                  navigate("/checkout");
                  setCartModal(false);
                }}
              >
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
