(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{316:function(e,a,r){},398:function(e,a,r){"use strict";var t=r(316);r.n(t).a},440:function(e,a,r){"use strict";r.r(a);var t=r(87),o=r(285),s=function(e){return!!e},m=Object(t.c)({setup:function(){var e=Object(t.k)(""),a=Object(t.k)(""),r=Object(t.k)(""),m=Object(o.N)({firstName:{$value:e,required:s},lastName:{$value:a,required:s},password:{$value:r,required:{$validator:s,$message:Object(t.k)("password is required")}},samePassword:{$value:Object(t.k)(""),match:{$validator:function(e){return e===r.value},$message:"Password don't match"}}});return{onSubmit:function(e){e.preventDefault(),m.$anyInvalid?alert("invalid form"):alert("submit form")},submitText:Object(t.a)((function(){return m.$anyDirty&&m.$anyInvalid?"Invalid form":m.$anyDirty?m.$errors.length>0?(console.log(m.$errors),"Error"):"Submit":"Please populate the form"})),form:m}}}),n=(r(398),r(21)),i=Object(n.a)(m,(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"about"},[r("h1",[e._v("Form validation")]),e._v(" "),r("form",{on:{submit:e.onSubmit}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.firstName.$value,expression:"form.firstName.$value"}],attrs:{placeholder:"firstName"},domProps:{value:e.form.firstName.$value},on:{input:function(a){a.target.composing||e.$set(e.form.firstName,"$value",a.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lastName.$value,expression:"form.lastName.$value"}],attrs:{placeholder:"lastName"},domProps:{value:e.form.lastName.$value},on:{input:function(a){a.target.composing||e.$set(e.form.lastName,"$value",a.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password.$value,expression:"form.password.$value"}],attrs:{placeholder:"password"},domProps:{value:e.form.password.$value},on:{input:function(a){a.target.composing||e.$set(e.form.password,"$value",a.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.samePassword.$value,expression:"form.samePassword.$value"}],attrs:{placeholder:"password2"},domProps:{value:e.form.samePassword.$value},on:{input:function(a){a.target.composing||e.$set(e.form.samePassword,"$value",a.target.value)}}}),e._v(" "),e.form.samePassword.$dirty&&e.form.samePassword.match.$invalid?r("p",[e._v("\n      "+e._s(e.form.samePassword.match.$message)+"\n    ")]):e._e(),e._v(" "),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.submitText,expression:"submitText"}],class:{invalid:e.form.$anyDirty&&e.form.$anyInvalid,dirty:e.form.$anyDirty&&!e.form.$anyInvalid,error:e.form.$errors.length>0},attrs:{type:"submit"},domProps:{value:e.submitText},on:{input:function(a){a.target.composing||(e.submitText=a.target.value)}}})])])}),[],!1,null,"3a0259aa",null);a.default=i.exports}}]);