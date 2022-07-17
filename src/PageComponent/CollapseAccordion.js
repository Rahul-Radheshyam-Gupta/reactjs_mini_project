import { Accordion } from "react-bootstrap";
import React from 'react';
import { ListGroup, Badge } from "react-bootstrap";

class CollapseAccordion extends React.Component{
    render(){
        return (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Experiences</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  <ListGroup.Item variant="dark">
                    I am working as a software developer at <strong>Teamnest HR Solutions Pvt. Ltd. 
                    with total experience of 3 years </strong>. 
                    <br/>There, I am working on the Django framework to develop a HRMS software.
                    I use django and django rest framework to create api and using frontend tools and languages like JavaScript, Jquary, Html, Css and themes.
                    <br/>I do complete development, from creating APIs to integrate it with frontend.
                    I also React Js and created some cool mini projects.
                    </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Set of Skills</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  <ListGroup.Item variant="dark">Python</ListGroup.Item>
                  <ListGroup.Item variant="dark">Django</ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    DRF - Restful API
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    SQL, PostgreSQL and MSSQL
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    Python Libraries like Pandas, Numpy
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    JQuary and JavaScript
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">HTML and CSS3</ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    Bootstrap and Other Themes
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">Ract JS</ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Education Details</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  <ListGroup.Item variant="dark"
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold pull-left">BE in EXTC</div>
                      <small> 2016 - 2019</small>
                    </div>
                    <Badge bg="primary" pill>
                      7.86 CGPA
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark"
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold pull-left">
                        Dip. in EE
                      </div>
                      <small className="pull-left"> 2013 - 2015</small>
                    </div>
                    <Badge bg="primary" pill>
                      60%
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark"
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold pull-left">HSC</div>
                      
                      <small className="pull-left">2011 - 2013</small>
                    </div>
                    <Badge bg="primary" pill>
                      77%
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark"
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold pull-left">SSC</div>
                      <small> 2011</small>
                    </div>
                    <Badge bg="primary" pill>
                      71.64%
                    </Badge>
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );

    }
}

export default CollapseAccordion;