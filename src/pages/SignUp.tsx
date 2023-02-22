import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import logo from '../assets/images/vendi-logo.png';
import { styled } from '@mui/material/styles';
const CssTextField = styled(TextField)({
    // '& label.Mui-focused': {
    //   color: 'green',
    // },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'green',
    // },
    '& .MuiOutlinedInput-root': {
        borderRadius: 24,
        // '& fieldset': {
        //   borderColor: 'red',
        // },
        // '&:hover fieldset': {
        //   borderColor: 'yellow',
        // },
        // '&.Mui-focused fieldset': {
        //   borderColor: 'green',
        // },
    },
});
const SignUp = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (
        <Grid
            container
            component='main'
            sx={{ height: '100vh', letterSpacing: '.075rem' }}>
            <Grid item xs={12} sm={12} md={12} component={Paper}>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <div
                        style={{
                            marginTop: '75px',
                            height: '87px',
                            width: '285px',
                        }}>
                        <img
                            height='65%'
                            width='65%'
                            src={logo}
                            alt='vendi logo'
                        />
                    </div>

                    <Box
                        component='form'
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 1 }}>
                        <Grid
                            container
                            component='div'
                            flexDirection='row'
                            gap='4px'
                            wrap='nowrap'>
                            <Grid item xs={6} sm={6} md={6}>
                                <CssTextField
                                    margin='normal'
                                    required
                                    fullWidth
                                    name='firstName'
                                    label='First Name'
                                    type='firstName'
                                    id='firstName'
                                    autoComplete='first-name'
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <CssTextField
                                    margin='normal'
                                    required
                                    fullWidth
                                    id='lastName'
                                    label='Last Name'
                                    name='lastName'
                                    autoComplete='last-name'
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <CssTextField
                            margin='normal'
                            required
                            fullWidth
                            id='companyName'
                            label='Company Name'
                            name='CompanyName'
                            autoFocus
                        />
                        <CssTextField
                            margin='normal'
                            required
                            fullWidth
                            id='phone'
                            label='Phone Number'
                            name='phoneNumber'
                            autoComplete='phone'
                            autoFocus
                        />
                        <CssTextField
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            autoFocus
                        />
                        <CssTextField
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                        />

                        <Button
                            type='submit'
                            fullWidth
                            color='primary'
                            variant='contained'
                            disableElevation
                            sx={{
                                mt: 3,
                                mb: 2,
                                borderRadius: 24,
                                height: 51.06,
                                fontFamily: 'inherit',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                letterSpacing: '.075rem',
                            }}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs sx={{ fontSize: '14px' }}>
                                <span style={{ marginRight: '6px' }}>
                                    Aready a member?
                                </span>
                                <Link
                                    href='#'
                                    variant='body2'
                                    color='primary.contrastText'
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                    }}>
                                    {'Sign In'}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SignUp;
