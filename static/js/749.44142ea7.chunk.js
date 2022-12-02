"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[749],{749:function(n,t,e){e.r(t);var r=e(861),i=e(885),o=e(687),a=e.n(o),c=e(689),s=e(390),u=e(791),p=e(368),d=e(184);t.default=function(){var n,t,e=(0,u.useState)(""),o=(0,i.Z)(e,2),l=o[0],x=o[1],g=(0,c.UO)().id,f=(0,c.TH)(),h=null!==(n=null===(t=f.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies";if((0,u.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.h_)(g);case 2:t=n.sent,x(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[g]),l){var m=l.original_title,v=l.vote_average,b=l.poster_path,Z=l.title,w=l.genres,k=l.overview,y=l.backdrop_path,j=function(){setTimeout((function(){var n=document.getElementById("box");n&&n.scrollIntoView({behavior:"smooth"})}),500)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(p.PP,{children:[(0,d.jsx)("div",{className:"background",style:{backgroundImage:"linear-gradient(to right, rgba(47, 48, 58, 0.6), rgba(47, 48, 58, 0.6)), url(https://image.tmdb.org/t/p/w1280".concat(y,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",padding:"0px 15px",width:"100vw",height:"100vh",position:"fixed",zIndex:-1}}),(0,d.jsxs)(p.gm,{children:[(0,d.jsx)(p.E2,{to:h,type:"button",children:"Go back"}),(0,d.jsxs)(p.gC,{children:[b?(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(b),alt:"",width:"300",height:"450"}):"Oops",(0,d.jsxs)("div",{children:[(0,d.jsx)(p.X0,{children:null!==Z&&void 0!==Z?Z:m}),(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:20},children:[(0,d.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6a/New-imdb-logo.png",alt:"",width:"50",height:"30"}),(0,d.jsx)("span",{style:{fontSize:20,fontWeight:"bold"},children:v>0?Math.round(100*v)/100:"Unknown"})]}),(0,d.jsx)("h2",{style:{marginBottom:10},children:"Overview:"}),(0,d.jsx)("p",{style:{width:400,marginBottom:30},children:k}),(0,d.jsx)("h3",{style:{marginBottom:20},children:"Genres"}),(0,d.jsx)(p.nx,{children:w.map((function(n){return(0,d.jsx)(p.mq,{children:n.name},n.name)}))})]})]}),(0,d.jsxs)(p.dd,{children:[(0,d.jsx)("li",{children:(0,d.jsx)(p.Sx,{to:"cast",onClick:j,state:f.state,children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(p.Sx,{to:"reviews",onClick:j,state:f.state,children:"Reviews"})})]})]})]}),(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading"}),children:(0,d.jsx)("div",{children:(0,d.jsx)(c.j3,{})})})]})}}},368:function(n,t,e){e.d(t,{E2:function(){return _},Fy:function(){return j},Gq:function(){return y},HA:function(){return k},PP:function(){return U},Sx:function(){return E},X0:function(){return I},cN:function(){return w},cl:function(){return P},dd:function(){return q},gC:function(){return S},gm:function(){return C},mq:function(){return B},nx:function(){return z}});var r,i,o,a,c,s,u,p,d,l,x,g,f,h,m,v=e(168),b=e(731),Z=e(82),w=Z.ZP.ul(r||(r=(0,v.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 30px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n  padding: 0px 20px;\n  justify-content: center;\n"]))),k=Z.ZP.li(i||(i=(0,v.Z)(["\n  width: 200px;\n\n  transition: all linear 250ms;\n\n  &:hover {\n    border: 2px solid white;\n    transform: scale(1.1);\n  }\n"]))),y=Z.ZP.form(o||(o=(0,v.Z)(["\n  text-align: center;\n  padding-top: 100px;\n"]))),j=Z.ZP.input(a||(a=(0,v.Z)(["\n  outline: none;\n  padding: 10px;\n  margin-right: 3px;\n  border: none;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n"]))),P=Z.ZP.button(c||(c=(0,v.Z)(["\n  padding: 10px 20px;\n  border: none;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: white;\n  cursor: pointer;\n"]))),_=(0,Z.ZP)(b.rU)(s||(s=(0,v.Z)(["\n  text-decoration: none;\n  border: none;\n  border-radius: 10px;\n  padding: 10px 30px;\n  background-color: rgba(79, 79, 88, 0.9);\n  color: white;\n  font-size: 20px;\n  margin: 15px 0px;\n  cursor: pointer;\n\n  transition: all linear 250ms;\n\n  &:hover {\n    background-color: #fefefe;\n    color: black;\n  }\n"]))),S=(Z.ZP.div(u||(u=(0,v.Z)(["\n  background-color: #c3c3c3;\n  padding: 0px 15px;\n"]))),Z.ZP.div(p||(p=(0,v.Z)(["\n  display: flex;\n  gap: 40px;\n  margin-top: 20px;\n"])))),U=Z.ZP.div(d||(d=(0,v.Z)(["\n  /* padding-top: 80px; */\n"]))),C=Z.ZP.div(l||(l=(0,v.Z)(["\n  padding: 80px 15px;\n"]))),z=Z.ZP.p(x||(x=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),B=Z.ZP.span(g||(g=(0,v.Z)(["\n  padding: 10px 20px;\n  background-color: rgba(79, 79, 88, 0.9);\n  border-radius: 5px;\n"]))),I=Z.ZP.h1(f||(f=(0,v.Z)(["\n  margin-bottom: 20px;\n  font-size: 36px;\n  line-height: 1.5;\n"]))),q=Z.ZP.ul(h||(h=(0,v.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 30px;\n  margin-top: 30px;\n"]))),E=(0,Z.ZP)(b.rU)(m||(m=(0,v.Z)(["\n  font-size: 24px;\n  text-decoration: none;\n  padding: 5px 10px;\n  background-color: #b2bec3;\n  border-radius: 5px;\n  color: black;\n"])))},390:function(n,t,e){e.d(t,{Bt:function(){return d},Tg:function(){return s},h_:function(){return u},mJ:function(){return l},wL:function(){return p}});var r=e(861),i=e(687),o=e.n(i),a=e(388),c="fc5d692a2d0f42e5af832afd0b70affe",s=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/search/movie/?api_key=".concat(c,"&language=en-US&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=749.44142ea7.chunk.js.map