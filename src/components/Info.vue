<template>
<div class="info">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="customer">
        <div class="customer">
          <el-form label-width="100px" class="demo-ruleForm" :model="customerForm">
            <el-form-item label="客户姓名" prop="name">
              <el-input type="text" v-model="customerForm.name"></el-input>
            </el-form-item>
            <el-form-item label="客户姓名" prop="name">
              <el-input type="text" v-model="customerForm.name"></el-input>
            </el-form-item>
            <el-form-item label="客户姓名" prop="name">
              <el-input type="text" v-model="customerForm.name"></el-input>
            </el-form-item>
          </el-form>
        </div>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">车辆信息</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">贷中信息</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">客户还款</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fiveth">融资信息</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="sixth">逾期信息</el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
    export default {
        name: "info",
        data(){
          return {
            activeName: 'customer',
            customerForm:{
              name:""
            }
          };
        },
        methods: {
        handleClick(tab, event) {

        }
      }
    }
</script>

<style scoped lang="stylus">
.info
  width 70%
</style>
