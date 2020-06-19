import {makeStyles} from '@material-ui/core';

const useStyles = () => {
    return makeStyles((theme) => ({
        whiteIconButton: {
            color: 'white',
        },
        cardContainer: {
            backgroundColor: '#add8e6',
            marginLeft: theme.spacing(3),
            marginTop: theme.spacing(5.5)
        },
        text: {
            marginTop: theme.spacing(1.2)
        },
        grid: {
            display: 'inline-flex',
            color:'white'
        },
      }));
}

  export default useStyles();