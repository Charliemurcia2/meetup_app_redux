(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={form:"NewUserForm_form__1bROF",control:"NewUserForm_control__2xDPx",feed:"NewUserForm_feed__2hcDQ",invalid:"NewUserForm_invalid__xbzU4",actions:"NewUserForm_actions__1iDB4"}},,,,,function(e,t,n){"use strict";n.d(t,"b",function(){return c});var r=n(23),a=n(10),o=Object(a.b)({name:"meetup",initialState:{meetups:[],userMeetupTitle:"",isPopupDelete:!1,meetupURL:"https://react-learn-1e665-default-rtdb.firebaseio.com/meetups"},reducers:{formatData:function(e,t){var n=[];for(var a in t.payload){var o=Object(r.a)({id:a},t.payload[a]);n.push(o)}e.meetups=n},toggleDeletePopUp:function(e,t){e.isPopupDelete=!e.isPopupDelete}}}),c=o.actions;t.a=o},function(e,t,n){"use strict";var r=n(42),a=n(12),o=n(0);function c(){c=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(N){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),c=new O(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return x()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=_(c,n);if(i){if(i===f)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,c),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var f={};function d(){}function m(){}function h(){}var p={};u(p,a,function(){return this});var v=Object.getPrototypeOf,b=v&&v(v(L([])));b&&b!==t&&n.call(b,a)&&(p=b);var g=h.prototype=d.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function c(){return new t(function(r,c){!function r(a,o,c,i){var u=s(e[a],e,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(f).then(function(e){l.value=e,c(l)},function(e){return r("throw",e,c,i)})}i(u.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function _(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return m.prototype=h,u(g,"constructor",h),u(h,"constructor",m),m.displayName=u(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,u(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),u(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},y(g),u(g,i,"Generator"),u(g,a,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}t.a=function(){var e=Object(o.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1],u=Object(o.useState)(""),l=Object(a.a)(u,2),s=l[0],f=l[1],d=function(e,t){switch(t){case"POST":return{method:t,body:JSON.stringify(e),headers:{"Content-Type":"application/json"}};case"DELETE":return{method:t};case"PATCH":return{method:t,body:JSON.stringify(e),headers:{"Content-Type":"application/json"}};default:return null}};return{isLoading:n,error:s,callAPI:function(){var e=Object(r.a)(c().mark(function e(t){var n,r,a,o=arguments;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",r=o.length>2&&void 0!==o[2]?o[2]:null,i("true"),e.next=5,fetch(t,d(r,n));case 5:if(a=e.sent,i(!1),a.ok){e.next=10;break}throw f("something is wrong"),Error("something is wrong. ".concat(a.status));case 10:return e.abrupt("return",a.json());case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}}},,function(e,t,n){"use strict";n.d(t,"b",function(){return c});var r=n(23),a=n(10),o=Object(a.b)({name:"user",initialState:{users:[],usersURL:"https://react-learn-1e665-default-rtdb.firebaseio.com/users"},reducers:{formatUsers:function(e,t){var n=[];for(var a in t.payload){var o=Object(r.a)({id:a},t.payload[a]);n.push(o)}e.users=n}}}),c=o.actions;t.a=o},,,function(e,t,n){e.exports={header:"MainNavigation_header__35Njw",logo:"MainNavigation_logo__3sxAq",active:"MainNavigation_active__2t93J",badge:"MainNavigation_badge__2tK9E","theme-button":"MainNavigation_theme-button__2hm_f"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(16),c=n.n(o),i=n(24),u=n.n(i),l=function(e){return a.a.createElement("div",{className:u.a.backdrop,onClick:e.onClose})},s=function(e){return a.a.createElement("div",{className:u.a.modal},a.a.createElement("div",{className:u.a.content},e.children))},f=function(e){return a.a.createElement(r.Fragment,null,c.a.createPortal(a.a.createElement(l,{onClose:e.onClose}),document.getElementById("backdrop-root")),c.a.createPortal(a.a.createElement(s,null,e.children),document.getElementById("overlays-root")))};t.a=function(){return a.a.createElement(f,null,a.a.createElement("h1",null,"Loading..."))}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1qoiv",modal:"Modal_modal__1GHOT","slide-down":"Modal_slide-down__1jvD0"}},,,,function(e,t,n){"use strict";var r=n(12),a=n(0);t.a=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(!1),u=Object(r.a)(i,2),l=u[0],s=u[1],f=e(o);return{value:o,isValid:f,hasError:!f&&l,valueChangeHandler:function(e){c(e.target.value)},inputBlurHandler:function(e){s(!0)},clearInput:function(e){c("")}}}},,function(e,t,n){e.exports={card:"Card_card__dcHn2",dark:"Card_dark__2dyQT"}},function(e,t,n){e.exports={user_card:"UsersCard_user_card__F2Md3",dark:"UsersCard_dark__v89uc"}},function(e,t,n){e.exports={light:"Layout_light__1yBf6",dark:"Layout_dark__zNwmt",main:"Layout_main__1-Wzz"}},,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),c=n(30),i=n.n(c);t.a=function(e){var t=Object(o.c)(function(e){return e.ui.chosenTheme});return a.a.createElement("div",{className:"".concat(i.a.card," ").concat(i.a[t])},e.children)}},function(e,t,n){"use strict";n.d(t,"b",function(){return o});var r=n(10),a=Object(r.b)({name:"favorite",initialState:{favorites:[],totalFavorites:0,favoritesLabel:"To Favorites"},reducers:{addToFavorite:function(e,t){e.favorites.push(t.payload),e.totalFavorites=e.totalFavorites+1},removeFromFavorites:function(e,t){e.favorites=e.favorites.filter(function(e){return e.id!==t.payload}),e.totalFavorites=e.totalFavorites-1},isFavorite:function(e,t){e.favorites.some(function(e){return e===t.payload})?e.favoritesLabel="Removed from favorites":e.favoritesLabel="To Favorites"}}}),o=a.actions;t.a=a},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),c=n(31),i=n.n(c);t.a=function(e){var t=Object(o.c)(function(e){return e.ui.chosenTheme});return a.a.createElement("div",{className:"".concat(i.a.user_card," ").concat(i.a[t])},e.children)}},,,,,,,function(e,t,n){e.exports={"users-card":"UsersList_users-card__XD5vS",actions:"UsersList_actions__3kKbB"}},,function(e,t,n){e.exports=n(62)},,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(39),c=n.n(o),i=n(2),u=n(13),l=n(10),s=n(35),f=n(14),d=Object(l.b)({name:"ui",initialState:{chosenTheme:"light"},reducers:{changeTheme:function(e,t){"dark"===t.payload?e.chosenTheme="dark":e.chosenTheme="light"}}}),m=d.actions,h=d,p=n(17),v=Object(l.a)({reducer:{meetup:f.a.reducer,user:p.a.reducer,ui:h.reducer,favorite:s.a.reducer}}),b=n(3),g=n(21),y=n(15),E=n(34),_=n(9),w=n.n(_),j=n(28),O=function(){var e=Object(i.c)(function(e){return e.user.usersURL}),t=Object(i.b)(),n=Object(y.a)().callAPI,r=Object(j.a)(function(e){return""!==e.trim()}),o=r.value,c=r.valueChangeHandler,u=r.isValid,l=r.hasError,s=r.inputBlurHandler,f=r.clearInput,d=Object(j.a)(function(e){return new RegExp("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?").test(e)}),m=d.value,h=d.valueChangeHandler,v=d.isValid,b=d.hasError,g=d.inputBlurHandler,_=d.clearInput,O=!1;u&&v&&(O=!0);var L=l?"".concat(w.a.control," ").concat(w.a.invalid):w.a.control,x=b?"".concat(w.a.control," ").concat(w.a.invalid):w.a.control;return a.a.createElement(E.a,null,a.a.createElement("form",{className:w.a.form,onSubmit:function(r){r.preventDefault();var a={name:o,image:m};n("".concat(e,".json"),"POST",a).then(function(){n("".concat(e,".json")).then(function(e){t(p.b.formatUsers(e))}),f(),_()})}},a.a.createElement("div",{className:L},a.a.createElement("label",{htmlFor:"user/name"},"User Name"),a.a.createElement("input",{type:"text",required:!0,id:"name",value:o,onChange:c,onBlur:s})),l&&a.a.createElement("p",{className:w.a.feed},"Title must not be empty"),a.a.createElement("div",{className:x},a.a.createElement("label",{htmlFor:"image"},"Profile Image"),a.a.createElement("input",{type:"url",required:!0,id:"image",value:m,onChange:h,onBlur:g})),b&&a.a.createElement("p",{className:w.a.feed},"Please enter valid image url"),a.a.createElement("div",{className:w.a.actions},a.a.createElement("button",{disabled:!O},"Add User"))))},L=n(36),x=n(43),N=n.n(x),k=function(e){var t=Object(i.c)(function(e){return e.meetup.meetupURL}),n=Object(i.c)(function(e){return e.meetup.meetups}),r=Object(i.c)(function(e){return e.user.users}),o=Object(i.b)(),c=Object(y.a)().callAPI;return a.a.createElement(L.a,null,a.a.createElement("div",{className:N.a["users-card"]},a.a.createElement("h2",null,"Users",a.a.createElement("span",null)),a.a.createElement("ul",null,r&&r.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement("img",{src:e.image,alt:"profile"}),a.a.createElement("p",null,e.name),a.a.createElement("label",null,"Add a meetup"),a.a.createElement("select",{defaultValue:"",onChange:function(r){return function(e,r){var a=n.filter(function(t){return t.title===e.target.value}),i=0!==a[0].attendeesId.length?"".concat(a[0].attendeesId,","):"",u="".concat(i).concat(r);c("".concat(t,"/").concat(a[0].id,".json"),"PATCH",{attendeesId:u}).then(function(){c("".concat(t,".json")).then(function(e){o(f.b.formatData(e))})})}(r,e.id)}},a.a.createElement("option",{value:"",disabled:!0,hidden:!0},"Choose a meetup"),n.map(function(e){return a.a.createElement("option",{key:e.id},e.title)})))}))))},T=function(e){var t=Object(i.c)(function(e){return e.user.usersURL}),n=Object(i.c)(function(e){return e.meetup.meetupURL}),o=Object(i.b)(),c=Object(y.a)(),u=c.isLoading,l=c.callAPI;return Object(r.useEffect)(function(){l("".concat(n,".json")).then(function(e){o(f.b.formatData(e))}),l("".concat(t,".json")).then(function(e){o(p.b.formatUsers(e))})},[]),a.a.createElement("section",null,u&&a.a.createElement(g.a,null),a.a.createElement(O,null),a.a.createElement(k,null))},F=n(32),U=n.n(F),P=n(20),S=n.n(P),C=function(){var e=Object(i.c)(function(e){return e.favorite.totalFavorites}),t=Object(i.c)(function(e){return e.ui.chosenTheme}),n=Object(i.b)();return a.a.createElement("header",{className:S.a.header},a.a.createElement("div",{className:S.a.logo},"React Meetups"),a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(u.b,{to:"/"},"All Meetups")),a.a.createElement("li",null,a.a.createElement(u.b,{to:"/new-meetup"},"new meetup")),a.a.createElement("li",null,a.a.createElement(u.b,{to:"/favorites"},"My favortites"," ",a.a.createElement("span",{className:S.a.badge},e))),a.a.createElement("li",null,a.a.createElement(u.b,{to:"/users"},"Users")))),a.a.createElement("select",{className:S.a["theme-button"],onChange:function(e){n(m.changeTheme(e.target.value))},value:t},a.a.createElement("option",{value:"light"},"light"),a.a.createElement("option",{value:"dark"},"dark")))},I=function(e){var t=Object(i.c)(function(e){return e.ui.chosenTheme});return a.a.createElement("div",{className:U.a[t]},a.a.createElement(C,null),a.a.createElement("main",{className:U.a.main},e.children))},D=Object(r.lazy)(function(){return n.e(3).then(n.bind(null,70))}),M=Object(r.lazy)(function(){return n.e(4).then(n.bind(null,69))}),A=Object(r.lazy)(function(){return n.e(5).then(n.bind(null,71))}),B=function(){return a.a.createElement(I,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(g.a,null)},a.a.createElement(b.c,null,a.a.createElement(b.a,{path:"/",exact:!0},a.a.createElement(D,null)),a.a.createElement(b.a,{path:"/new-meetup"},a.a.createElement(A,null)),a.a.createElement(b.a,{path:"/favorites"},a.a.createElement(M,null)),a.a.createElement(b.a,{path:"/users"},a.a.createElement(T,null)))))};c.a.createRoot(document.getElementById("root")).render(a.a.createElement(i.a,{store:v},a.a.createElement(u.a,null,a.a.createElement(B,null))))}],[[45,1,2]]]);
//# sourceMappingURL=main.6140a41a.chunk.js.map