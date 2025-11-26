import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import(
        './gifs/pages/dashboard-pages.component/dashboard-pages.component'
      ).then((m) => m.DashboardPagesComponent),

    //Definicion de rutas hijas dentro de dashboard
    children: [
      {
        path: 'search',
        loadComponent: () =>
          import(
            './gifs/pages/search-pages.component/search-pages.component'
          ).then((m) => m.SearchPagesComponent),
      },
      {
        //Ejemplo de argumento por url
        path: 'history/:query',
        loadComponent: () =>
          import(
            './gifs/pages/gif-history.component/gif-history.component'
          ).then((m) => m.GifHistoryComponent),
      },
      {
        path: 'trending',
        loadComponent: () =>
          import(
            './gifs/pages/trending-pages.component/trending-pages.component'
          ).then((m) => m.TrendingPagesComponent),
      },
      {
        path: '**',
        redirectTo: 'trending',
      }
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
