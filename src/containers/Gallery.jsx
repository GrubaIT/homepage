import React from "react";

import { Footer, Contact, Subpage, MenuWrapped, Gallery } from '../components';
import galleryService from "../services/gallery-service";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    galleryService().subscribe(images => this.setState({ images }));
  }

  render() {
    return (
      <MenuWrapped>
        <Subpage title="Zdjęcia z naszych wydarzeń" className="friend-events">
          <Gallery imageUrls={this.state.images} />
          <Contact />
          <Footer />
        </Subpage>
      </MenuWrapped>
    );
  }
}
