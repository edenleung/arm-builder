(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03bdb978"],{"09b0":function(e,t,a){"use strict";var r=a("daa9"),n=a.n(r);n.a},"33e6":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"account-settings-info-view"},[a("div",{staticClass:"account-settings-info-view-left"},[a("a-form",{attrs:{layout:"vertical",form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",{attrs:{label:"邮箱",required:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"请输入您的邮箱!"}]}],expression:"['email', { rules: [{ required: true, message: '请输入您的邮箱!' }] }]"}]})],1),a("a-form-item",{attrs:{label:"昵称",required:!1}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nickname",{rules:[{required:!0,message:"请输入您的昵称!"}]}],expression:"['nickname', { rules: [{ required: true, message: '请输入您的昵称!' }] }]"}]})],1),a("a-form-item",[a("a-button",{attrs:{type:"primary","html-type":"submit",loading:e.updating}},[e._v("更新基本信息")])],1)],1)],1),a("div",{staticClass:"account-settings-info-view-right"},[a("dir",{staticClass:"account-settings-info-view-avatar_title"},[a("span",[e._v("头像")])]),a("div",{staticClass:"account-settings-info-view-avatar"},[a("a-avatar",{staticStyle:{width:"144px",height:"144px"},attrs:{src:e.avatar}})],1),a("a-upload",{attrs:{name:"file",multiple:!0,action:e.action,headers:e.headers,showUploadList:!1,beforeUpload:e.beforeUpload},on:{change:e.handleChange}},[a("div",{staticClass:"account-settings-info-view-button_view"},[a("a-button",{attrs:{icon:"upload"}},[e._v(" "+e._s(e.uploading?"上传中":"更换头像")+" ")])],1)])],1)])},n=[],i=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("159b"),a("ade3")),s=a("5880"),o=a("365c"),c=a("c24f");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={data:function(){return{loading:!0,updating:!1,uploading:!1,action:"https://antt.utools.club/admin"+o["a"].Avatar,headers:{authorization:""}}},computed:l({},Object(s["mapGetters"])(["userInfo","token","avatar"])),created:function(){var e=this;this.headers.authorization="Bearer "+this.token,this.form=this.$form.createForm(this,{mapPropsToFields:function(){return{email:e.$form.createFormField({value:e.userInfo.email}),nickname:e.$form.createFormField({value:e.userInfo.nickname})}}})},methods:l({},Object(s["mapMutations"])(["SET_AVATAR","SET_NAME"]),{beforeUpload:function(){this.uploading=!0},handleChange:function(e){if(void 0!==e.file.response){this.uploading=!1;var t=e.file.response,a=t.code,r=t.result;2e4===a&&(this.$message.success("更换头像成功"),this.SET_AVATAR(r))}},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){if(!e){t.updating=!0;var r=t.$message.loading("更新中..",0);Object(c["c"])(a).then((function(e){t.$message.success("更新成功"),t.SET_NAME(a.nickname)})).finally((function(){r(),t.updating=!1}))}}))}})},f=d,m=(a("09b0"),a("2877")),p=Object(m["a"])(f,r,n,!1,null,"788163c0",null);t["default"]=p.exports},c24f:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return o}));var r=a("b775"),n=a("365c");function i(){return Object(r["b"])({url:n["a"].UserCurrent,method:"get"})}function s(e){return Object(r["b"])({url:n["a"].UserCurrent,method:"put",data:e})}function o(e){return Object(r["b"])({url:n["a"].ResetPassword,method:"put",data:e})}},daa9:function(e,t,a){}}]);