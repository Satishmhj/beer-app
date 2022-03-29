import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { beerApi } from "../../Redux/Action/BeerAction";
import "../Content/content.css";

const Content = () => {
  const beers = useSelector((state) => state.beers.beers);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(beerApi());
  }, []);

  return (
    <>
      <div className="container">
        <div className="display-4 d-flex justify-content-center  text-primary mt-3">
          Beers
        </div>
        <div className="row">
          {beers?.map((items) => {
            const { description, id, image_url, name, tagline } = items;
            return (
              <div key={id} className="col-4 mt-3">
                <div class="card" style={{ maxHeight: "40vh" }}>
                  <img
                    className="card-img-top"
                    src={`https://images.punkapi.com/v2/${image_url}`}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <b> {name}</b>
                    <br />
                    <p>{tagline}</p>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-primary">Add to Cart</button>
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
