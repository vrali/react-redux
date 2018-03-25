import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../app/rootReducer';
import Login from '../components/Login';
import { Redirect, Route, withRouter } from "react-router";
import * as AccountActions from '../actionCreators/account';


  interface Props {    
  }

  interface State {
    /* empty */
  }


  class AccountContainer extends React.Component<Props , State> {

  constructor(props){
    super(props);
    this.handleLogin =  this.handleLogin.bind(this);
  }
   handleLogin(){
     (this.props as any).loginActions.login();
     

   }
   handleRegister(){

   }

  render() {
    return (
        <Login handleLogin={this.handleLogin} ></Login>
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

export default connect<Props>(mapStateToProps,mapDispatchToProps)(AccountContainer);