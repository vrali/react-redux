import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, match } from "react-router-dom";
import { createBrowserHistory } from "history";
import { configureStore } from "./app/store";
import { App } from "./App/containers/appContainer";
import { RootState } from "./app/rootReducer";
import { loginSuccess } from "./user/actions/userActions";
import "whatwg-fetch";

const store = configureStore();
const history = createBrowserHistory();
// let user = cookie.get("user");
// if(user){
//   store.dispatch(loginSuccess(user));
// }

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
