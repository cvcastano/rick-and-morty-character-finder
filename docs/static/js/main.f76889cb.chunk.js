(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{24:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(11),s=c.n(r),i=c(13),j=(c(3),c(9)),l=c(1);var u=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{className:"card-img",src:e.character.image,alt:"Image of ".concat(e.character.name)}),Object(l.jsx)("h4",{className:"card-title",children:e.character.name}),Object(l.jsx)("p",{className:"card-text",children:e.character.species})]})};var o=function(e){var t=e.characters.map((function(e){return Object(l.jsxs)("li",{className:"card",children:[" ",Object(l.jsx)(u,{character:e})," "]},e.id)}));return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{className:"card-list",children:t})})};var d=function(e){return Object(l.jsx)("form",{children:Object(l.jsxs)("p",{className:"input-group",children:[Object(l.jsx)("label",{className:"label",htmlFor:"name",children:"Type to search"}),Object(l.jsx)("input",{className:"input",type:"text",id:"name",name:"name",onChange:function(t){e.handleInput({key:"name",value:t.target.value})}})]})})},m=function(){return fetch("//rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,image:e.image}}))}))},h=c.p+"static/media/logo.de13d484.png";var b=function(){return Object(l.jsxs)("header",{children:[Object(l.jsx)("div",{className:"header-top",children:Object(l.jsx)("img",{className:"logo",src:h,alt:"Rick and Morty logo"})}),Object(l.jsx)("div",{className:"stripe",children:"character finder"})]})};var O=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),i=s[0],u=s[1];Object(a.useEffect)((function(){m().then((function(e){return n(e)}))}),[]);var h=c.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(d,{handleInput:function(e){"name"===e.key&&u(e.value)}}),Object(l.jsx)(o,{characters:h})]})]})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(O,{})})}),document.getElementById("root"))},3:function(e,t,c){}},[[24,1,2]]]);
//# sourceMappingURL=main.f76889cb.chunk.js.map