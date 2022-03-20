import React from 'react';
import * as material from '@mui/material';

function AboutInfo() {

  return (
    <material.Box id="memePreview">
      <material.Paper elevation={0} className="card paper-shadow" sx={{ maxWidth: '400px', backgroundColor: 'var(--primary-light)' }}>
        <material.Typography variant='h5' sx={{ textAlign: 'center', marginBottom: '20px', fontWeight: '700' }}>
          About MimGen
        </material.Typography>
        <material.Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <material.Typography variant="body1" sx={{marginBottom: '10px', fontWeight: '600' }}>
            MimGen is a simple website developed for the purpose of using the API example from the M3O website.
          </material.Typography>
          <material.Typography variant="body1" sx={{marginBottom: '10px', fontWeight: '600' }}>
            This source code is open source by visiting the Arubaya github page.
          </material.Typography>
          <material.Typography variant="body1" sx={{marginBottom: '10px', fontWeight: '600' }}>
            Tools used on this website:
            <ul style={{ marginLeft: '25px' }}>
              <li><a href="https://reactjs.org/" target="_blank" rel="noreferrer">ReactJs</a></li>
              <li><a href="https://mui.com/" target="_blank" rel="noreferrer">Material UI</a></li>
              <li><a href="https://m3o.com/" target="_blank" rel="noreferrer">M3O</a></li>
            </ul>
          </material.Typography>
        </material.Box>
      </material.Paper>
    </material.Box>
  )
}

export default AboutInfo;