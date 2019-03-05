<template>
  <div class="login-form">
    <div class="login-form-header">登陆了哟</div>
    <el-form :model="ruleForm2" status-icon label-width="100px">
      <!-- el form item 是e-form的子组件 不能放到el-form的外部 -->
      <el-form-item label="帐号">
        <el-input  v-model="ruleForm2.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="ruleForm2.password " autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="btn-list">
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    
    return {
      ruleForm2: {
        username: "",
        password: ""
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.ruleForm2);
      
    },
    resetForm() {
      this.ruleForm2={
        username: "",
        password: ""
      }
    }
  }
};
</script>
<style>
.login-form {
  width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -120px 0 0 -250px;
}
.login-form-header{
  color:#66b1ff;
  text-align: center;
  line-height: 2;
  margin-bottom: 20px;
  padding-left: 100px;
}
.btn-list{
  text-align: center;
}
</style>
