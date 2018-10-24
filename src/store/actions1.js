


import {GETSHIWUDATA} from "../../../yanxuanProject-vue/src/store/mutationTypes";
import {reqHomeData,reqfenleiData,reqShiWu} from "../api/index";
import {GETFENLEIDATA} from "./mutationTypes";

export default {
  async getHomeData({commit},cb){
    const result = await reqHomeData
    if(result.code===0){
      const home_data = result.data
      commit(GETHOMEDATA,{home_data})
      cb && cb()
    }
  },
  async getShiwuData({commit},cb){
    const result =await reqShiWu;
    if(result.code===0){
      const shiwu_data = result.data
      commit(GETSHIWUDATA,{shiwu_data})
      cb && cb()
    }

  },
  async getfenleiData({commit},cb){
    const result = await reqfenleiData
    if(result.code===0){
      const fenlei_data = result.data
      commit(GETFENLEIDATA)
      cb && cb
    }
  }
}
