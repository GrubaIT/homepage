import React from 'react';
import { NavLink } from 'react-router-dom';
import Heading from 'grommet/components/Heading';
import Grommet from 'grommet/components/Grommet';

import logo from "../images/logo.svg";
import crossmeetup from '../images/crossmeetup.jpg';

export default ({ title, children, className }) =>
    <section className={`subpage ${className ? className : ''}`}>
        <div className="subpage__header">
            <div className='subpage__header--overlay'>
                <img src={crossmeetup} />
            </div>
            <NavLink to="/" className="subpage__header--logo">
                <img src={logo} />
            </NavLink>
            <Heading
                className="subpage__header--title"
                strong={true}
                uppercase={true}
                align="center"
                margin="none"
            >
                {title}
            </Heading>
        </div>
        <Grommet className="content-wrapper">
            {children}
        </Grommet>
    </section>