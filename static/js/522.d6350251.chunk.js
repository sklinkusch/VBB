"use strict";(self.webpackChunkvbb=self.webpackChunkvbb||[]).push([[522],{7522:function(n,r,e){e.r(r),e.d(r,{getDelay:function(){return h},getPlanTime:function(){return f},getTime:function(){return p}});var t=e(2791),a=e(9922),l=(0,t.lazy)((function(){return e.e(272).then(e.bind(e,5272))})),i=(0,t.lazy)((function(){return e.e(48).then(e.bind(e,1048))})),c=(0,t.lazy)((function(){return e.e(302).then(e.bind(e,6302))})),s=(0,t.lazy)((function(){return e.e(734).then(e.bind(e,734))})),u=(0,t.lazy)((function(){return e.e(619).then(e.bind(e,619))})),d=(0,t.lazy)((function(){return e.e(776).then(e.bind(e,7776))})),o=(0,t.lazy)((function(){return e.e(558).then(e.bind(e,4558))})),m=(0,t.lazy)((function(){return e.e(525).then(e.bind(e,1525))})),h=function(n,r){return null!=n?Math.floor(n/60):r?"X":"?"},f=function(n,r){var e=Number(n.substring(0,2)),t=Number(n.substring(3,5));(t-=r)<0&&(t+=60,e-=1),t>59&&(t-=60,e+=1),e<0&&(e+=24),e>23&&(e-=24);var a=e<10?"0".concat(e):"".concat(e),l=t<10?"0".concat(t):"".concat(t);return"".concat(a,":").concat(l)},p=function(n){return null!=n?n.substring(11,16):""};r.default=function(n){var r;r=n.arr.cancelled?h(n.arr.delay,n.arr.cancelled):h(n.arr.delay,!1);var e,b=p(n.arr.when);null!=n.arr.when&&null!=n.arr.delay?e=f(b,Number(r)):null!=n.arr.when&&"?"===r?(e=b,b=""):e=p(n.arr.formerScheduledWhen)||p(n.arr.scheduledWhen)||p(n.arr.plannedWhen);var g=n.arr,v=g.line,y=g.provenance,Z=g.remarks,x=g.platform,k=v.name;return(0,a.BX)(t.Fragment,{children:[(0,a.BX)("div",{className:"row",sx:{display:"grid",gridTemplateColumns:"repeat(24,1fr)"},children:[(0,a.tZ)(l,{time:e,class:"plantime"}),(0,a.tZ)(l,{time:b,class:"realtime"}),(0,a.tZ)("div",{className:"delay",sx:{textAlign:["center","center","right"],gridColumn:["17 / span 8","5 / span 2"]},children:r}),(0,a.tZ)(i,{line:v}),(0,a.tZ)("div",{className:"line",sx:{textAlign:"left",gridColumn:["2 / span 6","8 / span 3"]},children:k}),(0,a.tZ)("div",{className:"direction",sx:{textAlign:"left",gridColumn:["8 / span 13","11 / span 8"]},children:y}),(0,a.tZ)("div",{className:"platform",sx:{textAlign:"center",gridColumn:["22 / span 3","19 / span 2"]},children:x}),(0,a.tZ)(c,{remarks:Z}),(0,a.tZ)(s,{remarks:Z}),(0,a.tZ)(u,{remarks:Z}),(0,a.tZ)(d,{remarks:Z})]},n.arr.tripId),(0,a.BX)("div",{className:"row row-add",sx:{display:"grid",gridTemplateColumns:"repeat(24, 1fr)",borderBottom:["1px solid #ccc","1px solid #ccc","none"]},children:[(0,a.tZ)(o,{remarks:Z}),(0,a.tZ)(m,{remarks:Z})]},"add:".concat(n.arr.tripId))]})}}}]);
//# sourceMappingURL=522.d6350251.chunk.js.map