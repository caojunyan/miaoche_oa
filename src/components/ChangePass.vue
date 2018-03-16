<template>
  <div class="changepass">
    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm" :rules="ruleFormRules">
      <h2>修改密码</h2>
      <el-form-item label="旧密码" prop="old_password">
        <el-input v-model="ruleForm.old_password"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="password_confirmation">
        <el-input v-model="ruleForm.password_confirmation"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="confirm('ruleForm')">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {changePSW} from "../api/api"
  export default {
    data() {
      var validatePass=(rule,value,callback)=>{
        if(value==""){
          callback(new Error("密码不能为空"))
        }else{
          if(this.ruleForm.password_confirmation!==""){
            this.$refs.password.validateField("confirmNewPass");
          }
          callback()
        }
      };
      var validatePass2=(rule,value,callback)=>{
        if(value==""){
          callback(new Error("请再次输入密码"))
        }else if(value!=this.ruleForm.password){
          callback(new Error("两次输入密码不一致"))
        }else{
          callback()
        }
      }
      return {
        ruleForm: {
          old_password: '',
          password:'',
          password_confirmation:''
        },
        ruleFormRules:{
          old_password: [
            { required: true, message: "请输入旧密码", trigger: "blur" }
          ],
          password:[{validator:validatePass,trigger:"blur"}],
          password_confirmation:[{validator:validatePass2,trigger:"blur"}]
        }
      };
    },
    methods: {
      confirm(ruleForm) {
        changePSW(this,this.ruleForm).then(res=>{


        })
      },
    }
  }
</script>

<style scoped lang="stylus">
@import "../common/css/base.styl"
  .changepass
    width 750px
    .el-form
      margin-left 300px
      margin-top 150px
      h2
        font-size 20px
        color #333333
        text-align: center
        line-height 40px
</style>
