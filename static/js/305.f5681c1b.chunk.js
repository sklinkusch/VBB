"use strict";(self.webpackChunkvbb=self.webpackChunkvbb||[]).push([[305],{6305:(e,r,a)=>{a.r(r),a.d(r,{default:()=>t});var n=a(9922);const t=function(e){let{trip:r,stopId:a,mode:t}=e;const l=r.stopovers.find((e=>e.stop.id===a)),s=l?r.stopovers.indexOf(l):-1,p=e=>e.split("T")[1].substring(0,5),o=e=>{const r=Math.round(e/60);return 0===r?"\xb10":e<0?"-".concat(Math.abs(r)):"+".concat(Math.abs(r))},c=e=>0===e?"blue":e<0?"green":"red";return(0,n.tZ)("div",{sx:{gridColumn:"1 / span 24",fontSize:"0.8rem",textAlign:"left",hyphens:"auto"},lang:"de",children:r.stopovers&&r.stopovers.length>0&&r.stopovers.map(((e,a)=>{const t=e.cancelled?{textDecorationLine:"line-through"}:{},l=a===s?{fontWeight:700}:{};return(0,n.BX)("span",{children:[(0,n.tZ)("span",{sx:{...t,...l},children:e.stop.name}),a<=s&&(e.plannedDeparture?(0,n.tZ)("span",{sx:{mx:"0.3em",...t,...l},children:p(e.plannedDeparture)}):e.plannedArrival&&(0,n.tZ)("span",{sx:{mx:"0.3em",...t,...l},children:p(e.plannedArrival)})),a>s&&(e.plannedArrival?(0,n.tZ)("span",{sx:{mx:"0.3em",...t},children:p(e.plannedArrival)}):e.plannedDeparture&&(0,n.tZ)("span",{sx:{mx:"0.3em",...t},children:p(e.plannedDeparture)})),a<=s&&("number"!==typeof e.departureDelay||e.cancelled?"number"===typeof e.arrivalDelay&&!e.cancelled&&(0,n.tZ)("span",{sx:{mr:"0.2em",...l,color:c(e.arrivalDelay)},children:o(e.arrivalDelay)}):(0,n.tZ)("span",{sx:{mr:"0.2em",...l,color:c(e.departureDelay)},children:o(e.departureDelay)})),a>s&&("number"!==typeof e.arrivalDelay||e.cancelled?"number"===typeof e.departureDelay&&!e.cancelled&&(0,n.tZ)("span",{sx:{mr:"0.2em",color:c(e.departureDelay)},children:o(e.departureDelay)}):(0,n.tZ)("span",{sx:{mr:"0.2em",color:c(e.arrivalDelay)},children:o(e.arrivalDelay)})),a!==r.stopovers.length-1&&(0,n.tZ)("span",{sx:{mr:"0.3em"},children:"\u2013"})]},"".concat(a,"_").concat(e.stop.name))}))})}}}]);
//# sourceMappingURL=305.f5681c1b.chunk.js.map