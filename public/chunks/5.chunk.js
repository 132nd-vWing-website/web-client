(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{890:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(906);var r=p(n(908)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),i=p(n(0)),a=n(81),l=(n(80),n(909));n(910);var u=p(n(465)),c=p(n(466)),s=p(n(467)),f=p(n(468)),d=p(n(469));function p(e){return e&&e.__esModule?e:{default:e}}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=[u.default,c.default,s.default,f.default,d.default],g=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=h(this,(e=b(t)).call.apply(e,[this].concat(o)))).sortSlides=function(e){e.sort(function(e,t){return e.index>t.index?-1:e.index<t.index?1:0})},n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.Component),n=t,(i=[{key:"componentDidMount",value:function(){(0,this.props.fetchSlides)()}},{key:"shouldComponentUpdate",value:function(e){return this.props.slides!==e.slides}},{key:"render",value:function(){var e=this.props.slides.map(function(e){var t=w[Math.floor(Math.random()*w.length)];return o.default.createElement(k,{key:e._id,title:e.heading,body:e.body,imgUrl:t})});return o.default.createElement(r.default,{effect:"fade",autoplay:!0,lazyLoad:!0},e)}}])&&v(n.prototype,i),a&&v(n,a),t}();g.propTypes={fetchSlides:i.default.func.isRequired,slides:i.default.array.isRequired};var O=(0,a.connect)(function(e){return{slides:e.statics.frontpageSliders}},{fetchSlides:l.getSliders})(g);t.default=O;var k=function(e){var t=e.title,n=e.body,r=e.imgUrl;return o.default.createElement("div",{className:"header-carousel-item",style:{background:"url(".concat(r,")  center center no-repeat"),backgroundSize:"cover"}},o.default.createElement("div",null,o.default.createElement("h1",null,t),o.default.createElement("h3",null,n)))};k.propTypes={title:i.default.string,body:i.default.string,imgUrl:i.default.string},k.defaultProps={title:"",body:"",imgUrl:""}},906:function(e,t,n){"use strict";n(32),n(907)},907:function(e,t,n){},908:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),i=(r=n(57))&&r.__esModule?r:{default:r};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}if("undefined"!=typeof window){window.matchMedia=window.matchMedia||function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}}}var d=n(459).default,p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,s(t).call(this,e))).onWindowResized=function(){n.props.autoplay&&n.slick&&n.slick.innerSlider&&n.slick.innerSlider.autoPlay&&n.slick.innerSlider.autoPlay()},n.saveSlick=function(e){n.slick=e},n.onWindowResized=(0,i.default)(n.onWindowResized,500,{leading:!1}),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.props.autoplay&&window.addEventListener("resize",this.onWindowResized),this.innerSlider=this.slick&&this.slick.innerSlider}},{key:"componentWillUnmount",value:function(){this.props.autoplay&&(window.removeEventListener("resize",this.onWindowResized),this.onWindowResized.cancel())}},{key:"next",value:function(){this.slick.slickNext()}},{key:"prev",value:function(){this.slick.slickPrev()}},{key:"goTo",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.slick.slickGoTo(e,t)}},{key:"render",value:function(){var e=l({},this.props);"fade"===e.effect&&(e.fade=!0);var t=e.prefixCls;return e.vertical&&(t="".concat(t," ").concat(t,"-vertical")),o.createElement("div",{className:t},o.createElement(d,l({ref:this.saveSlick},e)))}}])&&u(n.prototype,r),a&&u(n,a),t}();t.default=p,p.defaultProps={dots:!0,arrows:!1,prefixCls:"ant-carousel",draggable:!1}},909:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSliders=void 0;var r=a(n(97)),o=a(n(118)),i=n(44);function a(e){return e&&e.__esModule?e:{default:e}}t.getSliders=function(){return function(e){r.default.get("".concat(o.default,"/statics/frontpagesliders")).then(function(t){return e({type:i.GET_ALL_FRONTPAGESLIDERS,payload:t.data})}).catch(function(t){return e({type:i.GET_ERRORS,payload:t.response.data})})}}},910:function(e,t,n){var r=n(911);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(119)(r,o);r.locals&&(e.exports=r.locals)},911:function(e,t,n){var r=n(912);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(119)(r,o);r.locals&&(e.exports=r.locals)},912:function(e,t,n){(e.exports=n(217)(!1)).push([e.i,".sider-main {\n  z-index: 100;\n}\n\n.ant-carousel .slick-slide {\n  text-align: center;\n  height: 350px;\n  line-height: 160px;\n  background: #364d79;\n  overflow: hidden;\n}\n\n.ant-carousel .slick-slide .header-carousel-item h3 {\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif;\n  color: #fff;\n  text-shadow: '1px 1px 8px #000000cc';\n  padding: 0 2em 0 2em;\n}\n\n.ant-carousel .slick-slide .header-carousel-item h1 {\n  font-family: -apple-system, BlinkMacSystemFont, Oswald, Roboto, Helvetica Neue, Arial, sans-serif !important;\n  color: #fff;\n  text-shadow: '1px 1px 8px #000000cc';\n  padding: 0 2em 0 2em;\n  font-size: 5rem !important;\n  text-transform: uppercase !important;\n}\n",""])}}]);
//# sourceMappingURL=5.chunk.js.map