<template>
  <div class="select">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="客户姓名">
        <el-input v-model="formInline.user" placeholder="请输入客户姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">显示全部</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="order"
        label="#"
        width="40">
      </el-table-column>
      <el-table-column
        prop="name"
        label="客户姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="money"
        label="借款金额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="data"
        label="还款日期"
        width="250">
      </el-table-column>
      <el-table-column
        prop="way"
        label="借款方式"
        width="250">
      </el-table-column>
      <el-table-column
        prop="month"
        label="借款期数"
        width="150">
      </el-table-column>
      <el-table-column
        prop="saleman"
        label="业务员"
        width="200">
      </el-table-column>
      <el-table-column
        prop="operate"
        label="操作"
        width="200">
          <template scope="scope">
            <el-button size="small" @click="">查看</el-button>
            <el-button size="small" @click="">修改</el-button>
          </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        tableData: [{
          order: '1',
          name: '王小虎',
          money: '20000',
          data:'2010-06-12',
          way:'5000',
          month:'5',
          saleman:'dd',
          operate:``
        }, {
          order: '2',
          name: '王小虎',
          money: '20000'
        }, {
          order: '3',
          name: '王小虎',
          money: '20000'
        }, {
          order: '4',
          name: '王小虎',
          money: '20000'
        }]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../common/css/base.styl"

</style>
