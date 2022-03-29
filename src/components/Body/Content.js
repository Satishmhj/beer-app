import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { beerApi } from "../Redux/Action/BeerAction";

const Content = () => {
  const beers = useSelector((state) => state.beers.beers);
  console.log(beers);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(beerApi());
  }, []);

  return (
    <>
      <div className="container">
        <div className="display-4 d-flex justify-content-center mt-3">
          Beers
        </div>
        <div className="row">
          {beers?.map((items) => {
            const { description, id, image, name } = items;
            return (
              <div key={id} className="col-4 mt-3">
                <div class="card">
                  {/* <img
                    class="card-img-top"
                    src={``}
                    alt="Card image cap"
                  /> */}
                  <div className="card-body">
                    <b> {name}</b>
                    <br />
                    <p>{description}</p>
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
