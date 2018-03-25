import { Theme } from "material-ui";

const drawerWidth = 240;

export const styles = (theme : Theme) => ({
    "root": {
      width: '100%',
      height: '100vh',
      zIndex: 1,
      overflow: 'hidden'
    },  
    "content": {
      width: '100%',
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: 24,
      height: 'calc(100% - 56px)',
      marginTop: 56,
      [theme.breakpoints.up('sm')]: {
        height: 'calc(100% - 64px)',
        marginTop: 64,
      }
    },   
    "card": {
      maxWidth: 345,
    },
    "media": {
      height: 150,
    },
    "tile":{
      margin:'10px'
    },
    "upload":{
      width : '100% !important',
      height: '60px !important'
    }
  } );