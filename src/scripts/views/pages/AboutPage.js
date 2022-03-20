import React from 'react'
import * as material from '@mui/material';
import * as Component from '../components';

function AboutPage() {
  return (
    <material.Box>
      <material.Box id="mainPage" component="main">
        <Component.AboutInfo />
      </material.Box>
    </material.Box>
  )
}

export default AboutPage