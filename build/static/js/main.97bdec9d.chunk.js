(this["webpackJsonpamazon-react"]=this["webpackJsonpamazon-react"]||[]).push([[0],{113:function(e,t,a){},114:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(63),c=a(12),r=a(3),l=a.n(r),i=a(64),o=a.n(i),u=(a(76),a(77),a(78),a(65)),m=a.n(u),s=a(67),d=a.n(s),E=a(14),p=a(26),_=Object(r.createContext)(),g=function(e){var t=e.reducer,a=e.initialState,n=e.children;return l.a.createElement(_.Provider,{value:Object(r.useReducer)(t,a)},n)},h=function(){return Object(r.useContext)(_)},v=a(50),b=(a(80),a(119),v.a.initializeApp({apiKey:"AIzaSyCpyOMVNxogjk2EKx0iFk0DJIeU9k7JsoQ",authDomain:"react-1a38c.firebaseapp.com",projectId:"react-1a38c",storageBucket:"react-1a38c.appspot.com",messagingSenderId:"452553616861",appId:"1:452553616861:web:2ffb5bee001f6988035a34",measurementId:"G-91HQPK00QD"}).firestore()),f=v.a.auth();var y=function(){var e=h(),t=Object(c.a)(e,1)[0],a=t.quantity,n=t.user,r=Object(E.f)();return console.log(a),l.a.createElement("div",{className:"header"},l.a.createElement(p.b,{to:"/"},l.a.createElement("img",{className:"header__logo",src:"/images/logo.png",alt:""})),l.a.createElement("div",{className:"header__search"},l.a.createElement("input",{className:"header__searchInput",type:"text"}),l.a.createElement(m.a,{className:"header__searchIcon"})),l.a.createElement("div",{className:"header__nav"},l.a.createElement(p.b,{to:!n&&"/login",className:"header__link"},l.a.createElement("div",{onClick:function(){n&&f.signOut()},className:"header__option"},l.a.createElement("span",{className:"header__optionLineOne"},"Hello ",n?n.email:"Guest"),l.a.createElement("span",{className:"header__optionLineTwo"},n?"Sign out":"Sign in"))),l.a.createElement("div",{onClick:function(){r("/orders")},className:"header__option"},l.a.createElement("span",{className:"header__optionLineOne"},"Returns"),l.a.createElement("span",{className:"header__optionLineTwo"},"& Orders")),l.a.createElement(p.b,{to:"/checkout",className:"header__link"},l.a.createElement("div",{className:"header__basket"},l.a.createElement(d.a,null),l.a.createElement("span",{className:"header__basketCounter"},a)))))};a(86),a(87);var N=function(e){var t=e.id,a=e.title,n=e.image,r=e.price,i=e.rating,o=e.quantity,u=h(),m=Object(c.a)(u,2),s=m[0].basket,d=m[1],E=s.findIndex((function(e){return e.id===t}));return l.a.createElement("div",{className:"product"},l.a.createElement("div",{className:"product__info"},l.a.createElement("p",null,a),l.a.createElement("p",{className:"product__price"},l.a.createElement("small",null,"$ "),l.a.createElement("strong",null,r)),l.a.createElement("div",{className:"product__rating"},Array(i).fill().map((function(e,t){return l.a.createElement("p",null,"\u2b50\ufe0f")})))),l.a.createElement("img",{src:n,alt:""}),l.a.createElement("button",{onClick:function(){-1===E?d({type:"ADD_TO_BASKET",item:{id:t,title:a,image:n,price:r,rating:i,quantity:o},addQuantity:"1"}):(s[E].quantity+=1,d({type:"ADD_TO_BASKET",item:{id:t,title:a,image:n,price:r,rating:i,quantity:o},addQuantity:"2"}))}},"Add to Basket"))};var k=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"home__container"},l.a.createElement("img",{className:"home__image",src:"https://m.media-amazon.com/images/I/6125q8xd30L._SX3000_.jpg",alt:""}),l.a.createElement("div",{className:"home__row"},l.a.createElement(N,{id:"12321341",title:"2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8\u2011core CPU and 14\u2011core GPU, 16GB RAM, 512GB SSD) - Space Grey",price:2999,rating:5,image:"/images/macbook.png",quantity:1}),l.a.createElement(N,{id:"49538094",title:"DJI Mini 2 \u2013 Ultralight and Foldable Drone Quadcopter, 3-Axis Gimbal with 4K Camera, 12MP Photo, 31 Mins Flight Time, OcuSync 2.0 10km HD Video Transmission, QuickShots, Gray",price:1089,rating:4,image:"/images/DJI.png",quantity:1})),l.a.createElement("div",{className:"home__row"},l.a.createElement(N,{id:"4903850",title:"Fitbit Charge 4 Activity Tracker, Granite, Refl/Black (S &L Bands Included)",price:199.99,rating:3,image:"/images/FitBit.png",quantity:1}),l.a.createElement(N,{id:"23445930",title:"Hibiki Japanese Harmony, 700ml",price:163.98,rating:4,image:"/images/hibiki.png",quantity:1}),l.a.createElement(N,{id:"3254354345",title:"Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP785/ipad-pro-12-2018.png",quantity:1})),l.a.createElement("div",{className:"home__row"},l.a.createElement(N,{id:"90829332",title:"Samsung 34-Inch CJ791 Thunderbolt 3 Curved QLED Widescreen Monitor (LC34J791WTNXZA)",price:1094.63,rating:4,image:"/images/monitor.png",quantity:1}))))};a(88);var O=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"Footer"},l.a.createElement("img",{className:"Footer__image",src:"/images/logo.png"}),l.a.createElement("div",{className:"Footer__title"},"This website was created by Poopies99"),l.a.createElement("u",{className:"Footer__link",onClick:function(){window.open("https://github.com/Poopies99/Amazon-React")}},"Click here to access the Github Repository")))};var j=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(y,null),l.a.createElement(k,null),l.a.createElement(O,null))},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,126)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))},P=a(16),A=(a(89),a(90),a(33)),C=a.n(A),q=a(23),T=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return e+t.price*t.quantity}),0)},w=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return"1"===t.addQuantity?Object(q.a)(Object(q.a)({},e),{},{basket:[].concat(Object(P.a)(e.basket),[t.item]),quantity:e.quantity+=1}):Object(q.a)(Object(q.a)({},e),{},{quantity:e.quantity+=1});case"EMPTY_BASKET":return Object(q.a)(Object(q.a)({},e),{},{basket:[],quantity:0});case"REMOVE_FROM_BASKET":var a=e.quantity-e.basket[t.number].quantity,n=Object(P.a)(e.basket);return t.number>=0?n.splice(t.number,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(q.a)(Object(q.a)({},e),{},{basket:n,quantity:a});case"CHANGE_QUANTITY":return"ADD"===t.change?Object(q.a)(Object(q.a)({},e),{},{quantity:e.quantity+=1}):Object(q.a)(Object(q.a)({},e),{},{quantity:e.quantity-=1});case"SET_USER":return Object(q.a)(Object(q.a)({},e),{},{user:t.user});default:return e}};var B=function(){var e=h(),t=Object(c.a)(e,1)[0].user,a=Object(E.f)(),n=h(),r=Object(c.a)(n,1)[0],i=r.basket,o=r.quantity;return l.a.createElement("div",{className:"subtotal"},l.a.createElement(C.a,{renderText:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Subtotal (",o," items): ",l.a.createElement("strong",null,e)),l.a.createElement("small",{className:"subtotal__gift"},l.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))},decimalScale:2,value:T(i),displayType:"text",thousandSeparator:!0,prefix:"$"}),l.a.createElement("button",{onClick:function(){a(t?"/payment":"/login")}},"Proceed to Checkout"))};a(54);var D=function(e){var t=e.id,a=e.title,n=e.image,r=e.price,i=e.rating,o=e.quantity,u=h(),m=Object(c.a)(u,2),s=m[0].basket,d=m[1],E=s.findIndex((function(e){return e.id===t}));return l.a.createElement("div",{className:"checkoutProduct"},l.a.createElement("div",{className:"checkoutProduct__image"},l.a.createElement("img",{className:"checkoutProduct__image",src:n,alt:""})),l.a.createElement("div",{className:"checkoutProduct__info"},l.a.createElement("div",{className:"checkoutProduct__header"},l.a.createElement("p",{className:"checkoutProduct__title"},a),l.a.createElement("p",{className:"checkoutProduct__price"},"$",r)),l.a.createElement("div",{className:"checkoutProduct__rating"},Array(i).fill().map((function(e,t){return l.a.createElement("p",null,"\u2b50\ufe0f")}))),l.a.createElement("div",{className:"checkoutProduct__quantity"},"Quantity: ",o),l.a.createElement("div",{className:"checkoutProduct__change"},l.a.createElement("button",{className:"checkoutProduct__button",onClick:function(){-1!==E&&(s[E].quantity+=1),d({type:"CHANGE_QUANTITY",item:{id:t,title:a,image:n,price:r,rating:i,quantity:o},change:"ADD"})}},"+1"),l.a.createElement("button",{className:"checkoutProduct__button",onClick:function(){-1!==E&&(s[E].quantity-=1),d({type:"CHANGE_QUANTITY",item:{id:t,title:a,image:n,price:r,rating:i,quantity:o},change:"REMOVE"})}},"-1")),l.a.createElement("button",{onClick:function(){d({type:"REMOVE_FROM_BASKET",item:{id:t,title:a,image:n,price:r,rating:i},number:E})}},"Remove from Basket")))};var I=function(){var e=h(),t=Object(c.a)(e,2),a=t[0],n=a.basket,r=a.user,i=(t[1],Object(P.a)(new Map(n.map((function(e){return[e.id,e]}))).values()));return console.log(n),l.a.createElement("div",{className:"checkout"},l.a.createElement("div",{className:"checkout__left"},l.a.createElement("img",{className:"checkout__ad",src:"https://blog.hubspot.com/hubfs/How%20to%20Explain%20Banner%20Ads%20to%20Anyone-5.png",alt:""}),l.a.createElement("div",null,l.a.createElement("h3",null,"Hello ",r?r.email:"Guest")),l.a.createElement("div",{className:"checkout__title"},"Your Shopping Basket"),l.a.createElement("div",{className:"checkout__products"},i.map((function(e){return l.a.createElement(D,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,quantity:e.quantity})})))),l.a.createElement("div",{className:"checkout__right"},l.a.createElement(B,null)))};a(94);var x=function(){var e=Object(E.f)(),t=Object(r.useState)(""),a=Object(c.a)(t,2),n=a[0],i=a[1],o=Object(r.useState)(""),u=Object(c.a)(o,2),m=u[0],s=u[1];return l.a.createElement("div",{className:"login"},l.a.createElement(p.b,{to:"/"},l.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})),l.a.createElement("div",{className:"login__container"},l.a.createElement("h1",null,"Sign-in"),l.a.createElement("form",null,l.a.createElement("h5",null,"E-mail"),l.a.createElement("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)}}),l.a.createElement("h5",null,"Password"),l.a.createElement("input",{type:"password",value:m,onChange:function(e){return s(e.target.value)}}),l.a.createElement("button",{className:"login__signInButton",type:"submit",onClick:function(t){t.preventDefault(),f.signInWithEmailAndPassword(n,m).then((function(t){e("/")})).catch((function(e){return alert(e.message)}))}},"Sign In")),l.a.createElement("p",null,"By signing-in you agree to the Amazon-React Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),l.a.createElement("button",{className:"login__registerButton",onClick:function(t){t.preventDefault(),f.createUserWithEmailAndPassword(n,m).then((function(t){e("/")})).catch((function(e){return alert(e.message)}))}},"Create your Amazon Account")))},M=a(0),R=a.n(M),F=a(4),G=(a(95),a(34)),L=a(68);a.n(L).a.create({baseURL:"http://localhost:5001/react-1a38c/us-central1/api"});var Q=function(e){var t=e.id,a=e.title,n=e.image,r=e.price,i=e.rating,o=e.quantity,u=h(),m=Object(c.a)(u,2),s=m[0].basket;return m[1],s.findIndex((function(e){return e.id===t})),l.a.createElement("div",{className:"checkoutProduct"},l.a.createElement("div",{className:"checkoutProduct__image"},l.a.createElement("img",{className:"checkoutProduct__image",src:n,alt:""})),l.a.createElement("div",{className:"checkoutProduct__info"},l.a.createElement("div",{className:"checkoutProduct__header"},l.a.createElement("p",{className:"checkoutProduct__title"},a),l.a.createElement("p",{className:"checkoutProduct__price"},"$",r)),l.a.createElement("div",{className:"checkoutProduct__rating"},Array(i).fill().map((function(e,t){return l.a.createElement("p",null,"\u2b50\ufe0f")}))),l.a.createElement("div",{className:"checkoutProduct__quantity"},"Quantity: ",o)))};var U=function(){var e=h(),t=Object(c.a)(e,2),a=t[0],n=a.basket,i=a.user,o=a.quantity,u=t[1],m=Object(E.f)(),s=(Object(G.useStripe)(),Object(G.useElements)(),Object(r.useState)(!1)),d=Object(c.a)(s,2),_=d[0],g=d[1],v=Object(r.useState)(""),f=Object(c.a)(v,2),y=f[0],N=f[1],k=Object(r.useState)(null),O=Object(c.a)(k,2),j=O[0],S=O[1],P=Object(r.useState)(!0),A=Object(c.a)(P,2),q=A[0],w=A[1],B=Object(r.useState)(!0),D=Object(c.a)(B,2),I=(D[0],D[1],function(){var e=Object(F.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),N(!0),b.collection("users").doc(i.uid).collection("orders").add({id:null===i||void 0===i?void 0:i.uid,cart:n,amount:T(n),numberOfItems:o}),g(!0),S(null),N(!1),u({type:"EMPTY_BASKET"}),m("/orders");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return l.a.createElement("div",{className:"payment"},l.a.createElement("div",{className:"payment__container"},l.a.createElement("h1",null,"Checkout (",l.a.createElement(p.b,{to:"/checkout"},null===n||void 0===n?void 0:n.length," items"),")"),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Delivery Address")),l.a.createElement("div",{className:"payment__address"},l.a.createElement("p",null,null===i||void 0===i?void 0:i.email),l.a.createElement("p",null,"221b Baker Street"),l.a.createElement("p",null,"Singapore"))),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Review items and delivery")),l.a.createElement("div",{className:"payment__items"},n.map((function(e){return l.a.createElement(Q,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,quantity:e.quantity})})))),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Payment Method")),l.a.createElement("div",{className:"payment__details"},l.a.createElement("form",{onSubmit:I},l.a.createElement(G.CardElement,{onChange:function(e){w(e.empty),S(e.error?e.error.message:"")}}),l.a.createElement("div",{className:"payment__priceContainer"},l.a.createElement(C.a,{renderText:function(e){return l.a.createElement("h3",null,"Order Total: ",e)},decimalScale:2,value:T(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),l.a.createElement("button",{disabled:y||q||_},l.a.createElement("span",null,y?l.a.createElement("p",null,"Processing"):"Buy Now"))),j&&l.a.createElement("div",null,j),l.a.createElement("div",{className:"payment__example"},l.a.createElement("div",null,"Input the following:"),l.a.createElement("div",null,l.a.createElement("b",null,"Card Number:")," 4242424242424242"),l.a.createElement("div",null,l.a.createElement("b",null,"Date:")," 0424"),l.a.createElement("div",null,l.a.createElement("b",null,"CVC:")," 242"),l.a.createElement("div",null,l.a.createElement("b",null,"ZIP:")," 42424")))))))},z=a(69);a(113),a(114),a(115);var K=function(e){var t,a=e.order;return l.a.createElement("div",{className:"order"},l.a.createElement("h2",null,"Order"),l.a.createElement("p",{className:"order__id"},l.a.createElement("small",null,"Database ID: ",a.id)),l.a.createElement("div",{className:"order__detail"},null===(t=a.data.cart)||void 0===t?void 0:t.map((function(e){return l.a.createElement(Q,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,quantity:e.quantity,hideButton:!0})}))),l.a.createElement(C.a,{renderText:function(e){return l.a.createElement("h3",{className:"order__total"},"Order Total: ",e)},decimalScale:2,value:a.data.amount,displayType:"text",thousandSeparator:!0,prefix:"$"}))};var J=function(){var e=h(),t=Object(c.a)(e,1)[0].user,a=Object(r.useState)([]),n=Object(c.a)(a,2),i=n[0],o=n[1];return Object(r.useEffect)((function(){t?b.collection("users").doc(null===t||void 0===t?void 0:t.uid).collection("orders").onSnapshot((function(e){return o(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):o([])}),[t]),l.a.createElement("div",{className:"orders"},l.a.createElement("h1",null," ",t?"Your Orders":"Please login to view order history"),l.a.createElement("div",{className:"orders__order"},null===i||void 0===i?void 0:i.map((function(e){return l.a.createElement(K,{order:e})}))))},Y=Object(z.a)("pk_test_51KFcBsAVjzb9hNmwDxyaEpRnvJtoDbbBz0c4IagMdXYelUrgrSmX7Gectwl1JYeK2BY2CVx2OaQzYDonnM3NnUTv00LWSx5z1k");function H(){var e=h(),t=Object(c.a)(e,2);Object(n.a)(t[0]);var a=t[1];return Object(r.useEffect)((function(){f.onAuthStateChanged((function(e){a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),l.a.createElement(p.a,null,l.a.createElement(E.c,null,l.a.createElement(E.a,{path:"/",element:l.a.createElement(j,null)}),l.a.createElement(E.a,{path:"/checkout",element:l.a.createElement(V,null)}),l.a.createElement(E.a,{path:"/login",element:l.a.createElement(W,null)}),l.a.createElement(E.a,{path:"/payment",element:l.a.createElement($,null)}),l.a.createElement(E.a,{path:"/orders",element:l.a.createElement(X,null)})))}function V(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(I,null))}function W(){return l.a.createElement("div",null,l.a.createElement(x,null))}function $(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(G.Elements,{stripe:Y},l.a.createElement(U,null)))}function X(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(J,null))}o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,{initialState:{basket:[],quantity:0,user:null},reducer:w},l.a.createElement(H,null))),document.getElementById("root")),S()},54:function(e,t,a){},71:function(e,t,a){e.exports=a(118)},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.97bdec9d.chunk.js.map