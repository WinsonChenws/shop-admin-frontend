<template>
  <div class="admin-container">
    <el-container>
      <!-- 左菜单 -->
      <el-aside width="auto">
          <app-aside :isCollapse="isCollapse"></app-aside>
      </el-aside>
      <!-- 右侧内容 -->
      <el-container>
        <!-- 头部 -->
        <el-header>
            <app-header @changeCollapse="changeCollapse"></app-header>
        </el-header>
        <!-- 主体 -->
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "../components/Aside";
import Header from "../components/Header.vue";
export default {
    name:'admin-index',
    data:function () {
        return{
            isCollapse:false,
        }
    },
    components: {
        'app-aside':Aside,
        'app-header':Header
    },
    methods: {
        // 修改取反
        changeCollapse(){
            this.isCollapse = !this.isCollapse;
        }
    }
};
</script>

<style>
.admin-container {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
}
.el-header{
    color: #333;
}


.el-aside {
    display: flex;
    flex-direction: column;

}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container {
  margin-bottom: 40px;
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
