import {makeStyles} from '@material-ui/core';

const useStyles = () => {
    return makeStyles((theme) => ({
        genericCard: {
            width: "100%",
            backgroundColor: '#add8e6'

        },
        header: {
            marginTop: window.innerHeight/4,
            fontSize: 60,
            //display: 'flex'
        },
        navigateButton: {
            marginTop: window.innerHeight*7/16,
            marginBottom: window.innerHeight/2,
            fontSize: 120,
            color:'white'
        },
        centerGrid: {
            flex: 1,
            color:'white'
        },
        avatarPic: {
            marginTop: theme.spacing(5),
            marginLeft: theme.spacing(10),
            width: theme.spacing(20),
            height: theme.spacing(20)
        },
        centerContent: {
            height: window.innerHeight*(3/4),
            marginTop: window.innerHeight/8,
            //backgroundColor: 'white'
        },
        content: {
            marginTop: theme.spacing(8),
            marginLeft: theme.spacing(3)
        },
        text: {
            marginTop: theme.spacing(9.2),
        },
        mailButton: {
            color: 'white'
        },
        bioText: {
            //marginTop: theme.spacing(13)
        }
      }));
}

  export default useStyles();