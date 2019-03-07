import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import favicon from '../images/favicon.png';
import { Footer, Contact, MenuWrapped, ScrollToTop } from '../components';
import Home from './Home';
import Contest from './Contest';
import NoMatch from './404.jsx';
import Meetjs33 from './Meetjs33';
import FourDev from './FourDev';
import Gallery from './Gallery';
import FriendEvents from './FriendEvents';
import Fdd from './Fdd';
import CommunityGuide from './CommunityGuide';
import JoinUs from './JoinUs';

const Routes = () => (
    <div className='app-container'>
        <Router>
            <MenuWrapped>
                <ScrollToTop>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/zadanie' component={Contest} />
                        <Route path='/meetjs33' component={Meetjs33} />
                        <Route path='/4dev' component={FourDev} />
                        <Route path='/fdd' component={Fdd} />
                        <Route path='/grupams' component={Fdd} />
                        <Route path='/galeria' component={Gallery} />
                        <Route path='/kamraci' component={FriendEvents} />
                        <Route
                            path='/przewodnik-po-spolecznosci'
                            component={CommunityGuide}
                        />
                        <Route
                            path='/chce-zostac-grubiorzem'
                            component={JoinUs}
                        />
                        <Route component={NoMatch} />
                    </Switch>
                    <div className='grommet content-wrapper'>
                        <Contact />
                        <Footer />
                    </div>
                </ScrollToTop>
            </MenuWrapped>
        </Router>
    </div>
);

export default hot(module)(Routes);
