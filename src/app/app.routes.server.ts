import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blogs/:blogUrl',
    renderMode: RenderMode.Server,
  },
  {
    path: 'causes/:campaignUrl',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
