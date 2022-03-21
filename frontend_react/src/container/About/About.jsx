import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";

import { images } from "../../constants";

const abouts = [
  {
    title: "Frontend Development",
    description:
      "Recently use Javascript, ReactJS, Redux, HTML, CSS, and NextJS",
    imgUrl: images.about01,
  },
  {
    title: "Backend Development",
    description: "Recently use ExpressJS, NodeJS, CI, and Laravel",
    imgUrl: images.about02,
  },
  {
    title: "Mobile Development",
    description: "Recently use Javascript, React Native, Redux, HTML, CSS",
    imgUrl: images.about03,
  },
  {
    title: "Graphic Design",
    description: "Recently use Adobe Photoshop, Figma, Adobe Illustrator",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Development</span> <br /> means{" "}
        <span>Good Apps</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
