"use strict";(self.webpackChunkvbb=self.webpackChunkvbb||[]).push([[985],{2985:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(3433),a=n(4165),i=n(5861),c=n(9439),u=n(2791),o=n(7689),s=n(5918),l=n(3263),f=n(2530),d=n(184),v=(0,u.lazy)((function(){return n.e(307).then(n.bind(n,4307))})),p=(0,u.lazy)((function(){return n.e(313).then(n.bind(n,6313))})),h=(0,u.lazy)((function(){return n.e(90).then(n.bind(n,3090))})),m=(0,u.lazy)((function(){return n.e(953).then(n.bind(n,953))})),g=(0,u.lazy)((function(){return n.e(29).then(n.bind(n,1029))}));function x(){var e=(0,s.Rh)("selection",[]),t=(0,c.Z)(e,2),n=t[0],x=t[1],b=(0,s.Rh)("stop",{id:"",name:"",type:""}),y=(0,c.Z)(b,2),w=y[0],k=y[1],Z=(0,s.Rh)("data",[]),j=(0,c.Z)(Z,2),L=j[0],R=j[1],B=(0,s.Rh)("date",""),C=(0,c.Z)(B,2),N=C[0],S=C[1],A=(0,s.Rh)("viewData",[]),D=(0,c.Z)(A,2),I=D[0],O=D[1],H=(0,s.Rh)("error",null),z=(0,c.Z)(H,2),E=z[0],F=z[1],P=(0,o.UO)(),W=(0,o.s0)();(0,u.useEffect)((function(){function e(){return(e=(0,i.Z)((0,a.Z)().mark((function e(){var t,n,r,i,c,u,o,s,l,f,d,v,p,h;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!P.hasOwnProperty("id")||"string"!==typeof P.id||9!==P.id.length){e.next=19;break}return e.next=3,fetch("https://station-api-jade.vercel.app/?id=".concat(P.id));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.next=9,n;case 9:r=e.sent,i=r.name,W("/arrivals/".concat(P.id)),k(n),Q(P.id,i),document.title=navigator.language.startsWith("de")?"Ank\xfcnfte an ".concat(i):"Arrivals at ".concat(i),x([n]),e.next=56;break;case 19:if(!P.hasOwnProperty("id")||"string"!==typeof P.id||12!==P.id.length){e.next=39;break}return c="".concat(P.id.slice(0,1)).concat(P.id.slice(-8)),e.next=23,fetch("https://station-api-jade.vercel.app/?id=".concat(c));case 23:return u=e.sent,e.next=26,u.json();case 26:return o=e.sent,e.next=29,o;case 29:s=e.sent,l=s.name,W("/arrivals/".concat(c)),k(o),Q(c,l),document.title=navigator.language.startsWith("de")?"Ank\xfcnfte an ".concat(l):"Arrivals at ".concat(l),x([o]),e.next=56;break;case 39:return f="900100011",e.next=42,fetch("https://station-api-jade.vercel.app/?id=".concat(f));case 42:return d=e.sent,e.next=45,d.json();case 45:return v=e.sent,e.next=48,v;case 48:p=e.sent,h=p.name,W("/arrivals/".concat(f)),k(v),Q(f,h),document.title=navigator.language.startsWith("de")?"Ank\xfcnfte an ".concat(h):"Arrivals at ".concat(h),x([v]);case 56:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var G=(0,u.useRef)(null),T=(0,u.useRef)(null),U=(0,u.useRef)(null),q=function(e){var t=L.filter((function(t){var n=!1;if(t.hasOwnProperty("provenance")&&t.provenance)for(var r=0;r<e.length;r++)if(t.line.name.toLowerCase().includes(e[r].toLowerCase())||t.provenance.toLowerCase().includes(e[r].toLowerCase())){n=!0;break}return n}));O(t)},J=function(e){var t=L.filter((function(t){var n=!0;if(t.hasOwnProperty("provenance")&&t.provenance)for(var r=0;r<e.length;r++)if(!t.line.name.toLowerCase().includes(e[r].toLowerCase())&&!t.provenance.toLowerCase().includes(e[r].toLowerCase())){n=!1;break}return n}));O(t)},K=function(){O(L)},M=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n,i,c,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=t.target.value).length>4)){e.next=12;break}return e.next=4,fetch("https://station-api-jade.vercel.app/?station=".concat(n));case 4:return i=e.sent,e.next=7,i.json();case 7:c=e.sent,u=[w].concat((0,r.Z)(c)),x(u),e.next=13;break;case 12:x([w]);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,n){var r,i,c,u,o,s,d,v,p,h,m;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.startsWith("Berlin")?"BLN":"BBG",i=(0,f.g)(r),c="de",u=navigator.language,c=u.startsWith("de")?"de":"en",o="https://vbb-rest.vercel.app/stops/".concat(t,"/arrivals?language=").concat(c,"&duration=").concat(i),e.next=8,l.Z.get(o);case 8:return s=e.sent,e.next=11,s;case 11:d=e.sent,v=d.data,500===(p=d.status)||200!==p?(F("HTTP status code: ".concat(p)),R([])):(h=(new Date).toLocaleString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",timeZone:"Europe/Berlin"}),m=v.arrivals,document.title="de"===c?"Ank\xfcnfte an ".concat(n):"Arrivals at ".concat(n),S(h),R(m),O(m),F(null));case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:"timetable",children:[(0,d.jsx)(v,{filterStops:M,inputField:G}),(0,d.jsx)(p,{handleChange:function(e){k(e);var t=e.id,n=e.name;Q(t,n),G.current.value="",T.current.value="",U.current.value="OR"},selection:n,stop:w,mode:"arr"}),(0,d.jsx)(h,{handleSubmit:function(){Q(w.id,w.name),G.current.value="",T.current.value="",U.current.value="OR"}}),(0,d.jsx)(m,{filterField:T,filterSelector:U,filterData:function(){var e=T.current.value.split(" "),t=U.current.value;e.length>0?"OR"===t?q(e):J(e):K()},mode:"arr"}),(0,d.jsx)(g,{stop:w,data:I,error:E,date:N,mode:"arr"})]})}},2530:function(e,t,n){function r(e){switch(e){case"BLN":return function(){var e=c(),t=e.isItHoliday,n=e.isItSaturday,r=e.hour,a=60;a=t?r<7||r<8?60:r<20?40:60:n?r<6?60:r<7?40:r<21?30:r<23?40:60:r<5?60:r<7?30:r<20?20:r<22?30:60;return a}();case"BHF":return function(){var e=c(),t=e.isItHoliday,n=e.isItSaturday,r=e.hour,a=60;a=t||n?r<5?60:r<6?30:r<7?20:r<22?10:r<23?20:30:r<5?30:r<6?20:r<7?10:r<22?5:r<23?10:20;return a}();case"BBG":return function(){var e=c(),t=e.isItHoliday,n=e.isItSaturday,r=e.hour,a=60;a=t||n?r<5?240:r<6||r<7||r<22||r<23?120:240:r<5?120:r<6||r<7||r<22||r<23?60:120;return a}()}}n.d(t,{g:function(){return r}});var a=function(e){return e>0?Number(e.toFixed(0)):e<0?Number((e-1).toFixed(0)):0};var i=function(e){var t=e%19,n=a(e/100),r=a(n/4),i=(n-r-a((8*n+13)/25)+19*t+15)%30,c=i-a(i/20)*(1-a(29/(i+1))*a((21-t)/11)),u=c-(e+a(e/4)+c+2-n+r)%7,o=u<=3?3:4,s=u<=3?u+28:u-3,l=[];return[s<3&&4===o?[s+29,3,e]:[s-2,o,e],31===s&&3===o?[1,4,e]:[s+1,o,e],l=s<23&&3===o?[s+8,4,e]:3===o?[s-22,5,e]:s>21&&4===o?[s-22,6,e]:[s+9,5,e],4===l[1]?[l[0]-19,5,e]:l[0]>20&&5===l[1]?[l[0]-20,6,e]:[l[0]+10,l[1],e]]};function c(){var e=(new Date).toLocaleDateString("en-GB",{timeZone:"Europe/Berlin",year:"numeric",month:"numeric",day:"numeric",hour:"numeric"}).split(","),t=e[0].split("/"),n=Number(e[1]),r=Number(t[0]),a=Number(t[1]),c=Number(t[2]),u=new Date(c,a-1,r).getDay(),o=function(e){return 0===e}(u)||function(e,t,n){if(1===e&&1===t)return!0;if(8===e&&3===t)return!0;if(1===e&&5===t)return!0;if(3===e&&10===t)return!0;if(12===t&&(25===e||26===e))return!0;var r=!1;return i(n).forEach((function(n){e===n[0]&&t===n[1]&&(r=!0)})),!!r}(r,a,c),s=function(e){return 6===e}(u);return{isItHoliday:o,isItSaturday:s,hour:n}}}}]);
//# sourceMappingURL=985.f9e79674.chunk.js.map