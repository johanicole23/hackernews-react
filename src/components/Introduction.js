import React from 'react';
import { Grid, Typography,Box } from '@mui/material';

import personalizedStyles from '../styles/personalizedStyles';

const Introduction = () => {
    return (
        <Box sx={personalizedStyles.introductionBox}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={10}>
                    <Typography sx={personalizedStyles.introductionTitle}>
                        This system allows you to explore news entries from Hacker News in an easy-to-navigate
                        table format.
                    </Typography>
                    <Typography sx={personalizedStyles.introductionDescription}>
                        You'll see a list of the first 30 news articles fetched
                        from the web. With the buttons below, you can:

                    </Typography>
                    <ul>
                        <li>
                            <Typography sx={personalizedStyles.introductionList}>
                                <strong>Load all entries</strong> without any filters.
                            </Typography>
                        </li>
                        <li>
                            <Typography sx={personalizedStyles.introductionList}>
                                <strong>Load entries with titles containing 5 or fewer words</strong>, sorted by their points.
                            </Typography>
                        </li>
                        <li>
                            <Typography sx={personalizedStyles.introductionList}>
                                <strong>Load entries with titles containing more than 5 words</strong>, sorted in descending order by their comments.
                            </Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={2} />
            </Grid>
        </Box>
    );
};

export default Introduction;
