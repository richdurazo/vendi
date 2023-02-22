import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import shirtIcon from '../assets/images/icons/shirt-icon.png';
import hatIcon from '../assets/images/icons/hat-icon.png';
import bottleIcon from '../assets/images/icons/bottle-icon.png';
import mugIcon from '../assets/images/icons/mug-icon.png';
import pantsIcon from '../assets/images/icons/pants-icon.png';
import socksIcon from '../assets/images/icons/socks-icon.png';
import sweatshirtIcon from '../assets/images/icons/sweatshirt-icon.png';
import backpackIcon from '../assets/images/icons/backpack-icon.png';

export const CreateProduct = () => {

    const icons = [
        {
            image: shirtIcon,
            displayName: 'Shirts',
        },
        {
            image: hatIcon,
            displayName: 'Hats',
        },
        {
            image: sweatshirtIcon,
            displayName: 'Sweatshirts',
        },
        {
            image: pantsIcon,
            displayName: 'Pants',
        },
        {
            image: socksIcon,
            displayName: 'Socks',
        },
        {
            image: bottleIcon,
            displayName: 'Water Bottles',
        },
        {
            image: backpackIcon,
            displayName: 'Backpacks',
        },
        {
            image: mugIcon,
            displayName: 'Mugs',
        },
    ];
    return (
        <Grid
            container
            component='main'
            sx={{
                height: '100vh',
                letterSpacing: '.075rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Grid container flexDirection='column' gap='12px' margin='16px' sx={{fontWeight: 'bold'}}>
                    <Grid item xs>
                        Create New Product
                    </Grid>
                    <Grid item xs>
                        What New Product do you want to create?
                    </Grid>
                </Grid>
                <Grid container gap='8px'>
                    {icons.map((icon, i) => (
                        <div
                            key={i}
                            style={{
                                border: '3px solid black',
                                height: '150px',
                                width: '150px',
                                borderRadius: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}>
                            <img
                                style={{
                                    marginTop: '24px',
                                    maxWidth: '60%',
                                    maxHeight: '60%',
                                    width: 'auto',
                                    height: 'auto',
                                    paddingLeft:
                                        icon.displayName === 'Mugs'
                                            ? '16px'
                                            : '0px',
                                }}
                                src={icon.image}
                                alt={icon.displayName}
                            />
                            <div
                                style={{
                                    marginBottom: '16px',
                                    fontSize: '13px',
                                }}>
                                {icon.displayName}
                            </div>
                        </div>
                    ))}
                </Grid>
            </Box>
        </Grid>
    );
};
