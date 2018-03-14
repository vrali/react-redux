import { Theme } from "material-ui";

export interface IStyle{
    popperClose: any,
    profileButton:any,
  }

export const styles = (theme : Theme) => ({  
    popperClose: {
      pointerEvents: 'none',
    },
    profileButton:{
      height:'100%'
    },  
  } as IStyle );