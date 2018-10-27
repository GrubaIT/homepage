import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import GroupIcon from 'grommet/components/icons/base/Group';

class Mission extends Component {
  render() {
    return (
      <Box align='center' className='section-mission vertically-centered' full='vertical'>
        <Box
          align='center'
          textAlign='center'
          justify='center'
          size={{ width: { max: 'xxlarge' } }}
        >
            <GroupIcon
              size='xlarge'
              className='section-icon'
              colorIndex='neutral-1'
            />
          <div className='mission-clogan-container'>
            <Heading
              tag='h1'
              strong={true}
              margin='none'
              className='mission-slogan'
            >
              Łączymy ludzi w IT.
            </Heading>
            <Paragraph size='xlarge' width='large' margin='none'>
              Jesteśmy fundacją non-profit, którą tworzą członkowie społeczności IT na Śląsku.
              Naszą misją jest pomóc ludziom w naszym rejonie rozwijać się, tworzyć wartościowe inicjatywy i poszerzać sieć kontaktów.
            </Paragraph>
          </div>
        </Box>
      </Box>
    );
  }
}

Mission.propTypes = {};

export default Mission;
