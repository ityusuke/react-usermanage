import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../component/pages/Login";
import { Page404 } from "../component/pages/Page404";
import { homeRoutes } from "./homeRoutes";
import { HeaderLayout } from "../component/templetes/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";
export const Router: VFC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path="/">
          <Login />
        </Route>
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {homeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout> {route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      <Route exact path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
