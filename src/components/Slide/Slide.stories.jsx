// base import
import React from "react";
import { storiesOf } from "@storybook/react";

// Component
import Slide from "./Slide.jsx";

storiesOf("Slide", module).add("Simple Example", () => (
  <div style={{width: '1440px', margin: '0 auto'}}>
    <Slide>
      <h3 className="slide__title">
        Fiberglass and specialty metals are in stock across the United States
      </h3>
      <button type="button">Shop Now</button>
    </Slide>
  </div>
));
