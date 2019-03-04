import React from "react";
import { Accordion, AccordionPanel, Box, Paragraph } from "grommet";
import Heading from "grommet/components/Heading";

import { Subpage } from "../components";
import pageContent from "../content/JoinUs";

export default class JoinUs extends React.Component {
  render() {
    return (
      <Subpage title={pageContent.title} className="join-us">
        <div className="join-us__content">
          <Paragraph className="join-us__text">{pageContent.content}</Paragraph>
          <Heading className="join-us__header" strong={true} truncate={false}>
            FAQ
          </Heading>
          <Accordion
            className="join-us__accordion"
            animate={true}
            multiple={true}
            margin="small"
          >
            {pageContent.questionsAndAnswers.map(questionAndAnswer => (
              <AccordionPanel
                heading={questionAndAnswer.question}
                key={questionAndAnswer.question}
              >
                <Box className="answer" background="light-1">
                  {questionAndAnswer.answer}
                </Box>
              </AccordionPanel>
            ))}
          </Accordion>
        </div>
      </Subpage>
    );
  }
}
