(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64],{26635:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/startup/[...id]",function(){return r(67034)}])},74995:function(e,t,r){"use strict";r.d(t,{bZ:function(){return d}});var s=r(67294),l=r(80405),n=r(40536),a=r(16098),c=r(62613),i=r(21128),o=r(84504),u=r(82174),f=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,s=Object.getOwnPropertySymbols(e);l<s.length;l++)0>t.indexOf(s[l])&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(r[s[l]]=e[s[l]]);return r};let d=(0,s.memo)((0,s.forwardRef)((e,t)=>{let{className:r,id:l,severity:o,as:d="h3",classes:p={},style:g,small:h,title:b,description:_,closable:x=!1,isClosed:y,onClose:v}=e,N=f(e,["className","id","severity","as","classes","style","small","title","description","closable","isClosed","onClose"]);(0,c.assert)();let O=(0,u.t)({explicitlyProvidedId:l,defaultIdPrefix:"fr-alert"}),[E,j]=(0,s.useState)(null!=y&&y),[w,P]=(0,s.useState)(null),k=(0,s.useRef)(!1),C=(0,s.useRef)(!1);(0,s.useEffect)(()=>{void 0!==y&&j(e=>(e&&!y&&(k.current=!0,C.current=!0),y))},[y]),(0,s.useEffect)(()=>{k.current&&null!==w&&(k.current=!1,w.focus())},[w]);let S=(0,i.O)(()=>{void 0===y?(j(!0),null==v||v()):v()}),{t:I}=m();return E?null:s.createElement("div",Object.assign({id:O,className:(0,a.cx)(n.fr.cx("fr-alert","fr-alert--".concat(o),{"fr-alert--sm":h}),p.root,r),style:g},C.current&&{role:"alert"},{ref:t},N),void 0!==b&&s.createElement(d,{className:(0,a.cx)(n.fr.cx("fr-alert__title"),p.title)},b),s.createElement("string"==typeof _?"p":"div",{className:p.description},_),x&&s.createElement("button",{ref:P,className:(0,a.cx)(n.fr.cx("fr-link--close","fr-link"),p.close),onClick:S},I("hide message")))}));d.displayName=(0,l.r)({Alert:d}),t.ZP=d;let{useTranslation:m,addAlertTranslations:p}=(0,o.Lf)({componentName:(0,l.r)({Alert:d}),frMessages:{"hide message":"Masquer le message"}});p({lang:"en",messages:{"hide message":"Hide the message"}}),p({lang:"es",messages:{"hide message":"Occultar el mesage"}})},67034:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return o}});var s=r(85893),l=r(9008),n=r.n(l),a=r(74995),c=r(95862),i=r(59455),o=!0;t.default=e=>{let{report:t,id:r}=e;return t&&0!==t.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n(),{children:(0,s.jsxs)("title",{children:[r," - ",i.TN]})}),(0,s.jsxs)("h1",{children:["Tableau de bord : ",r]}),(0,s.jsx)(c.A,{report:t})]}):(0,s.jsx)(a.ZP,{severity:"error",title:'Impossible de trouver le rapport pour "'.concat(r,'"')})}}},function(e){e.O(0,[599,735,443,862,888,774,179],function(){return e(e.s=26635)}),_N_E=e.O()}]);