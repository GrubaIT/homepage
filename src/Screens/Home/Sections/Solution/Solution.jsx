import React, { Component } from "react";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import Paragraph from "grommet/components/Paragraph";
import Anchor from "grommet/components/Anchor";
import Card from "grommet/components/Card";
import Tiles from "grommet/components/Tiles";
import Tile from "grommet/components/Tile";
import meetup from "../../../../images/meetup.jpg";
import education from "../../../../images/education.jpg";
import katowice from "../../../../images/katowice.jpg";
import cooperation from "../../../../images/cooperation.jpg";
import Section from "../../../../Common/Section";

class Solution extends Component {
  render() {
    return (
      <Section className="section-solution">
        <Box
          className="footer-cards-container"
          pad={{ vertical: "medium" }}
          size={{ width: "xxlarge" }}
          direction="row"
        >
          <Tiles fill>
            <Tile align="start" basis="1/2">
              <Card
                thumbnail={<Image src={meetup} />}
                pad={{ horizontal: "small" }}
                contentPad="medium"
                heading={
                  <Heading tag="h2" strong>
                    Spotkania, warsztaty i konferencje
                  </Heading>
                }
                label="Społeczność IT"
                description="Pomoc w organizacji, promocji i rozwoju inicjatyw społeczności IT na Śląsku."
              />
            </Tile>
            <Tile align="end" basis="1/2">
              <Card
                thumbnail={<Image src={education} />}
                pad={{ horizontal: "small" }}
                contentPad="medium"
                heading="Łatwe wejście do branży"
                textSize="small"
                label="Edukacja"
                description="Organizacja wydarzeń edukacyjnych dla ludzi spoza branży przez ślaską społeczność IT."
              />
            </Tile>
            <Tile align="start" basis="1/2">
              <Card
                thumbnail={<Image src={katowice} />}
                pad={{ horizontal: "small" }}
                contentPad="medium"
                heading="Dobra marka regionu"
                label="Śląsk"
                description="Promocja działań, inicjatyw i wydarzeń organizowanych przez śląskie community IT."
              />
            </Tile>
            <Tile align="end" basis="1/2">
              <Card
                thumbnail={<Image src={cooperation} />}
                pad={{ horizontal: "small" }}
                contentPad="medium"
                heading="Współpraca na rynku IT"
                label="Branża IT"
                description="Wszystkie podmioty śląskiej branży IT: firmy, meetupy, konferencje i programiści pracują nad polepszeniem lokalnego rynku."
              />
            </Tile>
          </Tiles>
        </Box>
      </Section>
    );
  }
}

export default Solution;

const Image = ({ src }) => (
  <Box
    className={`grommetux-card__thumbnail section-solution__tile-image`}
    flex
    backgroundImage={`url(${src})`}
    basis="small"
    justify="center"
    align="center"
  />
);
