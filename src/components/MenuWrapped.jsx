import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from 'grommet/components/Header';

export default ({ children }) =>
    <React.Fragment>
        <Header fixed={true}
            float={false}
            className='app-container__menu'
            splash={false}>
                <NavLink to='/' exact className='grommetux-anchor'>
                    Strona główna
                </NavLink>
                <NavLink to='/galeria' className='grommetux-anchor'>
                    Zdjęcia z wydarzeń
                </NavLink>
                <NavLink to='/kamraci' className='grommetux-anchor'>
                    Nadchodzące wydarzenia naszych kamratów
                </NavLink>
        </Header>
        {children}
    </React.Fragment>
