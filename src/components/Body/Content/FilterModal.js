import React from "react";

const FilterModal = (props) => {
  const { setFilter } = props;

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        // tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "block", opacity: "1", marginTop: "4em" }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Filter Beer
              </h5>
              <button
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                className="btn btn-danger mt-3"
                onClick={() => {
                  setFilter(false);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="m-2">
                <b className="d-flex justify-content-center">
                  {" "}
                  Select range of IBU :
                </b>
                <div className="d-flex">
                  <input type={"number"} className="form-control" />
                  <p>-</p>
                  <input type={"number"} className="form-control" />
                </div>
              </div>
              <div className="m-2">
                <b className="d-flex justify-content-center">
                  {" "}
                  Select range of ABV :
                </b>
                <div className="d-flex">
                  <input type={"number"} className="form-control" />
                  <p>-</p>
                  <input type={"number"} className="form-control" />
                </div>
              </div>
              <div className="m-2">
                <b className="d-flex justify-content-center">
                  {" "}
                  Select range of PH-value :
                </b>
                <div className="d-flex">
                  <input type={"number"} className="form-control" />
                  <p>-</p>
                  <input type={"number"} className="form-control" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
