import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default SocialMedia;
