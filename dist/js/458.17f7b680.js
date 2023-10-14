"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[458],{1458:function(a,s,t){t.r(s),t.d(s,{default:function(){return f}});var r=function(){var a=this,s=a._self._c;return s("div",[s("TypeNav"),s("div",{staticClass:"main"},[s("div",{staticClass:"py-container"},[s("div",{staticClass:"bread"},[a._m(0),s("ul",{staticClass:"fl sui-tag"},[a.searchParams.categoryName?s("li",{staticClass:"with-x"},[a._v(a._s(a.searchParams.categoryName)+" "),s("i",{on:{click:a.removeCategoryName}},[a._v("×")])]):a._e(),a.searchParams.keyword?s("li",{staticClass:"with-x"},[a._v(a._s(a.searchParams.keyword)+" "),s("i",{on:{click:a.removeKeyword}},[a._v("×")])]):a._e(),a.searchParams.trademark?s("li",{staticClass:"with-x"},[a._v(a._s(a.searchParams.trademark.split(":")[1])+" "),s("i",{on:{click:a.removeTrademark}},[a._v("×")])]):a._e(),a._l(a.searchParams.props,(function(t,r){return s("li",{key:r,staticClass:"with-x"},[a._v(a._s(t.split(":")[1])+" "),s("i",{on:{click:function(s){return a.removeAttr(r)}}},[a._v("×")])])}))],2)]),s("SearchSelector",{on:{trademarkInfo:a.trademarkInfo,attrInfo:a.attrInfo}}),s("div",{staticClass:"details clearfix"},[s("div",{staticClass:"sui-navbar"},[s("div",{staticClass:"navbar-inner filter"},[s("ul",{staticClass:"sui-nav"},[s("li",{class:{active:a.isOne},on:{click:function(s){return a.changeOrder("1")}}},[s("a",[a._v("综合"),s("span",{directives:[{name:"show",rawName:"v-show",value:a.isOne,expression:"isOne"}],staticClass:"iconfont",class:{"icon-up":a.isAsc,"icon-arrow-sortdown-smal":a.isDesc}})])]),s("li",{class:{active:a.isTwo},on:{click:function(s){return a.changeOrder("2")}}},[s("a",[a._v("价格"),s("span",{directives:[{name:"show",rawName:"v-show",value:a.isTwo,expression:"isTwo"}],staticClass:"iconfont",class:{"icon-up":a.isAsc,"icon-arrow-sortdown-smal":a.isDesc}})])])])])]),s("div",{staticClass:"goods-list"},[s("ul",{staticClass:"yui3-g"},a._l(a.goodsList,(function(t,r){return s("li",{key:t.id,staticClass:"yui3-u-1-5"},[s("div",{staticClass:"list-wrap"},[s("div",{staticClass:"p-img"},[s("router-link",{attrs:{to:`/detail/${t.id}`}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.defaultImg,expression:"good.defaultImg"}]})])],1),s("div",{staticClass:"price"},[s("strong",[s("em",[a._v("¥")]),s("i",[a._v(a._s(t.price)+".00")])])]),s("div",{staticClass:"attr"},[s("a",{attrs:{target:"_blank",href:"item.html",title:"促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"}},[a._v(a._s(t.title))])]),a._m(1,!0),a._m(2,!0)])])})),0)]),s("Pagination",{attrs:{pageNo:a.searchParams.pageNo,pageSize:a.searchParams.pageSize,total:a.total,continues:5},on:{getPageNo:a.getPageNo}})],1)],1)])],1)},e=[function(){var a=this,s=a._self._c;return s("ul",{staticClass:"fl sui-breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[a._v("全部结果")])])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"commit"},[s("i",{staticClass:"command"},[a._v("已有"),s("span",[a._v("2000")]),a._v("人评价")])])},function(){var a=this,s=a._self._c;return s("div",{staticClass:"operate"},[s("a",{staticClass:"sui-btn btn-bordered btn-danger",attrs:{href:"success-cart.html",target:"_blank"}},[a._v("加入购物车")]),s("a",{staticClass:"sui-btn btn-bordered",attrs:{href:"javascript:void(0);"}},[a._v("收藏")])])}],i=(t(7658),function(){var a=this,s=a._self._c;return s("div",{staticClass:"clearfix selector"},[s("div",{staticClass:"type-wrap logo"},[s("div",{staticClass:"fl key brand"},[a._v("品牌")]),s("div",{staticClass:"value logos"},[s("ul",{staticClass:"logo-list"},a._l(a.trademarkList,(function(t,r){return s("li",{key:t.tmId,on:{click:function(s){return a.trademarkHandler(t)}}},[a._v(a._s(t.tmName))])})),0)]),a._m(0)]),a._l(a.attrsList,(function(t,r){return s("div",{key:t.attrId,staticClass:"type-wrap"},[s("div",{staticClass:"fl key"},[a._v(a._s(t.attrName))]),s("div",{staticClass:"fl value"},[s("ul",{staticClass:"type-list"},a._l(t.attrValueList,(function(r,e){return s("li",{key:e,on:{click:function(s){return a.attrInfo(t,r)}}},[s("a",[a._v(a._s(r))])])})),0)]),s("div",{staticClass:"fl ext"})])}))],2)}),c=[function(){var a=this,s=a._self._c;return s("div",{staticClass:"ext"},[s("a",{staticClass:"sui-btn",attrs:{href:"javascript:void(0);"}},[a._v("多选")]),s("a",{attrs:{href:"javascript:void(0);"}},[a._v("更多")])])}],o=t(3822),n={name:"SearchSelector",computed:{...(0,o.Se)(["trademarkList","attrsList"])},methods:{trademarkHandler(a){this.$emit("trademarkInfo",a)},attrInfo(a,s){this.$emit("attrInfo",a,s)}}},l=n,h=t(1001),d=(0,h.Z)(l,i,c,!1,null,"b499a198",null),m=d.exports,u={name:"Search",components:{SearchSelector:m},data(){return{searchParams:{category1Id:"",category2Id:"",category3Id:"",categoryName:"",keyword:"",order:"1:desc",pageNo:1,pageSize:10,props:[],trademark:""}}},beforeMount(){Object.assign(this.searchParams,this.$route.query,this.$route.params)},mounted(){this.getData()},computed:{...(0,o.Se)(["goodsList"]),isOne(){return-1!=this.searchParams.order.indexOf("1")},isTwo(){return-1!=this.searchParams.order.indexOf("2")},isAsc(){return-1!=this.searchParams.order.indexOf("asc")},isDesc(){return-1!=this.searchParams.order.indexOf("desc")},...(0,o.rn)({total:a=>a.search.searchList.total})},methods:{getData(){this.$store.dispatch("getSearchList",this.searchParams)},removeCategoryName(){this.searchParams.categoryName=void 0,this.searchParams.category1Id=void 0,this.searchParams.category2Id=void 0,this.searchParams.category3Id=void 0,this.getData(),this.$route.params&&this.$router.push({name:"search",params:this.$route.params})},removeKeyword(){this.searchParams.keyword=void 0,this.getData(),this.$bus.$emit("clear"),this.$route.query&&this.$router.push({name:"search",query:this.$route.query})},trademarkInfo(a){this.searchParams.trademark=`${a.tmId}:${a.tmName}`,this.getData()},removeTrademark(){this.searchParams.trademark=void 0,this.getData()},attrInfo(a,s){let t=`${a.attrId}:${s}:${a.attrName}`;-1==this.searchParams.props.indexOf(t)&&this.searchParams.props.push(t),this.getData()},removeAttr(a){this.searchParams.props.splice(a,1),this.getData()},changeOrder(a){this.searchParams.order;let s=this.searchParams.order.split(":")[0],t=this.searchParams.order.split(":")[1],r="";r=a==s?`${s}:${"desc"==t?"asc":"desc"}`:`${a}:desc`,this.searchParams.order=r,this.getData()},getPageNo(a){this.searchParams.pageNo=a,this.getData()}},watch:{$route(a,s){Object.assign(this.searchParams,this.$route.query,this.$route.params),this.getData(),this.searchParams.category1Id="",this.searchParams.category2Id="",this.searchParams.category3Id=""}}},v=u,p=(0,h.Z)(v,r,e,!1,null,"f081d3e4",null),f=p.exports}}]);