import React, { Component } from "react";
import ModalImage from "react-modal-image";

import Spinning from 'grommet/components/icons/Spinning';
import { InfiniteScroll } from 'react-simple-infinite-scroll';

class Gallery extends Component {
  renderImage(imageUrl) {
    return (
      <ModalImage
        key={`gallery-image-${imageUrl}`}
        className="gallery__images--item"
        small={imageUrl}
        large={imageUrl}
        hideZoom={true}
        hideDownload={true}
      />)
  }

  render() {
    const {images, loading, nextMarker, loadMore} = this.props

    return (
      <InfiniteScroll
        throttle={200}
        threshold={100}
        isLoading={loading}
        hasMore={nextMarker}
        onLoadMore={loadMore}
      >
        <section className="gallery">
          <div className="gallery__images">
            {images.length ? images.map(this.renderImage) : null}
          </div>
          {loading && <div className="gallery__loading-container">
            <Spinning size='large' />
          </div>}
        </section>
      </InfiniteScroll>
    );
  }
}
export default Gallery;
