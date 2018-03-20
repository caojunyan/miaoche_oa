<template>
<div class="info">
  <el-tabs v-model="activeName">
    <el-tab-pane label="客户基本信息" name="customer">
      <el-form :model="customerForm" label-width="120px" class="customerForm">
        <el-form-item label="客户姓名" prop="name">
          <el-input v-model="customerForm.name" disabled ></el-input>
        </el-form-item>
        <el-form-item label="业务员" prop="staff"  >
          <el-select v-model="customerForm.group" placeholder="请选择组别" disabled>
          </el-select >
          <el-select v-model="customerForm.staff" placeholder="请选择业务员" disabled>
          </el-select>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="customerForm.sex" disabled>
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="customerForm.phone" disabled></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="idCard">
          <el-input v-model="customerForm.idCard" disabled></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="customerForm.age" disabled></el-input>
        </el-form-item>
        <el-form-item label="婚姻状况" prop="marital">
          <el-select v-model="customerForm.marital" placeholder="请选择婚姻状况" disabled>
            <el-option label="已婚" value="已婚"></el-option>
            <el-option label="未婚" value="未婚"></el-option>
            <el-option label="离异" value="离异"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学历" prop="education">
          <el-select v-model="customerForm.education" placeholder="请选择" disabled>
            <el-option label="中专（含一下）" value="中专（含一下）"></el-option>
            <el-option label="大专" value="大专"></el-option>
            <el-option label="本科" value="本科"></el-option>
            <el-option label="硕士（及以上）本科" value="硕士（及以上）"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="户籍地址" prop="registrationAdd">
          <el-input v-model="customerForm.registrationAdd" disabled></el-input>
        </el-form-item>
        <el-form-item label="现住地址" prop="address">
          <el-input v-model="customerForm.address" disabled></el-input>
        </el-form-item>
        <el-form-item label="住宅类型" prop="housingType">
          <el-select v-model="customerForm.housingType" placeholder="请选择" disabled>
            <el-option label="自有房产" value="自有房产"></el-option>
            <el-option label="亲戚房" value="亲戚房"></el-option>
            <el-option label="租房" value="租房"></el-option>
            <el-option label="公司宿舍" value="公司宿舍"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作单位" prop="company">
          <el-input v-model="customerForm.company" disabled></el-input>
        </el-form-item>
        <el-form-item label="所属行业" prop="industry">
          <el-input v-model="customerForm.industry" disabled></el-input>
        </el-form-item>
        <el-form-item label="单位性质" prop="comType">
          <el-select v-model="customerForm.comType" placeholder="请选择" disabled>
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
          <el-select v-model="customerForm.position" placeholder="请选择" disabled>
            <el-option label="普通员工" value="普通员工"></el-option>
            <el-option label="中层管理" value="中层管理"></el-option>
            <el-option label="高层管理" value="高层管理"></el-option>
            <el-option label="决策性管理" value="决策性管理"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单位地址" prop="comAdd">
          <el-input v-model="customerForm.comAdd" disabled></el-input>
        </el-form-item>
        <el-form-item label="收入情况(元)" prop="monthly">
          <el-input v-model.number="customerForm.monthly" disabled></el-input>
        </el-form-item>
        <el-form-item label="客户来源" prop="source">
          <el-select v-model="customerForm.source" placeholder="请选择" disabled>
            <el-option label="渠道" value="渠道"></el-option>
            <el-option label="一手客户" value="一手客户"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="车辆信息" name="second">
      <el-form :model="carForm"  ref="carForm" label-width="120px">
        <el-form-item label="客户姓名" prop="name">
          <el-input v-model="carForm.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="车牌号" prop="plate">
          <el-input v-model="carForm.plate" disabled></el-input>
        </el-form-item>
        <el-form-item label="发动机号" prop="enginNum">
          <el-input v-model="carForm.enginNum" disabled></el-input>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item label="车架号" prop="vin">
              <el-input v-model="carForm.vin" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <el-button>查询车辆配置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="汽车品牌" prop="car.BRAND">
          <el-input v-model="carForm.car.BRAND" disabled></el-input>
        </el-form-item>
        <el-form-item label="车型" prop="car.MODELS">
          <el-input v-model="carForm.car.MODELS" disabled></el-input>
        </el-form-item>
        <el-form-item label="生产年份" prop="car.MANUFACTUREDATE">
          <el-input v-model="carForm.car.MANUFACTUREDATE" disabled></el-input>
        </el-form-item>
        <el-form-item label="车辆配置名称" prop="car.NAME">
          <el-input v-model="carForm.car.NAME" disabled></el-input>
        </el-form-item>
        <el-form-item label="换挡类型" prop="car.TRANSMISSIONTYPE">
          <el-input v-model="carForm.car.TRANSMISSIONTYPE" disabled></el-input>
        </el-form-item>
        <el-form-item label="上市年月" prop="car.LISTINGDATE">
          <el-input v-model="carForm.car.LISTINGDATE" disabled></el-input>
        </el-form-item>
        <el-form-item label="档位数" prop="car.GEAR">
          <el-input v-model="carForm.car.GEAR" disabled></el-input>
        </el-form-item>
        <el-form-item label="车系" prop="car.SERIES">
          <el-input v-model="carForm.car.SERIES" disabled></el-input>
        </el-form-item>
        <el-form-item label="燃油标号" prop="car.FUEL">
          <el-input v-model="carForm.car.FUEL" disabled></el-input>
        </el-form-item>
        <el-form-item label="年款" prop="car.YEAR">
          <el-input v-model="carForm.car.YEAR" disabled></el-input>
        </el-form-item>
        <el-form-item label="车辆级别" prop="car.CARLEVEL">
          <el-input v-model="carForm.car.CARLEVEL" disabled></el-input>
        </el-form-item>
        <el-form-item label="发动机型号" prop="car.ENGINE">
          <el-input v-model="carForm.car.ENGINE" disabled></el-input>
        </el-form-item>
        <el-form-item label="变速箱" prop="car.TRANSMISSION">
          <el-input v-model="carForm.car.TRANSMISSION" disabled></el-input>
        </el-form-item>
        <el-form-item label="车门车座" prop="car.BODYTYPE">
          <el-input v-model="carForm.car.BODYTYPE" disabled></el-input>
        </el-form-item>
        <el-form-item label="发动机参数" prop="car.ENGINETYPE">
          <el-input v-model="carForm.car.ENGINETYPE" disabled></el-input>
        </el-form-item>
        <el-form-item label="车身形式" prop="car.BODY">
          <el-input v-model="carForm.car.BODY" disabled></el-input>
        </el-form-item>
        <el-form-item label="排量" prop="car.DISPLACEMENT">
          <el-input v-model="carForm.car.DISPLACEMENT" disabled></el-input>
        </el-form-item>
        <el-form-item label="驱动方式" prop="car.DRIVEMODE">
          <el-input v-model="carForm.car.DRIVEMODE" disabled></el-input>
        </el-form-item>
        <el-form-item label="排放标准" prop="car.DISCHARGE">
          <el-input v-model="carForm.car.DISCHARGE" disabled></el-input>
        </el-form-item>
        <el-form-item label="厂家名称" prop="car.MANUFACTURER">
          <el-input v-model="carForm.car.MANUFACTURER" disabled></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitcarForm('carForm')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
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
        overdueTable: [],
      };
    },
    methods: {

    },
    mounted() {
      selectCustomers(this,this.$route.query.customer).then(data=>{
        for(var item in data){
          if(data[item].id==this.$route.query.customer){
            this.customerForm=data[item]
          }
        }
      })
    }
  };
</script>

<style scoped lang="stylus">
.info
  width 70%
</style>
