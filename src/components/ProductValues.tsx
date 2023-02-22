import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from './Typography';
import backpackIcon from '../assets/images/icons/backpack-icon.png';
import shirtIcon from '../assets/images/icons/shirt-icon.png';
import sweatshirtIcon from '../assets/images/icons/sweatshirt-icon.png';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'primary.light' }}
    >

      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="https://mui.com/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={backpackIcon}
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                No more cold calling
              </Typography>
              <Typography variant="h6">
                {
                  'Vendi’s mission is to make it easier for vendors and buyers to meet'
                }
                {
                  ' We want every size of business to have equal access to clients that need custom work.'
                }
              </Typography>

            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={shirtIcon}
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Better, quicker business
              </Typography>
              <Typography variant="h6">
                {
                  'We want to have every vendor and client to thrive'
                }
                {'in an equal opportunistic market place.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={sweatshirtIcon}
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Quotes at your fingertips.
              </Typography>
              <Typography variant="h6">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}

export default ProductValues;