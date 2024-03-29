import { Accordion, Button } from "react-bootstrap";
import React from 'react';
import { ListGroup, Badge } from "react-bootstrap";

class CollapseAccordion extends React.Component{
    render(){
        let project_list = [ 
            {
                'title' : 'Social Media Website',
                'skillsUsed' : ['React Js,', ' Material UI, ', 'Flexbox Css'],
                'demo_link' : 'https://social-app-by-rk.onrender.com/'
            },
            {
                'title' : 'Admin Dashboard',
                'skillsUsed' : ['React Js,', ' Flexbox CSS, ', ' React Charts'],
                'demo_link' : 'https://admin-dashboard-by-rk.onrender.com/'
            },

            {
              'title' : ' Smart Question Answer Community Page',
              'skillsUsed' : ['Django', ' DRF, ', 'JWT, ', ' Bootstrap, ', 'JQuery'],
              'demo_link' : 'https://rahulgupta1996.pythonanywhere.com/'
            },
            {
                'title' : 'Basic Eccommerce Using Django',
                'skillsUsed' : ['Python,',' Django,', 'Bootstrap,', ' Jquery,', ' HTML & CSS'],
                'demo_link' : 'https://rahulgupta1995.pythonanywhere.com/'
            },
            {
                'title' : 'Portfolio using React JS',
                'skillsUsed' : ['React Js,', ' Bootstrap, ', ' Jquery', 'CSS'],
                'demo_link' : 'https://rahul-radheshyam-gupta.github.io/reactjs_mini_project/'
            },
            {
              'title' : 'Tic Toe Game',
              'skillsUsed' : ['React Js,', 'CSS'],
              'demo_link' : 'https://rahul-radheshyam-gupta.github.io/reactjs_mini_project/#/tictoe'
            },

        ]

        let projects = project_list.map( (project,i)=>{
            return (
                <ListGroup.Item variant="dark" as="li" key={i} className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold pull-left">
                          <a href={project.demo_link} className='text-dark' target='_blank' style={{textDecoration:'none'}}>
                            <i class="bi bi-cursor"></i> {project.title} 
                          </a>
                          </div>
                        <small> Skills :  {project.skillsUsed}</small><br />
                    </div>
              </ListGroup.Item>
            )
        } )

        let interest_list = ['Machine Learning', 'Internet of Things', 'Data Science']

        let interests = interest_list.map( (interest, i)=>{
            return (
                <ListGroup.Item variant="dark" as="li" key={i} className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold pull-left"> {interest} </div>
                    </div>
              </ListGroup.Item>
            )
        } )

        let social_media_link_list = [
            ["https://www.linkedin.com/in/rahul-gupta-1b2578170/",<i class="bi bi-linkedin"></i>, false],
            ["https://github.com/Rahul-Radheshyam-Gupta", <i class="bi bi-github"></i>, false],
            ["mrrahulgupta0096@gmail.com", <i class="bi bi-envelope-check"></i>, true]
        ]
        let social_media_links = social_media_link_list.map( (social_media)=>{
            return (
                <ListGroup.Item variant="dark" as="a" href={ social_media[2] ? ("mailto:"+social_media[0]) : social_media[0] } target='_blank'  className="d-flex justify-content-between align-items-start pl-5 pr-5">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold pull-left"> {social_media[1]  }  </div>
                    </div>
              </ListGroup.Item>
            )
        } )
        return (
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="1">
              <Accordion.Header> Projects</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                 {projects}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header> Interests</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                 {interests}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Contact Detail</Accordion.Header>
              <Accordion.Body>
                <ListGroup horizontal style={{margin:'2px 40px'}}>
                    {social_media_links}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );

    }
}

export default CollapseAccordion;