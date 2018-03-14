import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../app/rootReducer';
import Login from '../components/Login';
import { Redirect, Route, withRouter } from "react-router";


  export interface AccountProps {
    account : any,
  }

  export interface AccountState {
    /* empty */
  }

@connect(mapStateToProps)
 export default class AccountContainer extends React.Component<AccountProps, AccountState> {

  render() {
    return (
        <Login {...this.props}></Login>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    account: state.account
  };
}

