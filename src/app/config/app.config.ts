import { environment } from '../../environments/environment';

export const AppConfig = {
  APP_VERSION: 'v 0.17',
  BASE_API: environment.apiBaseUrl + environment.contextPath,
  endpointPath: {
    login: 'auth/login',
    menus: 'auth/menus',
  },
};
