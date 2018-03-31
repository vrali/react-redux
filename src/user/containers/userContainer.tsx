import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { RootState } from "../../app/rootReducer";
import Login from "../components/Login";
import Register from "../components/Register";
import { Redirect, Route, withRouter } from "react-router";
import * as UserActions from "../actionCreators/userActionCreator";
import { Switch } from "react-router-dom";

export { Login, Register };
interface Props {
  user?: User;
  userActions?: {
    login: (credentials: LoginPayLoad) => Promise<User>;
    logout: () => void;
  };
}

interface State {
  redirectToReferrer: boolean;
}

class User_Container extends React.Component<
  Props & RouteComponentProps<any>,
  State
> {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.redirectToRegister = this.redirectToRegister.bind(this);
  }

  componentWillMount() {}

  handleLogin(userName, password) {
    this.props.userActions.login({ userName, password }).then((user: User) => {
      localStorage.setItem("user", JSON.stringify(user));
      this.setState({ redirectToReferrer: true });
    });
  }
  handleLogOut() {
    localStorage.removeItem("user");
    this.props.userActions.logout();
  }
  redirectToRegister() {
    this.props.history.push("/register");
  }
  componentWillReceiveProps(nextProps: Readonly<Props>) {}

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/" }
    };
    const { history, user } = this.props;

    return (
      <div>
        <Route
          path="/login"
          render={props => (
            <Login
              {...props}
              referrerLocation={from.pathname}
              authenticated={user.isAuthenticated}
              handleLogin={this.handleLogin}
              redirectToRegister={this.redirectToRegister}
            />
          )}
        />
        <Route path="/register" render={props => <Register />} />
        <Route
          path="/logout"
          render={props => {
            this.handleLogOut();
            return <Redirect to="/" />;
          }}
        />
        <Route path="/profile" render={props => <Register />} />
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
    userActions: bindActionCreators(UserActions, dispatch)
  };
}

export const UserContainer = withRouter(
  connect<Props>(mapStateToProps, mapDispatchToProps)(User_Container)
);
