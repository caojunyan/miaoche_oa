<template>
    <div class="gps-install">
      <el-form :inline="true" :model="search" class="demo-form-inline">
        <el-form-item label="客户姓名">
          <el-input v-model="search.clientName" placeholder="请输入客户姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchClient">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="showAll">显示全部</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="car" style="width: 100%" v-loading="loading">
        <el-table-column type="index" width="50" prop="id">
         </el-table-column>
        <el-table-column label="客户姓名" prop="name">
        </el-table-column>
        <el-table-column label="车牌号" prop="plate">
        </el-table-column>
        <el-table-column label="业务员" prop="staff">
        </el-table-column>
        <el-table-column label="备注" prop="note">
        </el-table-column>
        <el-table-column label="操作" >
          <template scope="scope">
            <el-button size="small" @click="handleCheck(scope.row.id)">查看</el-button>
            <el-button size="small" @click="installinfo(scope.row.id)">GPS安装</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="total" v-show="car.length>0">
        <el-pagination layout="prev, pager, next" :total="total" class="pages">
        </el-pagination>
      </div>

      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="GPSForm" :rules="GPSFormRules" ref="GPSForm" label-width="80px">
          <el-form-item label="执行人" prop="staff">
            <el-select v-model="GPSForm.staff" placeholder="请选择">
              <el-option v-for="item in staffs" :value="item.value" :label="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="融资方" prop="financiers">
            <el-select v-model="GPSForm.financiers" placeholder="请选择">
              <el-option value="前金所" label="前金所"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="安装公司" prop="company">
            <el-input v-model="GPSForm.company"></el-input>
          </el-form-item>
          <el-form-item label="安装个数" prop="total">
            <el-input v-model.number="GPSForm.total"></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="note">
            <el-input type="textarea" v-model="GPSForm.note"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('GPSForm')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import { getCarsGPS } from "../api/api";
    export default {
        name: "gps-install",
        data(){
          return{
            loading: false,
            car: [
              {
                name: "",
                plate: "",
                staff: "",
                note: ""
              }
            ],
            search: {
              clientName: ""
            },
            total: 1,
            //GPS安装FORM
            dialogFormVisible: false,
            GPSForm: {
              staff: "",
              company: "", // 安装公司
              type: "", //gps类别
              financiers: "", //融资方
              total: "", //安装个数
              note: "" //备注
            },
            GPSFormRules: {
              staff: [
                {
                  required: true,
                  message: "请选择安装人员",
                  trigger: "change"
                }
              ],
              company: [
                {
                  required: true,
                  message: "请填入安装公司",
                  trigger: "blur"
                }
              ], // 安装公司
              type: [
                {
                  required: true,
                  message: "请填入gps类别",
                  trigger: "blur"
                }
              ], //gps类别
              financiers: [
                {
                  required: true,
                  message: "请选择融资方",
                  trigger: "change"
                }
              ], //融资方
              total: [
                {
                  type: "number",
                  required: true,
                  message: "请填入GPS安装个数"
                }
              ] //安装个数
            },
            staffs: []
          }
        },
        methods:{
          // 查询
          searchClient:function(){},
          showAll:function(){},
          // 翻页
          handleCurrentChange:function(val){},
          submitForm:function(formName){

          },
          init:function(page){
            let pageNum=page?page:1;
            getCarsGPS(this,pageNum).then(data=>{
              this.car=data.data
            })
          },
          // 查看
          handleCheck:function(id){
              this.$router.push({
                  name:'CarInfo',
                  query:{
                    carId:id
                  }
              })
          },
          // GPS安装
          installinfo:function(id){
            this.dialogFormVisible=true;

          }
        },
      mounted(){
          this.init()
      }
    }
</script>

<style scoped lang="stylus">
.gps-install
  width 80%
</style>
