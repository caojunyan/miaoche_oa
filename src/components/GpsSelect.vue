<template>
    <div class="select-gps">
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
          <template slot-scope="scope">
            <el-button size="small" @click="handleCheck(scope.row.id)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="total" v-show="car.length>0">
        <el-pagination layout="prev, pager, next" :total="total" class="pages">
        </el-pagination>
      </div>
    </div>
</template>

<script>
  import { getCarsGPS, submitCarGPS} from "../api/api";
    export default {
        name: "gps-select",
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
          /*this.$refs[formName].validator(valid=>{*/
          if(this.GPSForm!=""){
            submitCarGPS(this,this.$route.query.carId,this.GPSForm).then(res=>{

            })
            this.dialogFormVisible=false;
          }else{
            this.$message({
              message:"请填写正确信息",
              type:'warming'
            })
          }
          /* })*/
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
      },
         mounted(){
          this.init()
      }
    }
</script>

<style scoped>

</style>
