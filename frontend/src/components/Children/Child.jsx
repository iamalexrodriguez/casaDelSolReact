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
        this.props.pictureGallery.forEach(source => {
            let elem = { src: source }
            gallery.push(elem)
        })
        this.setState({ customGallery: gallery }) 
    }

    render() {
        let { name, profilePic } = this.props
        let { open, customGallery, current } = this.state

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

                    <br/>

                    <div style={kidSyle}>
                    <img onClick={() => this.setState({ open: true })} style={imageStyle} src={profilePic} alt="photochild" />
                    <br/><br/>
                    <h2 styles={nameStyle}>{name} </h2>
                    </div>


                </div>
            </div>
        )

    }
}

export default Child;


const imageStyle ={
    width:"30vw",
    borderRadius: "5%",
    cursor: "pointer",
    boxShadow:"13px 14px 13px -8px rgba(0,0,0,0.58)",
}

const nameStyle = {
    padding:"20px",
    color:"red"
}

const kidSyle={
    width:"30vw",
    textAlign:"center"
}