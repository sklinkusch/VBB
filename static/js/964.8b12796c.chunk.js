"use strict";(self.webpackChunkvbb=self.webpackChunkvbb||[]).push([[964,307,313,90,953],{3090:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var r=n(2791),i=n(9922);function a(e){var t=e.handleSubmit;return(0,i.tZ)(r.Fragment,{children:(0,i.tZ)("button",{onClick:t,sx:{padding:"5px",backgroundColor:"#ccc",opacity:1},children:(0,i.tZ)("i",{className:"fas fa-redo-alt"})})})}},953:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});n(2791);var r=n(9930),i=n(9922);function a(e){var t=e.filterField,n=e.filterSelector,a=e.filterData,c=e.mode,o=void 0===c?"dep":c;return(0,i.BX)("div",{children:[(0,i.tZ)("input",{type:"text",placeholder:"dep"===o?(0,r.Z)("filterDepartures"):(0,r.Z)("filterArrivals"),ref:t,onChange:function(t){return e.filterData(t)},sx:{padding:"5px",opacity:1,backgroundColor:"#fff",width:"300px",maxWidth:"90%"}}),(0,i.BX)("select",{ref:n,onChange:a,sx:{padding:"5px",backgroundColor:"#ccc",opacity:1,width:"400px",maxWidth:"90%",mx:"10px"},children:[(0,i.tZ)("option",{value:"OR",children:(0,r.Z)("filterOr")}),(0,i.tZ)("option",{value:"AND",children:(0,r.Z)("filterAnd")})]})]})}},4307:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(2791),i=n(9930),a=n(9922);function c(e){var t=e.filterStops,n=e.inputField;return(0,a.tZ)(r.Fragment,{children:(0,a.tZ)("input",{type:"text",onChange:function(e){return t(e)},ref:n,placeholder:(0,i.Z)("filterStops"),sx:{padding:"5px",opacity:1,backgroundColor:"#fff",width:"300px",maxWidth:"90%"}})})}},4157:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(2791),i=n(9922);function a(e){var t=e.left,n=e.right;return(0,i.BX)(r.Fragment,{children:[(0,i.tZ)("div",{className:"legendleft",sx:{gridColumn:"1 / span 4"},children:t}),(0,i.tZ)("div",{className:"legendright",sx:{textAlign:"left",gridColumn:"5 / span 20"},children:n})]})}},6313:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(2791),i=n(6871),a=n(9922);function c(e){var t=e.handleChange,n=e.selection,c=e.stop,o=e.mode,l=(0,i.s0)();return(0,a.tZ)(r.Fragment,{children:(0,a.tZ)("select",{value:c.id,sx:{padding:"5px",backgroundColor:"#ccc",opacity:1,width:"400px",maxWidth:"90%",mx:"10px"},onChange:function(e){var r=e.target.value,i=n.filter((function(e){return e.id===r}))[0];return t(i)},children:n&&n.length>=1&&n.map((function(e,t){return(0,a.tZ)("option",{onClick:function(){return l("arr"===o?"/arrivals/".concat(e.id):"/departures/".concat(e.id))},value:e.id,children:e.name},"".concat(e.id,"-").concat(t))}))})})}},964:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(2791),i=n(4157),a=n(9930),c=n(9922);function o(){return(0,c.BX)("div",{className:"legend",sx:{display:["none","none","grid"],gridTemplateColumns:"repeat(24,1fr)",border:"2px solid black",width:"70%",margin:"0 auto 40px auto",borderRadius:"10px"},children:[(0,c.tZ)("h3",{sx:{gridColumn:"1 / span 24"},children:(0,a.Z)("legend")}),(0,c.tZ)(i.Z,{left:(0,a.Z)("scheduled"),right:(0,a.Z)("scheduledDesc")}),(0,c.tZ)(i.Z,{left:(0,a.Z)("real"),right:(0,a.Z)("realDesc")}),(0,c.tZ)(i.Z,{left:(0,a.Z)("delay"),right:(0,a.Z)("delayDesc")}),(0,c.tZ)(i.Z,{left:(0,a.Z)("line"),right:(0,a.Z)("lineDesc")}),(0,c.tZ)(i.Z,{left:(0,a.Z)("direction"),right:(0,a.Z)("directionDesc")}),(0,c.tZ)(i.Z,{left:(0,c.tZ)("span",{className:"fas fa-wheelchair"}),right:(0,a.Z)("barrierfree")}),(0,c.tZ)(i.Z,{left:(0,c.tZ)("span",{className:"fas fa-bicycle"}),right:(0,a.Z)("bike")}),(0,c.tZ)(i.Z,{left:(0,c.tZ)("span",{className:"fas fa-exclamation-triangle"}),right:(0,a.Z)("attention")}),(0,c.tZ)(i.Z,{left:(0,c.tZ)("span",{className:"fas fa-times"}),right:(0,a.Z)("cancelled")})]})}var l=n(4165),u=n(5861),d=n(2982),f=n(885),s=n(6871),Z=n(5918),h=n(4569),p=n.n(h),g=n(2530),v=n(5042),m=n(4307),x=n(6313),C=n(3090),b=n(953),w=n(4671);function y(){var e=(0,Z.Rh)("selection",v.Z),t=(0,f.Z)(e,2),n=t[0],i=t[1],a=(0,Z.Rh)("stop",{id:"",name:"",type:""}),o=(0,f.Z)(a,2),h=o[0],y=o[1],k=(0,Z.Rh)("data",[]),R=(0,f.Z)(k,2),D=R[0],L=R[1],N=(0,Z.Rh)("date",""),O=(0,f.Z)(N,2),S=O[0],F=O[1],B=(0,Z.Rh)("viewData",[]),W=(0,f.Z)(B,2),X=W[0],A=W[1],P=(0,Z.Rh)("error",null),j=(0,f.Z)(P,2),T=j[0],E=j[1],H=(0,s.UO)(),U=(0,s.s0)();(0,r.useEffect)((function(){if(H.hasOwnProperty("id")&&"string"===typeof H.id&&H.id.length>0){var e=v.Z.filter((function(e){return e.id===H.id}))[0];U("/departures/".concat(H.id)),y(e),M(H.id);var t=v.Z.filter((function(t){return t.name!==e.name})),n=[e].concat((0,d.Z)(t));i(n)}else{var r=v.Z.filter((function(e){return"U Stadtmitte"===e.name})),a=(0,f.Z)(r,1)[0],c=a.id;U("/departures/".concat(c)),y(a),M(c);var o=v.Z.filter((function(e){return e.name!==a.name})),l=[a].concat((0,d.Z)(o));i(l)}}),[]);var G=(0,r.useRef)(null),q=(0,r.useRef)(null),z=(0,r.useRef)(null),I=function(e){var t=D.filter((function(t){var n=!1;if(t.hasOwnProperty("direction")&&t.direction)for(var r=0;r<e.length;r++)if(t.line.name.toLowerCase().includes(e[r].toLowerCase())||t.direction.toLowerCase().includes(e[r].toLowerCase())){n=!0;break}return n}));A(t)},J=function(e){var t=D.filter((function(t){var n=!0;if(t.hasOwnProperty("direction")&&t.direction)for(var r=0;r<e.length;r++)if(!t.line.name.toLowerCase().includes(e[r].toLowerCase())&&!t.direction.toLowerCase().includes(e[r].toLowerCase())){n=!1;break}return n}));A(t)},K=function(){A(D)},M=function(){var e=(0,u.Z)((0,l.Z)().mark((function e(t){var n,r,i,a,c,o,u,d,s,Z,h,m,x,C;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.Z.filter((function(e){return e.id===t})),r=(0,f.Z)(n,1),i=r[0],a=i.type,c=void 0===a?"BBG":a,o=(0,g.g)(c),u="de",d=navigator.language,u=d.startsWith("de")?"de":"en",s="https://sklinkusch-vbbmicro.vercel.app/?station=".concat(t,"&duration=").concat(o,"&language=").concat(u),e.next=10,p().get(s);case 10:return Z=e.sent,e.next=13,Z;case 13:h=e.sent,m=h.data,500===(x=h.status)||200!==x?(E("HTTP status code: ".concat(x)),L([])):(C=(new Date).toLocaleString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}),F(C),L(m),A(m),E(null));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,c.BX)("div",{className:"timetable",sx:{minHeight:"75vh"},children:[G&&(0,c.tZ)(m.default,{filterStops:function(e){!function(e){var t=v.Z.filter((function(t){return t.id!==h.id&&t.name.toLowerCase().includes(e.toLowerCase())})),n=[h].concat((0,d.Z)(t));i(n)}(e.target.value)},inputField:G}),(0,c.tZ)(x.default,{handleChange:function(e){y(e);var t=e.id;M(t),G.current.value="",q.current.value="",z.current.value="OR"},selection:n,stop:h,mode:"dep"}),(0,c.tZ)(C.default,{handleSubmit:function(){M(h.id),G.current.value="",q.current.value="",z.current.value="OR"}}),(0,c.tZ)(b.default,{filterField:q,filterSelector:z,filterData:function(){var e=q.current.value.split(" "),t=z.current.value;e.length>0?"OR"===t?I(e):J(e):K()},mode:"dep"}),(0,c.tZ)(w.default,{stop:h,data:X,error:T,date:S,mode:"dep"})]})}var k=n(184);var R=function(){return(0,k.jsxs)("div",{children:[(0,k.jsx)(o,{}),(0,k.jsx)(y,{})]})}}}]);
//# sourceMappingURL=964.8b12796c.chunk.js.map