(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2HgXv",BreadTop:"BurgerIngredient_BreadTop___8pWp",Seeds1:"BurgerIngredient_Seeds1__3OCvM",Seeds2:"BurgerIngredient_Seeds2__2mF6Q",Meat:"BurgerIngredient_Meat__59Ev0",Cheese:"BurgerIngredient_Cheese__3dSTl",Salad:"BurgerIngredient_Salad__MUWpe",Bacon:"BurgerIngredient_Bacon__2LIjI"}},function(e,t,a){e.exports={Input:"Input_Input__1U555",Label:"Input_Label__3EdNE",InputElement:"Input_InputElement__xiMn0",Invalid:"Input_Invalid__1LxyZ"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__2ruwE",Open:"SideDrawer_Open__2E1aV",Close:"SideDrawer_Close__o2cwV",Logo:"SideDrawer_Logo__2d6l_"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__2_e3_",Label:"BuildControl_Label__ny-hQ",Less:"BuildControl_Less__23Mfv",More:"BuildControl_More__1PWO7"}},,,function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__2uAaX",Logo:"Toolbar_Logo__oBD3Q",DesktopOnly:"Toolbar_DesktopOnly__HoXc7"}},,,function(e,t,a){e.exports={ContactData:"ContactData_ContactData__31lPE"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2-R4t",active:"NavigationItem_active__1XTWt"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__LV2F4",OrderButton:"BuildControls_OrderButton__3Ug_L",enable:"BuildControls_enable__3781w"}},function(e,t,a){e.exports={Button:"Button_Button__peX4q",Success:"Button_Success__2g9g_",Danger:"Button_Danger__1p-tJ"}},,,,,,,,function(e,t,a){e.exports={Content:"Layout_Content__NAGMf"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__s-da0"}},,function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__35OC2"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__16wy0"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__1DHp_"}},function(e,t,a){e.exports={Burger:"Burger_Burger__1ZF9t"}},function(e,t,a){e.exports={Modal:"Modal_Modal__Xaeey"}},,function(e,t,a){e.exports={Loader:"Spinner_Loader__wjPoh",load8:"Spinner_load8__1XFR9"}},function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__2wXSv"}},function(e,t,a){e.exports={Order:"Order_Order__3_u8p"}},,,function(e,t,a){e.exports=a(76)},,,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),i=a.n(l),o=(a(53),a(2)),c=a(3),s=a(5),u=a(4),d=a(6),p=function(e){return e.children},m=a(32),h=a.n(m),g=a(18),v=a.n(g),f=a(33),b=a.n(f),_=a(34),E=a.n(_),y=function(e){return r.a.createElement("div",{className:E.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:b.a,alt:"MyBurger"}))},C=a(22),k=a.n(C),O=a(79),j=function(e){return r.a.createElement("li",{className:k.a.NavigationItem},r.a.createElement(O.a,{to:e.link,exact:!0,activeClassName:k.a.active},e.children))},w=a(36),S=a.n(w),N=function(e){return r.a.createElement("ul",{className:S.a.NavigationItems},r.a.createElement(j,{link:"/"},"Burger Builder"),r.a.createElement(j,{link:"/orders"},"Orders"))},B=a(37),I=a.n(B),x=function(e){return r.a.createElement("div",{className:I.a.DrawerToggle,onClick:e.clicked},r.a.createElement("span",null))},D=function(e){return r.a.createElement("header",{className:v.a.Toolbar},r.a.createElement(x,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:v.a.Logo},r.a.createElement(y,null)),r.a.createElement("nav",{className:v.a.DesktopOnly},r.a.createElement(N,null)))},T=a(14),L=a.n(T),H=a(38),M=a.n(H),P=function(e){return e.show?r.a.createElement("div",{className:M.a.Backdrop,onClick:e.clicked}):null},F=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),r.a.createElement(p,null,r.a.createElement(P,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:L.a.Logo},r.a.createElement(y,null)),r.a.createElement("nav",null,r.a.createElement(N,null))))},A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(D,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(F,{closed:this.sideDrawerClosedHandler,open:this.state.showSideDrawer}),r.a.createElement("main",{className:h.a.Content},this.props.children))}}]),t}(n.Component),V=a(11),R=a(45),U=a(39),q=a.n(U),W=a(12),X=a.n(W),z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:X.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:X.a.BreadTop},r.a.createElement("div",{className:X.a.Seeds1}),r.a.createElement("div",{className:X.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:X.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:X.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:X.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:X.a.Bacon});break;default:e=null}return e}}]),t}(n.Component),J=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(R.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(z,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:q.a.Burger},r.a.createElement(z,{type:"bread-top"}),t,r.a.createElement(z,{type:"bread-bottom"}))},Q=a(23),Y=a.n(Q),Z=a(15),$=a.n(Z),G=function(e){return r.a.createElement("div",{className:$.a.BuildControl},r.a.createElement("div",{className:$.a.Label},e.label),r.a.createElement("button",{className:$.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:$.a.More,onClick:e.added},"More"))},K=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ee=function(e){return r.a.createElement("div",{className:Y.a.BuildControls},r.a.createElement("p",null,"Current price: ",r.a.createElement("strong",null,e.price.toFixed(2))),K.map(function(t){return r.a.createElement(G,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:Y.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},te=a(40),ae=a.n(te),ne=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(P,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:ae.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(n.Component),re=a(24),le=a.n(re),ie=function(e){return r.a.createElement("button",{disabled:e.disabled,className:[le.a.Button,le.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},oe=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])});return r.a.createElement(p,null,r.a.createElement("h3",null,"Your order"),r.a.createElement("p",null,"A delicious burger with following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.priceTotal.toFixed(2)+"$")),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement(ie,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(ie,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(n.Component),ce=a(41),se=a.n(ce).a.create({baseURL:"https://react-burger-app-da7f2.firebaseio.com/"}),ue=a(42),de=a.n(ue),pe=function(e){return r.a.createElement("div",{className:de.a.Loader},"Loading...")},me=function(e,t){return function(a){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(d.a)(n,a),Object(c.a)(n,[{key:"componentWillMount",value:function(){var e=this;this.requestInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.responseInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.requestInterceptor),t.interceptors.response.eject(this.responseInterceptor)}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(ne,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),n}(n.Component)},he={salad:.5,cheese:.4,meat:1.3,bacon:.7},ge=me(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:5,purchasable:!1,purchasing:!1,loading:!1,error:!1},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(V.a)({},a.state.ingredients);n[e]=t;var r=he[e],l=a.state.totalPrice+r;a.setState({totalPrice:l,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(V.a)({},a.state.ingredients);r[e]=n;var l=he[e],i=a.state.totalPrice-l;a.setState({totalPrice:i,ingredients:r}),a.updatePurchaseState(r)}},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){var e=[];for(var t in a.state.ingredients)e.push(encodeURIComponent(t)+"="+encodeURIComponent(a.state.ingredients[t]));e.push("price="+a.state.totalPrice);var n=e.join("&");a.props.history.push({pathname:"/checkout",search:"?"+n})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;se.get("https://react-burger-app-da7f2.firebaseio.com/ingredients.json").then(function(t){e.setState({ingredients:t.data})}).catch(function(t){e.setState({error:!0})})}},{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purchasable:t>0})}},{key:"purchaseHandler",value:function(){this.setState({purchasing:!0})}},{key:"render",value:function(){var e=Object(V.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",null,"Ingredients can't be loaded"):r.a.createElement(pe,null);return this.state.ingredients&&(n=r.a.createElement(p,null,r.a.createElement(J,{ingredients:this.state.ingredients}),r.a.createElement(ee,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,price:this.state.totalPrice,ordered:this.purchaseHandler.bind(this)})),a=r.a.createElement(oe,{ingredients:this.state.ingredients,purchaseContinued:this.purchaseContinueHandler,purchaseCancelled:this.purchaseCancelHandler,priceTotal:this.state.totalPrice})),this.state.loading&&(a=r.a.createElement(pe,null)),r.a.createElement(p,null,r.a.createElement(ne,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),n)}}]),t}(n.Component),se),ve=a(46),fe=a(43),be=a.n(fe),_e=function(e){return r.a.createElement("div",{className:be.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(J,{ingredients:e.ingredients})),r.a.createElement(ie,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(ie,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},Ee=a(21),ye=a.n(Ee),Ce=a(13),ke=a.n(Ce),Oe=function(e){var t=null,a=[ke.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(ke.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:ke.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:ke.a.InputElement,value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({className:ke.a.InputElement},e.elementConfig,{value:e.value}))}return r.a.createElement("div",{className:ke.a.Input},r.a.createElement("label",{className:ke.a.Label},e.label),t)},je=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:4,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0,validation:{}}},formIsValid:!1,loading:!1},a.orderHandler=function(e){e.preventDefault(),a.setState({loading:!0});var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ingredients,price:a.props.price,orderData:t};se.post("/orders.json",r).then(function(e){a.setState({loading:!1}),a.props.history.push("/")}).catch(function(e){a.setState({loading:!1})})},a.inputChangedHandler=function(e,t){var n=Object(V.a)({},a.state.orderForm),r=Object(V.a)({},n[t]);r.value=e.target.value,r.valid=a.checkValidity(r.value,r.validation),r.touched=!0,n[t]=r;var l=!0;for(var i in n)l=n[i].valid&&l;a.setState({orderForm:n,formIsValid:l})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"checkValidity",value:function(e,t){var a=!0;return t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),a}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=r.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return r.a.createElement(Oe,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,changed:function(a){return e.inputChangedHandler(a,t.id)},touched:t.config.touched})}),r.a.createElement(ie,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.state.loading&&(n=r.a.createElement(pe,null)),r.a.createElement("div",{className:ye.a.ContactData},r.a.createElement("h4",null,"Enter your Contact Data"),n)}}]),t}(n.Component),we=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,price:null},a.checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=new URLSearchParams(this.props.location.search),t={},a=null,n=!0,r=!1,l=void 0;try{for(var i,o=e.entries()[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var c=i.value;"price"===c[0]?a=c[1]:t[c[0]]=+c[1]}}catch(s){r=!0,l=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}this.setState({ingredients:t,price:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(_e,{ingredients:this.state.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(ve.a,{path:this.props.match.path+"/contact-data",render:function(t){return r.a.createElement(je,Object.assign({ingredients:e.state.ingredients,price:e.state.price},t))}}))}}]),t}(n.Component),Se=a(78),Ne=a(44),Be=a.n(Ne),Ie=function(e){var t=[];for(var a in e.ingredients)t.push({name:a,amount:e.ingredients[a]});var n=t.map(function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return r.a.createElement("div",{className:Be.a.Order},r.a.createElement("p",null,"Ingredients: ",n),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},xe=me(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={orders:[],loading:!0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;se.get("/orders.json").then(function(t){var a=[];for(var n in t.data)a.push(Object(V.a)({},t.data[n],{id:n}));e.setState({loading:!1,orders:a})}).catch(function(t){e.setState({loading:!1})})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.orders.map(function(e){return r.a.createElement(Ie,{key:e.id,ingredients:e.ingredients,price:e.price})}))}}]),t}(n.Component),se),De=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,null,r.a.createElement(Se.a,null,r.a.createElement(ve.a,{path:"/checkout",component:we}),r.a.createElement(ve.a,{path:"/orders",component:xe}),r.a.createElement(ve.a,{path:"/",component:ge}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=a(77),Le=r.a.createElement(Te.a,null,r.a.createElement(De,null));i.a.render(Le,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[47,1,2]]]);
//# sourceMappingURL=main.3938ee09.chunk.js.map