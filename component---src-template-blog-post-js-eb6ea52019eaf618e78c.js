(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{198:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(209),r=n.n(a),i=n(200),l=n(93),c=n(204),m=n(202),u=n(210),s=n(211),g=n(47),p=n.n(g),d=n(199),h=i.b.section.withConfig({displayName:"Footer__ShareToSocialWrapper",componentId:"sc-1udu5zf-0"})(["float:right;color:",";a{font-weight:bold;text-decoration:none;color:",";}"],function(e){return Object(d.a)(e.theme.main).menu},function(e){return Object(d.a)(e.theme.main).menu}),f=Object(o.memo)(function(e){e.title;var t=e.path,n=e.siteUrl;return o.default.createElement(h,null,"Share to :"," ",o.default.createElement("a",{href:"https://facebook.com/sharer.php?u="+n+t,rel:"noopener noreferrer",target:"_blank",title:"Share on Facebook"},"Facebook"))});f.propTypes={title:p.a.string,path:p.a.string.isRequired,siteUrl:p.a.string.isRequired};var A=f,b=n(212),w=n(203),C=n.n(w);n.d(t,"BlogPostBySlugQuery",function(){return j});var B=i.b.main.withConfig({displayName:"blog-post__BlogContainer",componentId:"sc-5m6dzs-0"})(["width:100%;border-radius:4px;max-width:700px;background-color:",";box-shadow:0 3px 10px rgba(25,17,34,0.05);@media screen and (max-width:600px){padding:1.75rem;}@media screen and (min-width:601px){padding:3rem;}"],function(e){return Object(d.a)(e.theme.main).postBg}),E=Object(i.b)(m.a).withConfig({displayName:"blog-post__BlogTitle",componentId:"sc-5m6dzs-1"})(["font-size:2rem;"]),T=i.b.section.withConfig({displayName:"blog-post__BlogMetaData",componentId:"sc-5m6dzs-2"})(["margin:1rem 0;"]),y=i.b.hr.withConfig({displayName:"blog-post__VerticalLine",componentId:"sc-5m6dzs-3"})(["background:",";"],function(e){return"light"===e.theme.main?"hsla(0,0%,0%,0.2)":"#c3c3c3"}),I=Object(i.b)(b.a).withConfig({displayName:"blog-post__BlogPaginationContainer",componentId:"sc-5m6dzs-4"})(["margin:0;width:100%;max-width:700px;padding:2rem 0.25rem;a{color:",";}"],function(e){return Object(d.a)(e.theme.main).postContent}),M=Object(o.memo)(function(e){var t=e.data,n=t.site,a=t.markdownRemark,i=e.location,m=e.pageContext,g=m.next,p=m.previous;return o.default.createElement(o.Fragment,null,o.default.createElement(r.a,{htmlAttributes:{lang:"en"},title:a.frontmatter.title+" - "+n.siteMetadata.title,meta:[{name:"author",content:n.siteMetadata.author},{name:"description",content:a.frontmatter.description+"| "+a.excerpt+" "},{name:"og:title",content:a.frontmatter.title},{name:"og:description",content:a.frontmatter.description+" "},{name:"og:image",content:a.frontmatter.thumbnail.childImageSharp.resize.src},{name:"twitter:title",content:a.frontmatter.title},{name:"twitter:description",content:a.frontmatter.description},{name:"twitter:image",content:a.frontmatter.thumbnail.childImageSharp.resize.src}],link:[{rel:"shortcut icon",type:"image/png",href:""+C.a}]}),o.default.createElement(c.a,null,o.default.createElement(B,null,o.default.createElement(T,null,o.default.createElement(E,null,a.frontmatter.title),o.default.createElement(u.a,null,a.frontmatter.date)),o.default.createElement(y,null),o.default.createElement(s.a,{dangerouslySetInnerHTML:{__html:a.html}}),o.default.createElement(y,null),o.default.createElement(A,{title:a.frontmatter.title,path:i.pathname,siteUrl:n.siteMetadata.siteUrl})),o.default.createElement(I,null,o.default.createElement("li",null,p&&o.default.createElement(l.Link,{to:p.fields.slug,rel:"prev"},"← Previous Post")),o.default.createElement("li",null,g&&o.default.createElement(l.Link,{to:g.fields.slug,rel:"next"},"Next Post →")))))}),j=(t.default=M,"1992028845")},199:function(e,t,n){"use strict";var o={menu:"#E5E9F0",menuBg:"rgba(76, 86, 106, 0.8)",bodyBg:"#2E3440",cardBg:"#4C566A",cardTitle:"#E5E9F0",cardContent:"#D8DEE9",postBg:"#4C566A",postTitle:"#E5E9F0",postContent:"#D8DEE9",postContentCode:"#4C566A",publishDate:"#D8DEE9"},a={menu:"#3B4252",menuBg:"rgba(236, 239, 244, 0.4)",bodyBg:"#D8DEE9",cardBg:"#F9F9F9",cardTitle:"#3B4252",cardContent:"#4C566A",postBg:"#F9F9F9",postTitle:"#3B4252",postContent:"#4C566A",postContentCode:"#4C566A",publishDate:"#4C566A"};t.a=function(e){return"light"===e?a:o}},202:function(e,t,n){"use strict";var o=n(200),a=n(199),r=o.b.h1.withConfig({displayName:"Title__BlogTitle",componentId:"eyqfmw-0"})(["margin-top:1rem;margin-bottom:0.65rem;font-size:1.5rem;color:",";a{text-decoration:none;color:",";}"],function(e){return Object(a.a)(e.theme.main).cardTitle},function(e){return Object(a.a)(e.theme.main).cardTitle});t.a=r},203:function(e,t){e.exports="data:image/png;base64,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"},204:function(e,t,n){"use strict";var o=n(0),a=n(200),r=n(199),i=n(93),l=a.b.nav.withConfig({displayName:"Navbar__NavbarWrapper",componentId:"qmiq8q-0"})(["display:flex;flex-direction:row;margin:2rem 0;"]),c=Object(a.b)(i.Link).withConfig({displayName:"Navbar__NavbarItem",componentId:"qmiq8q-1"})(["margin:0 0.35rem;padding:0.3rem 0.75rem;border-radius:0.2rem;color:",";text-decoration:none;&:hover{background-color:",";}"],function(e){return Object(r.a)(e.theme.main).menu},function(e){return Object(r.a)(e.theme.main).menuBg}),m=function(e){return{backgroundColor:Object(r.a)(e).menuBg}},u=Object(o.memo)(function(e){var t=e.theme;return o.default.createElement(l,null,o.default.createElement(c,{to:"/",role:"link",activeStyle:m(t)},"Blogs"),o.default.createElement(c,{to:"/about",role:"link",partiallyActive:!0,activeStyle:m(t)},"About"))});var s=a.b.div.withConfig({displayName:"ThemeToggler__SwitchContainer",componentId:"bpng0t-0"})(["display:flex;justify-content:center;align-items:center;position:absolute;top:0;right:0;left:0;height:40px;margin:1rem auto;text-align:center;"]),g=a.b.label.withConfig({displayName:"ThemeToggler__Switch",componentId:"bpng0t-1"})(["cursor:pointer;display:inline-block;font-size:20px;height:1em;width:2em;will-change:background-color;transition:background-color 300ms ease;background-color:",";border-radius:1em;input{position:absolute;opacity:0;}input + div{transition:transform 300ms ease;}input:checked + div{will-change:transform;transform:translate3d(100%,0,0);}"],function(e){return Object(r.a)(e.theme.main).cardBg}),p=a.b.div.withConfig({displayName:"ThemeToggler__SwitchButton",componentId:"bpng0t-2"})(["height:1em;width:1em;border-radius:1em;background:#fff;box-shadow:0 0.1em 0.3em rgba(0,0,0,0.3);"]),d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.checked,n=e.onClick;return o.default.createElement(s,null,o.default.createElement(g,null,o.default.createElement("input",{style:{cursor:"pointer"},type:"checkbox",checked:t,onClick:n,readOnly:!0})," ",o.default.createElement(p,null)))},a}(o.PureComponent);n.d(t,"a",function(){return A});var h=a.b.main.withConfig({displayName:"Layout__LayoutWrapper",componentId:"sc-1w1igmq-0"})(["max-width:100vw;min-height:100vh;padding:3rem 1.25rem;will-change:background-color;transition:background-color 300ms ease;background-color:",";display:flex;flex-direction:column;align-items:center;"],function(e){return Object(r.a)(e.theme.main).bodyBg}),f={DARK:"dark",LIGHT:"light"},A=function(e){var t,n;function r(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).state={theme:null},t.toggleTheme=function(){t.setState(function(e){return{theme:e.theme===f.LIGHT?f.DARK:f.LIGHT}},function(){window.__setPreferredTheme(t.state.theme)})},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.componentDidMount=function(){var e=this;this.setState({theme:window.__theme}),window.__onThemeChange=function(){e.setState({theme:window.__theme})}},i.render=function(){var e=this,t=this.state.theme,n=this.props.children;return t&&o.default.createElement(a.a,{theme:{main:t}},o.default.createElement(o.default.Fragment,null,o.default.createElement(d,{checked:"light"===t,onClick:function(){return e.toggleTheme()}}),o.default.createElement(h,null,o.default.createElement(u,{theme:t}),n)))},r}(o.PureComponent)},210:function(e,t,n){"use strict";var o=n(200),a=n(199),r=o.b.p.withConfig({displayName:"PublishDate__BlogPublishDate",componentId:"v2h7y0-0"})(["opacity:0.65;font-size:10px;color:",";margin:0;align-self:flex-end;"],function(e){return Object(a.a)(e.theme.main).publishDate});t.a=r},211:function(e,t,n){"use strict";var o=n(200),a=n(199),r=o.b.section.withConfig({displayName:"Content__BlogContent",componentId:"sc-1pwc3d0-0"})(["color:",";max-width:100%;h1,h2,h3,h4,h5{color:",";}blockquote{p{color:",";}}a{color:",";}p{code{margin:0 0.15rem;color:",";}}"],function(e){return Object(a.a)(e.theme.main).postContent},function(e){return Object(a.a)(e.theme.main).postTitle},function(e){return Object(a.a)(e.theme.main).postContentCode},function(e){return Object(a.a)(e.theme.main).postContent},function(e){return Object(a.a)(e.theme.main).postContentCode});t.a=r},212:function(e,t,n){"use strict";var o=n(200),a=n(199),r=o.b.ul.withConfig({displayName:"Pagination__PaginationContainer",componentId:"sc-1vpuort-0"})(["display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;list-style:none;padding:1rem 0;a{text-decoration:none;color:",";}li{margin:0 1rem;}"],function(e){return Object(a.a)(e.theme.main).menu+"80"});t.a=r}}]);
//# sourceMappingURL=component---src-template-blog-post-js-eb6ea52019eaf618e78c.js.map