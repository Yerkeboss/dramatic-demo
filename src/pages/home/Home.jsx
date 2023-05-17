import React from "react";

import "./style.scss";
import { useParams } from "react-router-dom";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import DetailsBanner from "../details/detailsBanner/DetailsBanner";
import useFetch from "../../hooks/useFetch";
import Recommendation from "../../pages/details/carousels/Recommendation";


const Home = () => {
    return (
        <div className="homePage">
           <HeroBanner/>
            <Trending />
            <Popular />
            <TopRated />
        </div>
    );
};

export default Home;
