import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";
import { FaChevronDown } from "react-icons/fa";
import "../topRated/style.scss";

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">BOLLYWOOD CLASSICS</span>
                {/* <SwitchTabs
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                /> */}
            </ContentWrapper>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
            <div className="showAllButton">
            <button>
              Show More <FaChevronDown />
            </button>
          </div>
        </div>
    );
};

export default TopRated;
