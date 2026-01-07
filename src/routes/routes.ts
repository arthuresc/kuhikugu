import { createRoute , type Route} from '@tanstack/react-router';
import ProductList from '../features/Main/Pages/Produtos/List';
import Home from '../features/Main/Home';
import ProductView from '../features/Main/Pages/Produtos/View'

export default function routes(rootRoute) {
  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
  });
  const productRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'produtos',
  });
  const productListRoute = createRoute({
    getParentRoute: () => productRoute,
    path: '/',
    component: ProductList,
  });
  const productViewRoute = createRoute({
    getParentRoute: () => productRoute,
    path: '$idProduct',
    component: ProductView,
  })
  
  return [indexRoute, productRoute.addChildren([productListRoute, productViewRoute])];
}

