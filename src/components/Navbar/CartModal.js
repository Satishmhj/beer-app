import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RemoveFromCart } from "../Redux/Action/AddToCart";
import ImgCard from "../Body/Content/ImgCard";

const CartModal = (props) => {
  const { setCartModal, cartData, setCartData, add } = props;

  const remove = useSelector((state) => state.add.add);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  console.log(remove);
  return (
    <>
      <div
        className="modal fade mt-4"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "block", opacity: "1" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title mt-4" id="exampleModalLabel">
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
            <div className="modal-body">
              {cartData.map((items, index) => {
                const { name, image } = items;
                return (
                  <div className="d-flex justify-content-around">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Image</th>
                          <th scope="col">Name</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <ImgCard
                              image={image}
                              altText={name}
                              className="imgCard"
                            />
                          </td>
                          <td>
                            <b>{name}</b>
                          </td>

                          <td>
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
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    
                  </div>
                );
              })}
            </div>
            <div className="modal-footer">
              {add ? (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    navigate("/checkout");
                    setCartModal(false);
                  }}
                >
                  CheckOut
                </button>
              ) : (
                <button type="button" className="btn btn-success" disabled>
                  CheckOut
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
