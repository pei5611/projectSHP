"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[348],{5816:function(t,s,a){a.r(s),a.d(s,{default:function(){return n}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"cart-complete-wrap"},[s("div",{staticClass:"cart-complete"},[t._m(0),s("div",{staticClass:"goods"},[s("div",{staticClass:"left-good"},[s("div",{staticClass:"left-pic"},[s("img",{attrs:{src:t.skuInfo.skuDefaultImg}})]),s("div",{staticClass:"right-info"},[s("p",{staticClass:"title"},[t._v(t._s(t.skuInfo.skuName))]),s("p",{staticClass:"attr"},[t._v(t._s(t.skuInfo.skuDesc)+" 数量："+t._s(t.$route.query.skuNum))])])]),s("div",{staticClass:"right-gocart"},[s("router-link",{staticClass:"sui-btn btn-xlarge",attrs:{to:`/detail/${t.skuInfo.id}`}},[t._v("查看商品详情")]),s("router-link",{attrs:{to:"/shopcart"}},[t._v("去购物车结算")])],1)])])])},e=[function(){var t=this,s=t._self._c;return s("h3",[s("i",{staticClass:"sui-icon icon-pc-right"}),t._v("商品已成功加入购物车！")])}],r={name:"AddCartSuccess",computed:{skuInfo(){return JSON.parse(sessionStorage.getItem("SKUINFO"))}}},c=r,u=a(1001),l=(0,u.Z)(c,i,e,!1,null,"2e5a8fdd",null),n=l.exports}}]);