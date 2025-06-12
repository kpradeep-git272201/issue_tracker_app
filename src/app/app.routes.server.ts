import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { routes as appRoutes } from './app.routes';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'public/dashboard/:dashboardId',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => {
      return Promise.resolve([
        { dashboardId: '1' },
        { dashboardId: '2' },
        { dashboardId: '3' }
      ]);
    }
  }
];

export const serverProviders = [
  provideServerRendering(),
  provideRouter([...appRoutes, ...serverRoutes])
];