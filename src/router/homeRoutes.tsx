import { Home } from "../component/pages/Home";
import { Setting } from "../component/pages/Setting";
import { UserManagement } from "../component/pages/UserManagement";
import { Page404 } from "../component/pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
