import Mock from 'mockjs';
Mock.Random.extend({
    checkLib: function(date) {
        var checkLibs = ['山西屯留国家粮食储备库', '本库']
        return this.pick(checkLibs)
    },
    row_class_name: function(date) {
        var row_class_names = ['new', 'old']
        return this.pick(row_class_names)
    },
    varieties: function(date) {
        var varietiees = ['玉米', '小麦']
        return this.pick(varietiees)
    },
    status: function(date) {
        var statuses = ['未扦样', '已入库']
        return this.pick(statuses)
    },
    producing_area: function(date) {
        var producing_areas = ['河南', '陕西']
        return this.pick(producing_areas)
    }
})
//库列表数据
var LibraryList=Mock.mock('/liquid/role/data', {
      'rows|3-12':[
        {
          'id|+1': 1,
          unitName:"中央储备粮襄垣直属库",
          checkLib:'@checkLib',
          createTime: "@date('yyyy.MM.dd')",
          rowType:"库信息",//删除用
        }
      ],
      	total:56,
});
//扦样列表数据
var Sampling=Mock.mock('/liquid/role2/data', {
      'rows|3-12':[
        {
          'id|+1': 1,
          sampling_number:"襄垣-玉米-110",
          position_number:"@natural( 1, 30 )",
          varieties:'@varieties',
          status:'@status',
          producing_area:'@producing_area',
          createTime: "@date('yyyy')",
          manuscript:"@bool()",
          safetyReport:"@bool()",
          rowType:"扦样信息",//删除用
          row_class_name:'@row_class_name',        
        }
      ],
      	total:56,
});
//查看编辑扦样
var Sampling=Mock.mock('/liquid/role3/data', {
      formdatas: {
      	title:'中央储备粮襄垣直属库',
      	form:{
          ctime: '2017-12-12',//创建时间
          status: '未扦样',//状态
          nid: '襄垣-玉米-110',//迁样编号
          checkregion: '沁县库区',//被查库点
          pnumber: '漫水-1',//货位号
          varieties: '玉米',//品种
          quality: 'ZC',//性质
          weight: '220.000',//代表数量
          region: '山西',//产地
          harvestdate: '2017',//收货年度
          samplingdate: '2017.9.27',//扦样日期
          remarks: '秋季普查',//备注
          
      	}
	  }
});
//上传图片
var images=Mock.mock('/liquid/images', {
      
});
//新建
var problem1=Mock.mock('/liquid/role4/data', {
      formdatas: {
      	title:'安全报告',
      	form:{
          checkregion: '沁县库区',//被查库点
          pnumber: '漫水-1',//货位号
          problems:[
          	{
          		problem: '',//问题
          		images: [

          		],//图片
          	}
          
          ],
          
      	}
	  }
});
//编辑
var problem1=Mock.mock('/liquid/role5/data', {
      formdatas: {
      	title:'安全报告',
      	form:{
          checkregion: '沁县库区',//被查库点
          pnumber: '漫水-1',//货位号
          problems:[
          	{
          		problem: '长子分库漫水-1号仓出现房屋透水情况，以及出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况。',//问题
          		images: [
					{name: 'safty.jpg', url:'static/images/test/safty.jpg'},
          			{name: 'safty.jpg', url:'static/images/test/safty.jpg'},
          		],//图片
          	},
          	{
          		problem: '长子分库漫水-1号仓出现房屋透水情况，以及出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况出现房屋透水情况。',//问题
          		images: [
					{name: 'safty.jpg', url:'static/images/test/safty.jpg'},
          			{name: 'safty.jpg', url:'static/images/test/safty.jpg'},
          		],//图片
          	}
          
          ],
          
      	}
	  }
});
//工作底稿
var manuscript1=Mock.mock('/liquid/role6/data', {
            formdatas: {
      	title:'安全报告',
      	form:{
          checkregion: '山西',//被检查企业
          checktime: '2017.09',//被查时点
          realchecktime: '2017.09',//实际查库日
          pnumber: '漫水-1',//货位号
          varieties: '玉米',//品种
          quality: 'ZC',//性质
          reservoir_area:'中央储备粮襄垣直属库',//所在库区
          warehouse_type:'无',//仓房类型
          harvestdate: '2017',//收货年度
          storage_from:'常规',//储存形式
          bgzsl:'',//保管帐数量（kg）
          quality:'中等',//质量等级
          //stored_way:['人工入仓'],//入仓方式
          stored_way:'1',//入仓方式
          //粮食入库质量
          volume_weigh_i:'',//容重（g/l）  
          water_content_i:'',//水分（%）
          impurity_i:'',//杂质（%）  
          //实测粮食质量
          volume_weigh_r:'',//容重（g/l）  
          water_content_r:'',//水分（%）
          impurity_r:'',//杂质（%） 
          //粮堆形状及基本尺寸
          long:'',//长（m）：
          width:'',//宽（m）：
          height:'',//高（m）：
          //1.计算粮堆体积
          volume_c:'',//粮堆测量体积(m3)	
          volume_q:'',//需要扣除体积(m3)	
          volume_r:'',//粮堆实际体积(m3)	
          //2.计算粮堆平均密度	
//          标准容重器法
          volume_weigh_bz:'',//粮食容重（g/l）
          correction_factor_bz:'',//校正后修正系数
          average_density_bz:'',//粮堆平均密度（kg/m³）
//          特制大容器法
          unit_volume_weight_tz:'',//单位体积粮食重量（kg/m³）
          correction_factor_tz:'',//校正后修正系数
          average_density_tz:'',//粮堆平均密度（kg/m³）
          //3.计算粮食数量
          weight_measure:'',//测量计算数（kg）	
//          应记粮食损耗(kg)	
          weight_humidity:'',//水分减量
          weight_natural:'',//保管自然损耗
          weight_total:'',//合计
          weight_calculation:'',//检查计算数（kg）	
          //4.认定粮食实际数量	
//          检查计算数与保管账数量比较
          difference:'',//差数（kg）
          slip:'',//差率（％）
          is_same:'',//账实是否相符
          weight_r:'',//粮食实际数量（kg）
          difference_r:'',//账实不符原因   
          remarks: '无',//备注
          checker:'',//检查人：
          keeper:'',//保管责任人：
          responsible_person:'',//被检查企业负责人：    
      	}
	  }
});
var manuscript1=Mock.mock('/liquid/role7/data', {
            formdatas: {
      	title:'安全报告',
      	form:{
          checkregion: '山西',//被检查企业
          checktime: '2017.09',//被查时点
          realchecktime: '2017.09',//实际查库日
          pnumber: '漫水-1',//货位号
          varieties: '玉米',//品种
          quality: 'ZC',//性质
          reservoir_area:'中央储备粮襄垣直属库',//所在库区
          warehouse_type:'无',//仓房类型
          harvestdate: '2017',//收货年度
          storage_from:'常规',//储存形式
          bgzsl:'测试数据',//保管帐数量（kg）
          quality:'中等',//质量等级
          //stored_way:['人工入仓'],//入仓方式
          stored_way:'1',//入仓方式
          //粮食入库质量
          volume_weigh_i:'测试数据',//容重（g/l）  
          water_content_i:'测试数据',//水分（%）
          impurity_i:'测试数据',//杂质（%）  
          //实测粮食质量
          volume_weigh_r:'测试数据',//容重（g/l）  
          water_content_r:'测试数据',//水分（%）
          impurity_r:'测试数据',//杂质（%） 
          //粮堆形状及基本尺寸
          long:'测试数据',//长（m）：
          width:'测试数据',//宽（m）：
          height:'测试数据',//高（m）：
          //1.计算粮堆体积
          volume_c:'测试数据',//粮堆测量体积(m3)	
          volume_q:'测试数据',//需要扣除体积(m3)	
          volume_r:'测试数据',//粮堆实际体积(m3)	
          //2.计算粮堆平均密度	
//          标准容重器法
          volume_weigh_bz:'测试数据',//粮食容重（g/l）
          correction_factor_bz:'测试数据',//校正后修正系数
          average_density_bz:'测试数据',//粮堆平均密度（kg/m³）
//          特制大容器法
          unit_volume_weight_tz:'测试数据',//单位体积粮食重量（kg/m³）
          correction_factor_tz:'测试数据',//校正后修正系数
          average_density_tz:'测试数据',//粮堆平均密度（kg/m³）
          //3.计算粮食数量
          weight_measure:'测试数据',//测量计算数（kg）	
//          应记粮食损耗(kg)	
          weight_humidity:'测试数据',//水分减量
          weight_natural:'测试数据',//保管自然损耗
          weight_total:'测试数据',//合计
          weight_calculation:'测试数据',//检查计算数（kg）	
          //4.认定粮食实际数量	
//          检查计算数与保管账数量比较
          difference:'测试数据',//差数（kg）
          slip:'测试数据',//差率（％）
          is_same:'测试数据',//账实是否相符
          weight_r:'测试数据',//粮食实际数量（kg）
          difference_r:'测试数据',//账实不符原因   
          remarks: '无',//备注
          checker:'陶亚南',//检查人：
          keeper:'陶亚南',//保管责任人：
          responsible_person:'陶亚南',//被检查企业负责人：    
      	}
	  }
});
export default {
//	LibraryList:LibraryList,
}



