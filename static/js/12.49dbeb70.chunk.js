(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[12],{174:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(57),i=n(58),c=n(167),s=n(179),u=n(182),l=n(1),b=n(10),d=function(){function e(t,n,r){Object(a.a)(this,e),this.red=parseInt(t),this.green=parseInt(n),this.blue=parseInt(r)}return Object(i.a)(e,[{key:"getHexCode",value:function(){return"#"+this.red.toString(16)+this.green.toString(16)+this.blue.toString(16)}}]),e}(),p=new d(236,49,69),o=new d(66,141,88);t.default=function(e){var t=e.percent,n=e.children,a=Object(l.useState)(null),i=Object(r.a)(a,2),h=i[0],g=i[1],j=Object(l.useState)(null),f=Object(r.a)(j,2),x=f[0],O=f[1];return Object(l.useEffect)((function(){g(function(e){var t=o.red-p.red,n=o.green-p.green,r=o.blue-p.blue;return t=t*(e=1/(1+Math.exp(-10*(e-.4))))+p.red,n=n*e+p.green,r=r*e+p.blue,new d(t,n,r)}(t).getHexCode()),O(t<=.4?"Beginner":t<=.6?"Intermediate":t<=.8?"Advanced":"Perfected")}),[t]),Object(b.jsxs)(c.a,{alignItems:"center",children:[Object(b.jsx)(s.a,{h:"35px",w:{base:"50vw",md:"500px"},borderRadius:"xl",bg:"gray.400",children:Object(b.jsx)(s.a,{h:"100%",w:"calc(100%*"+t+")",borderRadius:"xl",bg:h,children:Object(b.jsxs)(u.a,{position:"relative",top:"3px",left:"10px",fontSize:"lg",whiteSpace:"nowrap",variant:"light-sm",children:[" ",x," "]})})}),n]})}}}]);
//# sourceMappingURL=12.49dbeb70.chunk.js.map