(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{893:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(114);var r=d(n(115));n(149);var o=d(n(116));n(150);var a=d(n(117));n(212);var i=d(n(456));n(217);var l=d(n(218)),s=(n(80),p(n(1))),c=(d(n(459)),p(n(902))),u=d(n(937)),f=d(n(938));function p(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function d(e){return e&&e.__esModule?e:{default:e}}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=l.default.TabPane,S=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=m(this,(e=v(t)).call.apply(e,[this].concat(o)))).state={missionData:null,pages:[]},n.newTabIndex=0,n.generatePDF=function(){var e=n.state,t=e.missionData,r=e.pages,o=[];r.forEach(function(e){return e.createPage&&o.push(e.createPage(t)),null}),c.default.makePdf("132ND-MDC-".concat(t.missionNumber),o).open()},n.onTabChange=function(e){n.setState({activeKey:e})},n.onTabEdit=function(e,t){switch(t){case"add":n.addTab();break;case"remove":n.removeTab(e)}},n.updatePages=function(e){var t=n.state.panes,r=e.map(function(e){var t=c.mdc.pages[e.pageKey];if(e.createPage)return{title:e.label,key:"mdc-tab-".concat(e.key),create:e.createPage,form:t.form,content:null}}),o=t.filter(function(e){return!0===e.isDefault});n.setState(function(){return{pages:e,panes:[].concat(y(o),y(r))}})},n.updateData=function(e){n.setState(function(t){return{missionData:Object.assign({},t.missionData,e)}})},n}var n,p,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,s.Component),n=t,(p=[{key:"componentDidMount",value:function(){var e=c.mdc.defaultData,t=[{title:"Configure MDC",key:"mdc-setup",closable:!1,isDefault:!0,content:null},{title:"Navigation",key:"mdc-nav",closable:!1,isDefault:!0,content:null},{title:"Signals",key:"mdc-signals",closable:!1,isDefault:!0,content:null}];this.setState({missionData:e,activeKey:t[0].key,panes:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.missionData,p=t.activeKey,d=t.panes,h=t.list;if(!n)return s.default.createElement("div",null,"Loading...");var y=Object.keys(c.mdc.pages).map(function(e){var t=c.mdc.pages[e];return{title:t.title,key:e,createPage:t.create}});d.forEach(function(t){t.form&&(t.content=s.default.createElement(u.default,{form:t.form,onUpdate:e.updateData,missionData:n}))}),d[0].content=s.default.createElement(s.default.Fragment,null,s.default.createElement("p",null,"Some instructions here, followed by the add/remove/rearrange pages"),s.default.createElement(f.default,{list:h,content:y,onUpdate:this.updatePages}));var g=d.map(function(e){return s.default.createElement(O,{tab:e.title,key:e.key,closable:!1},e.content)}),m=s.default.createElement(s.default.Fragment,null,s.default.createElement(i.default,{type:"primary",onClick:this.generatePDF,style:{marginLeft:"0.5em"}},"Print MDC"));return s.default.createElement(r.default,{title:"MDC Builder"},s.default.createElement(o.default,null,s.default.createElement(a.default,{className:"gutter-row",span:24,md:24},s.default.createElement(l.default,{hideAdd:!0,type:"editable-card",onChange:this.onTabChange,activeKey:p,onEdit:this.onTabEdit,tabBarExtraContent:m},g))))}}])&&g(n.prototype,p),d&&g(n,d),t}();t.default=S},937:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(894);var r=l(n(895));n(213);var o=l(n(896)),a=(n(80),l(n(0))),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=u(this,(e=f(t)).call.apply(e,[this].concat(o)))).state={missionData:null},n.handleChange=function(e){var t,r,o,a=(t={},r=e.target.name,o=e.target.value,r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t);console.log("handleChange():",a),n.setState(function(e){return{missionData:Object.assign({},e.missionData,a)}})},n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,i.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props.missionData;this.setState({missionData:e})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.missionData,r=this.props.onUpdate;n!==t.missionData&&(console.log("PageForm: I should update my parent now!"),r(n))}},{key:"render",value:function(){var e=this,t=this.props.missionData,n=this.props.form;if(!t)return i.default.createElement("div",null,"Loading...");var a=n.map(function(n){switch(n.type){case"input":return i.default.createElement(r.default.Item,{key:n.name},i.default.createElement(o.default,{name:n.name,addonBefore:n.label,value:t[n.name],onChange:e.handleChange}));default:return null}});return i.default.createElement(r.default,{style:{margin:"0 1em"}},a)}}])&&c(n.prototype,a),l&&c(n,l),t}();t.default=d,d.propTypes={form:a.default.array.isRequired,onUpdate:a.default.func.isRequired,missionData:a.default.object.isRequired}},938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(939);var r=c(n(941));n(462);var o=c(n(463));n(212);var a=c(n(456)),i=(n(80),c(n(0))),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),s=c(n(942));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=d(this,(e=h(t)).call.apply(e,[this].concat(o)))).state={visible:!1,pages:[]},n.columns=[{title:"Name",dataIndex:"label"},{title:"Actions",key:"actions",render:function(e,t){return l.default.createElement(a.default.Group,null,l.default.createElement(a.default,{className:"drag-handle",type:"default",size:"small"},"Drag Me"),l.default.createElement(a.default,{type:"danger",icon:"close",size:"small",onClick:function(){return n.removePage(t.key)}}))}}],n.closePopover=function(){n.setState({visible:!1})},n.handlePopoverChange=function(e){n.setState({visible:e})},n.addPage=function(e){var t=n.state.pages,r=n.props.content.filter(function(t){return t.key===e.target.name}),o={key:Date.now(),label:r[0].title+t.length,pageKey:r[0].key,createPage:r[0].createPage};n.closePopover(),n.setState(function(e){return{pages:[].concat(f(e.pages),[o])}})},n.removePage=function(e){n.setState(function(t){return{pages:t.pages.filter(function(t){return t.key!==e})}})},n}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,l.Component),n=t,(i=[{key:"componentDidUpdate",value:function(e,t){var n=this.state.pages,r=this.props.onUpdate;n!==t.pages&&r(n)}},{key:"render",value:function(){var e=this,t=this,n={onDragEnd:function(e,n){var r=t.state.pages,o=r.splice(e,1)[0];r.splice(n,0,o),t.setState({pages:r})},handleSelector:".drag-handle"},i=this.state,c=i.pages,u=i.visible,f=this.props.content.map(function(t){return l.default.createElement(a.default,{key:t.key,size:"small",type:"default",name:t.key,onClick:e.addPage,block:!0,style:{marginBottom:"0.1em"}},t.title)}),p=l.default.createElement(l.default.Fragment,null,f,l.default.createElement(a.default,{type:"primary",onClick:this.closePopover,size:"small",block:!0},"Cancel"));return l.default.createElement(l.default.Fragment,null,l.default.createElement(s.default,n,l.default.createElement(o.default,{columns:this.columns,pagination:!1,dataSource:c,size:"small"})),l.default.createElement(a.default.Group,{style:{float:"right",marginTop:"1em"}},l.default.createElement(r.default,{content:p,title:"Add New",trigger:"click",visible:u,onVisibleChange:this.handlePopoverChange},l.default.createElement(a.default,{type:"default"},"+ Add"))))}}])&&p(n.prototype,i),c&&p(n,c),t}();t.default=g,g.propTypes={content:i.default.array.isRequired,onUpdate:i.default.func.isRequired}},939:function(e,t,n){"use strict";n(32),n(940)},940:function(e,t,n){},941:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),o=i(n(464)),a=i(n(70));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=u(this,f(t).apply(this,arguments))).saveTooltip=function(t){e.tooltip=t},e}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.Component),n=t,(i=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(){var e=this.props,t=e.title,n=e.prefixCls,o=e.content;return(0,a.default)(!("overlay"in this.props),"Popover[overlay] is removed, please use Popover[content] instead, see: https://u.ant.design/popover-content"),r.createElement("div",null,t&&r.createElement("div",{className:"".concat(n,"-title")},t),r.createElement("div",{className:"".concat(n,"-inner-content")},o))}},{key:"render",value:function(){var e=s({},this.props);return delete e.title,r.createElement(o.default,s({},e,{ref:this.saveTooltip,overlay:this.getOverlay()}))}}])&&c(n.prototype,i),l&&c(n,l),t}();t.default=d,d.defaultProps={prefixCls:"ant-popover",placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}}},942:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r),a=n(10),i=n.n(a),l=n(4),s=n.n(l),c=n(6),u=n.n(c),f=n(1),p=n.n(f),d=n(0),h=n.n(d);if(Element&&!Element.prototype.matches){var y=Element.prototype;y.matches=y.matchesSelector||y.mozMatchesSelector||y.msMatchesSelector||y.oMatchesSelector||y.webkitMatchesSelector}var g=function(e,t,n){for(var r=e;r;){var o=r===n||r===document.body;if(o||r.matches(t)){o&&(r=null);break}r=r.parentNode}return r},m=function(e,t){return Array.from(e.parentNode.children).filter(function(e){return""===t||!e.matches(t)}).indexOf(e)},v={TOP:1,BOTTOM:3},b=function(e){function t(e){o()(this,t);var n=s()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onMouseDown=n.onMouseDown.bind(n),n.onDragStart=n.onDragStart.bind(n),n.onDragEnter=n.onDragEnter.bind(n),n.onDragEnd=n.onDragEnd.bind(n),n.autoScroll=n.autoScroll.bind(n),n.state={fromIndex:-1,toIndex:-1},n.scrollElement=null,n.scrollTimerId=-1,n.direction=v.BOTTOM,n}return u()(t,e),i()(t,[{key:"componentWillUnmount",value:function(){this.dragLine&&this.dragLine.parentNode&&(this.dragLine.parentNode.removeChild(this.dragLine),this.dragLine=null,this.cacheDragTarget=null)}},{key:"onMouseDown",value:function(e){var t=this.getHandleNode(e.target);if(t){var n=this.props.handleSelector&&this.props.handleSelector!==this.props.nodeSelector?this.getDragNode(t):t;n&&(t.setAttribute("draggable",!1),n.setAttribute("draggable",!0),n.ondragstart=this.onDragStart,n.ondragend=this.onDragEnd)}}},{key:"onDragStart",value:function(e){var t=this.getDragNode(e.target),n=e;if(t){var r=t.parentNode;n.dataTransfer.setData("Text",""),n.dataTransfer.effectAllowed="move",r.ondragenter=this.onDragEnter,r.ondragover=function(e){return e.preventDefault(),!0};var o=m(t,this.props.ignoreSelector);this.setState({fromIndex:o,toIndex:o}),this.scrollElement=function(e){var t=e;do{var n=window.getComputedStyle(t).overflow;if(("auto"===n||"scroll"===n)&&t&&t.nodeType&&(t.offsetWidth<t.scrollWidth||t.offsetHeight<t.scrollHeight))break;if(!t||!t.nodeType||t===document.body){t=null;break}t=t.parentNode}while(t);return t}(r)}}},{key:"onDragEnter",value:function(e){var t=this.getDragNode(e.target),n=e,r=void 0;t?(r=m(t,this.props.ignoreSelector),this.props.enableScroll&&this.resolveAutoScroll(n,t)):(r=-1,this.stopAutoScroll()),this.cacheDragTarget=t,this.setState({toIndex:r}),this.fixDragLine(t)}},{key:"onDragEnd",value:function(e){var t=this.getDragNode(e.target);this.stopAutoScroll(),t&&(t.removeAttribute("draggable"),t.ondragstart=null,t.ondragend=null,t.parentNode.ondragenter=null,t.parentNode.ondragover=null,this.state.fromIndex>=0&&this.state.fromIndex!==this.state.toIndex&&this.props.onDragEnd(this.state.fromIndex,this.state.toIndex)),this.hideDragLine(),this.setState({fromIndex:-1,toIndex:-1})}},{key:"getDragNode",value:function(e){return g(e,this.props.nodeSelector,this.dragList)}},{key:"getHandleNode",value:function(e){return g(e,this.props.handleSelector||this.props.nodeSelector,this.dragList)}},{key:"getDragLine",value:function(){return this.dragLine||(this.dragLine=window.document.createElement("div"),this.dragLine.setAttribute("style","position:fixed;z-index:9999;height:0;margin-top:-1px;border-bottom:dashed 2px red;display:none;"),window.document.body.appendChild(this.dragLine)),this.dragLine.className=this.props.lineClassName||"",this.dragLine}},{key:"resolveAutoScroll",value:function(e,t){if(this.scrollElement){var n=this.scrollElement.getBoundingClientRect(),r=n.top,o=n.height,a=t.offsetHeight,i=e.pageY,l=a*(2/3);this.direction=0,i>r+o-l?this.direction=v.BOTTOM:i<r+l&&(this.direction=v.TOP),this.direction?this.scrollTimerId<0&&(this.scrollTimerId=setInterval(this.autoScroll,20)):this.stopAutoScroll()}}},{key:"stopAutoScroll",value:function(){clearInterval(this.scrollTimerId),this.scrollTimerId=-1,this.fixDragLine(this.cacheDragTarget)}},{key:"autoScroll",value:function(){var e=this.scrollElement.scrollTop;this.direction===v.BOTTOM?(this.scrollElement.scrollTop=e+this.props.scrollSpeed,e===this.scrollElement.scrollTop&&this.stopAutoScroll()):this.direction===v.TOP?(this.scrollElement.scrollTop=e-this.props.scrollSpeed,this.scrollElement.scrollTop<=0&&this.stopAutoScroll()):this.stopAutoScroll()}},{key:"hideDragLine",value:function(){this.dragLine&&(this.dragLine.style.display="none")}},{key:"fixDragLine",value:function(e){var t=this.getDragLine();if(!e||this.state.fromIndex<0||this.state.fromIndex===this.state.toIndex)this.hideDragLine();else{var n=e.getBoundingClientRect(),r=n.left,o=n.top,a=n.width,i=n.height,l=this.state.toIndex<this.state.fromIndex?o:o+i;if(this.props.enableScroll&&this.scrollElement){var s=this.scrollElement.getBoundingClientRect(),c=s.height,u=s.top;if(l<u-2||l>u+c+2)return void this.hideDragLine()}t.style.left=r+"px",t.style.width=a+"px",t.style.top=l+"px",t.style.display="block"}}},{key:"render",value:function(){var e=this;return p.a.createElement("div",{role:"presentation",onMouseDown:this.onMouseDown,ref:function(t){e.dragList=t}},this.props.children)}}]),t}(f.Component);b.propTypes={onDragEnd:h.a.func.isRequired,handleSelector:h.a.string,nodeSelector:h.a.string,ignoreSelector:h.a.string,enableScroll:h.a.bool,scrollSpeed:h.a.number,lineClassName:h.a.string,children:h.a.node},b.defaultProps={nodeSelector:"tr",ignoreSelector:"",enableScroll:!0,scrollSpeed:10,handleSelector:"",lineClassName:"",children:null};var O=b,S=n(145),D=n.n(S),w=2,E=4,P=function(e){function t(){return o()(this,t),s()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u()(t,e),i()(t,[{key:"getDragLine",value:function(){return this.dragLine||(D()(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getDragLine",this).call(this),this.dragLine.setAttribute("style",this.dragLine.getAttribute("style")+"width:0;margin-left:-1px;margin-top:0;border-bottom:0 none;border-left:dashed 2px red;")),this.dragLine}},{key:"resolveAutoScroll",value:function(e,t){if(this.scrollElement){var n=this.scrollElement.getBoundingClientRect(),r=n.left,o=n.width,a=t.offsetWidth,i=e.pageX,l=2*a/3;this.direction=0,i>r+o-l?this.direction=w:i<r+l&&(this.direction=E),this.direction?this.scrollTimerId<0&&(this.scrollTimerId=setInterval(this.autoScroll,20)):this.stopAutoScroll()}}},{key:"autoScroll",value:function(){var e=this.scrollElement.scrollLeft;this.direction===w?(this.scrollElement.scrollLeft=e+this.props.scrollSpeed,e===this.scrollElement.scrollLeft&&this.stopAutoScroll()):this.direction===E?(this.scrollElement.scrollLeft=e-this.props.scrollSpeed,this.scrollElement.scrollLeft<=0&&this.stopAutoScroll()):this.stopAutoScroll()}},{key:"fixDragLine",value:function(e){var t=this.getDragLine();if(!e||this.state.fromIndex<0||this.state.fromIndex===this.state.toIndex)this.hideDragLine();else{var n=e.getBoundingClientRect(),r=n.left,o=n.top,a=n.width,i=n.height,l=this.state.toIndex<this.state.fromIndex?r:r+a;if(this.props.enableScroll&&this.scrollElement){var s=this.scrollElement.getBoundingClientRect(),c=s.width,u=s.left;if(l<u-2||l>u+c+2)return void this.hideDragLine()}t.style.top=o+"px",t.style.height=i+"px",t.style.left=l+"px",t.style.display="block"}}}]),t}(O);O.DragColumn=P;t.default=O}}]);
//# sourceMappingURL=5.chunk.js.map