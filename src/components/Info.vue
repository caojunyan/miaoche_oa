<template>
<div class="info">
  <el-tabs v-model="activeName">
    <el-tab-pane label="客户基本信息" name="customer">
      <el-form :model="customerForm" label-width="120px" class="customerForm">
        <el-form-item label="客户姓名" prop="name">
          <el-input v-model="customerForm.name"></el-input>
        </el-form-item>
        <el-form-item label="业务员" prop="staff">
          <el-select v-model="customerForm.group" placeholder="请选择组别">
          </el-select>
          <el-select v-model="customerForm.staff" placeholder="请选择业务员">
          </el-select>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="customerForm.sex">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="customerForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="idCard">
          <el-input v-model="customerForm.idCard"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="customerForm.age"></el-input>
        </el-form-item>
        <el-form-item label="婚姻状况" prop="marital">
          <el-select v-model="customerForm.marital" placeholder="请选择婚姻状况">
            <el-option label="已婚" value="已婚"></el-option>
            <el-option label="未婚" value="未婚"></el-option>
            <el-option label="离异" value="离异"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学历" prop="education">
          <el-select v-model="customerForm.education" placeholder="请选择">
            <el-option label="中专（含一下）" value="中专（含一下）"></el-option>
            <el-option label="大专" value="大专"></el-option>
            <el-option label="本科" value="本科"></el-option>
            <el-option label="硕士（及以上）本科" value="硕士（及以上）"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="户籍地址" prop="registrationAdd">
          <el-input v-model="customerForm.registrationAdd"></el-input>
        </el-form-item>
        <el-form-item label="现住地址" prop="address">
          <el-input v-model="customerForm.address"></el-input>
        </el-form-item>
        <el-form-item label="住宅类型" prop="housingType">
          <el-select v-model="customerForm.housingType" placeholder="请选择">
            <el-option label="自有房产" value="自有房产"></el-option>
            <el-option label="亲戚房" value="亲戚房"></el-option>
            <el-option label="租房" value="租房"></el-option>
            <el-option label="公司宿舍" value="公司宿舍"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作单位" prop="company">
          <el-input v-model="customerForm.company"></el-input>
        </el-form-item>
        <el-form-item label="所属行业" prop="industry">
          <el-input v-model="customerForm.industry"></el-input>
        </el-form-item>
        <el-form-item label="单位性质" prop="comType">
          <el-select v-model="customerForm.comType" placeholder="请选择">
            <el-option label="政府职能部门" value="政府职能部门"></el-option>
            <el-option label="事业单位" value="事业单位"></el-option>
            <el-option label="国企" value="国企"></el-option>
            <el-option label="有限责任公司" value="有限责任公司"></el-option>
            <el-option label="个体工商户" value="个体工商户"></el-option>
            <el-option label="自由职业" value="自由职业"></el-option>
            <el-option label="世界五百强" value="世界五百强"></el-option>
            <el-option label="私营" value="私营"></el-option>
            <el-option label="社会团体" value="社会团体"></el-option>
            <el-option label="民营" value="民营"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位" prop="position">
          <el-select v-model="customerForm.position" placeholder="请选择">
            <el-option label="普通员工" value="普通员工"></el-option>
            <el-option label="中层管理" value="中层管理"></el-option>
            <el-option label="高层管理" value="高层管理"></el-option>
            <el-option label="决策性管理" value="决策性管理"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单位地址" prop="comAdd">
          <el-input v-model="customerForm.comAdd"></el-input>
        </el-form-item>
        <el-form-item label="收入情况(元)" prop="monthly">
          <el-input v-model.number="customerForm.monthly"></el-input>
        </el-form-item>
        <el-form-item label="客户来源" prop="source">
          <el-select v-model="customerForm.source" placeholder="请选择">
            <el-option label="渠道" value="渠道"></el-option>
            <el-option label="一手客户" value="一手客户"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="车辆信息" name="second">车辆信息</el-tab-pane>
    <el-tab-pane label="贷中信息" name="third">贷中信息</el-tab-pane>
    <el-tab-pane label="客户还款" name="fourth">客户还款</el-tab-pane>
    <el-tab-pane label="融资信息" name="fiveth">融资信息</el-tab-pane>
    <el-tab-pane label="逾期信息" name="sixth">逾期信息</el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
  import {selectCustomers} from "../api/api";

  export default {
    name: "info",
    data() {
      return {
        disabled: false, //查看true   修改false
        activeName: "customer",
        //客户基本信息
        customerForm: {
          name: "",
          group: "",
          staff: "",
          sex: "男",
          phone: "",
          idCard: "",
          age: "",
          marital: "",
          education: "",
          registrationAdd: "", // 户籍地址
          address: "", //现住地址
          housingType: "", //住宅类型
          company: "", //工作单位
          comType: "", //单位性质
          industry: "", //所属行业
          position: "", //职位
          comAdd: "", //单位地址
          monthly: "", //收入情况
          source: "" //客户来源
        },
        //车辆信息
        carForm: {
          id: this.$route.query.id,
          name: "",
          plate: "",
          examination: "", //验车人
          enginNum: "",
          vin: "",
          car: {
            PRICE: "",
            MANUFACTUREDATE: "",
            NAME: "",
            TRANSMISSIONTYPE: "",
            VIN: "",
            LISTINGDATE: "",
            GEAR: "",
            SERIES: "",
            FUEL: "",
            YEAR: "",
            CARLEVEL: "",
            ENGINE: "",
            BODYTYPE: "",
            TRANSMISSION: "",
            ENGINETYPE: "",
            BODY: "",
            DRIVEMODE: "",
            DISPLACEMENT: "",
            MODELS: "",
            MANUFACTURER: "",
            BRAND: "",
            DISCHARGE: ""
          }
        },
        //贷中信息
        certificateForm: {
          name: "",
          staff: "",
          total: "",
          nper: "",
          valuation: "", //评估价
          plate: "",
          vin: "",
          insuranceEffTime: "", //保险期限
          idEffTime: "", //身份证期限
          drivingEffTime: "" //行驶证期限
        },
        //逾期
        overdueTable: []
      };
    },
    methods: {

    },
    mounted() {
      selectCustomers(this,this.$route.query.customer).then(data=>{
        console.log(data)
        for(var item in data){

        }
      })
    }
  };
</script>

<style scoped lang="stylus">
.info
  width 70%
</style>
