import React, { Component } from "react";

import Box from "grommet/components/Box";
import Card from "grommet/components/Card";
import Heading from "grommet/components/Heading";
import Columns from "grommet/components/Columns";
import Button from "grommet/components/Button";
import Pulse from "grommet/components/icons/Pulse";
import MailIcon from "grommet/components/icons/base/Mail";
import Label from "grommet/components/Label";

import gargamel from "../images/web_version_gargamel_2.jpg";
import bart from "../images/bart.jpg";

class Team extends Component {
  render() {
    return (
      <Box
        pad="large"
        align="center"
        full="vertical"
        className="section-team vertically-centered"
      >
        <Heading tag="h2" strong className="section-team__title">
          Manszaft
        </Heading>
        <Columns size="large" justify="center">
          <Founder
            image={bart}
            name="Bartek Glac"
            title="Grubiorz"
            description="Programista, prelegent, trener. Od początku kariery zaangażowany w działalność społeczności IT w Polsce. "
            email="bartek@gruba.it"
          />
          <Founder
            image={gargamel}
            name="Kuba Sikora"
            title="Grubiorz"
            description="Programista z 5-letnim doświadczeniem. Prelegent i aktywny członek polskiego community IT. Miłośnik odkrywania nowych rozwiązań i dzielenia się wiedzą ze społecznością."
            email="jakub@gruba.it"
          />

        </Columns>
      </Box>
    );
  }
}

export default Team;

const Founder = ({ name, title, description, image, email }) => (
  <Box pad="large" align="center">
    <Card
      thumbnail={
        <Box
          className={`grommetux-card__thumbnail section-team__founder-image`}
          flex
          backgroundImage={`url(${image})`}
          basis="small"
          justify="end"
          align="end"
        />
      }
      label={
        <Label
          uppercase={true}
          margin="none"
          className="section-team__founder-title"
        >
          {title}
        </Label>
      }
      heading={
        <Heading tag="h2" strong className="section-team__founder-name">
          {name}
        </Heading>
      }
      description={description}
    />
    <Button
      icon={<Pulse className="section-team__mail-icon" icon={<MailIcon />} />}
      label="Napisz do mnie"
      href={`mailto:${email}`}
      className="section-team__mail-button"
    />
  </Box>
);
