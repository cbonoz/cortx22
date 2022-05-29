import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/logo.png";
import { APP_DESC, APP_NAME } from "../util/constants";

function About(props) {
  return (
    <div className="container">
      <img src={logo} />
      <br />
      <br />
      <h1>About</h1>
      <div>
        <p>
          {APP_NAME}: {APP_DESC}
        </p>

        <p>
        </p>

        <p>
        </p>
        <p>
        </p>

        <p>
        </p>
      </div>
    </div>
  );
}

About.propTypes = {};

export default About;
