import React, {PropTypes} from 'react'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const Project = ({text, img, title, tech, github_url, project_url, date}) => (
  <Card style={{backgroundColor: 'none', boxShadow: 'none'}}>
    <CardTitle title={title} titleColor='white' subtitleColor='white' subtitle={tech.join(', ')} />
    <CardMedia>
      <img className="Project__img" src={img} role="presentation"/>
    </CardMedia>
    <CardText className="Project__text">{text}</CardText>
    <CardActions>
      <FlatButton className="Project__Button" label="Code"  href={github_url}/>
      <FlatButton className="Project__Button" label="Live Demo"  href={project_url}/>
    </CardActions>
  </Card>
)

Project.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  github_url: PropTypes.string.isRequired,
  project_url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Project
