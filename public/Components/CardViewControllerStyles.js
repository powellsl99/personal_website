import {makeStyles} from '@material-ui/core';

const useStyles = () => {
    return makeStyles((theme) => ({
        tabs: {
            backgroundColor: "#add8e6", 
            color: "white", 
            height: "5%"
        },
        disclaimer: {
            paddingLeft: theme.spacing(2)
        }
      }));
}

  export default useStyles();