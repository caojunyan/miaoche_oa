<template>
  <div class="add">
    <div class="tabs">
      <el-tabs v-model="activeName">
        <el-tab-pane label="基本资料" name="basic">
          <el-form :model="customerForm" :rules="customerFormRules" ref="customerForm" label-width="120px" class="customerForm">
            <el-form-item label="客户姓名" prop="name">
              <el-input v-model="customerForm.name"></el-input>
            </el-form-item>
            <el-form-item label="业务员" prop="staff">
              <el-select v-model="customerForm.group" placeholder="请选择组别">
                <el-option v-for="(group,index) in groups" :label="group" :value="group" :key="index"></el-option>
              </el-select>
              <el-select v-model="customerForm.staff" placeholder="请选择业务员">
                <el-option v-for="(staff,index) in staffs" :label="staff" :value="staff" :key="index"></el-option>
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
              <el-input v-model="customerForm.idCard" @blur="computeAge"></el-input>
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
                <el-option label="硕士（及以上）" value="硕士（及以上）"></el-option>
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
            <el-form-item>
              <el-button type="primary" @click="submitCustomerForm('customerForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="车辆信息" name="car">
          <el-form :model="carForm" :rules="carFormRules" ref="carForm" label-width="120px">
            <el-form-item label="客户姓名" prop="name">
              <el-input v-model="carForm.name"></el-input>
            </el-form-item>
            <el-form-item label="车牌号" prop="plate">
              <el-input v-model="carForm.plate"></el-input>
            </el-form-item>
            <el-form-item label="发动机号" prop="enginNum">
              <el-input v-model="carForm.enginNum"></el-input>
            </el-form-item>
            <el-row :gutter="20">
              <el-col :span="10">
                <el-form-item label="车架号" prop="vin">
                  <el-input v-model="carForm.vin"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item>
                  <el-button>查询车辆配置</el-button>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="汽车品牌" prop="car.BRAND">
              <el-input v-model="carForm.car.BRAND"></el-input>
            </el-form-item>
            <el-form-item label="车型" prop="car.MODELS">
              <el-input v-model="carForm.car.MODELS"></el-input>
            </el-form-item>
            <el-form-item label="生产年份" prop="car.MANUFACTUREDATE">
              <el-input v-model="carForm.car.MANUFACTUREDATE"></el-input>
            </el-form-item>
            <el-form-item label="车辆配置名称" prop="car.NAME">
              <el-input v-model="carForm.car.NAME"></el-input>
            </el-form-item>
            <el-form-item label="换挡类型" prop="car.TRANSMISSIONTYPE">
              <el-input v-model="carForm.car.TRANSMISSIONTYPE"></el-input>
            </el-form-item>
            <el-form-item label="上市年月" prop="car.LISTINGDATE">
              <el-input v-model="carForm.car.LISTINGDATE"></el-input>
            </el-form-item>
            <el-form-item label="档位数" prop="car.GEAR">
              <el-input v-model="carForm.car.GEAR"></el-input>
            </el-form-item>
            <el-form-item label="车系" prop="car.SERIES">
              <el-input v-model="carForm.car.SERIES"></el-input>
            </el-form-item>
            <el-form-item label="燃油标号" prop="car.FUEL">
              <el-input v-model="carForm.car.FUEL"></el-input>
            </el-form-item>
            <el-form-item label="年款" prop="car.YEAR">
              <el-input v-model="carForm.car.YEAR"></el-input>
            </el-form-item>
            <el-form-item label="车辆级别" prop="car.CARLEVEL">
              <el-input v-model="carForm.car.CARLEVEL"></el-input>
            </el-form-item>
            <el-form-item label="发动机型号" prop="car.ENGINE">
              <el-input v-model="carForm.car.ENGINE"></el-input>
            </el-form-item>
            <el-form-item label="变速箱" prop="car.TRANSMISSION">
              <el-input v-model="carForm.car.TRANSMISSION"></el-input>
            </el-form-item>
            <el-form-item label="车门车座" prop="car.BODYTYPE">
              <el-input v-model="carForm.car.BODYTYPE"></el-input>
            </el-form-item>
            <el-form-item label="发动机参数" prop="car.ENGINETYPE">
              <el-input v-model="carForm.car.ENGINETYPE"></el-input>
            </el-form-item>
            <el-form-item label="车身形式" prop="car.BODY">
              <el-input v-model="carForm.car.BODY"></el-input>
            </el-form-item>
            <el-form-item label="排量" prop="car.DISPLACEMENT">
              <el-input v-model="carForm.car.DISPLACEMENT"></el-input>
            </el-form-item>
            <el-form-item label="驱动方式" prop="car.DRIVEMODE">
              <el-input v-model="carForm.car.DRIVEMODE"></el-input>
            </el-form-item>
            <el-form-item label="排放标准" prop="car.DISCHARGE">
              <el-input v-model="carForm.car.DISCHARGE"></el-input>
            </el-form-item>
            <el-form-item label="厂家名称" prop="car.MANUFACTURER">
              <el-input v-model="carForm.car.MANUFACTURER"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitcarForm('carForm')">立即创建</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="车辆照片" name="third">
          <h2 class="title">请上传车辆、行驶证及登记证照片:</h2>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import {selectCar,getDepartmentInfos,submitCustomer,submitCredentials,selectCustomers} from '../api/api'
  export default {
    data() {
      // 验证手机号
      let checkPhone=(rule,value,callback)=>{
        let regPhone = /^1[3|4|5|7}8][0-9]\d{4,8}$/;
        if(value===""){
          callback(new Error("手机号不能为空"))
        }else if(!regPhone.test(value)){
          callback(new Error("请输入正确的手机号"))
        }else{
          callback()
        }
      };
      // 验证身份证号
      let checkID = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入身份证号"));
        }
        let idCardNoUtil = {
          provinceAndCitys: {
            11: "北京",
            12: "天津",
            13: "河北",
            14: "山西",
            15: "内蒙古",
            21: "辽宁",
            22: "吉林",
            23: "黑龙江",
            31: "上海",
            32: "江苏",
            33: "浙江",
            34: "安徽",
            35: "福建",
            36: "江西",
            37: "山东",
            41: "河南",
            42: "湖北",
            43: "湖南",
            44: "广东",
            45: "广西",
            46: "海南",
            50: "重庆",
            51: "四川",
            52: "贵州",
            53: "云南",
            54: "西藏",
            61: "陕西",
            62: "甘肃",
            63: "青海",
            64: "宁夏",
            65: "新疆",
            71: "台湾",
            81: "香港",
            82: "澳门",
            91: "国外"
          },
          powers: [
            "7",
            "9",
            "10",
            "5",
            "8",
            "4",
            "2",
            "1",
            "6",
            "3",
            "7",
            "9",
            "10",
            "5",
            "8",
            "4",
            "2"
          ],
          parityBit: ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"],
          genders: { male: "男", female: "女" },
          checkAddressCode: function(addressCode) {
            var check = /^[1-9]\d{5}$/.test(addressCode);
            if (!check) return false;
            if (
              idCardNoUtil.provinceAndCitys[parseInt(addressCode.substring(0, 2))]
            ) {
              return true;
            } else {
              return false;
            }
          },
          checkBirthDayCode: function(birDayCode) {
            var check = /^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(
              birDayCode
            );
            if (!check) return false;
            var yyyy = parseInt(birDayCode.substring(0, 4), 10);
            var mm = parseInt(birDayCode.substring(4, 6), 10);
            var dd = parseInt(birDayCode.substring(6), 10);
            var xdata = new Date(yyyy, mm - 1, dd);
            if (xdata > new Date()) {
              return false; //生日不能大于当前日期
            } else if (
              xdata.getFullYear() == yyyy &&
              xdata.getMonth() == mm - 1 &&
              xdata.getDate() == dd
            ) {
              return true;
            } else {
              return false;
            }
          },
          getParityBit: function(idCardNo) {
            var id17 = idCardNo.substring(0, 17);

            var power = 0;
            for (var i = 0; i < 17; i++) {
              power +=
                parseInt(id17.charAt(i), 10) * parseInt(idCardNoUtil.powers[i]);
            }

            var mod = power % 11;
            return idCardNoUtil.parityBit[mod];
          },
          checkParityBit: function(idCardNo) {
            var parityBit = idCardNo.charAt(17).toUpperCase();
            if (idCardNoUtil.getParityBit(idCardNo) == parityBit) {
              return true;
            } else {
              return false;
            }
          },
          checkIdCardNo: function(idCardNo) {
            //15位和18位身份证号码的基本校验
            var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
            if (!check) return false;
            //判断长度为15位或18位
            if (idCardNo.length == 15) {
              return idCardNoUtil.check15IdCardNo(idCardNo);
            } else if (idCardNo.length == 18) {
              return idCardNoUtil.check18IdCardNo(idCardNo);
            } else {
              return false;
            }
          },

          //校验15位的身份证号码
          check15IdCardNo: function(idCardNo) {
            //15位身份证号码的基本校验
            var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(
              idCardNo
            );
            if (!check) return false;
            //校验地址码
            var addressCode = idCardNo.substring(0, 6);
            check = idCardNoUtil.checkAddressCode(addressCode);
            if (!check) return false;
            var birDayCode = "19" + idCardNo.substring(6, 12);
            //校验日期码
            return idCardNoUtil.checkBirthDayCode(birDayCode);
          },

          //校验18位的身份证号码
          check18IdCardNo: function(idCardNo) {
            //18位身份证号码的基本格式校验
            var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(
              idCardNo
            );
            if (!check) return false;
            //校验地址码
            var addressCode = idCardNo.substring(0, 6);
            check = idCardNoUtil.checkAddressCode(addressCode);
            if (!check) return false;
            //校验日期码
            var birDayCode = idCardNo.substring(6, 14);
            check = idCardNoUtil.checkBirthDayCode(birDayCode);
            if (!check) return false;
            //验证校检码
            return idCardNoUtil.checkParityBit(idCardNo);
          },

          formateDateCN: function(day) {
            var yyyy = day.substring(0, 4);
            var mm = day.substring(4, 6);
            var dd = day.substring(6);
            return yyyy + "-" + mm + "-" + dd;
          },

          //获取信息
          getIdCardInfo: function(idCardNo) {
            var idCardInfo = {
              gender: "", //性别
              birthday: "" // 出生日期(yyyy-mm-dd)
            };
            if (idCardNo.length == 15) {
              var aday = "19" + idCardNo.substring(6, 12);
              idCardInfo.birthday = idCardNoUtil.formateDateCN(aday);
              if (parseInt(idCardNo.charAt(14)) % 2 == 0) {
                idCardInfo.gender = idCardNoUtil.genders.female;
              } else {
                idCardInfo.gender = idCardNoUtil.genders.male;
              }
            } else if (idCardNo.length == 18) {
              var aday = idCardNo.substring(6, 14);
              idCardInfo.birthday = idCardNoUtil.formateDateCN(aday);
              if (parseInt(idCardNo.charAt(16)) % 2 == 0) {
                idCardInfo.gender = idCardNoUtil.genders.female;
              } else {
                idCardInfo.gender = idCardNoUtil.genders.male;
              }
            }
            return idCardInfo;
          },
          getId15: function(idCardNo) {
            if (idCardNo.length == 15) {
              return idCardNo;
            } else if (idCardNo.length == 18) {
              return idCardNo.substring(0, 6) + idCardNo.substring(8, 17);
            } else {
              return null;
            }
          },
          getId18: function(idCardNo) {
            if (idCardNo.length == 15) {
              var id17 = idCardNo.substring(0, 6) + "19" + idCardNo.substring(6);
              var parityBit = idCardNoUtil.getParityBit(id17);
              return id17 + parityBit;
            } else if (idCardNo.length == 18) {
              return idCardNo;
            } else {
              return null;
            }
          }
        };
        if (idCardNoUtil.checkIdCardNo(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的身份证号"));
        }
      };
      // 验证车牌号
      let checkPlate=(rule,value,callback)=>{
        let regPlane = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/;
        if (value === "") {
          callback(new Error("请输入车牌号"));
        } else if (!regPlane.test(value)) {
          callback(new Error("请输入正确的车牌号"));
        } else {
          callback();
        }
      }
      return{
        dialogImageUrl: '',
        dialogVisible: false,
        activeName:"basic",
        // 客户表
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
        customerFormRules: {
          group: [{ required: true, message: "请选择组别", trigger: "change" }],
          staff: [{ required: true, message: "请选择组别", trigger: "change" }],
          name: [
            { required: true, message: "请输入客户姓名", trigger: "blur" },
            { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
          ],
          sex: [{ required: true, message: "请选择性别", trigger: "change" }],
          phone: [{ validator: checkPhone, trigger: "blur" }],
          idCard: [{ validator: checkID, trigger: "blur" }],
          age: [
            {
              type: "number",
              required: true,
              message: "请输入年龄",
              trigger: "blur"
            }
          ],
          marital: [
            { required: true, message: "请选择婚姻状况", trigger: "change" }
          ],
          education: [
            { required: true, message: "请选择学历", trigger: "change" }
          ],
          registrationAdd: [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          address: [{ required: true, message: "请填入信息", trigger: "blur" }],
          housingType: [
            { required: true, message: "请选择房屋类型", trigger: "change" }
          ],
          company: [{ required: true, message: "请填入信息", trigger: "blur" }],
          comType: [{ required: true, message: "请填入信息", trigger: "blur" }],
          industry: [{ required: true, message: "请填入信息", trigger: "blur" }],
          position: [
            { required: true, message: "请选择职位", trigger: "change" }
          ],
          comAdd: [{ required: true, message: "请填入信息", trigger: "blur" }],
          source: [{ required: true, message: "请填入信息", trigger: "blur" }],
          monthly: [
            { required: true, message: "请填入信息" },
            { type: "number", message: "收入必须为数字值" }
          ]
        },
        //车辆信息
        carForm: {
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
        carFormRules: {
          examination: [
            { required: true, message: "请选择验车人", trigger: "change" }
          ],
          name: [
            { required: true, message: "请填入信息", trigger: "blur" },
            { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
          ],
          enginNum: [
            { required: true, message: "请填入信息", trigger: "blur" },
            { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
          ],
          vin: [
            { required: true, message: "请填入信息", trigger: "blur" },
            { min: 17, max: 17, message: "长度为17个字符", trigger: "blur" }
          ],
          plate: [{ validator: checkPlate, trigger: "blur" }],
          "car.PRICE": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.MANUFACTUREDATE": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.NAME": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.TRANSMISSIONTYPE": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.LISTINGDATE": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.GEAR": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.SERIES": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.FUEL": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.YEAR": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.CARLEVEL": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.ENGINE": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.BODYTYPE": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.TRANSMISSION": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.ENGINETYPE": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.BODY": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.DRIVEMODE": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.DISPLACEMENT": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.MODELS": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.MANUFACTURER": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.BRAND": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ],
          "car.DISCHARGE": [
            { required: true, message: "请填入信息", trigger: "blur" }
          ]
        },
        //业务员
        departmentInfos: "",
        groups: [],
        staffs: []
      }
    },
    methods: {
      computeAge: function() {
        let yyyy = this.customerForm.idCard.substr(6, 4);
        this.customerForm.age = new Date().getFullYear() - yyyy;
      },
      submitCustomerForm: function(formName) {
        var _this = this;
        this.$refs[formName].validate(valid => {
          if (valid) {
            _this.certificateForm.name = _this.customerForm.name;
            submitCustomer(this, this.customerForm).then(data => {
              if (data) {
             /*   _this.activeName = "certificate";
                _this.certificateForm.cusromerId = data.code;*/
              }
            });
          } else {
            return false;
          }
        });
      },
      submitcertificateForm: function(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            submitCredentials(
              this,
              this.certificateForm.cusromerId,
              this.certificateForm
            );
          } else {
            this.$message({
              message: "请填写正确的信息",
              type: "warning"
            });
            return false;
          }
        });
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
    mounted() {
      getDepartmentInfos(this).then(data => {
        this.departmentInfos = data;
        let groups = [];
        for (let item in data) {
          groups.push(item);
        }
        this.groups = groups;
      });
      selectCustomers(this,this.$route.query.cusmoter).then(data=>{
        for(var item in data){
          if(data[item].id==this.$route.query.cusmoter){
            this.customerForm=data[item]
          }
        }
      });
      selectCar(this,this.$route.query.id).then(data=>{

      })
    },
    watch: {
      "customerForm.group": function(val) {
        this.customerForm.staff = "";
        this.staffs = this.departmentInfos[val];
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../common/css/base.styl"
  .tabs
    width 80%
    .title
      font-size 20px
      margin-bottom 20px
      color:#666
</style>
