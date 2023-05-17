import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../../public/dramatic-logo.png";
import { AiFillGift, AiFillBell } from "react-icons/ai";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      // setTimeout(() => {
      //     setShowSearch(false);
      // }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigate("/")}>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </li>
          <li className="menuItem" onClick={() => navigate("/")}>
            HOME
          </li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>
            TV SHOW
          </li>
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            MOVIES
          </li>
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            NEW
          </li>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      <ContentWrapper>
      <ul className="menuItems">
      <li className="menuItem">
            <div className="searchInput" style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="SEARCH"
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                style={{ width: "300px",paddingLeft: "2rem" }}
              />
              <div
                className="searchIcon"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "15rem",
                  transform: "translateY(-50%)",
                }}
              >
                <HiOutlineSearch />
              </div>
            </div>
          </li>
          <li className="menuItem">
            <div className="giftIcon">
              <AiFillGift />
            </div>
          </li>
          <li className="menuItem">
            <div className="bellIcon">
              <AiFillBell />
            </div>
          </li>
        </ul>
      </ContentWrapper>
    </header>
  );
};

export default Header;
