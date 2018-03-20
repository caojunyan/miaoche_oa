<template>
  <div class="select">
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
    <div class="table">
      <el-table
        :data="client"
        stripe
        style="width: 100%"
        v-loading="loading">
        <el-table-column
          prop="id"
          label="#"
          width="40"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="客户姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="total"
          label="借款金额"
          width="180">
        </el-table-column>
        <el-table-column
          prop="data"
          label="还款日期"
          width="250">
        </el-table-column>
        <el-table-column
          prop="type"
          label="借款方式"
          width="250">
        </el-table-column>
        <el-table-column
          prop="Nper"
          label="借款期数"
          width="150">
        </el-table-column>
        <el-table-column
          prop="staff"
          label="业务员"
          width="200">
        </el-table-column>
        <el-table-column
          label="操作"
          width="200">
          <template slot-scope="scope">
            <el-button size="small" @click="handleCheck(scope.row.id)">查看</el-button>
            <el-button size="small" @click="handleModify(scope.row.id)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page" v-show="client.length>0">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total" class="pagination">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { getCustomers,selectCustomers } from "../api/api";
  export default {
    data() {
      return {
        loading:false,
        client:[],
        search: {
          clientName: ""
        },
        total:1
      }
    },
    methods: {
      // 查询
      searchClient() {
        selectCustomers(this,this.search.clientName).then(data=>{
            for(let i=0;i<data.length;i++){
              if(this.search.clientName==data[i].name){
                this.client.push(data[i])
              }
              return this.client;
            }
        })
      },
      // 显示全部
      showAll(){
        this.init();
      },
      // 查看
      handleCheck: function(id) {
        this.$router.push({
          name: "Info",
          query: {
            customer: id
          }
        });
      },
      // 修改
      handleModify: function(id) {
        this.$router.push({
          name: "UploadSec",
          query: {
            cusmoter: id
          }
        });
      },
      // init
      init: function(page) {
        this.loading = true;
        let _this = this;
        let pageNum = page ? page : 1;
        // console.log(type);
        //状态分类问题:客户查询all,风控，收费，进件，回款
        switch (this.$route.name) {
          case "selectClient":
            getCustomers(this, pageNum).then(data => {
              console.log(data)
                _this.client = data.data;
                _this.total = data.meta.pagination.total;
                this.loading = false;
            });
            break;
          case "RickControl":
            break;
          case "Charge":
            break;
          case "ToFinancing":
            break;
          case "FromFinancing":
            break;
        }
      }
    },
    watch:{},
    mounted(){
      this.init();
    }
  }
</script>

<style scoped lang="stylus">
  @import "../common/css/base.styl"
.select
  .table
    min-height 600px
  .page
    width 900px
    margin 0 auto
    pagination
      width 400px
</style>
