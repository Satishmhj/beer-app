import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ImageCard from "./ImgCard";
import ImgCard from "./ImgCard";

const ContentDetail = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const [des, setDes] = useState([]);

  console.log(location.state.items);
  const {
    name,
    tagline,
    description,
    image,
    method,
    ingredients,
    rating,
    food_pairing,
    brewers_tips,
    contributed_by,
  } = location.state.items;

  return (
    <>
      <div className="d-flex justify-content-center display-4 text-primary">
        Beer Details
      </div>
      <div className="container d-flex justify-content-around">
        <div style={{ marginLeft: "5em", marginTop: "2em" }}>
          <ImgCard image={image} altText={name} />
        </div>
        <div style={{ marginTop: "2em" }}>
          <div className="display-6 text-danger">
            <b>{name}</b>
          </div>
          <br />
          <div>
            <b>Rating: {rating.average}('convert it in star')</b>
          </div>
          <div>
            <i>Review : {rating.reviews}</i>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-primary"
              onClick={() => {
                alert("order is in place");
                navigate("/");
              }}
            >
              Order
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            {/* <Tab>Ingredients</Tab> */}
            <Tab>Food_pairing</Tab>
            <Tab>Brewers_tips</Tab>
          </TabList>

          <TabPanel>
            <b>{description}</b>
          </TabPanel>
          {/* <TabPanel>
            <b>{ingredients}</b>
          </TabPanel> */}
          <TabPanel>
            <b>{food_pairing}</b>
          </TabPanel>
          <TabPanel>
            <b>{brewers_tips}</b>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ContentDetail;
