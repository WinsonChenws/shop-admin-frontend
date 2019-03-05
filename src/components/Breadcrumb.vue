<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        :to="{ path: item.src }"
        v-for="(item,index) in routeInfo"
        :key="index"
      >{{item.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  computed: {
    routeInfo: function() {
      const matched = this.$route.matched;
      const newArr = matched.map(v => {
        return {
          src: v.path,
          title: v.meta
        };
      });
      console.log(newArr);

      return newArr;
    }
  }
};
</script>

<style scoped>
.breadcrumb{
   padding-bottom:20px;
    border-bottom:1px #999 solid;
    margin-bottom:20px;
}
</style>
