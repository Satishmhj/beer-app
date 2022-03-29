import React from "react";

const CartModal = (props) => {
  const { setCartModal } = props;
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
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-success">
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
