import React from 'react';
import profile_pic from '../static/my_profile.jpg'
import { Container, Row, Col,
        Card, Button } from 'react-bootstrap';

import CollapseAccordion from '../PageComponent/CollapseAccordion'
import ProjectList from '../PageComponent/ProjectList'
import rahul_cv from '../static/rahul_cv.pdf'

class Home extends React.Component{
    render(){
        return (
          <Container>
            <Row>
              <Col sm>
                <div>
                  <Card className="profile-card">
                    <Card.Img variant="top" src={profile_pic} />
                    <Card.Body>
                      <Card.Title>Mr. Rahul Gupta </Card.Title>
                      <Card.Text className='small font-monospace'>
                        Hi, I am a passionated software developer.
                        Working on many cool technologies like Django, Python and etc.
                      </Card.Text>
                      <Button as="a" size="sm" href={rahul_cv} target="_blank" variant="primary">Download CV</Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col sm>
                <div className="mt-2">
                    <CollapseAccordion />
                </div>
              </Col>
              <Col sm>
                  <div className="mt-2">
                    <ProjectList />
                  </div>
              </Col>
            </Row>
          </Container>
        );

    }

}

export default Home;