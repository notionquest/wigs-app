import React, { Component } from 'react'
import ImageZoom from 'react-medium-image-zoom'

class DetailedInfo extends Component {

    constructor(props) {

    }

    render() {
        return (
            <div>
                <ImageZoom
                    image={{
                        src: 'https://i.picsum.photos/id/29/300/300.jpg',
                        alt: 'Golden Gate Bridge',
                        className: 'img',
                        style: { width: '20em' }
                    }}
                    zoomImage={{
                        src: 'https://i.picsum.photos/id/29/300/300.jpg',
                        alt: 'Golden Gate Bridge'
                    }}
                />
            </div >
        );
    }

}

export default DetailedInfo;