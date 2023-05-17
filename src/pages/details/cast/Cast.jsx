import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaChevronDown } from "react-icons/fa";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = 5;

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  const renderItems = (items) => {
    return items.map((item) => {
      let imgUrl = item.profile_path ? url.profile + item.profile_path : avatar;
      return (
        <div key={item.id} className="listItem">
          <div className="profileImg">
            <Img src={imgUrl} />
          </div>
          <div className="name">{item.name}</div>
          <div className="character">{item.character}</div>
        </div>
      );
    });
  };

  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">CAST AND CREW INFO</div>
        {!loading ? (
          <div className="listItems">
            {data && renderItems(data?.slice(0, itemsToShow))}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
        {showAll && data && data.length > itemsToShow && (
          <div className="listItems">
            {renderItems(data.slice(itemsToShow))}
          </div>
        )}
        {!showAll && data && data.length > itemsToShow && (
          <div className="showAllButton">
            <button onClick={() => setShowAll(true)}>
              Show More <FaChevronDown />
            </button>
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;

