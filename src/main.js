import Vue from 'vue'
import App from './App.vue'

import axios from "axios";

//引入elemnt ui 
import ElementUI from "element-ui";
//引入element-ui 样式
import "element-ui/lib/theme-chalk/index.css";
//注册插件
Vue.use(ElementUI);

Vue.config.productionTip = false

// 给vue构造函数的原型链添加$axios
Vue.prototype.$axios = axios;

new Vue({
    render: h => h(App),
}).$mount('#app')