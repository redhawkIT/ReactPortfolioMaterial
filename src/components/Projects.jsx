import React from 'react'
import projects from '../projects'
import Project from './Project'

const Projects = () => (
  <div className="row center-xs">
      <div className="col-xs-8">
          <div className="box">
            {projects.map(props => <Project key={props.title} {...props}/>)}
          </div>
      </div>
  </div>
)

export default Projects
