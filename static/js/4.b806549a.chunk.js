(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{112:function(e,t,a){"use strict";var n=a(0),l=a.n(n),u=a(113),i=a.n(u);t.a=function(e){var t=e.invalid,a=e.shouldValidate,n=e.touched,u=e.elementType,r=e.elementConfig,c=e.value,o=e.changed,s=e.label,d=null,m=[i.a.InputElement];switch(t&&a&&n&&m.push(i.a.Invalid),u){case"input":d=l.a.createElement("input",Object.assign({className:m.join(" ")},r,{value:c,onChange:o}));break;case"textarea":d=l.a.createElement("textarea",Object.assign({className:i.a.InputElement},r,{value:c,onChange:o}));break;case"select":d=l.a.createElement("select",{className:i.a.InputElement,value:c,onChange:o},r.options.map(function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:d=l.a.createElement("input",Object.assign({className:i.a.InputElement},r,{value:c}))}return l.a.createElement("div",{className:i.a.Input},l.a.createElement("label",{className:i.a.Label},s),d)}},113:function(e,t,a){e.exports={Input:"Input_Input__2834t",Label:"Input_Label__-XXEl",InputElement:"Input_InputElement__3dOoi",Invalid:"Input_Invalid__1rViZ"}},115:function(e,t,a){e.exports={Auth:"Auth_Auth__1yb_r"}},118:function(e,t,a){"use strict";a.r(t);var n=a(29),l=a(33),u=a(0),i=a.n(u),r=a(18),c=a(112),o=a(39),s=a(32),d=a(115),m=a.n(d),p=a(6),h=a(9),v=a(10),f={name:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}};t.default=Object(r.b)(function(e){return{loading:e.auth.loading,error:e.auth.error,isAuth:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},function(e){return{onAuth:function(t,a,n){return e(p.b(t,a,n))},onSetAuthRedirectPath:function(){return e(p.v("/"))}}})(function(e){var t=e.onAuth,a=e.onSetAuthRedirectPath,r=e.loading,d=e.error,p=e.isAuth,b=e.buildingBurger,g=e.authRedirectPath,E=Object(u.useState)(f),I=Object(l.a)(E,2),_=I[0],O=I[1],j=Object(u.useState)(!1),y=Object(l.a)(j,2),w=y[0],A=y[1],C=[];for(var N in _)C.push({id:N,config:_[N]});var S=C.map(function(e){return i.a.createElement(c.a,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){e.preventDefault();var a=Object(h.b)(_,Object(n.a)({},t,Object(h.b)(_[t],{value:e.target.value,valid:Object(h.a)(e.target.value,_[t].validation),touched:!0})));O(a)}(t,e.id)}})});return Object(u.useEffect)(function(){b||"/"===g||a()},[]),p?i.a.createElement(v.a,{to:g}):i.a.createElement("div",{className:m.a.Auth},r?i.a.createElement(s.a,null):i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(_.name.value,_.password.value,w)}},S,i.a.createElement(o.a,{btnType:"Success"},"Submit")),d&&i.a.createElement("p",{role:"alert"},d.replaceAll("_"," ").toLowerCase())),i.a.createElement(o.a,{btnType:"Danger",clicked:function(){A(function(e){return!e})}},"SWITCH TO ",w?"SIGN IN":"SIGN UP"))})}}]);
//# sourceMappingURL=4.b806549a.chunk.js.map