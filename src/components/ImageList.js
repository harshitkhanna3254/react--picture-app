import React from 'react';

class ImageList extends React.Component {

    render() {
        const images = this.props.images.map((image) => {
            return (
                <div key={image.id} style={{width: '100px', margin: '20px'}} >
                    <p style={{fontFamily: 'Bradley Hand, cursive'}}> {image.alt_description} </p>
                    <img alt={image.alt_description} src={image.urls.small} />
                </div>
            )
        })
        return(
            <div>
                {images}
            </div>
        )
    }
}

export default ImageList;