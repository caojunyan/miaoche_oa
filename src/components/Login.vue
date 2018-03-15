<template>
  <div class="login">
    <h2 class="">秒个车ERP后台登陆</h2>
    <el-form :model="user" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="email">
          <el-input v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">登陆</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
  import {getAdmin} from "../api/api";

  export default {
    data() {
      return {
        checked:false,
        user: {
          email: '18627009459',
          password:'123456'
        },
        rules: {
          email: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 11, max: 11, message: '手机号格式不正确', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        getAdmin(this,this.user).then(data => {
          if (data) {
            this.$router.push({ name: "Home" });
          }
        })



/*        // 保存账号
        var name=this.ruleForm.email;
        // 保存密码
        var pass=this.ruleForm.password;
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(!myreg.test(name)){
          alert("请输入正确的用户名");
          return false
        }else if(pass==''||pass.length<3) {
          alert("密码错误");
          return false
        }else{
          // 缓存用户名,密码
          localStorage.setItem('loginname',name);
          localStorage.setItem('password',pass);
          this.$router.push({path:'/home'})
        }*/
      },
    }
  }
</script>

<style lang="stylus" scoped>
@import "../common/css/base.styl"
.login
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  padding: 20px 50px;
  border: 1px #dcdcdc solid;
  box-shadow:4px 4px 10px #ddd
  h2
    text-align: center
    line-height 80px
    font-weight normal
    color:#333
    font-size 20px;
</style>
