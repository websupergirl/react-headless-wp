(window["webpackJsonpheadless-wp-react"]=window["webpackJsonpheadless-wp-react"]||[]).push([[0],{47:function(e,n,t){e.exports=t(59)},52:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(35),l=t.n(o),c=(t(52),t(44)),s=t(5),u=t(23),i=t(15),m=t(19),d=t(24),p=t(20),h=t.n(p);function g(){var e=Object(m.a)(["\n    {\n        posts {\n            edges {\n                node {\n                    title\n                    slug\n                    author {\n                      name\n                    }\n                }\n            }\n        }\n    }  \n    "]);return g=function(){return e},e}var v=function(){return r.a.createElement(d.b,{query:h()(g())},(function(e){var n=e.loading,t=(e.error,e.data);return n?r.a.createElement("h1",null,"Hang on!"):r.a.createElement("div",null,t.posts.edges.map((function(e,n){return r.a.createElement("div",{key:n},r.a.createElement("h3",null,'"',e.node.title,'" by ',e.node.author.name),r.a.createElement(u.b,{to:"/post/".concat(e.node.slug)},"Read More"))})))}))},E=t(41),b=t(42),f=t(45),w=t(43),y=t(46),j=t(60);function O(){var e=Object(m.a)(["\n    query getPostBySlug($slug: String) {\n        post: postBy(uri: $slug) {\n            title\n            slug\n            content\n        }\n    }\n"]);return O=function(){return e},e}var k=function(e){function n(){return Object(E.a)(this,n),Object(f.a)(this,Object(w.a)(n).apply(this,arguments))}return Object(y.a)(n,e),Object(b.a)(n,[{key:"render",value:function(){var e=this.props;return e.data.post?r.a.createElement("div",null,r.a.createElement("h2",null,e.data.post.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.post.content}})):r.a.createElement("h2",null,"Hang on!")}}]),n}(r.a.PureComponent),B=h()(O()),H=Object(j.a)(B,{options:function(e){return{variables:{slug:e.match.params.slug}}}})(k),q=new c.a({uri:"https://headless.thedevdrop.com/graphql"});var P=function(){return r.a.createElement(s.b,{client:q},r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"Headless WordPress and React Test")),r.a.createElement("div",{className:"content"},r.a.createElement(i.a,{exact:!0,path:"/",component:v}),r.a.createElement(i.a,{path:"/posts",component:v}),r.a.createElement(i.a,{path:"/post/:slug",component:H})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.4b62df2c.chunk.js.map