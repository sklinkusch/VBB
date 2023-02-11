"use strict";(self.webpackChunkvbb=self.webpackChunkvbb||[]).push([[964,307,313,90,953],{3090:function(t,e,n){n.r(e),n.d(e,{default:function(){return i}});var r=n(2791),a=n(9922);function i(t){var e=t.handleSubmit;return(0,a.tZ)(r.Fragment,{children:(0,a.tZ)("button",{onClick:e,sx:{padding:"5px",backgroundColor:"#ccc",opacity:1},children:(0,a.tZ)("i",{className:"fas fa-redo-alt"})})})}},953:function(t,e,n){n.r(e),n.d(e,{default:function(){return i}});n(2791);var r=n(9930),a=n(9922);function i(t){var e=t.filterField,n=t.filterSelector,i=t.filterData,c=t.mode,o=void 0===c?"dep":c;return(0,a.BX)("div",{children:[(0,a.tZ)("input",{type:"text",placeholder:"dep"===o?(0,r.Z)("filterDepartures"):(0,r.Z)("filterArrivals"),ref:e,onChange:function(e){return t.filterData(e)},sx:{padding:"5px",opacity:1,backgroundColor:"#fff",width:"300px",maxWidth:"90%"}}),(0,a.BX)("select",{ref:n,onChange:i,sx:{padding:"5px",backgroundColor:"#ccc",opacity:1,width:"400px",maxWidth:"90%",mx:"10px"},children:[(0,a.tZ)("option",{value:"OR",children:(0,r.Z)("filterOr")}),(0,a.tZ)("option",{value:"AND",children:(0,r.Z)("filterAnd")})]})]})}},4307:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var r=n(2791),a=n(9930),i=n(9922);function c(t){var e=t.filterStops,n=t.inputField;return(0,i.tZ)(r.Fragment,{children:(0,i.tZ)("input",{type:"text",onChange:function(t){return e(t)},ref:n,placeholder:(0,a.Z)("filterStops"),sx:{padding:"5px",opacity:1,backgroundColor:"#fff",width:"300px",maxWidth:"90%"}})})}},4157:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(2791),a=n(9922);function i(t){var e=t.left,n=t.right;return(0,a.BX)(r.Fragment,{children:[(0,a.tZ)("div",{className:"legendleft",sx:{gridColumn:"1 / span 4"},children:e}),(0,a.tZ)("div",{className:"legendright",sx:{textAlign:"left",gridColumn:"5 / span 20"},children:n})]})}},6313:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var r=n(2791),a=n(7689),i=n(9922);function c(t){var e=t.handleChange,n=t.selection,c=t.stop,o=t.mode,u=(0,a.s0)();return(0,i.tZ)(r.Fragment,{children:(0,i.tZ)("select",{value:c.id,sx:{padding:"5px",backgroundColor:"#ccc",opacity:1,width:"400px",maxWidth:"90%",mx:"10px"},onChange:function(t){var r=t.target.value,a=n.filter((function(t){return t.id===r}))[0];return e(a)},children:n&&n.length>=1&&n.map((function(t,e){return(0,i.tZ)("option",{onClick:function(){return u("arr"===o?"/arrivals/".concat(t.id):"/departures/".concat(t.id))},value:t.id,children:t.name},"".concat(t.id,"-").concat(e))}))})})}},2530:function(t,e,n){function r(t){switch(t){case"BLN":return function(){var t=c(),e=t.isItHoliday,n=t.isItSaturday,r=t.hour,a=60;a=e?r<7||r<8?60:r<20?40:60:n?r<6?60:r<7?40:r<21?30:r<23?40:60:r<5?60:r<7?30:r<20?20:r<22?30:60;return a}();case"BHF":return function(){var t=c(),e=t.isItHoliday,n=t.isItSaturday,r=t.hour,a=60;a=e||n?r<5?60:r<6?30:r<7?20:r<22?10:r<23?20:30:r<5?30:r<6?20:r<7?10:r<22?5:r<23?10:20;return a}()}}n.d(e,{g:function(){return r}});var a=function(t){return t>0?Number(t.toFixed(0)):t<0?Number((t-1).toFixed(0)):0};var i=function(t){var e=t%19,n=a(t/100),r=a(n/4),i=(n-r-a((8*n+13)/25)+19*e+15)%30,c=i-a(i/20)*(1-a(29/(i+1))*a((21-e)/11)),o=c-(t+a(t/4)+c+2-n+r)%7,u=o<=3?3:4,s=o<=3?o+28:o-3,l=[];return[s<3&&4===u?[s+29,3,t]:[s-2,u,t],31===s&&3===u?[1,4,t]:[s+1,u,t],l=s<23&&3===u?[s+8,4,t]:3===u?[s-22,5,t]:s>21&&4===u?[s-22,6,t]:[s+9,5,t],4===l[1]?[l[0]-19,5,t]:l[0]>20&&5===l[1]?[l[0]-20,6,t]:[l[0]+10,l[1],t]]};function c(){var t=(new Date).toLocaleDateString("en-GB",{timeZone:"Europe/Berlin",year:"numeric",month:"numeric",day:"numeric",hour:"numeric"}).split(","),e=t[0].split("/"),n=Number(t[1]),r=Number(e[0]),a=Number(e[1]),c=Number(e[2]),o=new Date(c,a-1,r).getDay(),u=function(t){return 0===t}(o)||function(t,e,n){if(1===t&&1===e)return!0;if(8===t&&3===e)return!0;if(1===t&&5===e)return!0;if(3===t&&10===e)return!0;if(12===e&&(25===t||26===t))return!0;var r=!1;return i(n).forEach((function(n){t===n[0]&&e===n[1]&&(r=!0)})),!!r}(r,a,c),s=function(t){return 6===t}(o);return{isItHoliday:u,isItSaturday:s,hour:n}}},964:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var r=n(2791),a=n(4157),i=n(9930),c=n(9922);function o(){return(0,c.BX)("div",{className:"legend",sx:{display:["none","none","grid"],gridTemplateColumns:"repeat(24,1fr)",border:"2px solid black",width:"70%",margin:"0 auto 40px auto",borderRadius:"10px"},children:[(0,c.tZ)("h3",{sx:{gridColumn:"1 / span 24"},children:(0,i.Z)("legend")}),(0,c.tZ)(a.Z,{left:(0,i.Z)("scheduled"),right:(0,i.Z)("scheduledDesc")}),(0,c.tZ)(a.Z,{left:(0,i.Z)("real"),right:(0,i.Z)("realDesc")}),(0,c.tZ)(a.Z,{left:(0,i.Z)("delay"),right:(0,i.Z)("delayDesc")}),(0,c.tZ)(a.Z,{left:(0,i.Z)("line"),right:(0,i.Z)("lineDesc")}),(0,c.tZ)(a.Z,{left:(0,i.Z)("direction"),right:(0,i.Z)("directionDesc")}),(0,c.tZ)(a.Z,{left:(0,c.tZ)("span",{className:"fas fa-wheelchair"}),right:(0,i.Z)("barrierfree")}),(0,c.tZ)(a.Z,{left:(0,c.tZ)("span",{className:"fas fa-bicycle"}),right:(0,i.Z)("bike")}),(0,c.tZ)(a.Z,{left:(0,c.tZ)("span",{className:"fas fa-exclamation-triangle"}),right:(0,i.Z)("attention")}),(0,c.tZ)(a.Z,{left:(0,c.tZ)("span",{className:"fas fa-times"}),right:(0,i.Z)("cancelled")})]})}var u=n(3433),s=n(4165),l=n(5861),d=n(9439),f=n(7689),p=n(5918),h=n(3263),Z=n(2530),g=n(4307),v=n(6313),m=n(3090),x=n(953),b=n(1029);function y(){var t=(0,p.Rh)("selection",[]),e=(0,d.Z)(t,2),n=e[0],a=e[1],i=(0,p.Rh)("stop",{id:"",name:"",type:""}),o=(0,d.Z)(i,2),y=o[0],w=o[1],C=(0,p.Rh)("data",[]),k=(0,d.Z)(C,2),D=k[0],N=k[1],B=(0,p.Rh)("date",""),R=(0,d.Z)(B,2),L=R[0],S=R[1],j=(0,p.Rh)("viewData",[]),F=(0,d.Z)(j,2),O=F[0],W=F[1],A=(0,p.Rh)("error",null),H=(0,d.Z)(A,2),I=H[0],E=H[1],P=(0,f.UO)(),X=(0,f.s0)();(0,r.useEffect)((function(){function t(){return(t=(0,l.Z)((0,s.Z)().mark((function t(){var e,n,r,i,c,o,u,l,d,f,p,h,Z,g;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!P.hasOwnProperty("id")||"string"!==typeof P.id||9!==P.id.length){t.next=19;break}return t.next=3,fetch("https://station-api-jade.vercel.app/?id=".concat(P.id));case 3:return e=t.sent,t.next=6,e.json();case 6:return n=t.sent,t.next=9,n;case 9:r=t.sent,i=r.name,X("/departures/".concat(P.id)),w(n),M(P.id,i),document.title=navigator.language.startsWith("de")?"Abfahrten ab ".concat(i):"Departures from ".concat(i),a([n]),t.next=56;break;case 19:if(!P.hasOwnProperty("id")||"string"!==typeof P.id||12!==P.id.length){t.next=39;break}return c="".concat(P.id.slice(0,1)).concat(P.id.slice(-8)),t.next=23,fetch("https://station-api-jade.vercel.app/?id=".concat(c));case 23:return o=t.sent,t.next=26,o.json();case 26:return u=t.sent,t.next=29,u;case 29:l=t.sent,d=l.name,X("/departures/".concat(c)),w(u),M(c,d),document.title=navigator.language.startsWith("de")?"Abfahrten ab ".concat(d):"Departures from ".concat(d),a([u]),t.next=56;break;case 39:return f="900100011",t.next=42,fetch("https://station-api-jade.vercel.app/?id=".concat(f));case 42:return p=t.sent,t.next=45,p.json();case 45:return h=t.sent,t.next=48,h;case 48:Z=t.sent,g=Z.name,X("/departures/".concat(f)),w(h),M(f,g),document.title=navigator.language.startsWith("de")?"Abfahrten ab ".concat(g):"Departures from ".concat(g),a([h]);case 56:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var T=(0,r.useRef)(null),G=(0,r.useRef)(null),U=(0,r.useRef)(null),q=function(t){var e=D.filter((function(e){var n=!1;if(e.hasOwnProperty("direction")&&e.direction)for(var r=0;r<t.length;r++)if(e.line.name.toLowerCase().includes(t[r].toLowerCase())||e.direction.toLowerCase().includes(t[r].toLowerCase())){n=!0;break}return n}));W(e)},z=function(t){var e=D.filter((function(e){var n=!0;if(e.hasOwnProperty("direction")&&e.direction)for(var r=0;r<t.length;r++)if(!e.line.name.toLowerCase().includes(t[r].toLowerCase())&&!e.direction.toLowerCase().includes(t[r].toLowerCase())){n=!1;break}return n}));W(e)},J=function(){W(D)},K=function(){var t=(0,l.Z)((0,s.Z)().mark((function t(e){var n,r,i,c;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((n=e.target.value).length>4)){t.next=12;break}return t.next=4,fetch("https://station-api-jade.vercel.app/?station=".concat(n));case 4:return r=t.sent,t.next=7,r.json();case 7:i=t.sent,c=[y].concat((0,u.Z)(i)),a(c),t.next=13;break;case 12:a([y]);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=(0,l.Z)((0,s.Z)().mark((function t(e,n){var r,a,i,c,o,u,l,d,f,p;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.startsWith("Berlin")?"BLN":"BBG",a=(0,Z.g)(r),i="de",c=navigator.language,i=c.startsWith("de")?"de":"en",o="https://sklinkusch-vbbmicro.vercel.app/?station=".concat(e,"&duration=").concat(a,"&language=").concat(i),t.next=8,h.Z.get(o);case 8:return u=t.sent,t.next=11,u;case 11:l=t.sent,d=l.data,500===(f=l.status)||200!==f?(E("HTTP status code: ".concat(f)),N([])):(p=(new Date).toLocaleString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",timeZone:"Europe/Berlin"}),document.title="de"===i?"Abfahrten ab ".concat(n):"Departures from ".concat(n),S(p),N(d),W(d),E(null));case 15:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return(0,c.BX)("div",{className:"timetable",sx:{minHeight:"75vh"},children:[T&&(0,c.tZ)(g.default,{filterStops:K,inputField:T}),(0,c.tZ)(v.default,{handleChange:function(t){w(t);var e=t.id,n=t.name;M(e,n),T.current.value="",G.current.value="",U.current.value="OR"},selection:n,stop:y,mode:"dep"}),(0,c.tZ)(m.default,{handleSubmit:function(){M(y.id,y.name),T.current.value="",G.current.value="",U.current.value="OR"}}),(0,c.tZ)(x.default,{filterField:G,filterSelector:U,filterData:function(){var t=G.current.value.split(" "),e=U.current.value;t.length>0?"OR"===e?q(t):z(t):J()},mode:"dep"}),(0,c.tZ)(b.default,{stop:y,data:O,error:I,date:L,mode:"dep"})]})}var w=n(184);var C=function(){return(0,w.jsxs)("div",{children:[(0,w.jsx)(o,{}),(0,w.jsx)(y,{})]})}}}]);
//# sourceMappingURL=964.a605419b.chunk.js.map