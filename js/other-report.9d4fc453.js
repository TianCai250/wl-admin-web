"use strict";(self["webpackChunkwl_admin"]=self["webpackChunkwl_admin"]||[]).push([[266],{3744:function(e,l){l.Z=(e,l)=>{const a=e.__vccOpts||e;for(const[t,n]of l)a[t]=n;return a}},4452:function(e,l,a){a.r(l),a.d(l,{default:function(){return g}});var t=a(6252),n=a(9963),p=a(2262);const r={class:"left-panel"},i={class:"right-panel-search"},o=["innerHTML"],u={class:"pagination-block"};var d={__name:"report",setup(e){const l=(0,p.qj)({key:""}),a=(0,p.qj)({currentPage:1,pageSize:10,pageTotal:1}),d=(0,p.iH)([]),s=[{index:1,label:"姓名",prop:"name",width:"120",propFormat(e){return e||"-"},display:!0},{index:2,label:"年龄",prop:"age",width:"120",propFormat(e){return e||"-"},display:!0},{index:3,label:"工作",prop:"work",width:"120",propFormat(e){return e||"-"},display:!0},{index:4,label:"爱好",prop:"hobby",width:"120",propFormat(e){return e||"-"},display:!0}],c=()=>{d.value=[{name:"wl",age:24,work:"前端开发",hobby:"游戏"}]},g=e=>{console.log(e)},m=e=>{a.pageSize=e,c()},w=e=>{a.currentPage=e,c()};return(e,p)=>{const h=(0,t.up)("el-input"),b=(0,t.up)("el-form-item"),f=(0,t.up)("el-button"),y=(0,t.up)("el-header"),_=(0,t.up)("el-table-column"),k=(0,t.up)("el-table"),v=(0,t.up)("el-pagination"),W=(0,t.up)("el-empty"),z=(0,t.up)("el-main"),x=(0,t.up)("el-container");return(0,t.wg)(),(0,t.j4)(x,null,{default:(0,t.w5)((()=>[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t._)("div",r,[(0,t._)("div",i,[(0,t.Wm)(b,{label:"查询关键字",class:"left-panel_label"},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{modelValue:l.key,"onUpdate:modelValue":p[0]||(p[0]=e=>l.key=e),clearable:"",placeholder:"请输入关键字"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(f,{icon:"el-icon-search",type:"primary",onClick:c},{default:(0,t.w5)((()=>[(0,t.Uk)("查询")])),_:1})])])])),_:1}),(0,t.Wm)(z,{class:"nopadding"},{default:(0,t.w5)((()=>[d.value.length?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t.Wm)(k,{class:"page_table",ref:"multipleTableRef",data:d.value,style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{type:"selection",width:"55"}),(0,t.Wm)(_,{type:"index",align:"center",label:"序号",width:"55"}),((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(s,(e=>((0,t.wg)(),(0,t.iD)(t.HY,{key:e.prop},[e.display?((0,t.wg)(),(0,t.j4)(_,{key:0,label:e.label,prop:e.prop,align:"center","min-width":e.width,"show-overflow-tooltip":""},{default:(0,t.w5)((l=>[(0,t._)("div",{innerHTML:e.propFormat(l.row[e.prop])},null,8,o)])),_:2},1032,["label","prop","min-width"])):(0,t.kq)("",!0)],64)))),64)),(0,t.Wm)(_,{fixed:"right",label:"操作",width:"135",align:"center"},{default:(0,t.w5)((e=>[(0,t.Wm)(f,{type:"primary",size:"small",onClick:(0,n.iM)((l=>g(e.row)),["stop"])},{default:(0,t.w5)((()=>[(0,t.Uk)("编辑")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),(0,t._)("div",u,[(0,t.Wm)(v,{background:"",style:{width:"max-content"},class:"pagination-box",onSizeChange:m,onCurrentChange:w,"current-page":a.currentPage,"page-sizes":[10,20,30,50,100],"page-size":a.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:a.pageTotal},null,8,["current-page","page-size","total"])])],64)):((0,t.wg)(),(0,t.j4)(W,{key:1,description:"暂无数据","image-size":100}))])),_:1})])),_:1})}}},s=a(3744);const c=(0,s.Z)(d,[["__scopeId","data-v-03c6e9c4"]]);var g=c}}]);