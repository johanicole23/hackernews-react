import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider} from '@mui/material/styles';

import Container from '@mui/material/Container';

import stack from '../../assets/stack.png'
import { theme } from '../../styles/myGeneralTheme';
import personalizedStyles from '../../styles/personalizedStyles';



function ResponsiveAppBar() {

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ marginRight:'1rem' }}>
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
