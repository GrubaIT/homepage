import React from 'react';
import { NavLink } from 'react-router-dom';
import Heading from 'grommet/components/Heading';
import Grommet from 'grommet/components/Grommet';
import logo from "../images/logo.svg";

export default ({ title, children, className }) =>
    <section className={`subpage ${className ? className : ''}`}>
        <div className="subpage__header">
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
