(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{313:function(e,t,n){var r=n(2),a=n(314),u=n(88);r({target:"Array",proto:!0},{fill:a}),u("fill")},314:function(e,t,n){"use strict";var r=n(15),a=n(89),u=n(18);e.exports=function(e){for(var t=r(this),n=u(t.length),l=arguments.length,i=a(l>1?arguments[1]:void 0,n),o=l>2?arguments[2]:void 0,c=void 0===o?n:a(o,n);c>i;)t[i++]=e;return t}},407:function(e,t,n){"use strict";n.r(t);n(313),n(61);var r=n(285),a={name:"array-pagination-example",setup:function(){var e=new Array(1e3).fill(0).map((function(e,t){return t})),t=Object(r.h)(e,{pageSize:3});return{result:t.result,next:t.next,prev:t.prev,currentPage:t.currentPage,lastPage:t.lastPage}}},u=n(21),l=Object(u.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("page "+e._s(e.currentPage)+" of "+e._s(e.lastPage))]),e._v(" "),n("p",[n("button",{on:{click:e.prev}},[e._v("prev")]),e._v(" "),n("button",{on:{click:e.next}},[e._v("next")])]),e._v(" "),n("ul",e._l(e.result,(function(t){return n("li",{key:t},[e._v("\n      "+e._s(t)+"\n    ")])})),0)])}),[],!1,null,null,null);t.default=l.exports}}]);