import axios from 'axios'

/*
  获取业务部
*/
export const getDepartmentInfos= (_this) => {
  return axios.get("https://rbac.jiahaichuang.com/api/departmentInfos").then(res=>{
      return res.data;
  }).catch(err=>{
    _this.$message({
      message:"业务员信息获取失败",
      type:"warming"
    })
  })
};

/*
* 客户基本信息录入
* */
export const submitCustomer = (_this, data) => {
  return axios.post("/customers", data).then(res => {
    _this.$message("创建成功");
    return res.data;
  }).catch(err => {
    _this.$message({
      message: "创建失败，请重新上传",
      type: "warning"
    })
  })
};
/*
* 证件信息录入
* */
export const submitCredentials = (_this, id, data) => {
  return axios.post("/customers/" + id + "/customerCredentials", data).then(res => {
    _this.$message("创建成功");
    return res.data;
  }).catch(err => {
    _this.$message({
      message: "创建失败，请重新上传",
      type: "warning"
    })
  })
};
/*
* 客户list
* */
export const getCustomers = (_this, page) => {
  return axios.get("/customers?page=" + page + "&include=status").then(res => {
    return res.data;
  }).catch(err => {
    _this.$message({
      message: "获取失败",
      type: "warning"
    })
  })
};
