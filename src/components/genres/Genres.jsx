import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);

    const genreNames = data
        .map((g) => genres[g]?.name)
        .filter(Boolean) // Remove any undefined or null values
        .join(", "); // Join the genre names with commas

    return <div className="genres">{genreNames}</div>;
};

export default Genres;
