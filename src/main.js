import Vue from 'vue'
import App from './App.vue'

import axios from "axios";

//引入elemnt ui 
import ElementUI from "element-ui";
//引入element-ui 样式
import "element-ui/lib/theme-chalk/index.css";

import VueRouter from "vue-router";

//组件们
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import GoodsList from "./pages/goods/GoodsList";
import CategoryList from "./pages/category/CategoryList";
//注册插件
Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
    { path: "/", redirect: "/admin" },
    { path: "/login", component: Login, meta: "登录页" },
    {
        path: "/admin",
        component: Admin,
        meta: "后台管理",
        redirect: "/admin/goods-list",
        children: [
            { path: "goods-list", component: GoodsList, meta: "商品列表" },
            { path: "category-list", component: CategoryList, meta: "栏目列表" }
        ]
    }
]

const router = new VueRouter({ routes })

// 给vue构造函数的原型链添加$axios
Vue.prototype.$axios = axios;

new Vue({
    //挂载到根实例
    router,
    render: h => h(App),
}).$mount('#app')