import React from 'react'
import * as material from '@mui/material';
import * as Component from '../components';

function HomePage() {
  return (
    <material.Box>
      <Component.Navbar />
      <material.Box id="mainPage" component="main">
        <Component.MemeTemplates />
        <material.Box className="meme-generator">
          <Component.MemePriview />
          <Component.MemeEdit />
        </material.Box>
        <Component.MemeResult />
      </material.Box>
    </material.Box>
  )
}

export default HomePage