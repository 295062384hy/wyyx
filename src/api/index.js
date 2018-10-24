import ajax from './ajax'

//1.获取首页数据
export const reqHomeData = () => ajax('/home_data');
//2.获取识物数据
export const reqShiWu = () => ajax('/shiwu_data');
//3.获取分类数据
export const reqfenleiData = () => ajax('/fenlei_data');


