import React from 'react';
import * as material from '@mui/material';
import * as reactRouterDom from 'react-router-dom';

import Logo from '../../../assets/logo192.png';

function Navbar() {
  const pages = [
    ['Home', '/'],
    ['About', '/about'],
  ];
  const [drawerState, setDrawerState] = React.useState(false);

  const drawerWidth = '300px';

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerState(open);
  };

  return (
    <material.Box>
      <material.Box component='header'>
        <reactRouterDom.NavLink to="/">
          <material.Box id='logoContainer'>
            <material.Avatar alt='MimGen' src={Logo} />
            <material.Typography
              variant='h2'
              sx={{
                marginLeft: '20px',
                fontSize: '30px',
                fontWeight: '700',
                color: 'var(--text-main)',
              }}
            >
              MimGen
            </material.Typography>
          </material.Box>
        </reactRouterDom.NavLink>
        <material.Box sx={{ marginLeft: 'auto' }}>
          <material.Button
            className='button-shadow'
            variant='outlined'
            color='secondary'
            onClick={toggleDrawer(true)}
          >
            Menu
          </material.Button>
        </material.Box>
      </material.Box>
      <material.Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <material.Drawer
          variant='temporary'
          open={drawerState}
          anchor='right'
          onClose={toggleDrawer(false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '300px',
            },
          }}
        >
          <material.Box
            sx={{
              width: '100%',
              height: '100vh',
              display: 'flex',
              padding: '20px',
              flexDirection: 'column',
            }}
          >
            <material.Box id='logoContainer'>
              <material.Avatar alt='MimGen' src={Logo} />
              <material.Typography
                variant='h2'
                sx={{
                  marginLeft: '20px',
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'var(--text-main)',
                }}
              >
                MimGen
              </material.Typography>
            </material.Box>
            <material.Box
              component='nav'
              sx={{
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {pages.map((page) => (
                <reactRouterDom.NavLink
                  key={page[0]}
                  to={page[1]}
                  className='button-base button-shadow'
                  style={{ backgroundColor: 'var(--primary-light)', marginBottom: '20px' }}
                >
                  <material.Typography
                    variant='button'
                    sx={{ color: 'var(--text-main)', fontWeight: '600' }}
                  >
                    {page[0]}
                  </material.Typography>
                </reactRouterDom.NavLink>
              ))}
            </material.Box>
            <material.Box sx={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>
              <material.Typography variant="caption">&copy; 2022 MimGen by <a href="https://github.com/arubaya" target="_blank" rel="noreferrer">Arubaya</a></material.Typography>
            </material.Box>
          </material.Box>
        </material.Drawer>
      </material.Box>
    </material.Box>
  );
}

export default Navbar;
