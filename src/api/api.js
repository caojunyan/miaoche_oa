import axios from './httpConfig';
import qs from 'qs';


// 用户登录
export const getAdmin=(_this,params)=>{
  return axios.post('/authorizations',params).then(function(res){
    localStorage.setItem("user_name",params.email);
    localStorage.setItem("user_id",res.data.data.id);
    localStorage.setItem("user_token",res.data.data.token);
    return true;
  }).catch(function(error){
    this.$message({
      message:"登录失败",
      type:"warming"
    })
  })
}
//用户退出清除缓存
export const loginOut=(_this)=>{
  return axios.delete('/authorizations/current',{
    headers:{
      'Authorization': 'Bearer ' + localStorage.user_token
    }
  }).then(function(res){
    localStorage.clear();
    _this.$message('退出成功');
    _this.$router.push({
      name:'Login'
    });
    return res
  }).catch(error=>{
    localStorage.clear();
    _this.$message('退出成功');
    _this.$router.push({
      name:'Login'
    });
  })
}
//读取用户名
export const getUser=(_this)=>{
  return axios.get('/user').then(res=>{
    return res.data;
  })
}
// 修改密码
export const changePSW = (_this, params) => {
  return axios.put('user/password', params, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.user_token
    }
  }).then((res) => {
    _this.$message({
      message: '密码修改成功',
      type: 'success'
    })
    return res
  }).catch(error=>{
    console.log(error)
    return error
  })
};
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

// 查询客户信息
export const selectCustomers=(_this,params)=>{
  return axios.get("/customers",params).then(res=>{
    return res.data.data
  })
}

// carGPS  list
export const getCarsGPS=(_this,page)=>{
  return axios.get("/carGps?page="+page).then(res=>{
    return res.data;
  }).catch(err=>{
    _this.$message({
      message:"获取失败",
      type:"warming"
    })
  })
}

// 车辆信息
export const selectCar=(_this,params)=>{
  return axios.get('/cars',params).then(res=>{
    console.log(res)
    return res.data.data
  })
}
