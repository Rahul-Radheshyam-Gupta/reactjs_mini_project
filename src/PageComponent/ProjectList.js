import { Accordion, Button } from "react-bootstrap";
import React from 'react';
import { ListGroup, Badge } from "react-bootstrap";

class CollapseAccordion extends React.Component{
    render(){
        let project_list = [ 
            {
                'title' : 'Tic Toe Game Using React JS',
                'skillsUsed' : ['React Js,', ' Bootstrap, ', ' Jquery', 'CSS'],
                'demo_link' : 'https://rahul-radheshyam-gupta.github.io/reactjs_mini_project/#/tictoe'
            },
            {
                'title' : 'Portfolio using React JS',
                'skillsUsed' : ['React Js,', ' Bootstrap, ', ' Jquery', 'CSS'],
                'demo_link' : 'https://rahul-radheshyam-gupta.github.io/reactjs_mini_project/'
            },
            {
                'title' : 'Portfolio Using Django',
                'skillsUsed' : ['Python,',' Django,', ' Bootstrap,', ' Jquery,', ' HTML & CSS'],
                'demo_link' : 'https://rahulgupta1996.pythonanywhere.com/'
            },
            {
                'title' : 'Basic Eccommerce Using Django',
                'skillsUsed' : ['Python,',' Django,', 'Bootstrap,', ' Jquery,', ' HTML & CSS'],
                'demo_link' : 'https://rahulgupta1995.pythonanywhere.com/'
            },

        ]

        let projects = project_list.map( (project)=>{
            return (
                <ListGroup.Item variant="dark" as="li"  className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold pull-left"> {project.title} </div>
                        <small> Skills :  {project.skillsUsed}</small><br />
                        <Button className="link_btn" variant="secondary" as="a" size="sm" href={project.demo_link} target='_blank'> View Website </Button>
                    </div>
              </ListGroup.Item>
            )
        } )

        let interest_list = ['Machine Learning', 'Internet of Things', 'Data Science']

        let interests = interest_list.map( (interest)=>{
            return (
                <ListGroup.Item variant="dark" as="li"  className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold pull-left"> {interest} </div>
                    </div>
              </ListGroup.Item>
            )
        } )

        let social_media_link_list = [
            ["https://www.linkedin.com/in/rahul-gupta-1b2578170/","Linkedin"],
            ["https://github.com/Rahul-Radheshyam-Gupta", "GitHub"],
            ["mrrahulgupta0096@gmail.com", "Gmail"]
        ]
        let social_media_links = social_media_link_list.map( (social_media)=>{
            return (
                <ListGroup.Item variant="dark" as="a" href={ social_media[1] === "Gmail" ? ("mailto:"+social_media[0]) : social_media[0] } target='_blank'  className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold pull-left"> {social_media[1]  }  </div>
                    </div>
              </ListGroup.Item>
            )
        } )
        return (
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Projects</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                 {projects}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Interests</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                 {interests}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Contact Detail</Accordion.Header>
              <Accordion.Body>
                <ListGroup horizontal>
                    {social_media_links}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );

    }
}

export default CollapseAccordion;