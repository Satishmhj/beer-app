import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterBeers } from "../../Redux/Action/FilterAction";

const FilterModal = (props) => {
  const { setFilter } = props;

  const [filterData, setFilterData] = useState({});

  let dispatch = useDispatch();

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        // tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "block", opacity: "1", marginTop: "4em" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
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
            <div className="modal-body">
              <div className="m-2">
                <b className="d-flex justify-content-center">
                  Select range of IBU :
                </b>
                <div className="d-flex">
                  <input
                    type={"number"}
                    placeholder="min"
                    className="form-control"
                    onChange={(e) => {
                      let data = { ...filterData };
                      data.min = e.target.value;
                      setFilterData(data);
                    }}
                  />
                  <p>-</p>
                  <input
                    type={"number"}
                    className="form-control"
                    placeholder="max"
                    onChange={(e) => {
                      let data = { ...filterData };
                      data.max = e.target.value;
                      setFilterData(data);
                    }}
                  />
                </div>
              </div>
              <div className="m-2">
                <b className="d-flex justify-content-center">
                  Select range of ABV :
                </b>
                <div className="d-flex">
                  <input
                    type={"number"}
                    className="form-control"
                    placeholder="min"
                    onChange={(e) => {
                      let data = { ...filterData };
                      data.abvMin = e.target.value;
                      setFilterData(data);
                    }}
                  />
                  <p>-</p>
                  <input
                    type={"number"}
                    className="form-control"
                    placeholder="max"
                    onChange={(e) => {
                      let data = { ...filterData };
                      data.abvMax = e.target.value;
                      setFilterData(data);
                    }}
                  />
                </div>
              </div>
              <div className="m-2">
                <b className="d-flex justify-content-center">
                  Select range of PH-value :
                </b>
                <div className="d-flex">
                  <input
                    type={"number"}
                    className="form-control"
                    placeholder="min"
                    onChange={(e) => {
                      let data = { ...filterData };
                      data.phMin = e.target.value;
                      setFilterData(data);
                    }}
                  />
                  <p>-</p>
                  <input
                    type={"number"}
                    className="form-control"
                    placeholder="max"
                    onChange={(e) => {
                      let data = { ...filterData };
                      data.phMax = e.target.value;
                      setFilterData(data);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  dispatch(filterBeers(filterData));
                  setFilter(false);
                }}
              >
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
