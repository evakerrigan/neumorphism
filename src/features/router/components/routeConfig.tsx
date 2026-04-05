import { MainPage, NotFoundPage } from '@/pages';
import { Navigate } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  NOT_FOUND = 'not-found',
  NOT_FOUND_NAV = 'not-found-nav',
}
type RouteProps = {
  path: string;
  element: JSX.Element;
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NOT_FOUND]: '/not-found',
  [AppRoutes.NOT_FOUND_NAV]: '/*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath['not-found'],
    element: <NotFoundPage />,
  },
  [AppRoutes.NOT_FOUND_NAV]: {
    path: RoutePath['not-found-nav'],
    element: <Navigate to={RoutePath['not-found']} replace />,
  },
};
