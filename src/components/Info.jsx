import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const Info = () => (
  <div className="row center-xs">
    <div className="col-xs-12 col-sm-8 col-md-6 col-lg-6">
      <div className="box Info">
        <div className="Info__center">
          <FlatButton className="Info__link" label="Github" href="https://github.com/ChrisWiles/"/>
          <FlatButton className="Info__link" label="Linkedin" href="https://www.linkedin.com/in/christopherwiles512"/>
          <FlatButton className="Info__link" label="Resume" href="https://drive.google.com/open?id=1wJ_zFvz669sdqUCjNdELGPNjHX4pZ_NMPIEuYgZ1mok"/>
          <FlatButton className="Info__link" label="Portfolio Repo" href="https://github.com/ChrisWiles/ReactPortfolioMaterial"/>
        </div>
      </div>
    </div>
  </div>
)

export default Info
