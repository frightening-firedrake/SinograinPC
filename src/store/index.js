import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	userName:'',//用户名
	userId:'',//用户id
	libraryName:'',//库点名
	libraryId:'',//库点id
	libraryNames:[],//库点组
	qualitys:['ZC','ZD','LC','SP','TD'],//性质组
	sorts:['小麦','玉米','食用油'],//品种组
	remarkses:['春季普查','秋季普查','2017-2018轮换年度','收购寻查','其他'],//备注组
	tests:['水分','容重','杂质','不完善颗粒','硬质','品尝评分','卫生指标','加工品质','(玉米)生霉粒','(玉米)脂肪酸值','(小麦)矿物含量','(小麦)面筋吸水量'],//质检组
	mask:false,//自定义的遮罩层控制选项
	modal_id_number:1000,
    viewdata:[],//查看数据组
	editdata:[],//编辑数据组
	aultdata:[],//编辑数据组
	messions:[],//任务数据组
//	current_modal:{},
	isCollapse:false,
}
const getters = {
    modal_id:function(state){
        return 'Modal'+state.modal_id_number;
    },
    libraryName:function(state){
    	if(state.libraryName){
    		return state.libraryName;    		
    	}else{
    		return localStorage.getItem("libraryName");
    	}
    },
    libraryId:function(state){
    	if(state.libraryId){
    		return state.libraryId;    		
    	}else{
    		return localStorage.getItem("libraryId");
    	}
    },
    userName:function(state){
    	if(state.userName){
    		return state.userName;    		
    	}else if(localStorage.getItem("userName")){
    		return localStorage.getItem("userName");
    	}else{
    		return '未登录';
    	}
    },
    userId:function(state){
    	if(state.userId){
    		return state.userId;    		
    	}else{
    		return localStorage.getItem("userId");
    	}
    },
    libraryNames:function(state){
    	if(state.libraryNames.length){
    		return state.libraryNames;    		
    	}else{
    		var basemsg=JSON.parse(localStorage.getItem("basemsg"))
    		return basemsg.libraryNames;
    	}
    },
    qualitys:function(state){
    	if(state.qualitys.length){
    		return state.qualitys;    		
    	}else{
    		var basemsg=JSON.parse(localStorage.getItem("basemsg"))
    		return basemsg.qualitys;
    	}
    },
    sorts:function(state){
    	if(state.sorts.length){
    		return state.sorts;    		
    	}else{
    		var basemsg=JSON.parse(localStorage.getItem("basemsg"))
    		return basemsg.sorts;
    	}
    },
    remarkses:function(state){
    	if(state.remarkses.length){
    		return state.remarkses;    		
    	}else{
    		var basemsg=JSON.parse(localStorage.getItem("basemsg"))
    		return basemsg.remarkses;
    	}
    },
    tests:function(state){
    	if(state.tests.length){
    		return state.tests;    		
    	}else{
    		var basemsg=JSON.parse(localStorage.getItem("basemsg"))
    		return basemsg.tests;
    	}
    },
}
const mutations = {
	setUserInfo(state,payload){
		state.libraryName=payload.libraryName;
		state.libraryId=payload.libraryId;
		state.userName=payload.userName;
		state.userId=payload.userId;
		localStorage.setItem('libraryId', payload.libraryId);
		localStorage.setItem('libraryName', payload.libraryName);
		localStorage.setItem('userName', payload.userName);
		localStorage.setItem('userId', payload.userId);
	},
	setBaseMsg(state,payload){
		state.libraryNames=payload.libraryNames;
		state.qualitys=payload.qualitys;
		state.sorts=payload.sorts;
		state.remarkses=payload.remarkses;
		state.tests=payload.tests;
		var basemsg=payload;
		localStorage.setItem('basemsg', JSON.stringify(basemsg));
	},
	create_modal_id(state){
        state.modal_id_number+=1;
    },
    is_mask(state,payload){
    	state.mask=payload;
    },
    create_modal(state,payload){
    	var datatype=payload.datatype;
		var newdata=payload.newdata;
		state[datatype].push(newdata);
		console.log('ok')
    },
    close_modal(state,payload){
//  	过滤掉对应id的实现删除效果
		var id=payload.id;
		var type=payload.type;
		var	list=payload.list;
		console.log(payload)
    	switch(type) 
			{ 
			case "view": 
				state.viewdata=state.viewdata.filter(function (item) {
				  	return !(item.list==list&&item.id==id);
				})
			break; 
			case "edit": 
				state.editdata=state.editdata.filter(function (item) {
				  	return !(item.list==list&&item.id==id);
				})
			break; 
			case "ault": 
				state.aultdata=state.aultdata.filter(function (item) {
				  	return !(item.list==list&&item.id==id);
				})
			break; 
			} 
    },  
    hid_modal(state,payload){
//  	过滤掉对应id的查看数据实现删除效果
		var id=payload.id;
		var type=payload.type;
		var	list=payload.list;
		var title=payload.title;
		var icon;
    	switch(type) 
			{ 
			case "view": 
    			icon="icon-eye-open";
			break; 
			case "edit": 
				icon="icon-pencil";
			break; 
			case "ault": 
				icon="icon-key";
			break; 
			} 
    	var newmession={   		
		  		icon:icon,
		  		title:title,
		  		id:id,
		  		type:type,
		  		list:list,
	    	};
		state.messions.unshift(newmession);
    },
    //  通过messions中的item点击时的id,删除id的mession数据并打开查看数据组中对应id的显示
    pop_mession(state,payload){
    	var id=payload.id;
    	var type=payload.type;
		var	list=payload.list;
		switch(type) 
			{ 
			case "view": 
    			var item=state.viewdata.find(function(item){
    				return item.list==list&&item.id==id;
    			});
			break; 
			case "edit": 
				var item=state.editdata.find(function(item){
    				return item.list==list&&item.id==id;
    			});
			break; 
			case "ault": 
				var item=state.aultdata.find(function(item){
    				return item.list==list&&item.id==id;
    			});
			break; 
			} 
//  	var item=this.$refs[id][0].item;
    	if(item.lg){
    		state.mask=false; 		  		
    	}else{
    		state.mask=true;; 		  		
    	}
    	item.show=true;
    },
    del_mession(state,payload){
    	var id=payload.id;
    	var type=payload.type;
		var	list=payload.list;
    	state.messions=state.messions.filter(function (item) {
		  	return !(item.id==id&&item.type==type&&item.list==list);
		});
    },
    slideToggle(state){
    	state.isCollapse=!state.isCollapse; 
//  	mutations.route_click(state);
    },
    route_click(state){
    	var current=mutations.find_current_modal(state)
    	if(current){
    		current.show=!current.show;
    		state.mask=false;
    		var payload={id:current.id,type:current.type,title:current.title}
    		mutations.hid_modal(state,payload)
    	}
    },
    find_current_modal(state){
    	var modal_data=[...state.viewdata,...state.editdata,...state.aultdata,...state.messions]
//  	console.log(modal_data);
    	var current=modal_data.find(function(item){
    		return item.show==true
    	})
    	if(current){
    		return current
    	}
    }
}
 const actions ={
    addAction(context){
        context.commit('create_modal_id')
    },
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
})