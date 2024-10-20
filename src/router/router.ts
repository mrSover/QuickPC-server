import { FC } from "react";
import Main from "../pages/Main"
import Auth from "../pages/Auth";

import ComputerPage from "../components/ProductInfo/ComputerInfo";
import Computers from "../pages/Computers";
import Components from "../pages/Components";

interface Route {
  path: string;
  component: FC;
}

export const publicRoutes: Route[] = [
  { path: "/auth", component: Auth },
  { path: "/main", component: Main },
  { path: "/computers", component: Computers },
  { path: "/components", component: Components },
  { path: "/computers/:id", component: ComputerPage }
]

export const privateRoutes: Route[] = [

  { path: "/main", component: Main },

]