import { Theme } from "material-ui";

export const styles = (theme : Theme) => ({
    "container": {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '30px',
    },
    "textField": {
        width: '300px',
        alignSelf: 'center',
    },
    "loginForm": {
        display: 'flex',
        marginTop: '80px',
        justifyContent: 'center',
    },
    "buttonContainer": {
        display: 'flex',
        marginTop: '30px',
        justifyContent: 'space-evenly',
        marginBottom:'20px'
    },
    "divider":{
        padding : "0 0"
    }
  } );