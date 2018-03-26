import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../app/rootReducer';
import Login from '../components/Login';
import { Redirect, Route, withRouter } from "react-router";
import * as AccountActions from '../actionCreators/account';


  interface Props {   
    account? : Auth,
    loginActions? : { login : (credentials : LoginPayLoad)=> Promise<void>} 
  }

  interface State {
    redirectToReferrer : boolean
  }


  class AccountContainer extends React.Component<Props & RouteComponentProps<any> , State> {

  constructor(props){
    super(props);
    this.handleLogin =  this.handleLogin.bind(this);
    this.state = {
      redirectToReferrer: false,     
    };
  }
   handleLogin(userName,password){
     this.props.loginActions
     .login({userName,password})
     .then(()=>{
       this.setState({redirectToReferrer :true});
     });


     

   }
   redirectToRegister(){
     

   }

  render() {
    const {from} = this.props.location.state || {from:{pathName : "/"}};
    if(this.state.redirectToReferrer){
      return <Redirect to={from}></Redirect>
    }
    return (
        <Login handleLogin={this.handleLogin} redirectToRegister={this.redirectToRegister} ></Login>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    account: state.account
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loginActions : bindActionCreators(AccountActions,dispatch)
  };
}

export default withRouter(connect<Props>(mapStateToProps,mapDispatchToProps)(AccountContainer));