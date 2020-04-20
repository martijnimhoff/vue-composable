(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{436:function(e,r,t){"use strict";t.r(r);t(322),t(323),t(40);var n=t(87),o=t(285),a={name:"retry-example",setup:function(){var e=Object(n.k)(1),r=Object(n.k)(!1),t=Object(n.k)(200),a=(Object(n.k)(Date.now()),Object(n.k)("delay")),l=Object(o.n)({refreshMs:10}).now,i=Object(o.p)(),c=i.json,u=i.loading,s=i.exec,v=(i.error,i.status),d=Object(o.J)({retryDelay:function(e){switch(a.value){case"delay":return t.value;case"backoff":return Object(o.a)(e)}}}),p=d.isRetrying,y=d.nextRetry,_=d.retryCount,m=d.exec;Object(n.m)(e,(function(e){m((function(){if(r.value)throw new Error("blocked");return s("https://reqres.in/api/user/".concat(e))}))}));var f=Object(n.a)((function(){return Math.floor(y.value-l.value)}));return{id:e,json:c,loading:u,status:v,retryCount:_,delay:t,mode:a,throwError:r,isRetrying:p,nextRetryIn:f}}},l=t(21),i=Object(l.a)(a,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("p",[e._v("current Id "+e._s(e.id))]),e._v(" "),t("p",[t("button",{on:{click:function(r){e.id--}}},[e._v("prev")]),e._v(" "),t("button",{on:{click:function(r){e.id++}}},[e._v("next")])]),e._v(" "),t("div",[t("label",{attrs:{for:"throwError"}},[e._v("Throw error")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.throwError,expression:"throwError"}],attrs:{type:"checkbox",name:"throwError"},domProps:{checked:Array.isArray(e.throwError)?e._i(e.throwError,null)>-1:e.throwError},on:{change:function(r){var t=e.throwError,n=r.target,o=!!n.checked;if(Array.isArray(t)){var a=e._i(t,null);n.checked?a<0&&(e.throwError=t.concat([null])):a>-1&&(e.throwError=t.slice(0,a).concat(t.slice(a+1)))}else e.throwError=o}}})]),e._v(" "),t("div",[t("label",{attrs:{for:"retryMode"}},[e._v("Retry mode:")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{name:"retryMode"},on:{change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.mode=r.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"delay"}},[e._v("Delay")]),e._v(" "),t("option",{attrs:{value:"backoff"}},[e._v("Exponential backoff")])])]),e._v(" "),"delay"===e.mode?t("div",[t("label",{attrs:{for:"delay"}},[e._v("Delay")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.delay,expression:"delay",modifiers:{number:!0}}],attrs:{type:"number",name:"delay"},domProps:{value:e.delay},on:{input:function(r){r.target.composing||(e.delay=e._n(r.target.value))},blur:function(r){return e.$forceUpdate()}}})]):e._e(),e._v(" "),e.loading?t("p",[e._v("loading...")]):e.isRetrying?t("p",[e._v("\n    retrying in "+e._s(e.nextRetryIn)+"ms\n    "),t("span",[e._v("Current: "+e._s(e.retryCount)+" retries")])]):t("div",[t("p",[e._v("Status: "+e._s(e.status))]),e._v(" "),t("span",[e._v(e._s(e.json))])])])}),[],!1,null,null,null);r.default=i.exports}}]);