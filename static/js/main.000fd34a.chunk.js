(window["webpackJsonpgithub.io"]=window["webpackJsonpgithub.io"]||[]).push([[0],Array(19).concat([function(t,e,a){t.exports=a.p+"static/media/rocket.001c0594.png"},,function(t,e,a){t.exports=a.p+"static/media/profile.f43aaa62.jpg"},,,function(t,e,a){t.exports=a.p+"static/media/logo-reverse.360896d3.svg"},,function(t,e,a){t.exports=a(56)},,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){t.exports=a.p+"static/media/ptc-1.014af25e.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-2.97dbf890.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-3.3c9a22a0.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-4.6098ee89.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-5.92f79c65.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-6.28ecaa97.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-7.dacf16d1.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-8.a55236b5.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-9.6a392770.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-10.d63496f0.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-11.2a5dd227.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-12.0cf5cb51.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-13.7e5be33a.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-14.a979685f.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-15.28b83dfe.svg"},function(t,e,a){t.exports=a.p+"static/media/ptc-16.275f3f93.svg"},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var i,n,c,s,r=a(0),o=a.n(r),l=a(18),h=a.n(l),u=a(8),m=a(9),d=a(25),f=a(1),p=a(3),v=a(6),g=a(5),b=a(7),y=(a(31),a(19)),x=a.n(y),w=function t(e,a){var r=this;Object(f.a)(this,t),this.create=function(t,e){i=t,n=e,r.canvas.onmousemove=function(t){c=t.clientX,s=t.clientY};for(var a=0;a<r.config.particle.amount;a++){var o=r.config.particle,l=o.maxSize,h=o.minSize,u=o.minVelocity,m=o.maxVelocity,d=o.colors,f=Math.random()*(l-h)+h,p=Math.random()*(l-h)+h,v=Math.random()*i,g=Math.random()*n,b=Math.random()*(m-u)+u,y=d[Math.floor(Math.random()*d.length)],x=void 0;switch(Math.floor(4*Math.random())){case 0:x=new O(v,g,b,0,y,f,r.c);break;case 1:x=new k(v,g,b,0,y,f,p,r.c);break;case 2:x=new M(v,g,b,0,y,f,p,r.c);break;default:x=new N(v,g,b,0,y,f,p,r.c)}x.draw(),r.particleArray.push(x)}r.animate()},this.animate=function(){window.requestAnimationFrame(r.animate),r.c.clearRect(0,0,i,n);for(var t=0;t<r.particleArray.length;t++)r.particleArray[t].update()},this.particleArray=[],this.canvas=e,this.config=a,this.c=this.canvas.getContext("2d")},E=function(t,e){i=e,n=t},j=function(){function t(e,a,i,n,c,s,r,o){Object(f.a)(this,t),this.x=e,this.y=a,this.dx=i,this.dy=n,this.dcollision=0,this.collisionDirection=0,this.color=c,this.friction=Math.random()*(1.02-1.07)+1.07,this.height=s,this.width=r,this.c=o}return Object(p.a)(t,[{key:"update",value:function(){this.x+=-this.dx,this.x<0-this.width&&(this.x=i,this.y=Math.random()*n,this.dcollision=0),this.dcollision>0&&(1===this.collisionDirection?this.y+=this.dcollision:this.y-=this.dcollision,this.dcollision=this.dcollision/this.friction),this.checkMouseCollision(),this.draw()}},{key:"checkMouseCollision",value:function(){var t=c,e=s;this.x<t+100&&this.x>t-100&&this.y<e+100&&this.y>e-100&&(this.y>e?(this.dcollision=this.dx,this.collisionDirection=1):(this.dcollision=this.dx,this.collisionDirection=0))}},{key:"draw",value:function(){}}]),t}(),O=function(t){function e(t,a,i,n,c,s,r){var o;return Object(f.a)(this,e),s/=2,(o=Object(v.a)(this,Object(g.a)(e).call(this,t,a,i,n,c,s,s,r))).radius=s,o}return Object(b.a)(e,t),Object(p.a)(e,[{key:"draw",value:function(){this.c.beginPath(),this.c.arc(this.x,this.y,this.radius,0,2*Math.PI),this.c.fillStyle=this.color,this.c.fill()}}]),e}(j),k=function(t){function e(){return Object(f.a)(this,e),Object(v.a)(this,Object(g.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(p.a)(e,[{key:"draw",value:function(){this.c.fillStyle=this.color,this.c.fillRect(this.x,this.y,this.height,this.width),this.c.fill()}}]),e}(j),N=function(t){function e(){return Object(f.a)(this,e),Object(v.a)(this,Object(g.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(p.a)(e,[{key:"draw",value:function(){this.c.fillStyle=this.color,this.c.beginPath(),this.c.moveTo(this.x,this.y),this.c.lineTo(this.x+this.width,this.y),this.c.lineTo(this.x+this.width/2,this.y-this.width),this.c.fill()}}]),e}(j),M=function(t){function e(){return Object(f.a)(this,e),Object(v.a)(this,Object(g.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(p.a)(e,[{key:"draw",value:function(){this.c.strokeStyle=this.color,this.c.beginPath(),this.c.moveTo(this.x,this.y),this.c.lineTo(this.x+this.width/3,this.y),this.c.lineTo(this.x-this.width/3,this.y),this.c.lineTo(this.x,this.y),this.c.lineTo(this.x,this.y+this.width/3),this.c.lineTo(this.x,this.y-this.width/3),this.c.lineTo(this.x,this.y),this.c.lineWidth=3,this.c.stroke()}}]),e}(j),H=a(11),C=a.n(H),W=function(t){function e(){var t;return Object(f.a)(this,e),(t=Object(v.a)(this,Object(g.a)(e).call(this))).initCanvas=function(e){var a=document.getElementById(e);return a.width=window.innerWidth,a.height=t.canvasHeight,window.addEventListener("resize",(function(){a.height=C()(".hero").outerHeight(!0)+C()("header").outerHeight(!0)+100,a.width=window.innerWidth,E(a.height,a.width)})),new w(a,t.config)},t.moreParticles=function(){if(t.config.particle.amount<=85){t.config.particle.amount+=20;var e=t.initCanvas("back-canvas"),a=t.initCanvas("front-canvas");e.create(window.innerWidth,t.canvasHeight),a.create(window.innerWidth,t.canvasHeight)}},t.lessParticles=function(){t.config.particle.amount-=t.config.particle.amount<=0?0:20;var e=t.initCanvas("back-canvas"),a=t.initCanvas("front-canvas");e.create(window.innerWidth,t.canvasHeight),a.create(window.innerWidth,t.canvasHeight)},t.config={particle:{amount:30,colors:["#193446","#324a5a","#4c616f","#667884"],minSize:10,maxSize:15,minVelocity:2,maxVelocity:5}},t.canvasHeight=0,t}return Object(b.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){this.canvasHeight=C()(".hero").outerHeight(!0)+C()("header").outerHeight(!0)+100;var t=this.initCanvas("back-canvas"),e=this.initCanvas("front-canvas");t.create(window.innerWidth,this.canvasHeight),e.create(window.innerWidth,this.canvasHeight)}},{key:"render",value:function(){return o.a.createElement("div",{className:"hero"},o.a.createElement("canvas",{id:"back-canvas"}),o.a.createElement("div",{className:"flex flex-col-reverse md:flex-row justify-center"},o.a.createElement("div",{className:"hero-image flex justify-center "},o.a.createElement("img",{className:"hero-img-anim",src:x.a,alt:"Dinossaur riding a hoverboard"})),o.a.createElement("div",{className:"hero-title"},o.a.createElement("h1",{className:"text-center sm:text-left"},"Hi there!"),o.a.createElement("h2",null,"I'm happy you are here"),o.a.createElement("h3",null,"My name is Jo\xe3o and I like to create stuff"))),o.a.createElement("canvas",{id:"front-canvas"}),o.a.createElement("div",{id:"canvas-menu"}))}}]),e}(r.Component),I=a(20),P=a.n(I),S=a(21),T=a.n(S),A=(a(32),a(33),function(t){return o.a.createElement("div",null,o.a.createElement("h3",null,t.name))}),J=function(t){function e(){var t,i;Object(f.a)(this,e);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(i=Object(v.a)(this,(t=Object(g.a)(e)).call.apply(t,[this].concat(c)))).getForms=function(){for(var t=[],e=1;e<=8;e++)t.push(a(34)),t.push(a(35)),t.push(a(36)),t.push(a(37)),t.push(a(38)),t.push(a(39)),t.push(a(40)),t.push(a(41)),t.push(a(42)),t.push(a(43)),t.push(a(44)),t.push(a(45)),t.push(a(46)),t.push(a(47)),t.push(a(48)),t.push(a(49));var i=[],n=98/t.length,c=0,s=!0,r=!1,l=void 0;try{for(var h,u=t.entries()[Symbol.iterator]();!(s=(h=u.next()).done);s=!0){var m=h.value,f=Object(d.a)(m,2),p=f[0],v=f[1];c+=n;var g={position:"absolute",top:700*Math.random()+0,left:c+"%",width:"10px",opacity:"0.08"},b=8*Math.random()+0;i.push(o.a.createElement("img",{src:v,key:p,style:g,className:"rellax","data-rellax-speed":b,alt:""}))}}catch(y){r=!0,l=y}finally{try{s||null==u.return||u.return()}finally{if(r)throw l}}return i},i}return Object(b.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){new P.a(".rellax")}},{key:"render",value:function(){var t=this.getForms();return o.a.createElement("div",null,o.a.createElement(W,null),o.a.createElement("div",{className:"relative mt-32"},t,o.a.createElement("div",{className:"profile mx-auto w-32 text-center relative p-5 rounded-lg"},o.a.createElement("img",{src:T.a,className:"profile",alt:"Portait of Joao"}),o.a.createElement("h4",{className:"mb-1 mx-5 "}," My name is Jo\xe3o Henrique Wind, I'm a brazilian software developer, currently living in Lisbon, Portugal. ")," ",o.a.createElement("br",null),o.a.createElement("p",{className:"mb-1 mx-5 "},"I have 6+ years of experience in programming, focusing mainly in mobile and front-end applications. I usually use Javascript, ReactJS and React Native, but I also work with Java for the back-end. "),o.a.createElement("p",{className:"mb-1 mx-5"}," I also love music, dance, photography and any kind of art. "),o.a.createElement("hr",{className:"my-4"}),o.a.createElement("p",{className:"text-gray-500"},"Check me out in other places of the ",o.a.createElement("span",{className:"cursive "},"World Wide Web:")),o.a.createElement("div",{className:"justify-center flex mt-6"},o.a.createElement("a",{href:"https://github.com/jotahws",target:"_blank"},o.a.createElement("i",{className:"fab fa-github fa-2x mx-2 text-orange-500"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/jo\xe3o-henrique-wind-santos-705aa8114/",target:"_blank"},o.a.createElement("i",{className:"fab fa-linkedin fa-2x mx-2 text-pink-500"})),o.a.createElement("a",{href:"https://twitter.com/jotahws",target:"_blank"},o.a.createElement("i",{className:"fab fa-twitter fa-2x mx-2 text-yellow-500"})))),o.a.createElement(A,{name:"Ol\xe1"})),o.a.createElement("div",{className:"my-20"}),o.a.createElement(u.b,{to:"/subpage/minhaCustomParam"}))}}]),e}(r.Component),D=function(t){function e(){return Object(f.a)(this,e),Object(v.a)(this,Object(g.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.b,{to:"/"},"Go to Homepage"))}}]),e}(r.Component),z=a(24),R=a.n(z),V=function(){return o.a.createElement("header",{className:"flex justify-center m-3 md:m-5"},o.a.createElement(u.b,{to:"/"},o.a.createElement("img",{src:R.a,className:"h-16 md:h-20",alt:"logo"})))},q=function(){return o.a.createElement(u.a,null,o.a.createElement(V,null),o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/",component:J}),o.a.createElement(m.a,{path:"/subpage/:customParam",component:D})))},F=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(q,null))};a(54),a(55);h.a.render(o.a.createElement(F,null),document.getElementById("root"))}]),[[26,1,2]]]);
//# sourceMappingURL=main.000fd34a.chunk.js.map