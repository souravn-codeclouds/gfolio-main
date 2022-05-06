import "./profilemenudrop.css";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const ProfileMenuDrop = () => {
  const [isProfileActive, setProfileActive] = useState("false");
  // Toggle the dropdown
  const handleToggle = () => {
    setProfileActive(!isProfileActive);
  };

   // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setProfileActive(!!isProfileActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperProfileRef = useRef(null);
  useOutsideHandler(wrapperProfileRef);

  return (
    <div
      className="profile dropdown"
      onClick={handleToggle}
      ref={wrapperProfileRef}
    >
      <img
        className="profile-pic dropbtn"
        src="https://lh3.googleusercontent.com/fife/AAWUweWp9CEAJvUdPKZ9GuUuKdOl_8TQMzOBrsL34hNAdnE3Uji4qx1FquKird7A2a2ESQ6Yrsr6B9AmVr6aMAR9oNjQjUHkNDDjH03-7v-vmDzqSI81ho3G0V0gYp-8FmeawsKPLNlvKP3zZLoebeuYFXkY7YRWSAY-oR1c0e_Vbw5EDvCCktuc5VNH8Jz4QXjYWPxphW9BW16zyvrqEyg6zapD9nrRLbKWVZTziIxp91Ub1T_NmXf3hwkevWO32PPY1qt2ncHKGQbhRnWGGuSdLblPhPcjjD2bDxt9Miud2zEvO9WRecneq_H_QtQ-IZx5TCi-PmjCkZIXpaYxNuggxodkPXFXp2A0lk2Y762LeUpYTu8LvBkMM3Quu7dlUArgp7m2TdRWYjkZTun4M3Y40uPEZwFItdo4LUkJs8VNodAHBorpUH9LZULutEc5Y5ex_keRuebVuBt3gf1l9NDkYkJYDadI7Iheuz7mW9lJB_pc7q6LzI7buFjG8jfWIxHu8vdMLRbzTZG7zu4ODAVnTIYI7NcgfdAaNwHD4aSL0U-K0QWYG0C9Bn0J7Lv3c5GUiUQWGiQ0-z19LAb0igIC3FzSAWp_oaXodPmiX6Tp4LSYkv7M8NK9j0vn8xBDzWN_s-3vTKIl1Qjk50110JFovuc_vjBJr1BcWGCtGFPSfjGj3cfUDT8_K3sBZ9fWjFdQ_AhXykNyzg4_CZrRBi6ugZQCsyXnc6lEbJzYN7AqD-BNZ5F5TMDAfELiVWMhFJ0W_tCwtwGBQhayoBQOWlewxQ=s32-c"
        alt="profile"
      />
      <div className="profile-hightlight-dropdown">
        <p> Portfolio Website </p>
        <p> Enjeck Cleopatra </p>
        <p> enjeckc1e0@gmail.com </p>
      </div>
      <div
        className={
          isProfileActive
            ? "profile-details-dropdown dropdown-hide"
            : "profile-details-dropdown dropdown-show"
        }
      >
        <div className="first-detail">
          <img
            className=""
            src="https://i.pinimg.com/474x/ca/a9/35/caa9352cd119efe5641d6f7c3cc755fb.jpg"
            alt="profile"
          />
          <p className="detail-text"> Enjeck Cleopatra </p>
          <p className="detail-text"> enjeckc1e0@gmail.com </p>
          <a href="https://enjeck.com"> View Another Website Design </a>
        </div>
        <Link className="second-detail" to="/about">
          <FontAwesomeIcon className="fa-user-plus" icon={faUserPlus} />
          <p> More about me </p>
        </Link>
        <div className="third-detail">
          <a href="https://github.com/enjeck"> GitHub</a>
        </div>
        <div className="fourth-detail">
          <a href="https://github.com/PROTechThor/gfolio"> View code </a> <span> • </span>
          <Link to="/blog"> Blog & news </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuDrop;
