(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{645:function(t,e,a){"use strict";a.r(e);var o={data:function(){return{shelveName:"",Alert:!1,FileName:"",alertMsg:"",languageCat:[],TableName:"",Rule:[function(t){return!!t||"Oh! you missed this."},function(t){return t.length<30||"Table Name must be less than 30 characters"},function(t){return t.split(" ").length<=1||"no one space allowed"},function(t){return/^[A-Za-z0-9 ]+$/.test(t)||"Cannot contain special character"}],requiredRule:[function(t){return!!t||"Oh! you missed this."}],loading:!1,formstate:!1}},components:{},mounted:function(){},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},createTable:function(){var t=this;this.$root.projectData.project_files.dbtables.filter((function(e){return e.name==t.TableName})).length>0?this.$root.projectPanelComponent.showAlert("Oops!","Table Name exists,please try again","error"):this.$refs.form.validate()&&(this.loading=!0,axios.post("/save-db-table-project",{project_slug:this.$route.params.project_slug,table_name:this.TableName}).then((function(e){200==e.status&&(t.$root.projectData.project_files.dbtables.push(e.data.dbtable),t.$root.LocalStore("user_projects_data_"+t.$route.params.project_slug+t.$root.username,t.$root.projectData),t.$root.projectPanelComponent.showAlert("Happy coding!","Database table added","success"),t.loading=!1)})).catch((function(e){t.$root.projectPanelComponent.showAlert("Oops!","Unable to add database,please try again","error"),t.loading=!1})))}}},n=a(4),s=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{background:"transparent","font-family":"BodyFont","padding-top":"20px"}},[t._m(0),t._v(" "),a("div",{staticClass:"col-md-8 col-lg-4 offset-lg-4 offset-md-2  py-1"},[a("v-form",{ref:"form",staticClass:"row my-2 py-2 px-2",model:{value:t.formstate,callback:function(e){t.formstate=e},expression:"formstate"}},[a("div",{staticClass:"col-12 py-2 my-0 px-2"},[a("div",{staticClass:"mb-2",staticStyle:{"font-size":"13px","font-family":"MediumFont"}},[t._v("Table Name")]),t._v(" "),a("v-text-field",{staticStyle:{"font-size":"13px"},attrs:{dense:"",placeholder:"name...",rules:t.Rule,counter:"30",outlined:"",color:"#3C87CD"},model:{value:t.TableName,callback:function(e){t.TableName=e},expression:"TableName"}})],1),t._v(" "),a("div",{staticClass:"col-12 py-1 my-0 px-2 text-center"},[a("v-btn",{staticStyle:{"font-size":"13px","font-weight":"bolder",color:"white","font-family":"HeaderFont"},attrs:{type:"submit",small:"",color:"#3C87CD",loading:t.loading},on:{click:function(e){return e.preventDefault(),t.createTable(e)}}},[t._v("Add")])],1)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 mt-5 mt-md-1"},[e("h6",[this._v("Create Database")])])}],!1,null,null,null);e.default=s.exports}}]);