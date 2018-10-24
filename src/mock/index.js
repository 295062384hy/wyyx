import Mock from 'mockjs'

import home_data from './home_data.json'
import shiwu_data from './shiwu_data.json'
import {fenleiList} from './fenlei_data.json'

 const fenlei_data = fenleiList;

Mock.mock('/home_data',{code:0,data:home_data});
Mock.mock('/shiwu_data',{code:0,data:shiwu_data});
Mock.mock('/fenlei_data',{code:0,data:fenlei_data});

