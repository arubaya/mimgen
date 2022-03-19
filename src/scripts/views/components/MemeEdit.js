import React from 'react';
import * as material from '@mui/material';
import * as recoil from 'recoil';

import * as recoilState from '../../recoil';
import * as api from '../../api';

function MemeEdit() {
  const [openDialog, setOpenDialog] = recoil.useRecoilState(recoilState.openTemplateDialog);
  const [updateData, setUpdateData] = recoil.useRecoilState(recoilState.updateData);
  const setImageResult = recoil.useSetRecoilState(recoilState.imageResultUrl);
  const [firstText, setFirstText] = React.useState('');
  const [secondText, setSecondText] = React.useState('');

  const handleOpenDialog = () => {
    setOpenDialog({ ...openDialog, open: true });
  }

  const handleGenerate = async () => {
    if (openDialog.id !== null) {
      const result = await api.generateApi.generate({
        bottom_text: secondText,
        id: openDialog.id,
        top_text: firstText
      })
      setImageResult(result.url);
      setUpdateData(!updateData);
    }
  }

  return (
    <material.Box id="memeEdit">
      <material.Paper className="card">
        <material.Typography variant='h5' sx={{ textAlign: 'center', marginBottom: '20px' }}>
          Edit Meme
        </material.Typography>
        <material.Button
          sx={{ marginBottom: '20px' }}
          color="secondary"
          variant="outlined"
          onClick={() => handleOpenDialog()}
        >
          Choose Meme Template
        </material.Button>
        <material.Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
          <material.TextField onChange={(e) => setFirstText(e.target.value)} sx={{ marginBottom: '20px' }} color="secondary" id="first-text" label="First Text..." variant="outlined" />
          <material.TextField onChange={(e) => setSecondText(e.target.value)} sx={{ marginBottom: '20px' }} color="secondary" id="second-text" label="Second Text..." variant="outlined" />
        </material.Box>
        <material.Button onClick={() => handleGenerate()} disableElevation sx={{ marginTop: '20px', marginBottom: '20px' }} color="secondary" variant="contained">Generate</material.Button>
      </material.Paper>
    </material.Box>
  )
}

export default MemeEdit;