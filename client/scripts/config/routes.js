import Home from '../pages/home';
import About from '../pages/about';
import Plan from '../pages/plan';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/plan',
    exact: true,
    component: Plan
  },
  {
    path: '/about',
    exact: true,
    component: About
  },
];

export default routes;