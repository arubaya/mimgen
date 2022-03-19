import React from 'react';
import * as material from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'About'];

function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const logo = 'MIMGEN';

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <material.AppBar position="static">
      <material.Container maxWidth="xl">
        <material.Toolbar disableGutters>
          <material.Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            {logo}
          </material.Typography>

          <material.Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <material.IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </material.IconButton>
            <material.Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <material.MenuItem key={page} onClick={handleCloseNavMenu}>
                  <material.Typography color="secondary" textAlign="center">{page}</material.Typography>
                </material.MenuItem>
              ))}
            </material.Menu>
          </material.Box>
          <material.Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            {logo}
          </material.Typography>
          <material.Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <material.Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#212b36', display: 'block' }}
              >
                {page}
              </material.Button>
            ))}
          </material.Box>
        </material.Toolbar>
      </material.Container>
    </material.AppBar>
  )
}

export default Navbar