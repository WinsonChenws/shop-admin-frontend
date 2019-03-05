<template>
    <el-row type="flex" justify='space-between' align="middle" class="header">
        <i class="el-icon-back" @click="handleToggle"></i>
        <div>👉</div>


    </el-row>
</template>

<script>
export default {
    methods: {
        handleToggle:function () {
            this.$emit("changeCollapse")
        }
    }
}
</script>

<style scoped>
    .header{
        height: 60px;
        line-height: 60px;
    }
</style>
