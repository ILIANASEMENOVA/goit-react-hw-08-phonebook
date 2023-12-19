"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[870],{1870:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t,i,o,a,u=r(2791),d=r(9434),s=r(6916),c=function(n){return n.filter.filter},f=function(n){return n.contacts.items},l=function(n){return n.contacts.isLoading},p=(0,s.P1)([f,c],(function(n,e){console.log(e);var r=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))})),x=r(168),b=r(5867),m=b.ZP.ul(t||(t=(0,x.Z)(["\n  list-style: none;\n  padding-left: 0;\n  width: 400px;\n  button {\n    cursor: pointer;\n    background-color: #ff69b4;\n    color: white;\n    padding: 4px 8px;\n    font: inherit;\n\n    border-radius: 4px 8px;\n    border: 3px solid #ff1493;\n  }\n  li {\n    background-color: #ffffff;\n    border: 3px solid #ff69b4;\n    padding: 10px;\n    border-radius: 4px;\n    margin-bottom: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 20px;\n  }\n"]))),h=r(9326),g=r(184),v=function(n){var e=n.number,r=n.id,t=n.name,i=(0,d.I0)();return(0,g.jsxs)("li",{children:[t,": ",e,(0,g.jsx)("button",{type:"button",onClick:function(){return i((0,h.GK)(r))},children:"Delete"})]})},j=function(){var n=(0,d.v9)(p);return(0,g.jsx)(m,{children:(0,g.jsx)("ul",{children:n.map((function(n){var e=n.name,r=n.id,t=n.number;return(0,g.jsx)(v,{id:r,name:e,number:t},r)}))})})},w=r(1413),k=r(9439),y=b.zo.form(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  padding: 12px;\n  background: rgb(235, 182, 236);\n  background: linear-gradient(\n    90deg,\n    rgba(253, 29, 222, 1) 0%,\n    rgba(235, 182, 236, 0.9809173669467787) 70%\n  );\n  border: 3px solid #ff69b4;\n  border-radius: 4px;\n  label {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 16px;\n    color: #fff;\n    font-size: 20px;\n  }\n  input {\n    font: inherit;\n    width: 375px;\n    padding: 10px;\n    margin: 0 auto;\n    border-radius: 4px;\n    border: 3px solid #ff69b4;\n    cursor: pointer;\n  }\n  button {\n    padding: 8px 12px;\n    font: inherit;\n    cursor: pointer;\n    border-radius: 4px;\n    border: 3px solid #ff69b4;\n    color: #f08080;\n    font-size: 20px;\n  }\n"]))),C=r(5984);function Z(){var n=(0,u.useState)(""),e=(0,k.Z)(n,2),r=e[0],t=e[1],i=(0,u.useState)(""),o=(0,k.Z)(i,2),a=o[0],s=o[1],c=(0,d.I0)(),l=(0,d.v9)(f),p=function(n){var e=n.target,r=e.value;switch(e.name){case"name":t(r);break;case"number":s(r);break;default:throw new Error("error")}},x=function(){t(""),s("")};return(0,g.jsxs)(y,{onSubmit:function(n){n.preventDefault(),function(n){var e=l.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}));if(e)return alert("".concat(n.name," is already in contacts")),e;var r=(0,w.Z)({id:(0,C.x0)()},n);c((0,h.uK)(r))}({name:r,number:a})||x()},children:[(0,g.jsxs)("label",{children:["Name",(0,g.jsx)("input",{type:"text",name:"name",value:r,required:!0,onChange:p})]}),(0,g.jsxs)("label",{children:["Number",(0,g.jsx)("input",{type:"tel",name:"number",value:a,required:!0,onChange:p})]}),(0,g.jsx)("button",{type:"submit",children:"Add contact"})]})}var _=b.ZP.div(o||(o=(0,x.Z)(["\n  width: 400px;\n\n  input {\n    width: 400px;\n    padding: 10px;\n    margin: 0 auto;\n    border-radius: 4px;\n    border: 3px solid #ff69b4;\n  }\n"]))),z=b.ZP.label(a||(a=(0,x.Z)(["\n  color: #ff69b4;\n  font-size: 20px;\n"]))),L=_,q=r(1634),I=function(){var n=(0,d.v9)(c),e=(0,d.I0)();return(0,g.jsx)(L,{children:(0,g.jsxs)(z,{children:["Find contacts by name",(0,g.jsx)("input",{type:"text",name:"filter",value:n,required:!0,onChange:function(n){e((0,q.T)(n.target.value))}})]})})};function P(){var n=(0,d.I0)(),e=(0,d.v9)(l);return(0,u.useEffect)((function(){n((0,h.yF)())}),[n]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Z,{}),(0,g.jsx)("div",{children:e&&"Request in progress..."}),(0,g.jsx)(I,{}),(0,g.jsx)(j,{})]})}}}]);
//# sourceMappingURL=870.5cdedb2e.chunk.js.map