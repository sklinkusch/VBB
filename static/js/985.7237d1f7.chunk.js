"use strict";(self.webpackChunkvbb=self.webpackChunkvbb||[]).push([[985],{2985:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(3433),r=n(4165),c=n(5861),s=n(9439),o=n(2791),i=n(7689),u=n(5918),l=n(2530),p=n(4307),d=n(6313),f=n(3090),g=n(953),h=n(1036),b=n(1029),v=n(9922);function Z(){var e=(0,u.Rh)("selection",[]),t=(0,s.Z)(e,2),n=t[0],Z=t[1],x=(0,u.Rh)("filterSelection",[]),y=(0,s.Z)(x,2),m=y[0],k=y[1],S=(0,u.Rh)("stop",{id:"",name:"",type:""}),w=(0,s.Z)(S,2),R=w[0],A=w[1],B=(0,u.Rh)("filterStop",{id:"0",name:"\u2e3a",type:""}),j=(0,s.Z)(B,2),W=j[0],O=j[1],z=(0,u.Rh)("data",[]),C=(0,s.Z)(z,2),D=C[0],E=C[1],P=(0,u.Rh)("date",""),q=(0,s.Z)(P,2),F=q[0],I=q[1],L=(0,u.Rh)("error",null),N=(0,s.Z)(L,2),T=N[0],X=N[1],G=(0,u.Rh)("express",!0),H=(0,s.Z)(G,2),U=H[0],J=H[1],K=(0,u.Rh)("regional",!0),M=(0,s.Z)(K,2),Q=M[0],V=M[1],Y=(0,u.Rh)("suburban",!0),$=(0,s.Z)(Y,2),_=$[0],ee=$[1],te=(0,u.Rh)("subway",!0),ne=(0,s.Z)(te,2),ae=ne[0],re=ne[1],ce=(0,u.Rh)("tram",!0),se=(0,s.Z)(ce,2),oe=se[0],ie=se[1],ue=(0,u.Rh)("bus",!0),le=(0,s.Z)(ue,2),pe=le[0],de=le[1],fe=(0,u.Rh)("ferry",!0),ge=(0,s.Z)(fe,2),he=ge[0],be=ge[1],ve=(0,i.UO)(),Ze=(0,i.s0)();(0,o.useEffect)((function(){function e(){return(e=(0,c.Z)((0,r.Z)().mark((function e(){var t,n,a,c,s,o,i,u,l,p,d,f,g,h,b,v,x;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ve.hasOwnProperty("id")||"string"!==typeof ve.id||9!==ve.id.length){e.next=26;break}return e.prev=1,t="https://vbb-rest.vercel.app/stops/".concat(ve.id,"?language=de"),e.next=5,fetch(t);case 5:return n=e.sent,e.next=8,n.json();case 8:return a=e.sent,e.next=11,a;case 11:c=e.sent,s=c.name,Ze("/arrivals/".concat(ve.id)),A(a),Se(ve.id,s,{}),document.title=navigator.language.startsWith("de")?"Ank\xfcnfte an ".concat(s):"Arrivals at ".concat(s),Z([a]),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),console.debug(e.t0);case 24:e.next=77;break;case 26:if(!ve.hasOwnProperty("id")||"string"!==typeof ve.id||12!==ve.id.length){e.next=53;break}return e.prev=27,o="".concat(ve.id.slice(0,1)).concat(ve.id.slice(-8)),i="https://vbb-rest.vercel.app/stops/".concat(o,"?language=de"),e.next=32,fetch(i);case 32:return u=e.sent,e.next=35,u.json();case 35:return l=e.sent,e.next=38,l;case 38:p=e.sent,d=p.name,Ze("/arrivals/".concat(o)),A(l),Se(o,d,{}),document.title=navigator.language.startsWith("de")?"Ank\xfcnfte an ".concat(d):"Arrivals at ".concat(d),Z([l]),e.next=51;break;case 48:e.prev=48,e.t1=e.catch(27),console.debug(e.t1);case 51:e.next=77;break;case 53:return e.prev=53,g="https://vbb-rest.vercel.app/stops/".concat(f="900100011","?language=de"),e.next=58,fetch(g);case 58:return h=e.sent,e.next=61,h.json();case 61:return b=e.sent,e.next=64,b;case 64:v=e.sent,x=v.name,Ze("/arrivals/".concat(f)),A(b),Se(f,x,{}),document.title=navigator.language.startsWith("de")?"Ank\xfcnfte an ".concat(x):"Arrivals at ".concat(x),Z([b]),e.next=77;break;case 74:e.prev=74,e.t2=e.catch(53),console.debug(e.t2);case 77:case"end":return e.stop()}}),e,null,[[1,21],[27,48],[53,74]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var xe=(0,o.useRef)(null),ye=(0,o.useRef)(null),me=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){var n,c,s,o,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,e.prev=1,!(n.length>4)){e.next=14;break}return c="https://vbb-rest.vercel.app/locations?query=".concat(n,"&results=15&fuzzy=true&stops=true&addresses=false&poi=false&language=de&linesOfStops=true"),e.next=6,fetch(c);case 6:return s=e.sent,e.next=9,s.json();case 9:o=e.sent,i=[R].concat((0,a.Z)(o)),Z(i),e.next=15;break;case 14:Z([R]);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),console.debug(e.t0);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){var n,c,s,o,i,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,e.prev=1,c={id:"0",name:"\u2e3a",type:""},!(n.length>=3)){e.next=15;break}return s="https://vbb-rest.vercel.app/locations?query=".concat(n,"&results=15&fuzzy=true&stops=true&addresses=false&poi=false&language=de&linesOfStops=true"),e.next=7,fetch(s);case 7:return o=e.sent,e.next=10,o.json();case 10:i=e.sent,u="0"!==W.id?[c,W].concat((0,a.Z)(i)):[c].concat((0,a.Z)(i)),k(u),e.next=16;break;case 15:"0"!==W.id?k([c,W]):k([c]);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.debug(e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),Se=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t,n,a){var c,s,o,i,u,p,d,f,g,h,b,v,Z;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=n.startsWith("Berlin")?"BLN":"BBG",s=(0,l.g)(c),o="de",i=navigator.language,o=i.startsWith("de")?"de":"en",u=a.direction?"0"!==a.direction?parseInt(a.direction,10):null:"0"!==W.id?parseInt(W.id,10):null,p="number"===typeof u?"&direction=".concat(u):"",d="https://vbb-rest.vercel.app/stops/".concat(t,"/arrivals?language=").concat(o,"&duration=").concat(s,"&express=").concat("boolean"===typeof a.express?a.express.toString():U.toString(),"&regional=").concat("boolean"===typeof a.regional?a.regional.toString():Q.toString(),"&suburban=").concat("boolean"===typeof a.suburban?a.suburban.toString():_.toString(),"&subway=").concat("boolean"===typeof a.subway?a.subway.toString():ae.toString(),"&tram=").concat("boolean"===typeof a.tram?a.tram.toString():oe.toString(),"&bus=").concat("boolean"===typeof a.bus?a.bus.toString():pe.toString(),"&ferry=").concat("boolean"===typeof a.ferry?a.ferry.toString():he.toString()).concat(p),e.next=11,fetch(d);case 11:return f=e.sent,e.next=14,f;case 14:return g=e.sent,h=g.status,e.next=18,f.json();case 18:b=e.sent,500===h||200!==h?(X("HTTP status code: ".concat(h)),E([])):(v=(new Date).toLocaleString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",timeZone:"Europe/Berlin"}),Z=b.arrivals,document.title="de"===o?"Ank\xfcnfte an ".concat(n):"Arrivals at ".concat(n),I(v),E(Z),X(null)),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),console.debug(e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t,n,a){return e.apply(this,arguments)}}();return(0,v.BX)("div",{className:"timetable",children:[(0,v.tZ)(p.Z,{filterStops:me,inputField:xe}),(0,v.tZ)(d.Z,{handleChange:function(e){A(e);var t=e.id,n=e.name;Se(t,n,{}),xe.current.value=""},selection:n,stop:R,mode:"arr"}),(0,v.tZ)(f.Z,{handleSubmit:function(){Se(R.id,R.name,{}),xe.current.value=""}}),(0,v.BX)("div",{children:[(0,v.tZ)("span",{sx:{display:"inline-block",mr:"0.2rem",fontStyle:"italic",fontWeight:700},children:"via"}),(0,v.tZ)(p.Z,{filterStops:ke,inputField:ye}),(0,v.tZ)(g.Z,{handleChange:function(e){O(e),"0"!==e.id?Se(R.id,R.name,{direction:e.id}):Se(R.id,R.name,{}),ye.current.value=""},selection:m,stop:W})]}),(0,v.tZ)(h.Z,{products:[U,Q,_,ae,oe,pe,he],productSetters:[J,V,ee,re,ie,de,be],getData:function(e){return Se(R.id,R.name,e)}}),(0,v.tZ)(b.Z,{stop:R,data:D,error:T,date:F,mode:"arr"})]})}}}]);
//# sourceMappingURL=985.7237d1f7.chunk.js.map