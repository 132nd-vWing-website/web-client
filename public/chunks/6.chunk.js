(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{890:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(114);var n=f(r(115));r(149);var a=f(r(116));r(150);var o=f(r(117));r(912);var l=f(r(914)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=(r(80),f(r(915))),s=f(r(927)),c=f(r(928));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=l.default.Step,v=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=m(this,(e=y(t)).call.apply(e,[this].concat(a)))).state={current:0,errors:{}},r.onNext=function(){var e=r.state.current;r.setState({current:e+1})},r.onPrev=function(){var e=r.state.current;r.setState({current:e-1})},r}var r,f,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,u.Component),r=t,(f=[{key:"render",value:function(){var e=this.state,t=e.current,r=e.errors,f=[{title:"Register",content:u.default.createElement(i.default,{stepKey:0,currentStep:t,onNext:this.onNext})},{title:"Log In",content:u.default.createElement(s.default,{stepKey:1,currentStep:t,onNext:this.onNext})},{title:"Create Profile",content:u.default.createElement(c.default,{stepKey:2,currentStep:t,onPrev:this.onPrev})}];return Object.keys(r).length>0&&!0,u.default.createElement(n.default,{title:"Profile"},u.default.createElement(a.default,null,u.default.createElement(o.default,{className:"gutter-row",span:24,md:24},u.default.createElement(l.default,{current:t},f.map(function(e){return u.default.createElement(h,{key:e.title,title:e.title})})),u.default.createElement("div",{style:{margin:"1em 0"}},f[t].content))))}}])&&d(r.prototype,f),p&&d(r,p),t}();t.default=v},912:function(e,t,r){"use strict";r(32),r(913)},913:function(e,t,r){},914:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(1)),a=i(r(0)),o=u(r(206)),l=u(r(38));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,d(t).apply(this,arguments))}var r,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,n.Component),r=t,(a=[{key:"render",value:function(){var e=this.props.prefixCls,t={finish:n.createElement(l.default,{type:"check",className:"".concat(e,"-finish-icon")}),error:n.createElement(l.default,{type:"close",className:"".concat(e,"-error-icon")})};return n.createElement(o.default,c({icons:t},this.props))}}])&&f(r.prototype,a),u&&f(r,u),t}();t.default=y,y.Step=o.default.Step,y.defaultProps={prefixCls:"ant-steps",iconPrefix:"ant",current:0},y.propTypes={prefixCls:a.string,iconPrefix:a.string,current:a.number}},915:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(212);var n=m(r(456));r(114);var a=m(r(115));r(894);var o=m(r(895));r(213);var l=m(r(896));r(214);var u=m(r(38));r(149);var i=m(r(116));r(150);var s=m(r(117)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),f=m(r(0)),p=r(81),d=(r(80),r(215));function m(e){return e&&e.__esModule?e:{default:e}}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=v(this,(e=g(t)).call.apply(e,[this].concat(a)))).state={name:"",email:"",password:"",password2:"",errors:{}},r.onChange=function(e){var t,n,a;r.setState((t={},n=e.target.name,a=e.target.value,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t))},r.handleSubmit=function(){var e=r.state,t=e.name,n=e.email,a=e.password,o=e.password2,l=r.props,u=l.regUser,i=l.onNext;u({name:t,email:n,password:a,password2:o}).then(function(){i()})},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,c.Component),r=t,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.auth,r=e.onNext;t.isAuthenticated&&r()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.errors,n=t.currentStep,a=t.auth,o=t.onNext;r!==e.errors&&this.setState({errors:r}),n!==e.currentStep&&this.setState({currentStep:n}),a.isAuthenticated&&o()}},{key:"render",value:function(){var e=this.state,t=e.errors,r=e.currentStep,n=e.name,a=e.email,o=e.password,l=e.password2,u=!1;return r<this.props.stepKey&&(u=!0),c.default.createElement(E,{errors:t,name:n,email:a,password:o,password2:l,onSubmit:this.handleSubmit,onChange:this.onChange,currentStep:r,allowNext:u})}}])&&h(r.prototype,n),a&&h(r,a),t}();O.propTypes={stepKey:f.default.number.isRequired,currentStep:f.default.number.isRequired,onNext:f.default.func.isRequired,regUser:f.default.func.isRequired,auth:f.default.object.isRequired,errors:f.default.object.isRequired};var P=(0,p.connect)(function(e){return{auth:e.auth,errors:e.errors}},{regUser:d.registerUser})(O);t.default=P;var E=o.default.create({name:"register-form"})(function(e){var t=e.form,r=e.errors,f=e.name,p=e.email,d=e.password,m=e.password2,b=e.onSubmit,h=e.onChange,v=e.allowNext,g=t.getFieldDecorator,w={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}}};return c.default.createElement(c.default.Fragment,null,c.default.createElement(a.default,{title:"Register Account"},c.default.createElement(i.default,null,c.default.createElement(s.default,{className:"gutter-row",span:24,md:12},c.default.createElement("p",null,"An account is needed in order to create a pilot profile and be able to apply for squadrons, events etc."),c.default.createElement("p",null,"Create your account by filling out the form below:"))),c.default.createElement(i.default,null,c.default.createElement(s.default,{className:"gutter-row",span:24,md:12},c.default.createElement(o.default,{onSubmit:b},c.default.createElement(o.default.Item,y({},w,{label:"Account Name",validateStatus:r.name?"error":"success",help:r.name}),g("name",{setFieldsValue:f,rules:[{required:!0,message:"Please provide an account name"}]})(c.default.createElement(l.default,{prefix:c.default.createElement(u.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Account Name",name:"name",onChange:h,autoComplete:"name"}))),c.default.createElement(o.default.Item,y({},w,{label:"E-mail (Username)",validateStatus:r.email?"error":"success",help:r.email}),g("email",{setFieldsValue:p,rules:[{required:!0,message:"Please input your email"}]})(c.default.createElement(l.default,{prefix:c.default.createElement(u.default,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Provide a valid email address",name:"email",onChange:h,autoComplete:"username"}))),c.default.createElement(o.default.Item,y({},w,{label:"Password",validateStatus:r.password?"error":"success",help:r.password}),g("password",{setFieldsValue:d,rules:[{required:!0,message:"Please provide a valid password"}]})(c.default.createElement(l.default,{prefix:c.default.createElement(u.default,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",name:"password",onChange:h,autoComplete:"new-password"}))),c.default.createElement(o.default.Item,y({},w,{label:"Confirm Password",validateStatus:r.password2?"error":"success",help:r.password2}),g("password2",{setFieldsValue:m,rules:[{required:!0,message:"Passwords do not match"}]})(c.default.createElement(l.default,{prefix:c.default.createElement(u.default,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Confirm Password",name:"password2",onChange:h,autoComplete:"new-password"}))))))),c.default.createElement(n.default,{type:"primary",disabled:v,onClick:function(){return b()},style:{margin:"1em 0",float:"right"}},"Next"))})},927:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(212);var n=y(r(456));r(114);var a=y(r(115));r(457);var o=y(r(151));r(894);var l=y(r(895));r(213);var u=y(r(896));r(214);var i=y(r(38));r(149);var s=y(r(116));r(150);var c=y(r(117)),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),p=y(r(0)),d=r(81),m=(r(80),r(215));function y(e){return e&&e.__esModule?e:{default:e}}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=g(this,(e=w(t)).call.apply(e,[this].concat(a)))).state={email:"",password:"",errors:{}},r.onChange=function(e){var t,n,a;r.setState((t={},n=e.target.name,a=e.target.value,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t))},r.handleSubmit=function(){var e=r.state,t=e.email,n=e.password;(0,r.props.loginFunc)({email:t,password:n})},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,f.Component),r=t,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.auth,r=e.onNext;t.isAuthenticated&&r()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.errors,n=t.currentStep,a=t.auth,o=t.onNext;r!==e.errors&&this.setState({errors:r}),n!==e.currentStep&&this.setState({currentStep:n}),a.isAuthenticated&&o()}},{key:"render",value:function(){var e=this.state,t=e.errors,r=e.currentStep,n=e.email,a=e.password,o=!1;return r<this.props.stepKey&&(o=!0),f.default.createElement(S,{errors:t,email:n,password:a,onSubmit:this.handleSubmit,onChange:this.onChange,currentStep:r,allowNext:o})}}])&&v(r.prototype,n),a&&v(r,a),t}();P.propTypes={stepKey:p.default.number.isRequired,currentStep:p.default.number.isRequired,onNext:p.default.func.isRequired,loginFunc:p.default.func.isRequired,auth:p.default.object.isRequired,errors:p.default.object.isRequired};var E=(0,d.connect)(function(e){return{auth:e.auth,errors:e.errors}},{loginFunc:m.loginUser})(P);t.default=E;var S=l.default.create({name:"login-form"})(function(e){var t=e.email,r=e.password,p=e.errors,d=e.form,m=e.onChange,y=e.onSubmit,h=e.allowNext,v=d.getFieldDecorator,g={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}}};return f.default.createElement(f.default.Fragment,null,f.default.createElement(a.default,{title:"Login"},f.default.createElement(s.default,null,f.default.createElement(c.default,{className:"gutter-row",span:24,md:12},f.default.createElement("p",null,"Let us test that your new account works by logging in"))),f.default.createElement(s.default,null,f.default.createElement(c.default,{className:"gutter-row",span:24,md:12},f.default.createElement(l.default,{onSubmit:y},f.default.createElement(l.default.Item,b({},g,{label:"Username",validateStatus:p.email?"error":"success",help:p.email}),v("email",{setFieldsValue:t,rules:[{required:!0,message:"Please input your email!"}]})(f.default.createElement(u.default,{prefix:f.default.createElement(i.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),type:"text",placeholder:"Account Name",name:"email",onChange:m,autoComplete:"username"}))),f.default.createElement(l.default.Item,b({},g,{label:"Password",validateStatus:p.password?"error":"success",help:p.password}),v("password",{setFieldsValue:r,rules:[{required:!0,message:"Please input your Password!"}]})(f.default.createElement(u.default,{prefix:f.default.createElement(i.default,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",name:"password",onChange:m,autoComplete:"current-password"}))),f.default.createElement(l.default.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:12,offset:5}}},v("remember",{valuePropName:"checked",initialValue:!0})(f.default.createElement(o.default,null,"Remember me"))))))),f.default.createElement(n.default,{type:"primary",disabled:h,onClick:function(){return y()},style:{margin:"1em 0",float:"right"}},"Next"))})},928:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(212);var n=y(r(456));r(114);var a=y(r(115));r(894);var o=y(r(895));r(214);var l=y(r(38));r(149);var u=y(r(116));r(150);var i=y(r(117));r(213);var s=y(r(896)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),f=y(r(0)),p=r(81),d=r(82),m=(r(80),r(153));function y(e){return e&&e.__esModule?e:{default:e}}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=s.default.TextArea,S=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=w(this,(e=O(t)).call.apply(e,[this].concat(a)))).state={callsign:"",handle:"",status:"Active",bio:"",errors:{}},r.makeHandle=function(e){var t=document.createElement("div"),r=document.createTextNode(e);return t.appendChild(r),t.innerHTML.toLowerCase().replace(/\s/g,"")},r.onChange=function(e){var t=e.target.value;"handle"===e.target.name?r.setState(v({},e.target.name,r.makeHandle(t))):r.setState(v({},e.target.name,t))},r.handleSubmit=function(){var e=r.props,t=e.makeProfile,n=e.history,a=r.state;t({callsign:a.callsign,handle:a.handle,status:a.status,bio:a.bio},n)},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,c.Component),r=t,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.auth,r=e.profile,n=e.onPrev,a=e.fetchCurrentProfile,o=e.history,l=(r.profile||!1).handle;a(),t.isAuthenticated||n(),l&&o.push("/dashboard")}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.errors,n=t.currentStep,a=t.profile,o=t.history,l=(a.profile||!1).handle;r!==e.errors&&this.setState({errors:r}),n!==e.currentStep&&this.setState({currentStep:n}),l&&o.push("/dashboard")}},{key:"render",value:function(){var e=this.state,t=e.errors,r=e.currentStep,n=e.callsign,a=e.handle,o=e.bio,l=!1;return r<this.props.stepKey&&(l=!0),c.default.createElement(_,{errors:t,callsign:n,handle:a,bio:o,onSubmit:this.handleSubmit,onChange:this.onChange,currentStep:r,allowNext:l})}}])&&g(r.prototype,n),a&&g(r,a),t}();S.propTypes={stepKey:f.default.number.isRequired,currentStep:f.default.number.isRequired,onPrev:f.default.func.isRequired,fetchCurrentProfile:f.default.func.isRequired,makeProfile:f.default.func.isRequired,auth:f.default.object.isRequired,errors:f.default.object.isRequired,profile:f.default.object.isRequired,history:f.default.object.isRequired};var j=(0,p.connect)(function(e){return{auth:e.auth,errors:e.errors,profile:e.profile}},{fetchCurrentProfile:m.getCurrentProfile,makeProfile:m.createProfile})((0,d.withRouter)(S));t.default=j;var _=o.default.create({name:"profile-form"})(function(e){var t=e.callsign,r=e.handle,f=e.errors,p=e.form,d=e.onChange,m=e.onSubmit,y=e.allowNext,h=p.getFieldDecorator,v={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}}};return c.default.createElement(c.default.Fragment,null,c.default.createElement(a.default,{title:"Create Profile"},c.default.createElement(u.default,null,c.default.createElement(i.default,{className:"gutter-row",span:24,md:12},c.default.createElement("p",null,"The final step in registering is to set up your pilot profile. After completing this step, you will have a fully set up account and ready to be assigned to a squadron."),c.default.createElement("p",null,"First order of business is to choose a callsign. While you might already have nicknames from previous games, please ensure your callsign fulfills the following criteria:"),c.default.createElement("ul",null,c.default.createElement("li",null,"Is in good taste"),c.default.createElement("li",null,"Is not Maverick, Iceman, Goose or otherwise cliché..."),c.default.createElement("li",null,"Is not Assassin, Sniper, Hornet or other terms that could cause confusion"),c.default.createElement("li",null,"Can actually be called over the radio")),c.default.createElement("p",null,"If the above criteria are not fulfilled, you will be asked to change it (or a new one given..!)"),c.default.createElement("br",null))),c.default.createElement(u.default,null,c.default.createElement(i.default,{className:"gutter-row",span:24,md:12},c.default.createElement(o.default,{onSubmit:m},c.default.createElement(o.default.Item,b({},v,{label:"Callsign",validateStatus:f.callsign?"error":"success",help:f.callsign}),h("callsign",{setFieldsValue:t,rules:[{required:!0,message:"Please provide a callsign!"}]})(c.default.createElement(s.default,{prefix:c.default.createElement(l.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),type:"text",placeholder:"Callsign",name:"callsign",onChange:d,autoComplete:"callsign"}))),c.default.createElement(o.default.Item,b({},v,{label:"Handle",validateStatus:f.handle?"error":"success",help:f.handle}),h("handle",{setFieldsValue:r,rules:[{required:!0,message:"Please provide a handle!"}]})(c.default.createElement(s.default,{prefix:c.default.createElement(l.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),type:"text",placeholder:"Profile handle",name:"handle",onChange:d,autoComplete:"handle"})),c.default.createElement("small",null,"A unique handle for your profile, useful for linking to your profile directly")),c.default.createElement(o.default.Item,b({},v,{label:"Bio"}),c.default.createElement(E,{rows:4,prefix:c.default.createElement(l.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),type:"text",placeholder:"Please write a few words about yourself",name:"bio",onChange:d,autoComplete:"bio"})))))),c.default.createElement(n.default,{type:"primary",disabled:y,onClick:function(){return m()},style:{margin:"1em 0",float:"right"}},"Done"))})}}]);
//# sourceMappingURL=6.chunk.js.map