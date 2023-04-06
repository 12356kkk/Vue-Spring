import homeRouter from './home-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/about',
    component: () => import('@/view/home/home'),
    children: [...homeRouter],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/login'),
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/view/about/index'),
  },
  {
    path: '/index2',
    name: 'index2',
    component: () => import('@/view/about/black'),
  },
  {
    redirect: '/404',
    path: '*',
  },
]

export default routes
