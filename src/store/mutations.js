import {GETHOMEDATA,GETSHIWUDATA,GETFENLEIDATA} from './mutationTypes'





export default {
  [GETHOMEDATA](state,{home_data}){
    state.home_data = home_data
  },
  [GETSHIWUDATA](state,{shiwu_data}){
    state.shiwu_data = shiwu_data
  },
  [GETFENLEIDATA](state,{fenlei_data}){
    state.fenlei_data = fenlei_data
  }
}
