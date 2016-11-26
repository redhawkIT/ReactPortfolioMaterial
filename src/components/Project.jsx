import React, {PropTypes} from 'react'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

// const TechImgs = ({imgs}) => {
//   const images = imgs.map((image, i) => {
//     return <img className="TechImgs" src={image.img} key={i} role="presentation"/>
//   })
//   return <div>{images}</div>
// }

const Project = ({text, img, title, tech, github_url, project_url, date}) => (
  <Card style={{backgroundColor: 'none', boxShadow: 'none'}}>
    <CardTitle title={title} titleColor='white' subtitleColor='white' subtitle={tech.join(', ')} />
    {/* <CardTitle title={title} titleColor='white' subtitleColor='white' subtitle={<TechImgs imgs={tech}/>} /> */}
    <CardMedia>
      <img className="Project__img" src={img} role="presentation"/>
    </CardMedia>
    <CardText className="Project__text">
      <div className="row center-xs">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
              <div className="box">
                  {text}
              </div>
          </div>
      </div>
    </CardText>
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
