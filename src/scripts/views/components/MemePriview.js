import React from 'react';
import * as material from '@mui/material';
import * as recoil from 'recoil';

import * as recoilState from '../../recoil';

function MemePriview() {
  const openDialog = recoil.useRecoilValue(recoilState.openTemplateDialog);
  const updateData = recoil.useRecoilValue(recoilState.updateData);
  const [imageUrl, setImageUrl] = React.useState('');

  React.useEffect(() => {
      let isSubscribe = true;
      if (isSubscribe) {
        if (openDialog.id !== null) {
          setImageUrl(openDialog.url);
        } else {
          setImageUrl('https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png')
        }
      }
      return () => {
        isSubscribe = false;
      };
    }, [updateData]);

  return (
    <material.Box id="memePreview">
      <material.Paper className="card">
        <material.Typography variant='h5' sx={{ textAlign: 'center', marginBottom: '20px' }}>
          Preview Template
        </material.Typography>
        <material.Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={imageUrl} alt="meme" width="400px"/>
        </material.Box>
      </material.Paper>
    </material.Box>
  )
}

export default MemePriview;