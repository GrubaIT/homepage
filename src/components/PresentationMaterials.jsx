import React from 'react';
import { NavLink } from 'react-router-dom';
import Heading from 'grommet/components/Heading';
import Grommet from 'grommet/components/Grommet';
import Footer from './Footer';

import logo from '../images/logo.svg';
import SubpageSection from './SubpageSection';
import MenuWrapped from './MenuWrapped';

export default ({ presentationTitle, children }) => <MenuWrapped><section className='subpage contest'>
    <div className='subpage__header'>
        <NavLink to='/' className='subpage__header--logo'>
            <img src={logo} />
        </NavLink>
        <Heading
            className='subpage__header--title'
            strong={true}
            uppercase={true}
            align='center'
            margin='none'
        >
            Materiały do prezentacji
  </Heading>
    </div>
    <Grommet className='content-wrapper'>
        <SubpageSection headerUppercase={false} title={presentationTitle}>
            {children}
        </SubpageSection>
        <Footer />
    </Grommet>
</section></MenuWrapped>;