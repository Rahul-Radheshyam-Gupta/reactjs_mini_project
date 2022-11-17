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
                  Worked as a Software Developer, involved in project management activities to take
                  critical decisions for Product stability, Performance improvement/optimization, and
                  building time-critical features & APIs from scratch.<br />
                  Along with the development, I have done the optimization for many existing features to
                  enhance the client experience and this helps the business to grow faster in the last 3
                  years.
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
                    Django REST framework 
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    SQL, PostgreSQL and MSSQL
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    Python Libraries like Pandas, Numpy
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">HTML and CSS3</ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    JavaScript and JQuary
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">React JS</ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    Material UI
                  </ListGroup.Item>
                  <ListGroup.Item variant="dark">
                    Bootstrap
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