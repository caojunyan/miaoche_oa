<template>
  <div class="login">
    <h2 class="">秒个车ERP后台登陆</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
      <!--  <div class="rt">
          <el-checkbox v-model="checked">记住我</el-checkbox>
          &lt;!&ndash;<span @click="clearCookie" style="cursor: pointer;color: #f19149;font-size: 0.75rem;margin-left: 5px;">忘记密码？</span>&ndash;&gt;
        </div>-->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked:false,
        ruleForm: {
          name: '',
          password:''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        // 保存账号
        var name=this.ruleForm.name;
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
        }
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
