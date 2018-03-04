import Home from '../pages/home';
import About from '../pages/about';
import App from '../pages/app';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/app',
    exact: true,
    component: App
  },
  {
    path: '/about',
    exact: true,
    component: About
  },
];

export default routes;