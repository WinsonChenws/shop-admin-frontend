import Vue from 'vue'
import App from './App.vue'

import axios from "axios";

//引入elemnt ui 
import ElementUI from "element-ui";
//引入element-ui 样式
import "element-ui/lib/theme-chalk/index.css";

import VueRouter from "vue-router";

import Login from "./pages/Login.vue";
import Admin from "./pages/Admin.vue";
//注册插件
Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
    { path: '/', redirect: "/admin" },
    { path: "/login", component: Login, meta: "登陆页" },
    { path: "/admin", component: Admin, meta: "管理" }
]

const router = new VueRouter({ routes })

// 给vue构造函数的原型链添加$axios
Vue.prototype.$axios = axios;

new Vue({
    //挂载到根实例
    router,
    render: h => h(App),
}).$mount('#app')