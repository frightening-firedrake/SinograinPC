import Mock from 'mockjs';

export default Mock.mock('/liquid/role/data', {
      'rows|1-12':[
        {
          'id|+1': 1,
          displayName:"首页1",
          rolePName:"首页",
          rowType: '角色'
        }
      ],
      page:{
      	total:56,
      }

});