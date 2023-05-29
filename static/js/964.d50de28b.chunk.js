"use strict";(self.webpackChunkvbb=self.webpackChunkvbb||[]).push([[964,307,313,90,953],{3090:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(2791),a=n(9922);function i(e){var t=e.handleSubmit;return(0,a.tZ)(r.Fragment,{children:(0,a.tZ)("button",{onClick:t,sx:{padding:"5px",backgroundColor:"#ccc",opacity:1},children:(0,a.tZ)("i",{className:"fas fa-redo-alt"})})})}},953:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});n(2791);var r=n(9930),a=n(9922);function i(e){var t=e.filterField,n=e.filterSelector,i=e.filterData,c=e.mode,u=void 0===c?"dep":c;return(0,a.BX)("div",{children:[(0,a.tZ)("input",{type:"text",placeholder:"dep"===u?(0,r.Z)("filterDepartures"):(0,r.Z)("filterArrivals"),ref:t,onChange:function(t){return e.filterData(t)},sx:{padding:"5px",opacity:1,backgroundColor:"#fff",width:"300px",maxWidth:"90%"}}),(0,a.BX)("select",{ref:n,onChange:i,sx:{padding:"5px",backgroundColor:"#ccc",opacity:1,width:"400px",maxWidth:"90%",mx:"10px"},children:[(0,a.tZ)("option",{value:"OR",children:(0,r.Z)("filterOr")}),(0,a.tZ)("option",{value:"AND",children:(0,r.Z)("filterAnd")})]})]})}},4307:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(2791),a=n(9930),i=n(9922);function c(e){var t=e.filterStops,n=e.inputField;return(0,i.tZ)(r.Fragment,{children:(0,i.tZ)("input",{type:"text",onChange:function(e){return t(e)},ref:n,placeholder:(0,a.Z)("filterStops"),sx:{padding:"5px",opacity:1,backgroundColor:"#fff",width:"300px",maxWidth:"90%"}})})}},4157:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2791),a=n(9922);function i(e){var t=e.left,n=e.right;return(0,a.BX)(r.Fragment,{children:[(0,a.tZ)("div",{className:"legendleft",sx:{gridColumn:"1 / span 4"},children:t}),(0,a.tZ)("div",{className:"legendright",sx:{textAlign:"left",gridColumn:"5 / span 20"},children:n})]})}},6313:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(2791),a=n(7689),i=n(9922);function c(e){var t=e.handleChange,n=e.selection,c=e.stop,u=e.mode,o=(0,a.s0)();return(0,i.tZ)(r.Fragment,{children:(0,i.tZ)("select",{value:c.id,sx:{padding:"5px",backgroundColor:"#ccc",opacity:1,width:"400px",maxWidth:"90%",mx:"10px"},onChange:function(e){var r=e.target.value,a=n.filter((function(e){return e.id===r}))[0];return t(a)},children:n&&n.length>=1&&n.map((function(e,t){return(0,i.tZ)("option",{onClick:function(){return o("arr"===u?"/arrivals/".concat(e.id):"/departures/".concat(e.id))},value:e.id,children:e.name},"".concat(e.id,"-").concat(t))}))})})}},2530:function(e,t,n){function r(e){switch(e){case"BLN":return function(){var e=o(),t=e.isItHoliday,n=e.isItSaturday,r=e.hour,a=60;a=t?r<7||r<8?60:r<20?40:60:n?r<6?60:r<7?40:r<21?30:r<23?40:60:r<5?60:r<7?30:r<20?20:r<22?30:60;return a}();case"BHF":return function(){var e=o(),t=e.isItHoliday,n=e.isItSaturday,r=e.hour,a=60;a=t||n?r<5?60:r<6?30:r<7?20:r<22?10:r<23?20:30:r<5?30:r<6?20:r<7?10:r<22?5:r<23?10:20;return a}();case"BBG":return function(){var e=o(),t=e.isItHoliday,n=e.isItSaturday,r=e.hour,a=60;a=t||n?r<5?240:r<6||r<7||r<22||r<23?120:240:r<5?120:r<6||r<7||r<22||r<23?60:120;return a}()}}n.d(t,{g:function(){return r}});var a=function(e){return 0===e},i=function(e,t,n){if(1===e&&1===t)return!0;if(8===e&&3===t)return!0;if(1===e&&5===t)return!0;if(3===e&&10===t)return!0;if(12===t&&(25===e||26===e))return!0;var r=!1;return u(n).forEach((function(n){e===n[0]&&t===n[1]&&(r=!0)})),!!r};var c=function(e){return 0!==e?Math.floor(e):0};var u=function(e){var t=e%19,n=c(e/100),r=c(n/4),a=(n-r-c((8*n+13)/25)+19*t+15)%30,i=a-c(a/20)*(1-c(29/(a+1))*c((21-t)/11)),u=i-(e+c(e/4)+i+2-n+r)%7,o=u<=3?3:4,s=u<=3?u+28:u-3,l=[];return[s<3&&4===o?[s+29,3,e]:[s-2,o,e],31===s&&3===o?[1,4,e]:[s+1,o,e],l=s<23&&3===o?[s+8,4,e]:3===o?[s-22,5,e]:s>21&&4===o?[s-22,6,e]:[s+9,5,e],4===l[1]?[l[0]-18,5,e]:l[0]>20&&5===l[1]?[l[0]-19,6,e]:[l[0]+11,l[1],e]]};function o(){var e=(new Date).toLocaleDateString("en-GB",{timeZone:"Europe/Berlin",year:"numeric",month:"numeric",day:"numeric",hour:"numeric"}).split(","),t=e[0].split("/"),n=Number(e[1]),r=Number(t[0]),c=Number(t[1]),u=Number(t[2]),o=new Date(u,c-1,r).getDay(),s=a(o)||i(r,c,u),l=function(e){return 6===e}(o);return{isItHoliday:s,isItSaturday:l,hour:n}}},964:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(2791),a=n(4157),i=n(9930),c=n(9922);function u(){return(0,c.BX)("div",{className:"legend",sx:{display:["none","none","grid"],gridTemplateColumns:"repeat(24,1fr)",border:"2px solid black",width:"70%",margin:"0 auto 40px auto",borderRadius:"10px"},children:[(0,c.tZ)("h3",{sx:{gridColumn:"1 / span 24"},children:(0,i.Z)("legend")}),(0,c.tZ)(a.Z,{left:(0,i.Z)("scheduled"),right:(0,i.Z)("scheduledDesc")}),(0,c.tZ)(a.Z,{left:(0,i.Z)("real"),right:(0,i.Z)("realDesc")}),(0,c.tZ)(a.Z,{left:(0,i.Z)("delay"),right:(0,i.Z)("delayDesc")}),(0,c.tZ)(a.Z,{left:(0,i.Z)("line"),right:(0,i.Z)("lineDesc")}),(0,c.tZ)(a.Z,{left:(0,i.Z)("direction"),right:(0,i.Z)("directionDesc")}),(0,c.tZ)(a.Z,{left:(0,c.tZ)("span",{className:"fas fa-wheelchair"}),right:(0,i.Z)("barrierfree")}),(0,c.tZ)(a.Z,{left:(0,c.tZ)("span",{className:"fas fa-bicycle"}),right:(0,i.Z)("bike")}),(0,c.tZ)(a.Z,{left:(0,c.tZ)("span",{className:"fas fa-exclamation-triangle"}),right:(0,i.Z)("attention")}),(0,c.tZ)(a.Z,{left:(0,c.tZ)("span",{className:"fas fa-times"}),right:(0,i.Z)("cancelled")})]})}var o=n(3433),s=n(4165),l=n(5861),d=n(9439),f=n(7689),p=n(5918),h=n(1243),v=n(2530),g=n(4307),Z=n(6313),m=n(3090),x=n(953),b=n(1029);function y(){var e=(0,p.Rh)("selection",[]),t=(0,d.Z)(e,2),n=t[0],a=t[1],i=(0,p.Rh)("stop",{id:"",name:"",type:""}),u=(0,d.Z)(i,2),y=u[0],w=u[1],k=(0,p.Rh)("data",[]),C=(0,d.Z)(k,2),D=C[0],B=C[1],N=(0,p.Rh)("date",""),R=(0,d.Z)(N,2),S=R[0],L=R[1],j=(0,p.Rh)("viewData",[]),O=(0,d.Z)(j,2),F=O[0],I=O[1],W=(0,p.Rh)("error",null),A=(0,d.Z)(W,2),H=A[0],E=A[1],P=(0,f.UO)(),X=(0,f.s0)();(0,r.useEffect)((function(){function e(){return(e=(0,l.Z)((0,s.Z)().mark((function e(){var t,n,r,i,c,u,o,l,d,f,p,h,v,g;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!P.hasOwnProperty("id")||"string"!==typeof P.id||9!==P.id.length){e.next=25;break}return e.prev=1,e.next=4,fetch("https://station-api-jade.vercel.app/?id=".concat(P.id));case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,e.next=10,n;case 10:r=e.sent,i=r.name,X("/departures/".concat(P.id)),w(n),Q(P.id,i),document.title=navigator.language.startsWith("de")?"Abfahrten ab ".concat(i):"Departures from ".concat(i),a([n]),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),console.debug(e.t0);case 23:e.next=74;break;case 25:if(!P.hasOwnProperty("id")||"string"!==typeof P.id||12!==P.id.length){e.next=51;break}return e.prev=26,c="".concat(P.id.slice(0,1)).concat(P.id.slice(-8)),e.next=30,fetch("https://station-api-jade.vercel.app/?id=".concat(c));case 30:return u=e.sent,e.next=33,u.json();case 33:return o=e.sent,e.next=36,o;case 36:l=e.sent,d=l.name,X("/departures/".concat(c)),w(o),Q(c,d),document.title=navigator.language.startsWith("de")?"Abfahrten ab ".concat(d):"Departures from ".concat(d),a([o]),e.next=49;break;case 46:e.prev=46,e.t1=e.catch(26),console.debug(e.t1);case 49:e.next=74;break;case 51:return e.prev=51,f="900100011",e.next=55,fetch("https://station-api-jade.vercel.app/?id=".concat(f));case 55:return p=e.sent,e.next=58,p.json();case 58:return h=e.sent,e.next=61,h;case 61:v=e.sent,g=v.name,X("/departures/".concat(f)),w(h),Q(f,g),document.title=navigator.language.startsWith("de")?"Abfahrten ab ".concat(g):"Departures from ".concat(g),a([h]),e.next=74;break;case 71:e.prev=71,e.t2=e.catch(51),console.debug(e.t2);case 74:case"end":return e.stop()}}),e,null,[[1,20],[26,46],[51,71]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),setInterval((function(){return Q(y.id,y.name)}),12e4)}),[]);var G=(0,r.useRef)(null),T=(0,r.useRef)(null),M=(0,r.useRef)(null),U=function(e){var t=D.filter((function(t){var n=!1;if(t.hasOwnProperty("direction")&&t.direction)for(var r=0;r<e.length;r++)if(t.line.name.toLowerCase().includes(e[r].toLowerCase())||t.direction.toLowerCase().includes(e[r].toLowerCase())){n=!0;break}return n}));I(t)},q=function(e){var t=D.filter((function(t){var n=!0;if(t.hasOwnProperty("direction")&&t.direction)for(var r=0;r<e.length;r++)if(!t.line.name.toLowerCase().includes(e[r].toLowerCase())&&!t.direction.toLowerCase().includes(e[r].toLowerCase())){n=!1;break}return n}));I(t)},z=function(){I(D)},J=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t){var n,r,i,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,e.prev=1,!(n.length>4)){e.next=13;break}return e.next=5,fetch("https://station-api-jade.vercel.app/?station=".concat(n));case 5:return r=e.sent,e.next=8,r.json();case 8:i=e.sent,c=[y].concat((0,o.Z)(i)),a(c),e.next=14;break;case 13:a([y]);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.debug(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),K=function(e){return e.startsWith("Berlin")||e.includes("(Berlin)")||e.includes("Berlin Hauptbahnhof")?"BLN":"BBG"},Q=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t,n){var r,a,i,c,u,o,l,d,f,p,g;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=K(n),a=(0,v.g)(r),i="de",c=navigator.language,i=c.startsWith("de")?"de":"en",u="https://vbb-rest.vercel.app/stops/".concat(t,"/departures?language=").concat(i,"&duration=").concat(a),e.next=9,h.Z.get(u);case 9:return o=e.sent,e.next=12,o;case 12:l=e.sent,d=l.data,500===(f=l.status)||200!==f?(E("HTTP status code: ".concat(f)),B([])):(p=d.departures,g=(new Date).toLocaleString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",timeZone:"Europe/Berlin"}),document.title="de"===i?"Abfahrten ab ".concat(n):"Departures from ".concat(n),L(g),B(p),I(p),E(null)),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.debug(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,n){return e.apply(this,arguments)}}();return(0,c.BX)("div",{className:"timetable",sx:{minHeight:"75vh"},children:[G&&(0,c.tZ)(g.default,{filterStops:J,inputField:G}),(0,c.tZ)(Z.default,{handleChange:function(e){w(e);var t=e.id,n=e.name;Q(t,n),G.current.value="",T.current.value="",M.current.value="OR"},selection:n,stop:y,mode:"dep"}),(0,c.tZ)(m.default,{handleSubmit:function(){Q(y.id,y.name),G.current.value="",T.current.value="",M.current.value="OR"}}),(0,c.tZ)(x.default,{filterField:T,filterSelector:M,filterData:function(){var e=T.current.value.split(" "),t=M.current.value;e.length>0?"OR"===t?U(e):q(e):z()},mode:"dep"}),(0,c.tZ)(b.default,{stop:y,data:F,error:H,date:S,mode:"dep"})]})}var w=n(184);var k=function(){return(0,w.jsxs)("div",{children:[(0,w.jsx)(u,{}),(0,w.jsx)(y,{})]})}}}]);
//# sourceMappingURL=964.d50de28b.chunk.js.map