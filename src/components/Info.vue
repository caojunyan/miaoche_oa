<template>
<div class="info">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="customer">
        <div class="customer">
          <el-form label-width="100px" class="demo-ruleForm" :model="customerForm" :rule="customerFormRules" ref="customerForm">
            <el-form-item label="客户姓名" prop="name">
              <el-input type="text" v-model="customerForm.name"></el-input>
            </el-form-item>
            <el-form-item label="业务员" prop="staff">
              <el-select v-model="customerForm.group" placeholder="请选择组别">
                <el-option v-for="(group,index) in groups" :label="group" :value="group" :key="index"></el-option>
              </el-select>
              <el-select v-model="customerForm.staff" placeholder="请选择业务员">
                <el-option v-for="(staff,index) in staffs" :label="staff" :value="staff" :key="index"></el-option>
              </el-select>
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
  import {getDepartmentInfos} from "../api/api";

  export default {
        name: "info",
        data(){
          return {
            activeName: 'customer',
            customerForm:{
              name:"",
              group:"",
              staff:""
            },
            customerFormRules:{},
            departmentInfos: "",
            groups: [],
            staffs: []
          };
        },
        methods: {
           handleClick(tab, event) {

        },
        },
        mounted(){
          getDepartmentInfos(this).then(res=>{
           this.departmentInfos=res;
            let groups=[];
            for(let item in res){
              groups.push(item)
            }
            this.groups=groups
          })
        },
        watch:{
          "customerForm.group":function(group){
            this.customerForm.staff = "";
            this.staffs = this.departmentInfos[group];

          }
        }
    }
</script>

<style scoped lang="stylus">
.info
  width 70%
</style>
