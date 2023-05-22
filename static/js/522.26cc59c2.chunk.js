"use strict";(self.webpackChunkvbb=self.webpackChunkvbb||[]).push([[522],{7522:function(n,t,r){r.r(t),r.d(t,{getDelay:function(){return v},getPlanTime:function(){return y},getTime:function(){return Z}});var e=r(9439),a=r(2791),i=r(4373),c=r(9922),o=(0,a.lazy)((function(){return r.e(599).then(r.bind(r,8705))})),u=(0,a.lazy)((function(){return r.e(305).then(r.bind(r,6305))})),l=(0,a.lazy)((function(){return r.e(272).then(r.bind(r,5272))})),s=(0,a.lazy)((function(){return r.e(48).then(r.bind(r,1048))})),d=(0,a.lazy)((function(){return Promise.resolve().then(r.bind(r,6049))})),f=(0,a.lazy)((function(){return r.e(302).then(r.bind(r,6302))})),h=(0,a.lazy)((function(){return r.e(734).then(r.bind(r,734))})),p=(0,a.lazy)((function(){return r.e(619).then(r.bind(r,619))})),m=(0,a.lazy)((function(){return r.e(776).then(r.bind(r,7776))})),b=(0,a.lazy)((function(){return r.e(558).then(r.bind(r,4558))})),g=(0,a.lazy)((function(){return r.e(525).then(r.bind(r,1525))})),v=function(n,t){if(null!=n){var r=Math.abs(n/60);return Math.round(r)}return t?"X":"?"},y=function(n,t,r){var e=Number(n.substring(0,2)),a=Number(n.substring(3,5));(a="+"===r?a-t:"\u2013"===r?a+t:a)<0&&(a+=60,e-=1),a>59&&(a-=60,e+=1),e<0&&(e+=24),e>23&&(e-=24);var i=e<10?"0".concat(e):"".concat(e),c=a<10?"0".concat(a):"".concat(a);return"".concat(i,":").concat(c)},Z=function(n){return null!=n?n.substring(11,16):""};t.default=function(n){var t=(0,a.useState)(null),r=(0,e.Z)(t,2),k=r[0],x=r[1],z=(0,a.useState)(void 0),C=(0,e.Z)(z,2),M=C[0],w=C[1],N=(0,a.useState)(null),B=(0,e.Z)(N,2),P=B[0],T=B[1];(0,a.useEffect)((function(){!function(){var t=4*Math.atan(1),r=n.arr,e=r.currentTripPosition,a=r.stop,i=r.line;if(e){var c=e.latitude,o=e.longitude;fetch("https://vbb-rest.vercel.app/locations/nearby?latitude=".concat(c,"&longitude=").concat(o,"&results=10&language=de")).then((function(n){return n.json()})).then((function(n){return n.filter((function(n){return!0===n.products[i.product]}))})).then((function(n){n.length>0&&n[0].name&&x(n[0].name)})).catch((function(n){return console.debug(n)}));var u=a.location,l=t*c/180,s=t*u.latitude/180,d=t*(o-u.longitude)/180,f=Math.sin(l)*Math.sin(s)+Math.cos(l)*Math.cos(s)*Math.cos(d),h=Math.acos(f);T(60*(180*h/t)*1.1515)}}()}),[]),(0,a.useEffect)((function(){fetch("https://vbb-rest.vercel.app/trips/".concat(n.arr.tripId,"?language=de")).then((function(n){return n.json()})).then((function(n){return w(n.trip)})).catch((function(n){return console.debug(n)}))}),[]);var X,A,I=n.arr.cancelled?v(n.arr.delay,n.arr.cancelled):v(n.arr.delay,!1);"number"===typeof n.arr.delay&&"number"===typeof I?(A=n.arr.delay<0?"\u2013":n.arr.delay>0?"+":"\xb1",X="".concat(A).concat(I)):(X=I,A="\xb1");var S,W=Z(n.arr.when);null!=n.arr.when&&null!=n.arr.delay?S=y(W,Number(I),A):null!=n.arr.when&&"?"===I?(S=W,W=""):S=Z(n.arr.formerScheduledWhen)||Z(n.arr.scheduledWhen)||Z(n.arr.plannedWhen);var j=n.arr,E=j.line,F=j.provenance,D=j.remarks,q=j.platform;return(0,c.BX)(a.Fragment,{children:[(0,c.BX)("div",{className:"row",sx:{display:"grid",gridTemplateColumns:["repeat(24,1fr)","repeat(24,1fr)","repeat(26,1fr)"]},children:[(0,c.tZ)(l,{time:S,class:"plantime"}),(0,c.tZ)(l,{time:W,class:"realtime"}),(0,c.tZ)("div",{className:"delay",sx:{textAlign:["center","center","right"],gridColumn:["17 / span 8","5 / span 2"]},children:X}),(0,c.tZ)(s,{line:E}),(0,c.tZ)(d,{line:E}),(0,c.tZ)("div",{className:"direction",sx:{textAlign:"left",gridColumn:["8 / span 13","11 / span 8"]},children:F}),(0,c.tZ)("div",{className:"platform",sx:{textAlign:"center",gridColumn:["22 / span 3","19 / span 2"]},children:q}),(0,c.tZ)(f,{remarks:D}),(0,c.tZ)(h,{remarks:D}),(0,c.tZ)(p,{remarks:D}),(0,c.tZ)(m,{remarks:D}),E.operator?(0,c.tZ)(o,{operator:E.operator}):(0,c.tZ)("div",{})]},n.arr.tripId),(0,c.BX)("div",{className:"row row-add",sx:{display:"grid",gridTemplateColumns:"repeat(24, 1fr)",borderBottom:["1px solid #ccc","1px solid #ccc","none"]},children:[k&&P&&(0,c.tZ)(i.r,{position:k,distance:P}),M&&(0,c.tZ)(u,{trip:M,stopId:n.arr.stop.id,mode:"arr"}),(0,c.tZ)(b,{remarks:D}),(0,c.tZ)(g,{remarks:D})]},"add:".concat(n.arr.tripId))]})}},4373:function(n,t,r){r.d(t,{r:function(){return a}});var e=r(9922);function a(n){var t=n.position,r=n.distance;return t&&r?(0,e.BX)("div",{sx:{gridColumn:"1 / 25"},children:[navigator.language.startsWith("de")?"Aktuelle Position: ":"Current Position: ",(0,e.tZ)("span",{children:t})," ","(",r.toFixed(3)," km)"]}):(0,e.tZ)("div",{})}}}]);
//# sourceMappingURL=522.26cc59c2.chunk.js.map