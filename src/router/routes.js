import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';

//编写路由集合
const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

//导出路由集合
export default routes;