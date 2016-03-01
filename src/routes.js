import Workspace from './modules/shared/Workspace';
import Home from './modules/shared/Home';
import CommentApp from './modules/comments';

const routes = [{
  path: '/',
  indexRoute: {
    component: Home
  },
  component: Workspace,
  childRoutes: [{
    path: '/comments',
    component: CommentApp
  }]
}]

export default routes;
