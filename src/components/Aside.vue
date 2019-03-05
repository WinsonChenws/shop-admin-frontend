<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
	  <el-radio-button :label="false">展开</el-radio-button>
	  <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>-->


  <!-- el-menu: 菜单组件 -->
  <!-- default-active: 当前激活菜单的 index -->
  <!-- class：自定义的classname -->
  <!-- collapse: 控制菜单的展开收起， false是展开， true是收起 -->
  <el-menu
	default-active="1-1"
	class="el-menu-vertical-demo"
	:collapse="isCollapse"
	background-color="#545c64"
	text-color="#fff"
	active-text-color="#ffd04b"
  >
	<!-- 子菜单 -->
	<el-submenu v-for="(item, index) in menus" :key="index" :index="`${index + 1}`">
		<template slot="title">
			<i :class="item.icon"></i>
			<span slot="title">{{item.title}}</span>
	  	</template>

	  	<!-- 子菜单的集合 -->
	  	<el-menu-item-group>
		<!-- 子菜单的选项 -->
			<el-menu-item
		  	v-for="(subItem, subIndex) in item.group"
		  	:key="subIndex"
		  	:index="`${index + 1}-${subIndex + 1}`"
			>

		  		<router-link :to="subItem.src">{{subItem.title}}</router-link>
			</el-menu-item>
	  	</el-menu-item-group>
	</el-submenu>

  </el-menu>
</template>


<script>
export default {
  data() {
		return {
			
			// 菜单数据
			menus: [
			{
				icon: "el-icon-menu",
				title: "购物商场",
				group: [
					{ src: "/admin/goods-list", title: "商品管理" }, 
					{ src: "/admin/category-list", title: "栏目管理" }
				]
			},
			{
				icon: "el-icon-service",
				title: "会员管理",
				group: [{ src: "#", title: "会员列表" }]
			},
			{
				icon: "el-icon-tickets",
				title: "订单管理",
				group: [{ src: "#", title: "订单列表" }]
			}
			]
		};
	},
	
	props: ["isCollapse"],
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}


.el-menu-vertical-demo {
  flex: 1;
  border-right: none;
}


.el-menu-item-group__title {
  display: none;
}

.el-menu-vertical-demo a{
	color:inherit;
	text-decoration: none;
}

</style>