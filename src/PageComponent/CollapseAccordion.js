import { Accordion } from "react-bootstrap";
import React from 'react';
import { ListGroup, Badge } from "react-bootstrap";

class CollapseAccordion extends React.Component{
    render(){
        return (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header> Experiences</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  <ListGroup.Item variant="dark">
                  {/* TeamNest is a cloud platform to simplify HR services for organizations of all sizes. */}
                    I am working as a software developer at <strong>Teamnest HR Solutions Pvt. Ltd. 
                    with total experience of 3 years </strong>. 
                    <br/>There, I am working with a team to develop a HRMS software.
                    I use <strong>django and django rest framework</strong> to create APIs and integrate it with the frontend pages those are created using <strong>JavaScript, Jquary, Html, Css and themes</strong>.
                    <br/>I do <strong>complete development, bug fixing and have good debugging skill</strong>.
                    I also know React Js and recently I created some cool mini projects like tic toe game, portfolio and still .
                    </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header> Set of Skills</Accordion.Header>
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
                  <ListGroup.Item variant="dark">Ract JS</ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    Bootstrap and Other Themes
                  </ListGroup.Item>
                  
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header> Education Details</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  <ListGroup.Item variant="dark"
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold pull-left">BE in EXTC</div>
                      {/* <small> 2016 - 2019</small> */}
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
                      {/* <small className="pull-left"> 2013 - 2015</small> */}
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
                      
                      {/* <small className="pull-left">2011 - 2013</small> */}
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
                      {/* <small> 2011</small> */}
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