import React, { useState } from "react";
import { useLocation } from "react-router";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ContentDetail = () => {
  let location = useLocation();

  const [des, setDes] = useState([]);

  console.log(location.state.items);
  const {
    name,
    tagline,
    description,
    image_url,
    method,
    ingredients,
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
          <img src={`${image_url}`} />
        </div>
        <div style={{ marginTop: "2em" }}>
          <div className="display-6 text-danger">
            <b>{name}</b>
          </div>
          <br />
          <div>
            <b>contributed_by: {contributed_by}</b>
          </div>
          <div>
            <i>TagLine : {tagline}</i>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary">Order</button>
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
