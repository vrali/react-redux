import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { RootState } from "../../app/rootReducer";
import Login from "../components/Login";
import Register from "../components/Register";
import { Redirect, Route, withRouter } from "react-router";
import * as LoginActions from "../actionCreators/loginActions";
import { Switch } from "react-router-dom";

export { Login, Register };
interface Props {
  user?: User;
  loginActions?: { login: (credentials: LoginPayLoad) => Promise<void> };
}

interface State {
  redirectToReferrer: boolean;
}

class Login_Container extends React.Component<
  Props & RouteComponentProps<any>,
  State
> {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.redirectToRegister = this.redirectToRegister.bind(this);
    this.state = {
      redirectToReferrer: false
    };
  }
  handleLogin(userName, password) {
    this.props.loginActions.login({ userName, password }).then(() => {
      this.setState({ redirectToReferrer: true });
    });
  }
  redirectToRegister() {
    this.props.history.push("/register");
  }
  componentWillReceiveProps(nextProps: Readonly<Props>) {}

  render() {
    const { from } = this.props.location.state || { from: { pathName: "/" } };
    if (this.state.redirectToReferrer) {
      return <Redirect to={from} from="/login" path="/" />;
    }
    return (
      <div>
        <Switch>
          <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                handleLogin={this.handleLogin}
                redirectToRegister={this.redirectToRegister}
              />
            )}
          />
          <Route path="/register" render={props => <Register />} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(LoginActions, dispatch)
  };
}

export const LoginContainer = withRouter(
  connect<Props>(mapStateToProps, mapDispatchToProps)(Login_Container)
);
