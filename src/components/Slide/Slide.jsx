import React from "react";
// import PropTypes from "prop-types";
import { Button } from '../Button/Button.jsx';
import clsx from "clsx";

import SlideDefaultImage from "../../assets/images/slide.jpg";

import "./Slide.scss";

const Slide = ({ ...props }) => {
  return (
    <section className={clsx("slide", props.className)}>
      <div className="slide__content">
        {/* {props.children?.map((item) => item)} */}
        <h3 className="slide__title">
          Fiberglass and specialty metals are in stock across the United States
        </h3>
        <Button>Shop Now</Button>
      </div>
      {props.img ? (
        <div className="slide__image-wrapper">
          <img className="slide__image" src={props.img} alt="" />
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

// Slide.propTypes = {};

Slide.defaultProps = {
  img: SlideDefaultImage,
};
export default Slide;
