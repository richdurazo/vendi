import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../assets/images/vendi-logo.png';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    let navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                component='nav'
                sx={{ backgroundColor: 'transparent' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ flexGrow: 0 }}>
                        <Box
                            // style={{
                            //     height: '43.5px',
                            //     width: '142.5px',
                            // }}
                            sx={{
                                height: {
                                    xs: '21.75px',
                                    md: '43.5px',
                                },
                                widht: {
                                    xs: '71.25px',
                                    md: '142.5px',
                                },
                            }}>
                            <img
                                height='100%'
                                width='100%'
                                src={logo}
                                alt='vendi logo'
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 0,
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        <Button
                            color='inherit'
                            sx={{
                                letterSpacing: '.1rem',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                color: '#e4e5e6',
                            }}
                            onClick={() => navigate('/login')}>
                            Sign In
                        </Button>
                        <Button
                            color='inherit'
                            sx={{
                                letterSpacing: '.1rem',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                color: '#e4e5e6',
                            }}
                            onClick={() => navigate('/sign-up')}>
                            Sign Up
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
