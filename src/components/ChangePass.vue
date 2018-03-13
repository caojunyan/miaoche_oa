<template>
  <div class="changepass">
    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <h2>修改密码</h2>
      <el-form-item label="旧密码" prop="oldPass">
        <el-input v-model="ruleForm.oldPass"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPass">
        <el-input v-model="ruleForm.newPass"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="confirmNewPass">
        <el-input v-model="ruleForm.confirmNewPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="confirm">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          oldPass: '',
          newPass:'',
          confirmNewPass:''
        }
      };
    },
    methods: {
      confirm() {
        var oldPass=this.ruleForm.oldPass;
        var newPass=this.ruleForm.newPass;
        var confirmNewPass=this.ruleForm.confirmNewPass;
        var pass=localStorage.getItem('password')
        if(oldPass==pass&&newPass==confirmNewPass!=((newPass==""||newPass==null))){
          this.$alert('修改密码成功，回到首页', '', {
            confirmButtonText: '确定',
            callback: action => {
             this.$router.push({path:'/home'})
            }
          });
        }else if(oldPass!=pass){
          this.$alert('原密码输入有误', '', {
            confirmButtonText: '确定',
          });
          return false
        }else{
          this.$alert('两次密码输入不一致', '', {
            confirmButtonText: '确定',
          });
          return false
        }
      },
    }
  }
</script>

<style scoped lang="stylus">
@import "../common/css/base.styl"
  .changepass
    .el-form
      margin-left 300px
      margin-top 150px
      h2
        font-size 20px
        color #333333
        text-align: center
        line-height 40px
</style>
