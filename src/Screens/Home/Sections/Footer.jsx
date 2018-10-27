import React from 'react';
import Footer from "grommet/components/Footer";
import Box from "grommet/components/Box";
import Paragraph from "grommet/components/Paragraph";

import gruba from "./images/logo-grey.png";

export default ({className}) => <Footer className={className} justify="center" align="center" alignContent="center" justify="center" size="small">
    <Box
        direction="row"
        align="center"
        justify="center"
        alignContent="center"
        pad={{ between: "medium" }}
        className="app-container__footer"
    >
    <img className="app-container__footer-logo" src={gruba} />
    <Paragraph margin="none">© 2018 Fundacja Gruba.IT</Paragraph>
    </Box>
</Footer>;
