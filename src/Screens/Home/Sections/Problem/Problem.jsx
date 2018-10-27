import React, { Component } from "react";
import Box from "grommet/components/Box";
import Paragraph from "grommet/components/Paragraph";
import Section from "../../../../Common/Section";

class Problem extends Component {
  render() {
    return (
      <Section color="grey" title="Wyzwania śląskiej społeczności IT" className='section-problem'>
        <Paragraph width="large">
          Śląsk posiada świetną i dużą społeczność IT. Na jego terenie
          organizowane jest dużo meetupów, spotkań i konferencji na wysokim
          poziomie, przyciągających dużo zainteresowanych. Jednak specyfika
          naszego, rozległego i mocno zdecentralizowanego, regionu wpływa na
          rozproszenie energii włożonej przez członków naszej społeczności.
        </Paragraph>
        <Paragraph width="large">
          Meetupy nakładają się na siebie, ludzie z pomysłem na inicjatywę nie
          wiedzą jak ją zrealizować oraz nie znają osób, które mogłyby im pomóc.
          Świeże inicjatywy zaś mogą przejść zupełnie bez echa, nie przyciągając
          osób potencjalnie zainteresowanych poruszaną tematyką.
        </Paragraph>
        <Paragraph width="large">
          To wszystko wpływa na efektywność naszych działań i minimalizuje
          znaczenie największego skupiska programistów w Polsce.
        </Paragraph>
        <Paragraph width="large">Czy można ten trend odwrócić?</Paragraph>
      </Section>
    );
  }
}

export default Problem;
