import Mock from 'mockjs'

import home_data from './home_data.json'
import shiwu_data from './shiwu_data.json'
import {categoryL1List} from './category_data.json'

 const category_data = categoryL1List;

Mock.mock('/home_data',{code:0,data:home_data});
Mock.mock('/shiwu_data',{code:0,data:shiwu_data});
Mock.mock('/category_data',{code:0,data:category_data});

