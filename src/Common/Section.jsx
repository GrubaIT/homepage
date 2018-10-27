import React, { Component } from "react";
import PropTypes from "prop-types";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";


class Section extends Component {
  render() {
    const { title, color, children, className } = this.props;
    return (
      <Box
        pad="large"
        align="center"
        full="vertical"
        className={`section vertically-centered ${className} section--${color}`}
      >
        <Heading tag='h2' strong={true} className={`section__title--${color}`}>
          {title}
        </Heading>
        {children}
      </Box>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Section;
