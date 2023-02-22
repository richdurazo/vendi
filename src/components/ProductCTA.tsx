import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Button from '../components/Button';
import CTAImage from '../assets/images/create-job.png'
import { useNavigate } from 'react-router-dom';

function ProductCTA() {
  let navigate = useNavigate();

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'warning.main',
              py: 8,
              px: 3,
            }}
          >
            <Box component="form"  sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Get Started Today
              </Typography>
              <Typography variant="h5">
                Find the vendors and services you need easier than ever. 
              </Typography>
              {/* <TextField
                noBorder
                placeholder="Your email"
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2 }}
              /> */}
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%', marginBottom: '8px', marginTop: '8px'}}
                onClick={() => navigate('/sign-up')}>
                Sign Up
              </Button>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: '100%' }}
                onClick={() => navigate('/login')}>
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'block' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
            }}
          />
          <Box
            component="img"
            src={CTAImage}
            alt="call to action"
            sx={{
              position: {
                xs: 'relative',
                md: 'absolute'
              },
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductCTA;