import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';
import Columns from 'grommet/components/Columns';
import Button from 'grommet/components/Button';
import Pulse from 'grommet/components/icons/Pulse';
import MailIcon from 'grommet/components/icons/base/Mail';
import Label from 'grommet/components/Label';
import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';

import gargamel from '../images/web_version_gargamel_2.jpg';
import bart from '../images/bart.jpg';
import arleta from '../images/arleta.jpg';
import ola from '../images/ola.jpeg';
import dawid from '../images/dawid.jpeg';
import asia from '../images/asia-2.jpg';

class Team extends Component {
    render() {
        return (
            <Box
                pad='large'
                align='center'
                alignContent='center'
                justify='center'
                full='vertical'
                className='section-team vertically-centered'>
                <Heading tag='h2' strong className='section-team__title'>
                    Manszaft
                </Heading>
                <Tiles justify='center'>
                    <Founder
                        image={bart}
                        name='Bartek Glac'
                        title='Grubiorz'
                        description='Programista, prelegent, trener. Od początku kariery zaangażowany w działalność społeczności IT w Polsce. '
                        email='bartek@gruba.it'
                    />
                    <Founder
                        image={gargamel}
                        name='Kuba Sikora'
                        title='Grubiorz'
                        description='Programista z 6-letnim doświadczeniem. Prelegent i aktywny członek polskiego community IT. Miłośnik odkrywania nowych rozwiązań i dzielenia się wiedzą ze społecznością.'
                        email='jakub@gruba.it'
                    />
                    <Founder
                        image={arleta}
                        name='Arleta Rynk'
                        title='Head of Branding'
                        description='Wiecznie poszukująca swojego miejsca we współczesnym designie, próbująca coraz to nowszych narzędzi i rozwiązań. W tym co tworzy, stara się odpowiadać na pytania: Do kogo to jest skierowane? Jaka ma być z tego korzyść? Dlaczego wygląd ma znaczenie? Co się za tym kryje?'
                        email='arleta@gruba.it'
                    />
                    <Founder
                        image={ola}
                        name='Ola Ptok'
                        title='Head of Communication'
                        description=''
                        email='ola@gruba.it'
                    />
                    <Founder
                        image={asia}
                        name='Asia Lamch'
                        title='Head of Community'
                        description='Koderka pełną piersią, fangir Microsoftu z iPadem w ręku, kociara. W branży IT od wielu lat zawsze w okolicach C# oraz technologi Microsoft. Zwolenniczka Defensive Coding, SOLID, uczenia poprzez mentoring, samorozwoju i kultury DevOps. Community lover, wspierająca Gruba.IT, Śląską Grupę Microsoft oraz Women in Technology Katowice. Bloger and spreaker wannabe.'
                        email='asia@gruba.it'
                    />
                    <Founder
                        image={dawid}
                        name='Dawid Kryczka'
                        title='Cross Meetup & Hackathon Specialist'
                        description='Świeżak po kursie Javy, od niedawna związany z branżą IT. Uwielbia ideę meetupów i dzielenia się wiedzą.'
                        email='dawid@gruba.it'
                    />
                </Tiles>
            </Box>
        );
    }
}

export default Team;

const Founder = ({ name, title, description, image, email }) => (
    <Tile pad='small' className='section-team__member'>
        <Card
            thumbnail={
                <Box
                    className={`grommetux-card__thumbnail section-team__founder-image`}
                    flex
                    backgroundImage={`url(${image})`}
                    basis='small'
                    justify='end'
                    align='end'
                />
            }
            label={
                <Label
                    uppercase={true}
                    margin='none'
                    className='section-team__founder-title'>
                    {title}
                </Label>
            }
            heading={
                <Heading tag='h2' strong className='section-team__founder-name'>
                    {name}
                </Heading>
            }
            description={description}
        />
        <Button
            icon={
                <Pulse
                    className='section-team__mail-icon'
                    icon={<MailIcon />}
                />
            }
            label='Napisz do mnie'
            href={`mailto:${email}`}
            className='section-team__mail-button'
        />
    </Tile>
);
