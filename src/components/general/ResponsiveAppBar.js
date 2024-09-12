import * as React from 'react';
import { AppBar, Box, Container, Toolbar, Typography, ThemeProvider } from '@mui/material';

import stack from '../../assets/stack.png'
import { theme } from '../../styles/myGeneralTheme';
import personalizedStyles from '../../styles/personalizedStyles';



function ResponsiveAppBar() {

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ marginRight: '1rem' }}>
                            <img
                                src={stack}
                                alt="Stack Logo"
                                style={{ width: 40, height: 40, borderRadius: '50%' }}
                            />

                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={personalizedStyles.appbarTitle}
                        >
                            HACK  NEWS &nbsp;<span>CRAWLER</span>
                        </Typography>


                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>

    );
}
export default ResponsiveAppBar;
