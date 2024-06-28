import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  LoaderFunction,
  ActionFunction,
} from "react-router-dom";

import NotFound from "@/components/common/404";
import { DefaultLayout, AuthLayout } from "@/components/common/Layout";
import useAuth from "./hooks/useAuth";
import { useEffect } from "react";

interface RouteCommon {
  loader?: LoaderFunction;
  action?: ActionFunction;
  ErrorBoundary?: React.ComponentType<any>;
}

interface IRoute extends RouteCommon {
  path: string;
  Element: React.ComponentType<any>;
}

interface Pages {
  [key: string]: {
    default: React.ComponentType<any>;
  } & RouteCommon;
}

const pages: Pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
const routes: IRoute[] = [];
const authRoutes: IRoute[] = [];
const defaultRoutes: IRoute[] = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader as LoaderFunction | undefined,
    action: pages[path]?.action as ActionFunction | undefined,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

routes.map((route) => {
  const isAuth = route.path.startsWith("/auth");
  isAuth ? authRoutes.push(route) : defaultRoutes.push(route);
});

const routeObjects: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: defaultRoutes.map(({ Element, ErrorBoundary, ...rest }) => ({
      ...rest,
      element: <Element />,
      ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
    })),
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: authRoutes.map(({ Element, ErrorBoundary, ...rest }) => ({
      ...rest,
      element: <Element />,
      ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
    })),
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routeObjects);
const App = () => {
  const { currentUserId } = useAuth();
  const location = window.location;
  useEffect(() => {
    // console.log("로그인상태변경", currentUser.id || "유저없음");
    if (!currentUserId && !location.pathname.startsWith("/auth")) {
      location.replace("/auth/login");
    }
  }, [currentUserId, location]);

  return <RouterProvider router={router} />;
};

export default App;
