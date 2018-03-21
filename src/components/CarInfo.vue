<template>
    <div class="carinfo">
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
    </div>
</template>

<script>
  import {selectCar} from "../api/api";
    export default {
        name: "car-info",
        data() {
          return {
            disabled: false, //查看true   修改false
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
              DISCHARGE: ""
            }
          }
        };
        },
        methods:{

        },
        mounted(){
          selectCar(this,this.$route.query.carId).then(data=>{
            for(var item in data){
              if(data[item].id==this.$route.query.carId){
                this.carForm=data[item]
              }
            }
          })
        }
    }
</script>

<style scoped>

</style>
