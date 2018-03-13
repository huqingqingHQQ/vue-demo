// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router/router';

import './commen/stylus/index.styl';

//开启debug模式
Vue.config.debug = true;

//现在我们可以启动应用了
//路由器会创建一个app实例，并且挂载到选择符#app匹配的元素上

new Vue({
	router,
	render:h=> h(App)
}).$mount('#app');

//告诉vue要使用VueResource
Vue.use(VueResource);