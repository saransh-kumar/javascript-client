import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Footer extends React.Component {
    render() {

    return (
        <>
            <Box mt={6}>
                <Typography variant="body2" color="textSecondary" align="center">
                {' © '}
                <Link color="inherit" href="https://successive.tech/">
                    Successive Technologies
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
                </Typography>
            </Box>
        </>
    );
    }
}

export default Footer;