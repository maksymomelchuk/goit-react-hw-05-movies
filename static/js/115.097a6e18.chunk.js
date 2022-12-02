"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[115],{115:function(n,t,r){r.r(t);var e=r(861),a=r(885),o=r(687),i=r.n(o),u=r(791),c=r(368),p=r(390),s=r(762),d=r(731),f=r(184);t.default=function(){var n,t=(0,u.useState)(""),r=(0,a.Z)(t,2),o=r[0],l=r[1],x=(0,u.useState)([]),g=(0,a.Z)(x,2),h=g[0],v=g[1],m=(0,d.lr)(),b=(0,a.Z)(m,2),Z=b[0],D=b[1],w=Z.get(null!==(n="query")?n:"");(0,u.useEffect)((function(){if(w){var n=function(){var n=(0,e.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.mJ)(w);case 2:t=n.sent,v(t.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[w]);var B=h;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(c.Gq,{onSubmit:function(n){n.preventDefault(),D({query:n.target.input.value})},children:[(0,f.jsx)(c.Fy,{value:o,type:"text",name:"input",onChange:function(n){l(n.target.value)}}),(0,f.jsx)(c.cl,{type:"submit",children:"Search"})]}),(0,f.jsx)(s.O,{data:B})]})}},368:function(n,t,r){r.d(t,{E2:function(){return P},Fy:function(){return y},Gq:function(){return B},HA:function(){return w},PP:function(){return j},Sx:function(){return C},X0:function(){return F},cN:function(){return D},cl:function(){return k},dd:function(){return A},gC:function(){return _},gm:function(){return S},mq:function(){return q},nx:function(){return U}});var e,a,o,i,u,c,p,s,d,f,l,x,g,h,v,m=r(168),b=r(731),Z=r(82),D=Z.ZP.ul(e||(e=(0,m.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 30px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n  padding: 0px 20px;\n  justify-content: center;\n"]))),w=Z.ZP.li(a||(a=(0,m.Z)(["\n  width: 200px;\n\n  transition: all linear 250ms;\n\n  &:hover {\n    border: 2px solid white;\n    transform: scale(1.1);\n  }\n"]))),B=Z.ZP.form(o||(o=(0,m.Z)(["\n  text-align: center;\n  padding-top: 100px;\n"]))),y=Z.ZP.input(i||(i=(0,m.Z)(["\n  outline: none;\n  padding: 10px;\n  margin-right: 3px;\n  border: none;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n"]))),k=Z.ZP.button(u||(u=(0,m.Z)(["\n  padding: 10px 20px;\n  border: none;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: white;\n  cursor: pointer;\n"]))),P=(0,Z.ZP)(b.rU)(c||(c=(0,m.Z)(["\n  text-decoration: none;\n  border: none;\n  border-radius: 10px;\n  padding: 10px 30px;\n  background-color: rgba(79, 79, 88, 0.9);\n  color: white;\n  font-size: 20px;\n  margin: 15px 0px;\n  cursor: pointer;\n\n  transition: all linear 250ms;\n\n  &:hover {\n    background-color: #fefefe;\n    color: black;\n  }\n"]))),_=(Z.ZP.div(p||(p=(0,m.Z)(["\n  background-color: #c3c3c3;\n  padding: 0px 15px;\n"]))),Z.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n  gap: 40px;\n  margin-top: 20px;\n"])))),j=Z.ZP.div(d||(d=(0,m.Z)(["\n  /* padding-top: 80px; */\n"]))),S=Z.ZP.div(f||(f=(0,m.Z)(["\n  padding: 80px 15px;\n"]))),U=Z.ZP.p(l||(l=(0,m.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),q=Z.ZP.span(x||(x=(0,m.Z)(["\n  padding: 10px 20px;\n  background-color: rgba(79, 79, 88, 0.9);\n  border-radius: 5px;\n"]))),F=Z.ZP.h1(g||(g=(0,m.Z)(["\n  margin-bottom: 20px;\n  font-size: 36px;\n  line-height: 1.5;\n"]))),A=Z.ZP.ul(h||(h=(0,m.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 30px;\n  margin-top: 30px;\n"]))),C=(0,Z.ZP)(b.rU)(v||(v=(0,m.Z)(["\n  font-size: 24px;\n  text-decoration: none;\n  padding: 5px 10px;\n  background-color: #b2bec3;\n  border-radius: 5px;\n  color: black;\n"])))},762:function(n,t,r){r.d(t,{O:function(){return u}});var e=r(689),a=r(731),o=r(368),i=r(184),u=function(n){var t=n.data,r=(0,e.TH)();if(t)return(0,i.jsx)(o.cN,{children:t.map((function(n){var t=n.id,e=(n.title,n.name,n.poster_path);return(0,i.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:r},children:(0,i.jsx)(o.HA,{children:(0,i.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w200".concat(e):"https://upload.wikimedia.org/wikipedia/ru/thumb/1/17/%D0%91%D1%80%D0%B8%D0%BB%D0%BB%D0%B8%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B0%D1%8F_%D1%80%D1%83%D0%BA%D0%B0_Poster.jpg/800px-%D0%91%D1%80%D0%B8%D0%BB%D0%BB%D0%B8%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B0%D1%8F_%D1%80%D1%83%D0%BA%D0%B0_Poster.jpg",alt:""})})},t)}))})}},390:function(n,t,r){r.d(t,{Bt:function(){return d},Tg:function(){return c},h_:function(){return p},mJ:function(){return f},wL:function(){return s}});var e=r(861),a=r(687),o=r.n(a),i=r(388),u="fc5d692a2d0f42e5af832afd0b70affe",c=function(){var n=(0,e.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie/?api_key=".concat(u,"&language=en-US&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=115.097a6e18.chunk.js.map