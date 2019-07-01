var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/register-form/',
    url: './pages/forms/register-form.html',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
