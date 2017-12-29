import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
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
}
const mutations = {
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