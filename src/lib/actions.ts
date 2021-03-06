import { checkNavigation } from './service';

// eslint-disable-next-line no-shadow
export enum ActionTypes {
  ADD_ROUTE = 'ADD_ROUTE',
  NAVIGATE = 'NAVIGATE',
  SET_ACTIVE_ROUTE = 'SET_ACTIVE_ROUTE',
}

export interface Actions {
  readonly type: string;
  path: string;
}

export const addRoute = (path: string): Actions => ({
  type: ActionTypes.ADD_ROUTE,
  path,
});

export const navigate = (path: string): Actions => {
  checkNavigation(path);
  return {
    type: ActionTypes.NAVIGATE,
    path,
  };
};

export const setActiveRoute = (path: string): Actions => ({
  type: ActionTypes.SET_ACTIVE_ROUTE,
  path,
});
