"use strict";(self.webpackChunkvbb=self.webpackChunkvbb||[]).push([[984],{5984:function(n,r,e){e.r(r);var t=e(2791),a=e(9922),l=(0,t.lazy)((function(){return e.e(868).then(e.bind(e,2868))})),i=(0,t.lazy)((function(){return e.e(862).then(e.bind(e,8862))})),c=(0,t.lazy)((function(){return e.e(35).then(e.bind(e,8035))})),s=(0,t.lazy)((function(){return e.e(891).then(e.bind(e,891))})),d=(0,t.lazy)((function(){return e.e(918).then(e.bind(e,9918))})),u=(0,t.lazy)((function(){return e.e(50).then(e.bind(e,5050))})),o=(0,t.lazy)((function(){return e.e(871).then(e.bind(e,9871))})),m=(0,t.lazy)((function(){return e.e(173).then(e.bind(e,4173))}));r.default=function(n){var r,e=function(n,r){return null!=n?Math.floor(n/60):r?"X":"?"},h=function(n){return null!=n?n.substring(11,16):""};r=n.arr.cancelled?e(n.arr.delay,n.arr.cancelled):e(n.arr.delay,!1);var p,f=h(n.arr.when);null!=n.arr.when&&null!=n.arr.delay?p=function(n,r){var e=Number(n.substring(0,2)),t=Number(n.substring(3,5));"number"===typeof r&&((t-=r)<0&&(t+=60,e-=1),t>59&&(t-=60,e+=1),e<0&&(e+=24),e>23&&(e-=24));var a=e<10?"0".concat(e):"".concat(e),l=t<10?"0".concat(t):"".concat(t);return"".concat(a,":").concat(l)}(f,r):null!=n.arr.when&&"?"===r?(p=f,f=""):p=h(n.arr.formerScheduledWhen)||h(n.arr.scheduledWhen);var b=n.arr,g=b.line,v=b.provenance,y=b.remarks,Z=b.platform,x=g.name;return(0,a.BX)(t.Fragment,{children:[(0,a.BX)("div",{className:"row",sx:{display:"grid",gridTemplateColumns:"repeat(24,1fr)"},children:[(0,a.tZ)(l,{time:p,class:"plantime"}),(0,a.tZ)(l,{time:f,class:"realtime"}),(0,a.tZ)("div",{className:"delay",sx:{textAlign:["center","center","right"],gridColumn:["17 / span 8","5 / span 2"]},children:r}),(0,a.tZ)(i,{line:g}),(0,a.tZ)("div",{className:"line",sx:{textAlign:"left",gridColumn:["2 / span 6","8 / span 3"]},children:x}),(0,a.tZ)("div",{className:"direction",sx:{textAlign:"left",gridColumn:["8 / span 13","11 / span 8"]},children:v}),(0,a.tZ)("div",{className:"platform",sx:{textAlign:"center",gridColumn:["22 / span 3","19 / span 2"]},children:Z}),(0,a.tZ)(c,{remarks:y}),(0,a.tZ)(s,{remarks:y}),(0,a.tZ)(d,{remarks:y}),(0,a.tZ)(u,{remarks:y})]},n.arr.tripId),(0,a.BX)("div",{className:"row row-add",sx:{display:"grid",gridTemplateColumns:"repeat(24, 1fr)",borderBottom:["1px solid #ccc","1px solid #ccc","none"]},children:[(0,a.tZ)(o,{remarks:y}),(0,a.tZ)(m,{remarks:y})]},"add:".concat(n.arr.tripId))]})}}}]);
//# sourceMappingURL=984.d8d22198.chunk.js.map