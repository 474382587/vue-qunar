webpackJsonp([1],{"1ZjL":function(t,e){},"7G+B":function(t,e){},"8Tk+":function(t,e){},"9n10":function(t,e){},Cajn:function(t,e){},CohD:function(t,e){},F4wP:function(t,e){},FTRA:function(t,e){},FqkB:function(t,e){},ITZ1:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},s=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},a,!1,null,null,null);e.default=s.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},s,!1,function(t){i("iTa+")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("mtWM"),d=i.n(l),u=i("NYxO"),p={name:"Header",computed:c()({},Object(u.c)(["city"]))},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v("\n      "+t._s(this.city)+"\n      "),t._v(" "),i("span",{staticClass:"iconfont arrow-down"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")])])}]};var m=i("VU/8")(p,h,!1,function(t){i("jfI6")},"data-v-8a385414",null).exports,f={name:"HomeSwiper",props:{swiperList:Array},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:5e3,initialSlide:1}}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("swiper",{ref:"mySwiper",attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:t.id}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var _=i("VU/8")(f,v,!1,function(t){i("WkZZ")},"data-v-693891d6",null).exports,C={name:"HomeIcons",props:{iconList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var a=Math.floor(i/8);t[a]||(t[a]=[]),t[a].push(e)}),t}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,a){return i("swiper-slide",{key:a},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl,alt:"item.id"}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}))}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var y=i("VU/8")(C,w,!1,function(t){i("XGMH")},"data-v-647e1bdd",null).exports,g={name:"HomeRecommend",props:{recommendList:Array}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("\n        Hot Deals\n    ")]),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:"DL"}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-description"},[t._v(t._s(e.description))]),t._v(" "),i("p",{staticClass:"item-price"},[t._v(t._s(e.price))]),t._v(" "),i("p",{staticClass:"item-button"},[i("a",{attrs:{href:e.link}},[t._v("More Info")])])])])})),t._v(" "),i("a",{staticClass:"more-info",attrs:{href:"#"}},[t._v("Load All Items")])])},staticRenderFns:[]};var k=i("VU/8")(g,b,!1,function(t){i("FTRA")},"data-v-da657f66",null).exports,L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("\n      Weekend Choices\n  ")]),t._v(" "),i("ul",t._l(t.itemList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:"item.id"}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-description"},[t._v(t._s(e.description))])])])}))])},staticRenderFns:[]};var $=i("VU/8")({name:"HomeWeekend",data:function(){return{itemList:[{id:"01",imgUrl:"static/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",title:"Planetarium",description:"Planetarium Star Theatre, you'll experience planets, meteor showers, nebulas, black holes, galaxies, and countless other astronomical wonders. ",price:"$24.99/ticket",link:"#"},{id:"02",imgUrl:"static/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",title:"Disneyland Park",description:"Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened on July 17, 1955. ",price:"Strat from $184.99/ticket",link:"#"},{id:"03",imgUrl:"static/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",title:"Wild Animal Safari",description:"Choose your safari! Discover herds of animals roaming field habitats on a unique adventure at the San Diego Zoo Safari Park.",price:"$14.99/ticket",link:"#"},{id:"04",imgUrl:"static/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",title:"Water Park",description:"Cultus Lake Waterpark is the biggest waterpark in BC, with over 16 slides",price:"Start from $34.99/ticket",link:"#"},{id:"05",imgUrl:"static/2d554e22faa25f.jpg_r_640x214_2a966a54.jpg",title:"Vancouver Aquarium",description:"The Vancouver Aquarium is a non-profit society dedicated to the conservation of aquatic life.",price:"Strat from $36.49/ea",link:"#"}]}}},L,!1,function(t){i("Cajn")},"data-v-171bb136",null).exports,x={name:"HomeFeatured",data:function(){return{currentLocation:"Detecting...",weather:"Loading Result...",weatherIcon:""}},activated:function(){var t=this;"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(e){var i={lat:e.coords.latitude,lng:e.coords.longitude};t.convertToCityName(i)}):(this.currentLocation="Fail to Detect",this.weather="Unknown")},methods:{convertToCityName:function(t){var e=this;d.a.get("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather",{params:{appid:"215022a8c6b45dcd36b354ca06acc261",lat:t.lat,lon:t.lng}}).then(function(t){t=t.data,e.currentLocation=t.name,e.weather=t.weather[0].main,e.weatherIcon="static/weatherIcons/"+t.weather[0].icon+".png"})}}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"featured"},[i("div",{staticClass:"featured-item border"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.currentLocation))]),t._v(" "),i("div",{staticClass:"featured-item border"},[t.weatherIcon?i("img",{staticClass:"item-icon",attrs:{src:t.weatherIcon,alt:""}}):t._e(),t._v(t._s(t.weather))])])},staticRenderFns:[]};var U=i("VU/8")(x,S,!1,function(t){i("F4wP")},"data-v-bfa3202e",null).exports,D={name:"HomePopular",props:{popularList:Array},data:function(){return{swiperOptions:{slidesPerView:3.5}}}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"popular"},[i("div",{staticClass:"title"},[t._m(0),i("router-link",{staticClass:"popular-title-link",attrs:{to:"/"}},[t._v("More Places")])],1),t._v(" "),i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},t._l(t.popularList,function(e){return i("swiper-slide",{key:e.id},[i("router-link",{attrs:{to:"/detail/"+e.id}},[e.id<4?i("img",{staticClass:"topIcon",attrs:{src:"static/top"+e.id+".png",alt:""}}):t._e(),t._v(" "),i("img",{staticClass:"swiper-img",attrs:{src:e.imgUrl,alt:e.id}}),t._v(" "),i("div",{staticClass:"description"},[i("p",{staticClass:"name"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"price"},[t._v("$"),i("span",[t._v(t._s(e.price))])])])])],1)}))],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"popular-title-icon",attrs:{src:"static/popularIcon.png",alt:""}}),this._v("Trending This Week")])}]};var j={name:"Home",components:{"home-recommend":k,"home-header":m,"home-swiper":_,"home-icons":y,"home-weekend":$,"home-featured":U,"home-popular":i("VU/8")(D,T,!1,function(t){i("7G+B")},"data-v-becc7aa0",null).exports},computed:c()({},Object(u.c)(["city"])),mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.city!==this.lastCity&&(this.lastCity=this.city,this.getHomeInfo())},data:function(){return{swiperList:[],iconList:[],recommendList:[],popularList:[],lastCity:""}},methods:{getHomeInfo:function(){d.a.get("/vue-qunar/dist/static/mock/index.json?city="+this.city).then(this.handleGetHomeInfoSucc)},handleGetHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.popularList=e.popularList,console.log(this.popularList)}},getHomeInfoSuccess:function(t){console.log(t)}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{swiperList:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{iconList:t.iconList}}),t._v(" "),i("home-featured"),t._v(" "),i("home-popular",{attrs:{popularList:t.popularList}}),t._v(" "),i("home-recommend",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("home-weekend")],1)},staticRenderFns:[]};var I=i("VU/8")(j,E,!1,function(t){i("XhjB")},null,null).exports,F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n    Select City\n    "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var A=i("VU/8")({name:"CityHeader"},F,!1,function(t){i("CohD")},"data-v-087d824e",null).exports,R=i("GQaK"),O={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timmer:null,enterData:!1}},computed:{hasNoData:function(){return!this.list.length&&!this.enterData}},mounted:function(){this.scroll=new R.a(this.$refs.search)},methods:c()({onCityClick:function(t){this.changeCity(t)},onCitySelect:function(){this.hasNoData||this.$router.push({path:"/"})}},Object(u.b)(["changeCity"])),watch:{keyword:function(){var t=this;this.enterData=!0,this.timmer&&clearTimeout(this.timmer),this.timmer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e,t.keyword||(t.list=[]),t.enterData=!1},100)}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Please enter city name..."},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",{on:{click:t.onCitySelect}},[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){t.onCityClick(e.spell.charAt(0).toUpperCase()+e.spell.slice(1))}}},[t._v("\n                "+t._s(e.spell.charAt(0).toUpperCase()+e.spell.slice(1))+"\n            ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("Result not found.")]),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.enterData,expression:"enterData"}],staticClass:"search-item border-bottom"},[t._v("Searching...")])],2)])])},staticRenderFns:[]};var H=i("VU/8")(O,V,!1,function(t){i("1ZjL")},"data-v-4aaa81ea",null).exports,N={name:"CityList",props:{cities:Object,pop:Array,letter:String},computed:c()({},Object(u.c)({city:"city"})),methods:c()({onCityClick:function(t){this.changeCity(t)},onCitySelect:function(){this.$router.push({path:"/"})}},Object(u.b)(["changeCity"])),mounted:function(){this.scroll=new R.a(this.$refs.wrapper)},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",{on:{click:t.onCitySelect}},[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("Current Location")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("Most Popular")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.pop,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){t.onCityClick(e.spell.charAt(0).toUpperCase()+e.spell.slice(1))}}},[i("div",{staticClass:"button"},[t._v(t._s(e.spell.charAt(0).toUpperCase()+e.spell.slice(1)))])])}))]),t._v(" "),t._l(t.cities,function(e,a){return i("div",{key:a,ref:a,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title  border-topbottom"},[t._v(t._s(a))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-topbottom",on:{click:function(i){t.onCityClick(e.spell.charAt(0).toUpperCase()+e.spell.slice(1))}}},[t._v(t._s(e.spell.charAt(0).toUpperCase()+e.spell.slice(1)))])}))])})],2)])},staticRenderFns:[]};var P=i("VU/8")(N,G,!1,function(t){i("la4P")},"data-v-8c19e590",null).exports,M={name:"Alphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStart:!1,startY:0,timmer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{onLetterClick:function(t){this.$emit("change",t.target.innerText)},onTouchStart:function(t){this.touchStart=!0},onTouchMove:function(t){var e=this;!0===this.touchStart&&(this.timmer&&clearTimeout(this.timmer),this.timmer=setTimeout(function(){var i=t.touches[0].clientY-79,a=Math.floor((i-e.startY)/20);a>=0&&a<e.letters.length&&e.$emit("change",e.letters[a])},16))},onTouchEnd:function(t){this.touchStart=!1}}},B={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.onLetterClick,touchstart:function(e){return e.preventDefault(),t.onTouchStart(e)},touchend:t.onTouchEnd,touchmove:t.onTouchMove}},[t._v(t._s(e))])}))},staticRenderFns:[]};var Z={name:"City",components:{"city-header":A,"city-search":H,"city-list":P,"city-alphabet":i("VU/8")(M,B,!1,function(t){i("loWr")},"data-v-8024b818",null).exports},data:function(){return{cities:{},popularCities:[],letter:""}},methods:{getCityInfo:function(){d.a.get("/vue-qunar/dist/static/mock/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.popularCities=e.hotCities}},onLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},W={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,pop:t.popularCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.onLetterChange}})],1)},staticRenderFns:[]};var q=i("VU/8")(Z,W,!1,function(t){i("fH2o")},"data-v-71a0562a",null).exports,Y={name:"CommonGallery",props:{imageList:Array},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{closeImageGallery:function(){this.$emit("hide")}},mounted:function(){console.log(this.imageList)}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.closeImageGallery}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imageList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:t.id}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var z={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var K={name:"Banner",components:{"common-gallery":i("VU/8")(Y,X,!1,function(t){i("kZC3")},"data-v-fdc2e99e",null).exports,fade:i("VU/8")({name:"Fade"},z,!1,function(t){i("ITZ1")},"data-v-410fea6a",null).exports},props:{bannerData:Object},data:function(){return{displayGallery:!1}},methods:{openGallery:function(){this.displayGallery=!0},hideGallery:function(){this.displayGallery=!1}}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.openGallery}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerData.bannerImg,alt:""}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(t.bannerData.sightName))]),t._v(" "),t._m(0)])]),t._v(" "),i("fade",[i("common-gallery",{directives:[{name:"show",rawName:"v-show",value:t.displayGallery,expression:"displayGallery"}],attrs:{imageList:t.bannerData.galleryImage},on:{hide:t.hideGallery}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-number"},[e("span",{staticClass:"iconfont banner-icon"},[this._v("")]),this._v("\n            33")])}]};var J=i("VU/8")(K,Q,!1,function(t){i("mQKG")},"data-v-05ab8d67",null).exports,tt={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{onScroll:function(){var t=document.documentElement.scrollTop;if(t>60&&t<140){var e=t/140;this.opacityStyle={opacity:e},this.showAbs=!1}else t>=140?this.opacityStyle={opacity:"1"}:this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.onScroll)},deactivated:function(){window.removeEventListener("scroll",this.onScroll)}},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont back-icon header-abs-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])]),this._v("\n        Details\n    ")],1)],1)},staticRenderFns:[]};var it=i("VU/8")(tt,et,!1,function(t){i("FqkB")},"data-v-39a25d0d",null).exports,at={name:"DetailList",props:{list:Array}},st={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,a){return i("div",{key:a,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var nt={name:"Detail",data:function(){return{bannerData:{},categoryList:[]}},components:{"detail-banner":J,"detail-header":it,"detail-list":i("VU/8")(at,st,!1,function(t){i("ZnBC")},"data-v-314cff6e",null).exports},mounted:function(){var t=this;d.a.get("/vue-qunar/dist/static/mock/detail.json",{params:{id:this.$route.params.id}}).then(function(e){var i=(e=e.data).data;t.bannerData={bannerImg:i.bannerImg,sightName:i.sightName,galleryImage:i.galleryImage},t.categoryList=i.categoryList})}},rt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{bannerData:this.bannerData}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.categoryList}})],1)],1)},staticRenderFns:[]};var ot=i("VU/8")(nt,rt,!1,function(t){i("8Tk+")},"data-v-d36f0e66",null).exports;a.a.use(r.a);var ct=new r.a({routes:[{path:"/",name:"Home",component:I},{path:"/city",name:"City",component:q},{path:"/detail/:id",name:"Detail",component:ot}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),lt="Beijing";try{localStorage.city&&(lt=localStorage.city)}catch(t){}var dt={city:lt},ut={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};a.a.use(u.a);var pt=new u.a.Store({state:dt,actions:{changeCity:function(t,e){t.commit("changeCity",e)}},mutations:ut}),ht=i("F3EI"),mt=i.n(ht),ft=(i("j1ja"),i("v2ns"),i("v5o6")),vt=i.n(ft);i("9n10"),i("M6Sr"),i("TzC8");a.a.config.productionTip=!1,vt.a.attach(document.body),a.a.use(mt.a),ct.afterEach(function(t,e,i){window.scrollTo(0,0)}),new a.a({el:"#app",router:ct,store:pt,components:{App:n},template:"<App/>"})},TzC8:function(t,e){},WkZZ:function(t,e){},XGMH:function(t,e){},XhjB:function(t,e){},ZnBC:function(t,e){},fH2o:function(t,e){},"iTa+":function(t,e){},jfI6:function(t,e){},kZC3:function(t,e){},la4P:function(t,e){},loWr:function(t,e){},mQKG:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="undefined"!=typeof window;a&&(window.Swiper=i("gsqX"));var s={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&a&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&a){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(s,n,!1,null,null,null);e.default=r.exports},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f966db288b922572d180.js.map