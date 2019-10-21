import React from "react";
import convert from "xml-js";

import { Subpage, Gallery } from '../components';

const BATCH_SIZE = 12;

const imgFromBlob = ({Url: {_text: imageUrl}}) => imageUrl

const imagesFromBlob = blob => Array.isArray(blob)
  ? blob.map(imgFromBlob)
  : [imgFromBlob(blob)];

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {loading: true, images: [], nextMarker: ''}
  }

  componentDidMount() {
    this.loadMore();
  }

  loadMore() {
    const {nextMarker} = this.state
    this.setState({loading: true, error: null});

    fetch(`https://grubawebsite.blob.core.windows.net/gruba-gallery?restype=container&comp=list&maxresults=${BATCH_SIZE}&marker=${nextMarker}`)
      .then(response => response.text())
      .then(xmlText => {
        const {EnumerationResults: {NextMarker, Blobs}} = JSON.parse(convert.xml2json(xmlText, {compact: true, spaces: 4}))

        this.setState(oldState => ({
          loading: false,
          nextMarker: NextMarker._text,
          images: Blobs.Blob
            ? [...oldState.images, ...imagesFromBlob(Blobs.Blob)]
            : oldState.images
        }))
      })
  };

  render() {
    return (
      <Subpage title="Zdjęcia z naszych wydarzeń" className="friend-events">
        <Gallery {...this.state} loadMore={this.loadMore.bind(this)} />
      </Subpage>
    );
  }
}
