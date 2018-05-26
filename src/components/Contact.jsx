import React, { Component } from 'react';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

class Contact extends Component {
    render() {
        return (
            <section className='section-contact'>
                <Box pad='large' align='center' full='horizontal'>
                <Tiles fill={true}>
                    <Tile align='start'
                        basis='1/3'>
                        <Header size='small'
                        pad={{'horizontal': 'small'}}>
                        <Heading tag='h4'
                            strong={true}
                            margin='none'>
                            Email
                        </Heading>
                        </Header>
                        <Box pad='small'>
                        <Paragraph margin='none'>
                            <a href='mailto:fundacja@gruba.it'>fundacja@gruba.it</a>
                        </Paragraph>
                        <Paragraph margin='none'>
                            <a href='mailto:jakub@gruba.it'>jakub@gruba.it</a>
                        </Paragraph>
                        <Paragraph margin='none'>
                            <a href='mailto:bartek@gruba.it'>bartek@gruba.it</a>
                        </Paragraph>
                        <Paragraph margin='none'>
                            <a href='mailto:adam@gruba.it'>adam@gruba.it</a>
                        </Paragraph>
                        </Box>
                    </Tile>
                    <Tile align='center'
                        basis='1/3'>
                        <Header size='small'
                        pad={{'horizontal': 'small'}}>
                        <Heading tag='h4'
                            strong={true}
                            margin='none'>
                            Dane fundacji
                        </Heading>
                        </Header>
                        <Box pad='small'>
                        <Tabs activeIndex={0}>
                            <Tab title='KRS'>
                                <Paragraph align='center' margin='none'>
                                    0000724287
                                </Paragraph>
                            </Tab>
                            <Tab title='NIP'>
                                <Paragraph align='center' margin='none'>
                                   6342928145
                                </Paragraph>
                            </Tab>
                            <Tab title='REGON'>
                                <Paragraph align='center' margin='none'>
                                    38001252000000
                                </Paragraph>
                            </Tab>
                        </Tabs>
                        </Box>
                    </Tile>
                    <Tile align='end'
                        basis='1/3'>
                        <Header size='small'
                        pad={{'horizontal': 'small'}}>
                        <Heading tag='h4'
                            strong={true}
                            margin='none'>
                            Adres
                        </Heading>
                        </Header>
                        <Box pad='small'>
                        <Paragraph margin='none'>
                            Świętego Jana 11/4
                        </Paragraph>
                        <Paragraph margin='none'>
                            KATO
                        </Paragraph>
                        </Box>
                    </Tile>
                    </Tiles>
            </Box>
            </section>
        );
    }
}

export default Contact;