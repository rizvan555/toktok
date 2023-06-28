import React, { useState } from "react";
import "../css/searchAll.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import UserIcon from "../resource/icons/UserIcon.png";
import Profile from "../resource/icons/Profile.png";
import Frame from "../resource/icons/Frame.png";
import home from "../resource/icons/home.png";
import Search from "../resource/icons/Search.png";
import redFrame from "../resource/icons/redFrame.png";
import redHome from "../resource/icons/redHome.png";
import redProfile from "../resource/icons/redProfile.png";
import redSearch from "../resource/icons/redSearch.png";
import annyPhoto from "../resource/images/annyPhoto.png";
import sarahPhoto from "../resource/images/sarahPhoto.png";
import jonnyPhoto from "../resource/images/jonnyPhoto.png";
import followButton from "../resource/images/followButton.png";
import followingButton from "../resource/images/followingButton.png";

function SearchAll() {
  const [activeNav, setActiveNav] = useState(null);
  const [value, setValue] = useState(null);
  const [users, setUsers] = useState([
    {
      profilImg: annyPhoto,
      name: "anny-wilson",
      position: "Marketing Coordinator",
      isFollowing: false,
    },
    {
      profilImg: sarahPhoto,
      name: "sarah_brisson",
      position: "Nursing Assistant",
      isFollowing: false,
    },
    {
      profilImg: jonnyPhoto,
      name: "andrew_nguyen",
      position: "Dog Trainer",
      isFollowing: false,
    },
    {
      profilImg: annyPhoto,
      name: "anny-wilson",
      position: "Marketing Coordinator",
      isFollowing: false,
    },
    {
      profilImg: sarahPhoto,
      name: "sarah_brisson",
      position: "Nursing Assistant",
      isFollowing: false,
    },
    {
      profilImg: jonnyPhoto,
      name: "andrew_nguyen",
      position: "Dog Trainer",
      isFollowing: false,
    },
    {
      profilImg: annyPhoto,
      name: "anny-wilson",
      position: "Marketing Coordinator",
      isFollowing: false,
    },
    {
      profilImg: sarahPhoto,
      name: "sarah_brisson",
      position: "Nursing Assistant",
      isFollowing: false,
    },
    {
      profilImg: jonnyPhoto,
      name: "andrew_nguyen",
      position: "Dog Trainer",
      isFollowing: false,
    },
  ]);

  const navbar = [
    { id: 1, color1: home, color2: redHome, path: "/" },
    { id: 2, color1: Search, color2: redSearch, path: "/search" },
    { id: 3, color1: Frame, color2: redFrame, path: "/upload" },
    { id: 4, color1: Profile, color2: redProfile, path: "/profile" },
  ];

  const getNavIcon = (nav) => {
    if (activeNav === nav.id) {
      return <img src={nav.color2} alt="homeimg" className="nav-icon" />;
    } else {
      return <img src={nav.color1} alt="homeimg" className="nav-icon" />;
    }
  };

  const handleFollowClick = (index) => {
    setUsers((persons) =>
      persons.map((person, personIndex) =>
        personIndex === index
          ? {
              ...person,
              isFollowing: !person.isFollowing,
            }
          : person
      )
    );
  };

  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };

  const findMembers = (memberName) => {
    if (memberName === "") {
      setUsers([
        {
          profilImg: annyPhoto,
          name: "anny-wilson",
          position: "Marketing Coordinator",
          isFollowing: false,
        },
        {
          profilImg: sarahPhoto,
          name: "sarah_brisson",
          position: "Nursing Assistant",
          isFollowing: false,
        },
        {
          profilImg: jonnyPhoto,
          name: "andrew_nguyen",
          position: "Dog Trainer",
          isFollowing: false,
        },
        {
          profilImg: annyPhoto,
          name: "anny-wilson",
          position: "Marketing Coordinator",
          isFollowing: false,
        },
        {
          profilImg: sarahPhoto,
          name: "sarah_brisson",
          position: "Nursing Assistant",
          isFollowing: false,
        },
        {
          profilImg: jonnyPhoto,
          name: "andrew_nguyen",
          position: "Dog Trainer",
          isFollowing: false,
        },
      ]);
    } else {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(memberName.toLowerCase())
      );
      setUsers(filtered);
    }
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <div className="search-icon">
          <BiSearch size={25} />
        </div>
        <input
          type="text"
          className="input-box"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            findMembers(e.target.value);
          }}
        />
      </div>
      <Link to="/" className="center-icon">
        <img src={UserIcon} alt="profileimg" />
      </Link>

      <main className="search-person-container">
        {users.map((person, index) => (
          <div key={index}>
            <section className="search-person-section">
              <div className="person-left-side">
                <img
                  src={person.profilImg}
                  alt="photo1"
                  className="person-photo"
                />
                <div className="name-box">
                  <h3 className="name">{person.name}</h3>
                  <h5 className="position">{person.position}</h5>
                </div>
              </div>
              <button
                onClick={() => handleFollowClick(index)}
                className="followButton"
              >
                {person.isFollowing ? (
                  <img src={followingButton} alt="followingButton" />
                ) : (
                  <img src={followButton} alt="followButton" />
                )}
              </button>
            </section>
          </div>
        ))}
      </main>

      <footer className="footer-navbar">
        {navbar.map((nav) => (
          <button
            key={nav.id}
            className="home-footer"
            onClick={() => handleNavClick(nav.id)}
          >
            <Link to={nav.path}>{getNavIcon(nav)}</Link>
          </button>
        ))}
      </footer>
    </div>
  );
}

export default SearchAll;
