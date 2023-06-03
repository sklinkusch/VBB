"use strict";(self.webpackChunkvbb=self.webpackChunkvbb||[]).push([[985],{2985:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(3433),r=n(4165),c=n(5861),o=n(9439),s=n(2791),i=n(7689),u=n(5918),l=n(1243),p=n(2530),f=n(1036),d=n(184),v=(0,s.lazy)((function(){return n.e(307).then(n.bind(n,4307))})),h=(0,s.lazy)((function(){return n.e(313).then(n.bind(n,6313))})),b=(0,s.lazy)((function(){return n.e(90).then(n.bind(n,3090))})),g=(0,s.lazy)((function(){return n.e(953).then(n.bind(n,953))})),x=(0,s.lazy)((function(){return n.e(29).then(n.bind(n,1029))}));function y(){var e=(0,u.Rh)("selection",[]),t=(0,o.Z)(e,2),n=t[0],y=t[1],m=(0,u.Rh)("stop",{id:"",name:"",type:""}),w=(0,o.Z)(m,2),Z=w[0],k=w[1],R=(0,u.Rh)("data",[]),S=(0,o.Z)(R,2),j=S[0],C=S[1],L=(0,u.Rh)("date",""),A=(0,o.Z)(L,2),O=A[0],z=A[1],B=(0,u.Rh)("viewData",[]),D=(0,o.Z)(B,2),P=D[0],W=D[1],E=(0,u.Rh)("error",null),F=(0,o.Z)(E,2),N=F[0],T=F[1],G=(0,u.Rh)("express",!0),H=(0,o.Z)(G,2),U=H[0],q=H[1],I=(0,u.Rh)("regional",!0),J=(0,o.Z)(I,2),K=J[0],M=J[1],Q=(0,u.Rh)("suburban",!0),V=(0,o.Z)(Q,2),X=V[0],Y=V[1],$=(0,u.Rh)("subway",!0),_=(0,o.Z)($,2),ee=_[0],te=_[1],ne=(0,u.Rh)("tram",!0),ae=(0,o.Z)(ne,2),re=ae[0],ce=ae[1],oe=(0,u.Rh)("bus",!0),se=(0,o.Z)(oe,2),ie=se[0],ue=se[1],le=(0,u.Rh)("ferry",!0),pe=(0,o.Z)(le,2),fe=pe[0],de=pe[1],ve=(0,i.UO)(),he=(0,i.s0)();(0,s.useEffect)((function(){function e(){return(e=(0,c.Z)((0,r.Z)().mark((function e(){var t,n,a,c,o,s,i,u,l,p,f,d,v,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ve.hasOwnProperty("id")||"string"!==typeof ve.id||9!==ve.id.length){e.next=25;break}return e.prev=1,e.next=4,fetch("https://station-api-jade.vercel.app/?id=".concat(ve.id));case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,e.next=10,n;case 10:a=e.sent,c=a.name,he("/arrivals/".concat(ve.id)),k(n),ke(ve.id,c,{}),document.title=navigator.language.startsWith("de")?"Ank\xfcnfte an ".concat(c):"Arrivals at ".concat(c),y([n]),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),console.debug(e.t0);case 23:e.next=74;break;case 25:if(!ve.hasOwnProperty("id")||"string"!==typeof ve.id||12!==ve.id.length){e.next=51;break}return e.prev=26,o="".concat(ve.id.slice(0,1)).concat(ve.id.slice(-8)),e.next=30,fetch("https://station-api-jade.vercel.app/?id=".concat(o));case 30:return s=e.sent,e.next=33,s.json();case 33:return i=e.sent,e.next=36,i;case 36:u=e.sent,l=u.name,he("/arrivals/".concat(o)),k(i),ke(o,l,{}),document.title=navigator.language.startsWith("de")?"Ank\xfcnfte an ".concat(l):"Arrivals at ".concat(l),y([i]),e.next=49;break;case 46:e.prev=46,e.t1=e.catch(26),console.debug(e.t1);case 49:e.next=74;break;case 51:return e.prev=51,p="900100011",e.next=55,fetch("https://station-api-jade.vercel.app/?id=".concat(p));case 55:return f=e.sent,e.next=58,f.json();case 58:return d=e.sent,e.next=61,d;case 61:v=e.sent,h=v.name,he("/arrivals/".concat(p)),k(d),ke(p,h,{}),document.title=navigator.language.startsWith("de")?"Ank\xfcnfte an ".concat(h):"Arrivals at ".concat(h),y([d]),e.next=74;break;case 71:e.prev=71,e.t2=e.catch(51),console.debug(e.t2);case 74:case"end":return e.stop()}}),e,null,[[1,20],[26,46],[51,71]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var be=(0,s.useRef)(null),ge=(0,s.useRef)(null),xe=(0,s.useRef)(null),ye=function(e){var t=j.filter((function(t){var n=!1;if(t.hasOwnProperty("provenance")&&t.provenance)for(var a=0;a<e.length;a++)if(t.line.name.toLowerCase().includes(e[a].toLowerCase())||t.provenance.toLowerCase().includes(e[a].toLowerCase())){n=!0;break}return n}));W(t)},me=function(e){var t=j.filter((function(t){var n=!0;if(t.hasOwnProperty("provenance")&&t.provenance)for(var a=0;a<e.length;a++)if(!t.line.name.toLowerCase().includes(e[a].toLowerCase())&&!t.provenance.toLowerCase().includes(e[a].toLowerCase())){n=!1;break}return n}));W(t)},we=function(){W(j)},Ze=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){var n,c,o,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,e.prev=1,!(n.length>4)){e.next=13;break}return e.next=5,fetch("https://station-api-jade.vercel.app/?station=".concat(n));case 5:return c=e.sent,e.next=8,c.json();case 8:o=e.sent,s=[Z].concat((0,a.Z)(o)),y(s),e.next=14;break;case 13:y([Z]);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.debug(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t,n,a){var c,o,s,i,u,f,d,v,h,b,g;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=n.startsWith("Berlin")?"BLN":"BBG",o=(0,p.g)(c),s="de",i=navigator.language,s=i.startsWith("de")?"de":"en",u="https://vbb-rest.vercel.app/stops/".concat(t,"/arrivals?language=").concat(s,"&duration=").concat(o,"&express=").concat("boolean"===typeof a.express?a.express.toString():U.toString(),"&regional=").concat("boolean"===typeof a.regional?a.regional.toString():K.toString(),"&suburban=").concat("boolean"===typeof a.suburban?a.suburban.toString():X.toString(),"&subway=").concat("boolean"===typeof a.subway?a.subway.toString():ee.toString(),"&tram=").concat("boolean"===typeof a.tram?a.tram.toString():re.toString(),"&bus=").concat("boolean"===typeof a.bus?a.bus.toString():ie.toString(),"&ferry=").concat("boolean"===typeof a.ferry?a.ferry.toString():fe.toString()),e.next=9,l.Z.get(u);case 9:return f=e.sent,e.next=12,f;case 12:d=e.sent,v=d.data,500===(h=d.status)||200!==h?(T("HTTP status code: ".concat(h)),C([])):(b=(new Date).toLocaleString("de-DE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",timeZone:"Europe/Berlin"}),g=v.arrivals,document.title="de"===s?"Ank\xfcnfte an ".concat(n):"Arrivals at ".concat(n),z(b),C(g),W(g),T(null)),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.debug(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,n,a){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:"timetable",children:[(0,d.jsx)(v,{filterStops:Ze,inputField:be}),(0,d.jsx)(h,{handleChange:function(e){k(e);var t=e.id,n=e.name;ke(t,n,{}),be.current.value="",ge.current.value="",xe.current.value="OR"},selection:n,stop:Z,mode:"arr"}),(0,d.jsx)(b,{handleSubmit:function(){ke(Z.id,Z.name,{}),be.current.value="",ge.current.value="",xe.current.value="OR"}}),(0,d.jsx)(g,{filterField:ge,filterSelector:xe,filterData:function(){var e=ge.current.value.split(" "),t=xe.current.value;e.length>0?"OR"===t?ye(e):me(e):we()},mode:"arr"}),(0,d.jsx)(f.Z,{products:[U,K,X,ee,re,ie,fe],productSetters:[q,M,Y,te,ce,ue,de],getData:function(e){return ke(Z.id,Z.name,e)}}),(0,d.jsx)(x,{stop:Z,data:P,error:N,date:O,mode:"arr"})]})}}}]);
//# sourceMappingURL=985.d47f8804.chunk.js.map