import{S as D,i as E,s as q,J as L,k as _,l as d,m as g,h as o,n as f,b as u,K as j,D as k,q as b,r as w,p as H,C as y,a as $,c as C,L as I,u as S,y as R,z as U,A as W,g as z,d as B,B as G}from"../chunks/index.082288c5.js";/* empty css                     */function J(r){let t,a=r[7].message+"",e;return{c(){t=_("p"),e=b(a),this.h()},l(n){t=d(n,"P",{style:!0});var i=g(t);e=w(i,a),i.forEach(o),this.h()},h(){H(t,"color","red")},m(n,i){u(n,t,i),y(t,e)},p:k,d(n){n&&o(t)}}}function K(r){let t,a,e,n,i,p,c,h;return{c(){t=_("h1"),a=b(r[3]),e=$(),n=_("img"),p=$(),c=_("p"),h=b(r[0]),this.h()},l(s){t=d(s,"H1",{});var l=g(t);a=w(l,r[3]),l.forEach(o),e=C(s),n=d(s,"IMG",{src:!0,alt:!0}),p=C(s),c=d(s,"P",{});var v=g(c);h=w(v,r[0]),v.forEach(o),this.h()},h(){I(n.src,i=r[1])||f(n,"src",i),f(n,"alt",r[2])},m(s,l){u(s,t,l),y(t,a),u(s,e,l),u(s,n,l),u(s,p,l),u(s,c,l),y(c,h)},p(s,l){l&8&&S(a,s[3]),l&2&&!I(n.src,i=s[1])&&f(n,"src",i),l&4&&f(n,"alt",s[2]),l&1&&S(h,s[0])},d(s){s&&o(t),s&&o(e),s&&o(n),s&&o(p),s&&o(c)}}}function M(r){let t,a;return{c(){t=_("h1"),a=b("Waiting comic to load...")},l(e){t=d(e,"H1",{});var n=g(t);a=w(n,"Waiting comic to load..."),n.forEach(o)},m(e,n){u(e,t,n),y(t,a)},p:k,d(e){e&&o(t)}}}function O(r){let t,a={ctx:r,current:null,token:null,hasCatch:!0,pending:M,then:K,catch:J,value:6,error:7};return L(r[4],a),{c(){t=_("div"),a.block.c(),this.h()},l(e){t=d(e,"DIV",{class:!0,id:!0});var n=g(t);a.block.l(n),n.forEach(o),this.h()},h(){f(t,"class","info"),f(t,"id","comic")},m(e,n){u(e,t,n),a.block.m(t,a.anchor=null),a.mount=()=>t,a.anchor=null},p(e,[n]){r=e,j(a,r,n)},i:k,o:k,d(e){e&&o(t),a.block.d(),a.token=null,a=null}}}async function V(r){const t=new URLSearchParams;r&&t.append("email",r);let a="https://fwd.innopolis.app/api/hw2?"+t.toString();return await fetch(a,{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"}}).then(n=>n.json())}function F(r,t,a){let e,n,i,p;async function c(s){let v="https://getxkcd.vercel.app/api/comic?num="+await V(s),m=await fetch(v).then(A=>A.json());console.log(m);let P=new Date(parseInt(m.year),parseInt(m.month)-1,parseInt(m.day));a(0,e=P.toLocaleDateString("ru-RU")),a(1,n=m.img),a(2,i=m.alt),a(3,p=m.title)}let h=c("d.korneenko@innopolis.university");return[e,n,i,p,h]}class N extends D{constructor(t){super(),E(this,t,F,O,q,{})}}function Q(r){let t,a;return t=new N({}),{c(){R(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,n){W(t,e,n),a=!0},p:k,i(e){a||(z(t.$$.fragment,e),a=!0)},o(e){B(t.$$.fragment,e),a=!1},d(e){G(t,e)}}}class Y extends D{constructor(t){super(),E(this,t,null,Q,q,{})}}export{Y as default};
