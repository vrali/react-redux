import * as React from "react";
import { WithStyles, TextField, Button, withStyles, Paper, Divider } from "material-ui";
import {IStyle,styles} from "./Login.style";

interface Props{

}

class Login extends React.Component<Props & WithStyles>{

    handleClick(event){

    }
   
    
    render(){
        const theme = this.props.theme;
        const classes = (this.props as any).classes as IStyle;

        return (
            <form className={classes.loginForm} noValidate autoComplete="off">
            <Paper className={classes.container} >
           <TextField
          id="with-placeholder"
          label="Email"
          placeholder="Email"
          className={classes.textField}
          margin="normal"
        />
           <br/>
           <TextField
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <div className={classes.buttonContainer}>
             <Button variant="raised" color="secondary"  onClick={(event) => this.handleClick(event)}>
             Login
             </Button>
             <Button variant="raised" color="secondary"  onClick={(event) => this.handleClick(event)}>
             Register
             </Button>
        </div>
        {/* <Divider ></Divider> */}
        {/* <div className={classes.buttonContainer}>
             <Button variant="raised" color="secondary"  onClick={(event) => this.handleClick(event)}>
             Login with Gmail
             </Button>
             <Button variant="raised" color="secondary"  onClick={(event) => this.handleClick(event)}>
             Login with Facebook
             </Button>
        </div> */}
         </Paper>
         </form>
        );
    }

}

const decorate = withStyles(styles ,{withTheme:true})

export default  decorate(Login as any);