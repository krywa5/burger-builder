(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{116:function(e,n,r){e.exports={Order:"Order_Order__1WGDM"}},120:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),i=r(18),o=r(30),c=r(50),u=r(116),d=r.n(u),l=function(e){var n=e.ingredients,r=e.price,t=[];for(var i in n)t.push({name:i,amount:n[i]});var o=t.map(function(e){return a.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return a.a.createElement("div",{className:d.a.Order},a.a.createElement("p",null,"Ingredients: ",o),a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,"USD ",Number.parseFloat(r).toFixed(2))))},s=r(32),p=r(6);n.default=Object(i.b)(function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onFetchOrders:function(n,r){return e(p.i(n,r))}}})(Object(c.a)(function(e){var n=e.onFetchOrders,r=e.orders,i=e.loading,o=e.token,c=e.userId;return Object(t.useEffect)(function(){n(o,c)},[]),a.a.createElement("div",null,i?a.a.createElement(s.a,null):r.map(function(e){return a.a.createElement(l,{key:e.id,ingredients:e.ingredients,price:e.price})}))},o.a))}}]);
//# sourceMappingURL=5.16315059.chunk.js.map