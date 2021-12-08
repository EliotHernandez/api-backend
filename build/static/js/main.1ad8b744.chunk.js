(this["webpackJsonpnotes-frontend"]=this["webpackJsonpnotes-frontend"]||[]).push([[0],{41:function(t,n,e){},42:function(t,n,e){"use strict";e.r(n);var c=e(1),r=e(17),o=e.n(r),a=e(8),i=e(3),u=e(0),l=function(t){var n=t.handleOnSubmit,e=t.handleOnChange,c=t.newNote;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsx)("input",{value:c,onChange:e}),Object(u.jsx)("button",{children:"Save"})]})},s=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2020"})]})},j=function(t){var n=t.note,e=t.toggleImportance,c=n.importante?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[n.content,Object(u.jsx)("button",{onClick:e,children:c})]})},f=function(t){var n=t.notes,e=t.showAll,c=t.toggleImportance,r=e?n:n.filter((function(t){return t.important}));return Object(u.jsx)("ul",{children:r.map((function(t){return Object(u.jsx)(j,{note:t,toggleImportance:function(){return c(t.id)}},t.id)}))})},d=function(t){var n=t.message;return n?Object(u.jsx)("div",{className:"error",children:n}):null},b=function(t){var n=t.handleOnClick,e=t.showAll;return Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:n,children:["show ",e?"important":"all"]})})},h=e(6),O=e.n(h),m="/api/notes",p={getAll:function(){return O.a.get(m).then((function(t){return t.data}))},create:function(t){return O.a.post(m,t).then((function(t){return t.data}))},update:function(t,n){return O.a.put("".concat(m,"/").concat(t),n).then((function(t){return t.data}))}},g=function(){var t=Object(c.useState)([]),n=Object(i.a)(t,2),e=n[0],r=n[1],o=Object(c.useState)(""),j=Object(i.a)(o,2),h=j[0],O=j[1],m=Object(c.useState)(!0),g=Object(i.a)(m,2),v=g[0],x=g[1],S=Object(c.useState)(null),w=Object(i.a)(S,2),k=w[0],C=w[1];Object(c.useEffect)((function(){p.getAll().then((function(t){r(t)}))}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(d,{message:k}),Object(u.jsx)(b,{handleOnClick:function(){return x(!v)},showAll:v}),Object(u.jsx)(f,{showAll:v,notes:e,toggleImportance:function(t){var n=e.find((function(n){return n.id===t})),c=Object(a.a)(Object(a.a)({},n),{},{important:!n.important});p.update(t,c).then((function(n){r(e.map((function(e){return e.id!==t?e:n})))})).catch((function(c){C("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){C(null)}),5e3),r(e.filter((function(n){return n.id!==t})))}))}}),Object(u.jsx)(l,{handleOnSubmit:function(t){t.preventDefault();var n={id:e.length+1,content:h,date:(new Date).toISOString(),important:Math.random()<.5};p.create(n).then((function(t){r(e.concat(t)),O("")}))},handleOnChange:function(t){O(t.target.value)},value:h}),Object(u.jsx)(s,{})]})};e(41);o.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.1ad8b744.chunk.js.map