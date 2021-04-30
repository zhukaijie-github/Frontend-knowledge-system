(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{368:function(t,e,s){"use strict";s.r(e);var a=s(45),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"markdown-拓展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-拓展"}},[t._v("#")]),t._v(" Markdown 拓展")]),t._v(" "),s("h2",{attrs:{id:"header-anchors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header-anchors"}},[t._v("#")]),t._v(" Header Anchors")]),t._v(" "),s("p",[t._v("所有的标题将会自动地应用 anchor 链接，anchor 的渲染可以通过 "),s("RouterLink",{attrs:{to:"/config/#markdown-anchor"}},[s("code",[t._v("markdown.anchor")])]),t._v(" 来配置。")],1),t._v(" "),s("h2",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),s("h3",{attrs:{id:"内部链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内部链接"}},[t._v("#")]),t._v(" 内部链接")]),t._v(" "),s("p",[t._v("网站内部的链接，将会被转换成 "),s("code",[t._v("<router-link>")]),t._v(" 用于 SPA 导航。同时，站内的每一个文件夹下的 "),s("code",[t._v("README.md")]),t._v(" 或者 "),s("code",[t._v("index.md")]),t._v(" 文件都会被自动编译为 "),s("code",[t._v("index.html")]),t._v("，对应的链接将被视为 "),s("code",[t._v("/")]),t._v("。")]),t._v(" "),s("p",[t._v("以如下的文件结构为例：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n├─ README.md\n├─ foo\n│  ├─ README.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar\n   ├─ README.md\n   ├─ three.md\n   └─ four.md\n")])])]),s("p",[t._v("假设你现在在 "),s("code",[t._v("foo/one.md")]),t._v(" 中：")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("Home")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("/")]),t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到根部的 README.md --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("foo")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("/foo/")]),t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到 foo 文件夹的 index.html --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("foo heading")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("./#heading")]),t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到 foo/index.html 的特定标题位置 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("bar - three")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("../bar/three.md")]),t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 具体文件可以使用 .md 结尾（推荐） --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("bar - four")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("../bar/four.html")]),t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 也可以用 .html --\x3e")]),t._v("\n")])])]),s("h3",{attrs:{id:"链接的重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接的重定向"}},[t._v("#")]),t._v(" 链接的重定向")]),t._v(" "),s("p",[t._v("VuePress 支持重定向到干净链接。如果一个链接 "),s("code",[t._v("/foo")]),t._v(" 找不到，VuePress 会自行寻找一个可用的 "),s("code",[t._v("/foo/")]),t._v(" 或 "),s("code",[t._v("/foo.html")]),t._v("。反过来，当 "),s("code",[t._v("/foo/")]),t._v(" 或 "),s("code",[t._v("/foo.html")]),t._v(" 中的一个找不到时，VuePress 也会尝试寻找另一个。借助这种特性，我们可以通过官方插件 "),s("a",{attrs:{href:"https://vuepress.github.io/plugins/clean-urls/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-clean-urls"),s("OutboundLink")],1),t._v(" 定制你的网站路径。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("无论是否使用了 permalink 和 clean-urls 插件，你的相对路径都应该依赖于当前的文件结构来定义。在上面的例子中，即使你将 "),s("code",[t._v("/foo/one.md")]),t._v(" 的路径设为了 "),s("code",[t._v("/foo/one/")]),t._v("，你依然应该通过 "),s("code",[t._v("./two.md")]),t._v(" 来访问 "),s("code",[t._v("/foo/two.md")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"page-suffix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-suffix"}},[t._v("#")]),t._v(" Page Suffix")])])}),[],!1,null,null,null);e.default=r.exports}}]);