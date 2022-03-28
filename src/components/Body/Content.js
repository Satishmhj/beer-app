import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { beerApi } from "../Redux/Action/BeerAction";

const Content = () => {
  const beers = useSelector((state) => state.beer.beers);
  console.log(beers);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(beerApi());
  }, []);

  return (
    <div>
      BEERS
      {beers?.map((items) => {
        return (
          <>
            <div>{items.name}</div>
          </>
        );
      })}
    </div>
  );
};

export default Content;
