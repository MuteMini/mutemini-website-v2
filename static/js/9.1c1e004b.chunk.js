(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[9,1],{130:function(e,r,n){"use strict";n.r(r);var t=n(92),a=n(107),i=n(45),c=n(75),o=n(104),l=n(5),s=n(1);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var d=Object(t.a)((function(e,r){var n=Object(a.a)("Link",e),t=Object(i.b)(e),l=t.className,d=t.isExternal,m=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["className","isExternal"]);return s.createElement(c.a.a,u({target:d?"_blank":void 0,rel:d?"noopener noreferrer":void 0,ref:r,className:Object(o.a)("chakra-link",l)},m,{__css:n}))}));l.a&&(d.displayName="Link");var m=n(173),f=n(61),p=n(11);function b(e){return Object(p.jsx)(d,{to:e.link,as:f.b,pos:"inherit",style:{webkitTextStroke:"1.5px var(--chakra-colors-palette-900)",whiteSpace:"nowrap"},_hover:{textShadow:"4px 4px 3px lightgray",transform:"scale(1.1)"},transition:"text-shadow 0.5s linear, transform 0.4s ease",fontSize:"2xl",children:e.children})}r.default=function(e){var r=function(e){return Object(p.jsxs)(m.a,{as:"nav",pos:"sticky",borderSize:1,padding:2,spacing:7,children:[e.children,Object(p.jsx)(b,{link:"/about",children:" About Me "}),Object(p.jsx)(b,{link:"/project",children:" Projects "}),Object(p.jsx)(b,{link:"/contact",children:" Contacts "})]})};return e.mainpage?Object(p.jsx)(r,{children:Object(p.jsx)(b,{link:"/",children:" Homepage "})}):Object(p.jsx)(r,{})}},173:function(e,r,n){"use strict";n.d(r,"a",(function(){return b})),n.d(r,"b",(function(){return h}));var t=n(2),a=n(75),i=n(92),c=n(104),o=n(5),l=n(1);n(60);var s=n(25);Object.freeze(["base","sm","md","lg","xl","2xl"]);function u(e,r){return Object(o.b)(e)?e.map((function(e){return null===e?null:r(e)})):Object(o.g)(e)?Object(s.e)(e).reduce((function(n,t){return n[t]=r(e[t]),n}),{}):null!=e?r(e):null}var d="& > *:not(style) ~ *:not(style)";function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var f=function(e){return l.createElement(a.a.div,m({className:"chakra-stack__item"},e,{__css:m({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},p=Object(i.a)((function(e,r){var n=e.isInline,i=e.direction,o=e.align,s=e.justify,p=e.spacing,b=void 0===p?"0.5rem":p,h=e.wrap,g=e.children,j=e.divider,v=e.className,x=e.shouldWrapChildren,y=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),O=n?"row":null!=i?i:"column",k=l.useMemo((function(){return function(e){var r=e.spacing,n=e.direction,a={column:{marginTop:r,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:r},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:r,marginStart:0},"row-reverse":{marginTop:0,marginEnd:r,marginBottom:0,marginStart:0}};return Object(t.a)({flexDirection:n},d,u(n,(function(e){return a[e]})))}({direction:O,spacing:b})}),[O,b]),w=l.useMemo((function(){return function(e){var r=e.spacing,n=e.direction,t={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":u(n,(function(e){return t[e]}))}}({spacing:b,direction:O})}),[b,O]),E=!!j,_=!x&&!E,S=function(e){return l.Children.toArray(e).filter((function(e){return l.isValidElement(e)}))}(g),W=_?S:S.map((function(e,r){var n="undefined"!==typeof e.key?e.key:r,t=r+1===S.length,a=x?l.createElement(f,{key:n},e):e;if(!E)return a;var i=t?null:l.cloneElement(j,{__css:w});return l.createElement(l.Fragment,{key:n},a,i)})),N=Object(c.a)("chakra-stack",v);return l.createElement(a.a.div,m({ref:r,display:"flex",alignItems:o,justifyContent:s,flexDirection:k.flexDirection,flexWrap:h,className:N,__css:E?{}:Object(t.a)({},d,k[d])},y),W)}));o.a&&(p.displayName="Stack");var b=Object(i.a)((function(e,r){return l.createElement(p,m({align:"center"},e,{direction:"row",ref:r}))}));o.a&&(b.displayName="HStack");var h=Object(i.a)((function(e,r){return l.createElement(p,m({align:"center"},e,{direction:"column",ref:r}))}));o.a&&(h.displayName="VStack")}}]);
//# sourceMappingURL=9.1c1e004b.chunk.js.map