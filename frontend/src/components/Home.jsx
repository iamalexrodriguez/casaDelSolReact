import React from 'react'
import { Carousel, Row, Col, Timeline } from 'antd';
import Fade from 'react-reveal/Fade'
let imageSrc1 = "https://res.cloudinary.com/alexrodriguezcloud/image/upload/v1552525299/reactCasaDelSol/banner/robert-collins-341231-unsplash.jpg"
let imageSrc2 = "https://res.cloudinary.com/alexrodriguezcloud/image/upload/v1552525299/reactCasaDelSol/banner/KINDER_27.jpg"
let imageSrc3 = "https://res.cloudinary.com/alexrodriguezcloud/image/upload/v1552525299/reactCasaDelSol/banner/01_HP_UNI158415_Bluewash_WEB.jpg"
let imageSrc4 = "https://res.cloudinary.com/alexrodriguezcloud/image/upload/v1552525299/reactCasaDelSol/banner/-UNICEF_UNI178927_Ramos_1600x900_0.jpg"
let mPadSrc = "https://res.cloudinary.com/alexrodriguezcloud/image/upload/v1552527784/reactCasaDelSol/banner/modelo_padrino.png"

export default () => (
        <div>
          
           
            <Carousel style={styleCar} autoplay>
                <div><img src={imageSrc1} style={{width:"100vw", height:"40vw"}} alt="banner1"/></div>
                <div><img src={imageSrc2} style={{width:"100vw", height:"40vw"}} alt="banner2"/></div>
                <div><img src={imageSrc3} style={{width:"100vw", height:"40vw"}} alt="banner3"/></div>
                <div><img src={imageSrc4} style={{width:"100vw", height:"40vw"}} alt="banner4"/></div>
            </Carousel>,
            
            <section style={sectionStyles}>
            <Fade bottom>
                <h1 style={{color:"white"}}>Con tu ayuda, garantizamos un sano desarrollo para los niños.</h1>
            </Fade>
            </section>

            <section style={section2Style}>
            <Row>
                <Col style={paddingColLeft} xs={7} sm={7} md={6} lg={8} xl={8}>
                <br/>
                
                <h3>Un desarrollo cerebral <strong>no adecuado</strong> en la infancia..</h3>
              
                <br/><br/>

                <Timeline style={{paddingLeft:"8%"}} mode="right">
                    <Timeline.Item>Puede tender a conductas delictivas y altamente negativas.</Timeline.Item>
                    <Timeline.Item>No hay un buen aprovechamiento escolar ni se logran desarrollar todas las aptitudes.</Timeline.Item>
                    <Timeline.Item>Menores oportunidades laborales y desenvolvimiento.</Timeline.Item>
                </Timeline>
                </Col>


                <Col style={{textAlign:"center"}} xs={10} sm={10} md={12} lg={8} xl={8}>
                
                <img style={{width:"25vw", padding:"5%"}} src={mPadSrc} alt="modelo pad"/>
             
                </Col>



                <Col style={paddingColRight}  xs={7} sm={7} md={6} lg={8} xl={8}>
                <br/>
                <h3>.. un <strong>buen desarrollo </strong> cerebral en la infancia</h3>
                <br/><br/>

                <Timeline style={{paddingRight:"8%"}} mode="left">
                    <Timeline.Item>Buen desempeño y aprovechamiento escolar durante toda su vida.</Timeline.Item>
                    <Timeline.Item>Bajas o nulas tendencias delictivas dado que tuvo un gran ejemplo.</Timeline.Item>
                    <Timeline.Item>Sanas relaciones interpesonales y buena salud mental.</Timeline.Item>
                    <Timeline.Item> <strong>Nuevas generaciones que logran grandes cambios en su sociedad.</strong> </Timeline.Item>
                </Timeline>
                </Col>
            </Row>,
            </section>

            <div>

            <section style={footerStyle}>
            <Fade bottom>
            <br/>
                <h1 style={{color:"white"}}>"Lleva mucho tiempo crecer hasta convertirse en niño."</h1>
                <h4 style={{color:"white"}}>-Pablo Picasso</h4> 
            <br/>
            </Fade>

            


            </section>
            </div>
        </div>


)


const paddingColLeft ={
    textAlign:"right",
    paddingTop:"8%"
}

const paddingColRight ={
    textAlign:"left",
    paddingTop:"8%"
}

const sectionStyles = {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: "200%",
    boxShadow: "0px 10px 5px -5px rgba(0,0,0,0.07)",
    background: "#ff9800"
}

const styleCar = {
    boxShadow: "0px 10px 5px -5px rgba(0,0,0,0.07)" 
}

const section2Style = {
    height:"30vh",
    color:"white"
}


const footerStyle = {
    marginTop:"35%",
    background: "#0297FF",
    height: "10%",
    textAlign:"center",
    fontSize: "150%",
}


