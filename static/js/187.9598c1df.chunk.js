"use strict";(self.webpackChunkvbb=self.webpackChunkvbb||[]).push([[187],{4187:function(r,e,n){n.r(e);var a=n(1413),t=n(885),l=n(9922);e.default=function(r){var e=r.remarks,n=function(r){if(null!==r&&void 0!==r){var e=r.substr(0,10).split("-"),n=(0,t.Z)(e,3),a=n[0],l=n[1],c=n[2],u=r.substr(11,5);return"".concat(c,".").concat(l,".").concat(a,", ").concat(u)}return null},c=function(r){var e=u(r);return o(e)},u=function(r){if(/<a.*href=".*".*>.*<\/a>/.test(r)){if(/<a.*href=".*" target="_blank" rel="noopener noreferrer[ ]*">.*<\/a>/.test(r)){return r.replace(/<a.*href="(.*)" target="_blank" rel="noopener noreferrer[ ]*">(.*)<\/a>/g,"$2 ($1)")}if(/<a.*href=".*" target="_blank" rel="noopener[ ]*">.*<\/a>/.test(r)){return r.replace(/<a.*href="(.*)" target="_blank" rel="noopener[ ]*">(.*)<\/a>/g,"$2 ($1)")}if(/<a.*href?".*" target="_blank">.*<\/a>/.test(r)){return r.replace(/<a.*href="(.*)" target="_blank">(.*)<\/a>/g,"$2 ($1)")}return r.replace(/<a.*href="(.*)".*>(.*)<\/a>/g,"$2 ($1)")}return r},o=function(r){var e=r.replace(/(\[br\]*)/g," ").replace(/&lt;/g,"<");return e=e.replace(/&gt;/g,">")},i=e.filter((function(r){return"warning"===r.type})),f=i.map((function(r){var e=n(r.validFrom),a=n(r.validUntil),t=c(r.summary),l=c(r.text);return"".concat(e||""," - ").concat(a||"",": ").concat(t||"",", ").concat(l||"")})).join("\n");return(0,l.tZ)("div",{className:"warning",sx:(0,a.Z)({},{textAlign:"center",gridColumn:["13 / span 6","23 / span 1"]}),children:i.length>0?(0,l.tZ)("span",{className:"fas fa-exclamation-triangle",title:f}):null})}}}]);
//# sourceMappingURL=187.9598c1df.chunk.js.map