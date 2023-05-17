import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import PosterFallback from "../../../assets/no-poster.png";
import { PlayIcon } from "../Playbtn";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DownloadIcon from "../../../../public/download.png";
import IMDB from "../../../../public/imdb.png";
import ua from "../../../../public/ua.png";
import kk from "../../../../public/4k.png";

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.home);

  const _genres = data?.genres?.map((g) => g.id);

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="backdrop-img">
                <Img src={url.backdrop + data.backdrop_path} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="right">
                    <div className="title">{data.name || data.title}</div>
                    <div className="overview">
                      <div className="description">{data.overview}</div>
                    </div>
                    <div className="subtitle">
                      GENRES
                      <Genres data={_genres} />
                    </div>

                    <div className="row">
                      <div
                        className="playbtn"
                        onClick={() => {
                          setShow(true);
                          setVideoId(video.key);
                        }}
                      >
                        <div className="watch-btn">
                          <span className="text">WATCH</span>
                          <span className="caret-icon">▶</span>
                        </div>
                      </div>

                      <div className="my-list-btn">
                        <span className="text">MY LIST</span>
                        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                      </div>
                      <div className="download-btn">
                        <img
                          src={DownloadIcon}
                          alt="Icon"
                          className="download-icon"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="imdb">
                        <img src={IMDB} alt="Icon" className="imdb-icon" />
                        <CircleRating rating={data.vote_average.toFixed(1)} />
                        <img src={ua} alt="Icon" className="ua-icon" />
                        <img src={kk} alt="Icon" className="kk-icon" />
                        <div className="date">
                          {dayjs(data?.release_date).format("YYYY")}
                        </div>
                      </div>
                    </div>
                    <div className="subtitle">
                      AUDIO 
                      <div className = "descr">English - Audio Description,English [Original] </div>
                      SUBTITLES 
                      <div className = "descr">English, Hindi </div>
                    </div>
                  </div>
                </div>
                <VideoPopup
                  show={show}
                  setShow={setShow}
                  videoId={videoId}
                  setVideoId={setVideoId}
                />
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
