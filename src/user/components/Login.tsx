import * as React from "react";
import { WithStyles, TextField, Button, withStyles, Paper, Divider, StyleRulesCallback } from "material-ui";
import {styles} from "./Login.style";

interface Props{
    handleLogin : (userName,password)=>void,
    redirectToRegister : () =>void
}

class Login extends React.Component<Props & WithStyles<"container"|"textField"|"loginForm"|"buttonContainer"|"divider">>{
    constructor(props){
        super(props);
        this.state = {
            redirectToReferrer : false,
            
        }
    }

    updateCredentialsState(event : React.ChangeEvent<HTMLInputElement>){
        const field = event.target.name;
        this.state[field] = event.target.value;
    }


   
    render(){
        const theme = this.props.theme;
        const classes = this.props.classes;
        let {handleLogin} = this.props;

        return (
            <form className={classes.loginForm} noValidate autoComplete="off">
            <Paper className={classes.container} >
           <TextField
          id="with-placeholder"
          label="Email"
          placeholder="Email"
          className={classes.textField}
          margin="normal"
          onChange = {this.updateCredentialsState}
        />
           <br/>
           <TextField
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"       
          onChange = {this.updateCredentialsState}   
        />
        <div className={classes.buttonContainer}>
             <Button variant="raised" color="secondary"  onClick={(event) => this.props.handleLogin("","")}>
             Login
             </Button>
             <Button variant="raised" color="secondary"  onClick={(event) => this.props.redirectToRegister()}>
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

const decorate = withStyles(styles as StyleRulesCallback ,{withTheme:true})

export default  decorate<Props>(Login);