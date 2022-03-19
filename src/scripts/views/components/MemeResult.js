import React from 'react';
import * as material from '@mui/material';
import * as recoil from 'recoil';

import * as recoilState from '../../recoil';

function MemeResult() {
  const openDialog = recoil.useRecoilValue(recoilState.openTemplateDialog);
  const updateData = recoil.useRecoilValue(recoilState.updateData);
  const imageResultUrl = recoil.useRecoilValue(recoilState.imageResultUrl);
  const [imageUrl, setImageUrl] = React.useState('');
  const [display, setDisplay] = React.useState('none');

  React.useEffect(() => {
      let isSubscribe = true;
      if (isSubscribe) {
        if (openDialog.id !== null && imageResultUrl !== '') {
          setDisplay('block')
          setImageUrl(imageResultUrl);
        } else {
          setDisplay('none')
          setImageUrl('https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png')
        }
      }
      return () => {
        isSubscribe = false;
      };
    }, [updateData]);

  return (
    <material.Box id="memeResult" sx={{ display: display }}>
      <material.Paper className="card">
        <material.Typography variant='h5' sx={{ textAlign: 'center', marginBottom: '20px' }}>
          Result
        </material.Typography>
        <material.Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={imageUrl} alt="meme" width="400px"/>
        </material.Box>
      </material.Paper>
    </material.Box>
  )
}

export default MemeResult;