define(["avalon","text!./aaa.html"],function(avalon,aaa){
	avalon.templateCache.aaa=aaa
	avalon.define({
		$id:"aaa",
		username:"Ray"
	})
	avalon.vmodels.root.page="aaa"
	var model=avalon.define({
		$id:"test",
		firstName:"Eden",
		lastName:"Hazard",
		fullName:{
			set:function(val){
				var array=(val||"").split(" ");
				this.firstName=array[0]||"";
				this.lastName=array[1]||"";
			},
			get:function(){
				return this.firstName+" "+this.lastName;
			}
		},
		arr:["aaa","bbb","ccc","ddd"],
		selected:["bbb","ccc"],
		checkAllbool:false,
		checkAll:function(){
			if(this.checked){
				model.selected=model.arr;
			}else{
				model.selected.clear();
			}
		}
	})
	model.checkAllbool=model.arr.length===model.selected;
	model.selected.$watch("length",function(n){
		model.checkAllbool=n===model.arr.size();
	});
})