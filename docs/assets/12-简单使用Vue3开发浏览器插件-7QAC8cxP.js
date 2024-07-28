import{u as a,_ as o}from"./WrapperPost-CBdctUM8.js";import{o as r,g as p,w as c,e,B as t}from"./app-Ddps5ZSK.js";import"./dayjs.min-DQVXBks5.js";import"./dark-V7k59D8P.js";const s=e("div",{class:"prose m-auto slide-enter-content"},[e("p",null,[e("div",{class:"table-of-contents"},[e("div",{class:"table-of-contents-anchor hidden"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"})])]),e("ul",null,[e("li",null,[e("a",{href:"#前言"},"前言 "),e("ul",null,[e("li",null,[e("ul",null,[e("li",null,[e("a",{href:"#github-repo"},"GitHub Repo ")])])]),e("li",null,[e("a",{href:"#features"},"Features ")]),e("li",null,[e("a",{href:"#简单描述"},"简单描述 "),e("ul",null,[e("li",null,[e("a",{href:"#build"},"Build ")])])])])])])])]),e("p",null,[e("img",{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d639f32072649fca2bd0c3333e866e1~tplv-k3u1fbpfcp-watermark.image?",alt:"mouse-trail-mode-2.gif"})]),e("h1",{id:"前言",tabindex:"-1"},[t("前言 "),e("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#")]),e("p",null,"前一段新冠阳性，居家隔离办公的时候，经常会遇到分享屏幕。但是当分享的时候，需要聚焦某一要素，简单的鼠标移动并不能让观看者很清晰直观的看到分享者的着重点。 于是便简单开发了一款浏览器插件，显示鼠标移动轨迹。"),e("ul",null,[e("li",null,"💬 按住左边的ALT键，配合鼠标左键按下并在页面上滑动，即可在页面上绘制线条。"),e("li",null,"📃 第一种模式是轨迹短暂跟随鼠标。第二种模式是可随意绘制。"),e("li",null,"📦 取消按下坐标的ALT键，绘制的内容将被清空")]),e("h3",{id:"github-repo",tabindex:"-1"},[t("GitHub Repo "),e("a",{class:"header-anchor",href:"#github-repo","aria-hidden":"true"},"#")]),e("p",null,[e("a",{href:"https://github.com/pinky-pig/what-is-my-mouse-trail.git",target:"_blank",rel:"noopener"},"what-is-my-mouse-trail"),t(".")]),e("p",{align:"center"},[e("sub",null,"Popup"),e("br"),e("img",{width:"655",src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0677b69340f4b8ab74f327518eab4d4~tplv-k3u1fbpfcp-watermark.image?"}),e("br"),e("sub",null,"Inject Vue App into the Content Script"),e("br"),e("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images微信图片_20221230103451.png"})]),e("h2",{id:"features",tabindex:"-1"},[t("Features "),e("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#")]),e("ul",null,[e("li",null,"⚡️ 鼠标轨迹跟随"),e("li",null,"🥝 自由绘制"),e("li",null,"🌈 颜色选择")]),e("h2",{id:"简单描述",tabindex:"-1"},[t("简单描述 "),e("a",{class:"header-anchor",href:"#简单描述","aria-hidden":"true"},"#")]),e("ul",null,[e("li",null,[t("如果需要自定义弹出框页面样式，可以在 "),e("code",null,"popup/Popup.vue"),t(" 中修改。")]),e("li",null,[t("如果需要修改笔刷样式，可以在"),e("a",{href:"https://perfect-freehand-example.vercel.app/",target:"_blank",rel:"noopener"},[e("code",null,"free-hand")]),t("调试好笔刷后，再将配置赋值给"),e("code",null,"contentScripts/views/App.vue"),t(" 中的"),e("code",null,"config_draw"),t("参数。")]),e("li",null,[t("如果需要修改业务逻辑，只需关注"),e("code",null,"popup/Popup.vue"),t("和"),e("code",null,"contentScripts/views/App.vue"),t("这两个页面。")])]),e("p",null,[t("鼠标移动，轨迹短暂跟随的功能其实是来自于"),e("a",{href:"https://www.tldraw.com/",target:"_blank",rel:"noopener"},"tldraw"),t("的橡皮擦功能，轨迹看着很像水果忍者里面的刀。然后又拓展了一点，就是可以自由绘制。其实代码很简单，就是画布是个svg，按住alt加鼠标左键，将mousemove的点绘制成path，添加到svg画布上就好了。代码量很少，就只监听鼠标 "),e("code",null,"pointerdown"),t("、"),e("code",null,"pointermove"),t("、"),e("code",null,"pointerup"),t("就可以了。")]),e("h3",{id:"build",tabindex:"-1"},[t("Build "),e("a",{class:"header-anchor",href:"#build","aria-hidden":"true"},"#")]),e("pre",{class:"shiki shiki-themes github-dark catppuccin-latte",style:{"--s-dark":"#e1e4e8","--s-light":"#4c4f69","--s-dark-bg":"#24292e","--s-light-bg":"#eff1f5"},tabindex:"0"},[e("code",{class:"language-bash"},[e("span",{class:"line"},[e("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"pnpm"),e("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}}," build")])])]),e("p",null,"安装：（以chrome浏览器为例）"),e("ol",null,[e("li",null,[t("地址栏输入: "),e("code",null,"chrome://extensions/"),t("。")]),e("li",null,"打开开发者模式。"),e("li",null,[t("将生成的 "),e("code",null,"/extension"),t(" 文件夹直接拖拽到浏览器扩展程序页面。")])])],-1),b="简单使用Vue3开发浏览器插件",F="2024/01/08",A="开发浏览器插件",w=["#全部","#简单"],_="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d639f32072649fca2bd0c3333e866e1~tplv-k3u1fbpfcp-watermark.image?",k="https://mmeme.me/og%2F12-%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8Vue3%E5%BC%80%E5%8F%91%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6.png",v="开发浏览器插件",y=[{property:"og:title",content:"简单使用Vue3开发浏览器插件"},{name:"twitter:title",content:"简单使用Vue3开发浏览器插件"},{name:"description",content:"开发浏览器插件"},{property:"og:description",content:"开发浏览器插件"},{name:"twitter:description",content:"开发浏览器插件"},{property:"og:image",content:"https://mmeme.me/og%2F12-%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8Vue3%E5%BC%80%E5%8F%91%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F12-%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8Vue3%E5%BC%80%E5%8F%91%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6.png"},{name:"twitter:card",content:"summary_large_image"}],V={__name:"12-简单使用Vue3开发浏览器插件",setup(u,{expose:l}){const n={title:"简单使用Vue3开发浏览器插件",date:"2024/01/08",desc:"开发浏览器插件",tags:["#全部","#简单"],cover:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d639f32072649fca2bd0c3333e866e1~tplv-k3u1fbpfcp-watermark.image?",image:"https://mmeme.me/og%2F12-%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8Vue3%E5%BC%80%E5%8F%91%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6.png",description:"开发浏览器插件",meta:[{property:"og:title",content:"简单使用Vue3开发浏览器插件"},{name:"twitter:title",content:"简单使用Vue3开发浏览器插件"},{name:"description",content:"开发浏览器插件"},{property:"og:description",content:"开发浏览器插件"},{name:"twitter:description",content:"开发浏览器插件"},{property:"og:image",content:"https://mmeme.me/og%2F12-%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8Vue3%E5%BC%80%E5%8F%91%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F12-%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8Vue3%E5%BC%80%E5%8F%91%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6.png"},{name:"twitter:card",content:"summary_large_image"}]};return l({frontmatter:n}),a({title:"简单使用Vue3开发浏览器插件",meta:[{property:"og:title",content:"简单使用Vue3开发浏览器插件"},{name:"twitter:title",content:"简单使用Vue3开发浏览器插件"},{name:"description",content:"开发浏览器插件"},{property:"og:description",content:"开发浏览器插件"},{name:"twitter:description",content:"开发浏览器插件"},{property:"og:image",content:"https://mmeme.me/og%2F12-%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8Vue3%E5%BC%80%E5%8F%91%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F12-%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8Vue3%E5%BC%80%E5%8F%91%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6.png"},{name:"twitter:card",content:"summary_large_image"}]}),(d,E)=>{const i=o;return r(),p(i,{frontmatter:n},{default:c(()=>[s]),_:1})}}};export{_ as cover,F as date,V as default,A as desc,v as description,k as image,y as meta,w as tags,b as title};
