import BookPage from 'pages/BookPage';
import HomePage from 'pages/HomePage';

const routes: any[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/book',
    component: BookPage,
  },
];

export default routes;
