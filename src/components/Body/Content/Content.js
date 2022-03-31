import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { CLickAddToCart } from "../../Redux/Action/AddToCart";
import { beerApi } from "../../Redux/Action/BeerAction";
import "../Content/content.css";
import { FaFilter } from "react-icons/fa";
import FilterModal from "./FilterModal";

const Content = (props) => {
  const { setCartData, cartData } = props;

  const [filter, setFilter] = useState(false);
  const [removeFilterData, setRemoveFilterData] = useState();

  const beers = useSelector((state) => state.beers.beers);
  const isLoading = useSelector((state) => state.beers.isLoading);
  const addToCart = useSelector((state) => state.add.add);
  const filterBeer = useSelector((state) => state.beers.filterBeers);

  // console.log(filterBeer);
  // console.log(isLoading);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(beerApi());
  }, []);

  return (
    <>
      {filter && <FilterModal setFilter={setFilter} filter={filter} />}
      <div className="container">
        <div className="display-4 d-flex justify-content-center  text-primary mt-3">
          Cheers
          <img src="data:image/jpeg;base64,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" />
        </div>
        <div className="d-flex flex-row-reverse">
          <div>
            <button className="btn btn-danger">
              <span aria-hidden="true">&times;</span> filterData
            </button>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => {
              setFilter(true);
            }}
          >
            <FaFilter />
            Filter
          </button>
        </div>
        <div className="row">
          {beers
            ?.filter((items) => {
              // console.log(items.ibu);
              if (filterBeer?.min && filterBeer?.max) {
                if (items.ibu > filterBeer.min && items.ibu < filterBeer.max) {
                  return true;
                }
                return false;
              }
              return true;
            })
            .filter((items) => {
              if (filterBeer.phMin && filterBeer.phMax) {
                if (
                  items.ph > filterBeer.phMin &&
                  items.ph < filterBeer.phMax
                ) {
                  return true;
                }
                return false;
              }
              return true;
            })
            .map((items) => {
              const {
                id,
                image_url,
                name,
                tagline,
                first_brewed,
                ibu,
                abv,
                ph,
              } = items;
              return (
                <div key={id} className="col-4 mt-3">
                  <div class="card">
                    <img
                      className="card-img-top"
                      src={`${image_url}`}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <Link
                        to={"/contentDetail"}
                        state={{ items }}
                        style={{
                          color: "black",
                          textDecoration: "none",
                        }}
                      >
                        <b>{name}</b>
                      </Link>
                      <br />
                      <b>first_brewed: {first_brewed}</b>
                      <br />
                      <b>IBU : {ibu}</b>
                      <b>tagline: {tagline}</b>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            let data = [...cartData];
                            data.push(items);
                            setCartData(data);

                            console.log(data);

                            dispatch(CLickAddToCart());
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Content;
