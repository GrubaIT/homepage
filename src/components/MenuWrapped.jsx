import React from 'react';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';
import Anchor from 'grommet/components/Anchor';
import { NavLink } from 'react-router-dom';
import Header from 'grommet/components/Header';

export default ({ children }) =>
    <React.Fragment>
        <Header fixed={true}
            float={false}
            className='app-container__menu'
            splash={false}>
            <Menu responsive={true}
                label='Menu'
                icon={<MenuIcon />}
                inline={false}
                primary={true}
                size='small'>
                <NavLink to='/'>
                    <Anchor>Strona główna</Anchor>
                </NavLink>
                <NavLink to='/galeria'>
                    <Anchor>Zdjęcia z wydarzeń</Anchor>
                </NavLink>
                <NavLink to='/kamraci'>
                    <Anchor>Nadchodzące wydarzenia naszych kamratów</Anchor>
                </NavLink>
            </Menu>
        </Header>
        {children}
    </React.Fragment>
