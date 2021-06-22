import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Profile from '../../assets/img/profile/profile.jpg'


import './about.style.css'

const About = () => {
    return (
        <div id="about">
        <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
         <Container>
             <Row className="pt-3 pb-5 align-items-center">
                    {/*Profile pic*/ }
                 <Col xs={12} md={6}>
                   <Row className="justify-content-center mb-2 mr-2 ">
                   <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid  width='280' height='200' />
                   </Row>
                 </Col>

                 {/*About me description*/}
                 <Col xs={12} md={6}>
                    <Row className=" align-items-start p-2 my-details rounded">
                        {/*description*/}
                        Hi  there! I am <strong>&nbsp;Sivasankar Madala</strong>
                <br />A passionate programmer and a Coach, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.
                <br />
                I am pursuing MCA(Masters in Computer Applications) in CBIT(Chaitanya Bharathi Institute of Technology),Hyderabad.
                <br />
                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                <br />
                Along with that, I also help people as a COACH on their journey of becoming a professional programmer. 
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                    </Row>
                    <Row>
                        {/*buttons*/}
                        <Col className="d-flex justify-content-center flex-wrap">
                        <div>
                            <a href="#contact" >
                                <Button className="m-2" variant="outline-primary">Let's talk
                                </Button>  
                            </a>
                        </div>
                        <div>
                    <a href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/sivasankar9999" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/siva-sankar-a973851a4/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                        </Col>
                    </Row>
                 </Col>
             </Row>
         </Container>
          </div>
        </div>
    )
}

export default About
