import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

//告诉vue要使用router
Vue.use(VueRouter);

//实例化router对象
const router = new VueRouter({
	mode: 'hash',//设置路由模式
	routes: routes///挂在路由集合
});

//导出router对象
export default router;

