import { Theme } from "material-ui";

const drawerWidth = 240;
export interface IStyle{
  
    upload:any,
  }

export const styles = (theme : Theme) => ({ 
    upload:{
      width : '100% !important',
      height: '60px !important'
    }
  } as IStyle );