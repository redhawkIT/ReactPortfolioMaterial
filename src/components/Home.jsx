import React from 'react'
import Avatar from 'material-ui/Avatar'
import Projects from './Projects'

const Home = () => (
  <div>
    <div className='head'>
      <Avatar
        className='Home__Avatar'
        src="https://avatars3.githubusercontent.com/u/9455409?v=3&s=466"
        size={150}/>
      <h2>Christopher Wiles</h2>
      <h3>Software Engineer</h3>
    </div>
    <Projects/>
  </div>
)

export default Home
