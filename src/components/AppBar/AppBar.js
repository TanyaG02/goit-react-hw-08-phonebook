import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/auth-selectors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

const HeaderAppBar = () => {
  const isLoggedIn = useSelector(getLoggedIn);

  return (
    <>
      <AppBar
        position="sticky"
        component="header"
        sx={{
          fontfamily: 'Raleway',
        }}
      >
        <Container maxWidth={'sm'}>
          <Toolbar
            disableGutters
            aria-label="ToolBar"
            sx={{
              justifyContent: 'space-between',
            }}
          >
            <Navigation />
            {isLoggedIn && <UserMenu />}
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default HeaderAppBar;
