import * as React from "react";
import { WithStyles, TextField, Button, withStyles, Paper } from "material-ui";
import {IStyle,styles} from "./Register.style";

interface Props{

}

class Register extends React.Component<Props & WithStyles>{

    handleClick(event){

    }
   
    
    render(){
        const theme = this.props.theme;
        const classes = (this.props as any).classes as IStyle;

        return (
            <form className={classes.loginForm} noValidate autoComplete="off">
            <Paper className={classes.container} >
           <TextField
          label="Email"
          placeholder="Email"
          className={classes.textField}
          margin="normal"
        />
           <br/>
           <TextField
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <br/>
        <TextField
          label="First Name"
          placeholder="First Name"
          className={classes.textField}
          margin="normal"
        />
        <br/>
        <TextField
          label="Last Name"
          placeholder="Last Name"
          className={classes.textField}
          margin="normal"
        />
        <br/>
        <TextField
          label="Phone Number"
          placeholder="Phone Number"
          className={classes.textField}
          margin="normal"
        />
           <br/>
        <div className={classes.buttonContainer}>
             <Button variant="raised" color="secondary"  onClick={(event) => this.handleClick(event)}>
             Signup
             </Button>           
             </div>
         </Paper>
         </form>
        );
    }

}

const decorate = withStyles(styles ,{withTheme:true})

export default  decorate(Register as any);