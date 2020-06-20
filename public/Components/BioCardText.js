import React  from 'react';
import { Typography, Card , IconButton, Grid, Button, Avatar, Container, Link} from "@material-ui/core"
import useStyles from "./BioCardTextStyles"

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const BioCardText = () => {
    const classes = useStyles();
    return (
        <div className={classes.cardContainer}>
            <Grid container direction="column">
                <Grid item className={classes.grid}>
                    <IconButton 
                        className={classes.content} 
                        href="mailto: powellsl99@gmail.com?subject=Job Offer!&body=You can put your offer here :)"
                    >
                        <MailOutlineIcon className={classes.whiteIconButton}/>
                    </IconButton>
                    <Typography className={classes.text}>powellsl99@gmail.com</Typography>
                </Grid>
                <Grid item className={classes.grid}>
                    <IconButton 
                        className={classes.content} 
                        href="https://www.linkedin.com/in/sean-powell-438a1687/"
                        target="_blank"
                    >
                        <LinkedInIcon className={classes.whiteIconButton}/>
                    </IconButton>
                    <Typography className={classes.text}>Sean Powell</Typography>
                </Grid>
                <Grid item className={classes.grid}>
                    <IconButton 
                        className={classes.content} 
                        href="https://github.com/powellsl99"
                        target="_blank"
                    >
                        <GitHubIcon className={classes.whiteIconButton}/>
                    </IconButton>
                    <Typography className={classes.text}>powellsl99</Typography>
                </Grid>
            </Grid>
            
        </div>
    );
}

export default BioCardText;