import {makeStyles} from '@material-ui/core';

const useStyles = () => {
    return makeStyles((theme) => ({
        genericCard: {
            width: window.innerWidth,
            height: window.innerHeight,
        },
        navigateButton: {
            marginTop: window.innerHeight/2,
            marginBottom: window.innerHeight/2,
            fontSize: 120
        },
        centerGrid: {
            flex: 1
        },
        content: {
            textAlign: "center",
        }
      }));
}

  export default useStyles();