import React, { Component } from 'react';
import Lightbox from 'react-images'

class Child extends Component {

    state = {
        open: false,
        customGallery: [],
        current: 0
    }

    componentDidMount() {
        let gallery = []
        this.props.pictureGallery.map(source => {
            let elem = { src: source }
            gallery.push(elem)
        })
        this.setState({ customGallery: gallery }) 
    }

    render() {
        let { name, profilePic, pictureGallery } = this.props
        let { open, customGallery, current } = this.state
        console.log(pictureGallery)
        return (
            <div>
                <div>
                    <Lightbox
                        images={customGallery}
                        currentImage={current}
                        isOpen={open}
                        onClose={() => this.setState({ open: false })}
                        onClickNext={() => {
                            let n = customGallery.length
                            let c = current + 1 > n ? current : ++current
                            this.setState({ current: c })
                        }}
                        onClickPrev={() => {
                            let c = current === 0 ? current : --current
                            this.setState({ current: c })
                        }}
                    />
                    <img onClick={() => this.setState({ open: true })} style={{ width: "200px" }} src={profilePic} alt="photochild" />
                    <div>{name} </div>
                </div>
            </div>
        )

    }
}

export default Child;