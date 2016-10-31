import React, {Component} from 'react'

import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
    /* box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px; */
const CardExampleWithAvatar = () => (
  <Card style={{backgroundColor: 'none', boxShadow: 'none'}}>
    <CardMedia>
      <img className="Projects__img" src="http://i.imgur.com/ruYOFwT.gif" role="presentation"/>
    </CardMedia>
    <CardTitle title="Melody Map" subtitle="React, Redux, MongoDB, Mongoose, Bootstrap, Node.js, express" />
    <CardText>
Discover live music in your area tonight. With Melody Map, you can easily explore artists, venues, and shows happening in your city and beyond. See when your favorite bands are playing, check out that new venue, or give a listen and discover new artists.
    </CardText>
    <CardActions>
      <FlatButton label="Code" />
      <FlatButton label="Live Demo" />
    </CardActions>
  </Card>
)

class Projects extends Component {

  render() {
    return (
      <div className="row center-xs">
          <div className="col-xs-8">
              <div className="box">
                  <CardExampleWithAvatar/>
                  <CardExampleWithAvatar/>
              </div>
          </div>
      </div>
    )
  }

}

export default Projects
