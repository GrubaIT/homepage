import React, { Component } from "react";
import Tiles from "grommet/components/Tiles";
import Tile from "grommet/components/Tile";
import Image from "grommet/components/Image";
import Section from "./Section";

class Logos extends Component {
  render() {
    const { title, logos, className, backgroundColor } = this.props;

    return (
      <Section color={backgroundColor} title={title}>
        <Tiles fill={true} className='logos'>
          {logos.map((logo, index) => (
            <Logo key={`logo-${index}`} logo={logo.image} link={logo.url} />
          ))}
        </Tiles>
      </Section>
    );
  }
}

export default Logos;

const Logo = ({ logo, link }) => (
  <Tile className="logos__logo-container" basis="1/2">
    {
        link
            ? <a href={link} target='_blank'><Image src={logo} className="logos__logo" /></a>
            : <Image src={logo} className="logos__logo" />
    }
  </Tile>
);
