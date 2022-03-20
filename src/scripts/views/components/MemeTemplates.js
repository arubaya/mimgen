import React from 'react';
import * as material from '@mui/material';
import * as recoil from 'recoil';

import * as recoilState from '../../recoil';

import * as api from '../../api';

function MemeTemplates() {
  const [openDialog, setOpenDialog] = recoil.useRecoilState(recoilState.openTemplateDialog);
  const [updateData, setUpdateData] = recoil.useRecoilState(recoilState.updateData);
  const [memeTemplates, setMemeTemplates] = React.useState([]);

  React.useEffect(() => {
      let isSubscribe = true;
      if (isSubscribe) {
        async function fetchData() {
          const result = await api.templatesApi.getMemeTemplates({})
          setMemeTemplates(result.templates);
        }
        fetchData();
      }
      return () => {
        isSubscribe = false;
      };
    }, [openDialog.open]);

    const handleClose = () => {
      setOpenDialog({ ...openDialog, open: false });
    };

    const handleSelectedImage = (data) => {
      setOpenDialog({
        open: false, id: data.id, name: data.name, url: data.url, box_count: data.box_count
      })
      setUpdateData(!updateData)
    };

  return (
    <material.Dialog
      open={openDialog.open}
      onClose={() => handleClose()}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <material.DialogTitle id='alert-dialog-title'>
        {"Choose your meme..."}
      </material.DialogTitle>
      <material.DialogContent>
        <material.Box sx={{ maxWidth: '600px', maxHeight: '450px', overflowY: 'scroll' }}>
          <material.ImageList variant="masonry" cols={3} gap={8}>
            {memeTemplates.map((item) => (
              <material.ImageListItem key={item.id}>
                <img
                  src={`${item.url}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.name}
                  loading="lazy"
                />
                <material.ImageListItemBar
                  title={item.name}
                  actionIcon={
                    <material.IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.name}`}
                      onClick={() => handleSelectedImage(item)}
                    >
                      <material.Typography variant="caption">Choose</material.Typography>
                    </material.IconButton>
                  }
                />
              </material.ImageListItem>
            ))}
          </material.ImageList>
        </material.Box>
      </material.DialogContent>
      <material.DialogActions>
        <material.Button color="error" variant="contained" className="button-shadow button-border" onClick={() => handleClose()}>Close</material.Button>
      </material.DialogActions>
    </material.Dialog>
  );
}

export default MemeTemplates;
