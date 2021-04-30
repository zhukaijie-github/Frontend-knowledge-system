(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{366:function(t,a,e){"use strict";e.r(a);var n=e(45),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"文本属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文本属性"}},[t._v("#")]),t._v(" 文本属性")]),t._v(" "),e("h2",{attrs:{id:"字体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字体"}},[t._v("#")]),t._v(" 字体")]),t._v(" "),e("ol",[e("li",[t._v("font-family")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('.p1 {\n  font-family: "Times New Roman", Times, serif;\n}\n')])])]),e("p",[t._v("可以使用@font-face 自定义字体")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@font-face: {\n  font-family: 'my font';\n  src: url('/fonts/my.woff2') format('woff2'),\n       url('/fonts/my.woff') format('woff);\n}\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("font-size"),e("br"),t._v("\n字体大小，单位可以是px, em , rem, vw, vh等")])]),t._v(" "),e("li",[e("p",[t._v("font-style 字体样式，属性主要用于指定斜体文本"),e("br"),t._v("\n此属性可设置三个值：")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    - normal - 文字正常显示\n    - italic - 文本以斜体显示\n    - oblique - 文本为“倾斜”（倾斜与斜体非常相似，但支持较少）\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("font-weight 设置字体粗细")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    font-weight:  normal; 默认\n                  bold; 粗\n                  bolder; 更粗\n                  lighter; 更细\n                  inherit; 继承父元素\n                  100~900; 数字表示粗细\n")])])]),e("h2",{attrs:{id:"文本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文本"}},[t._v("#")]),t._v(" 文本")]),t._v(" "),e("blockquote",[e("p",[t._v("主要列一下在开发中经常用到的")])]),t._v(" "),e("ol",[e("li",[t._v("text-align 对齐")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  text-align: left;\n              right;\n              center;\n              justify; 文本两端对齐，使每一行具有相等的宽度，并且左右边距是直的\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("文本方向")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  p {\n    direction: ltr; // 左方向\n               rtl; // 右方向\n               inherit; // 继承\n    unicode-bidi: normal | embed | bidi-override | isolate | isolate-override | plaintext | inherit\n  }\n\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("装饰 text-decoration\n有以下三个属性\n"),e("ul",[e("li",[t._v("text-decoration-color")]),t._v(" "),e("li",[t._v("text-decoration-style")]),t._v(" "),e("li",[t._v("text-decoration-line")])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  text-decoration:  none\t默认。定义标准的文本。\n                    underline\t定义文本下的一条线。\n                    overline\t定义文本上的一条线。\n                    line-through\t定义穿过文本下的一条线。\n                    blink\t定义闪烁的文本。\n                    inherit\t规定应该从父元素继承 text-decoration 属性的值。\n\n  p {\n    text-decoration: none;                     /*没有文本装饰*/\n    text-decoration: underline red;            /*红色下划线*/\n    text-decoration: underline wavy red;       /*红色波浪形下划线*/\n  }\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("文本转换"),e("br"),t._v("\n大小写或者首字母大写")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  p {\n    text-transform: none\t默认。定义带有小写字母和大写字母的标准的文本。\n                    capitalize\t文本中的每个单词以大写字母开头。\n                    uppercase\t大写字母。\n                    lowercase\t小写字母。\n                    inherit\t规定应该从父元素继承 text-transform 属性的值。\n  }\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("文本缩进")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  p {\n    text-indent: 20px; 固定值\n                 20%; 百分比\n                 inherit; 继承父元素\n  }\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[t._v("颜色")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  p {\n    color: #fffff; // 16进制数\n           rgb(255,255,255); // rgb形式\n           rgba(255,255,255, 0.8); // rgba形式\n  }\n")])])]),e("ol",{attrs:{start:"7"}},[e("li",[t._v("字符间距")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  p {\n    letter-spacing: normal; 没有间距\n                    12px; 数值，可以是负数-12px\n                    inherit; 继承\n  }\n")])])]),e("ol",{attrs:{start:"8"}},[e("li",[t._v("指定元素内的空白处理 white-space")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  p {\n    white-space: pre; // 保留空白\n                 nowrap; // 文本不会换行，直到遇到<br />才会换行\n                 pre-wrap; // 保留空白，正常换行\n                 pre-line; // 合并空白序列，保留换行\n                 inherit; // 继承\n  }\n")])])]),e("ol",{attrs:{start:"9"}},[e("li",[t._v("单词间距 word-spacing")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  p {\n    word-spacing: normal; 没有间距\n                  12px; 数值，可以是负数-12px\n                  inherit; 继承\n  }\n")])])]),e("ol",{attrs:{start:"10"}},[e("li",[t._v("word-break 指定了怎样在单词内断行。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  p {\n    word-break: normal; // 默认\n                break-all; // 对于non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行。\n                break-word; // 将在文本可能溢出其容器的确切位置创建一个断点\n                keep-all; // CJK 文本不断行。 Non-CJK 文本表现同 normal。\n  }\n")])])]),e("ol",{attrs:{start:"11"}},[e("li",[t._v("word-wrap  （overflow-wrap  在CSS 3 中被重命名为overflow-wrap）"),e("br"),t._v("\n是用来说明当一个不能被分开的字符串太长而不能填充其包裹盒时，为防止其溢出，浏览器是否允许这样的单词中断换行")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  p {\n    word-wrap: normal\t只在允许的断字点换行（浏览器保持默认处理）。\n               break-word\t在长单词或 URL 地址内部进行换行。\n  }\n")])])]),e("ol",{attrs:{start:"12"}},[e("li",[t._v("line-height  行高")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  p {\n    line-height: 12px; // 具体数值\n                  1.5; // 字体大小的倍数\n                  20%; // 基于字体大小的百分百\n                  inherit; // 继承\n  }\n")])])]),e("ol",{attrs:{start:"13"}},[e("li",[t._v("verctical-align 垂直对齐, 基于"),e("strong",[t._v("inline, inline-block")]),t._v(" 和 "),e("strong",[t._v("table-cell")]),t._v(" 的元素\n"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考资料"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('  p {\n    display: inline-block;\n    verctical-align:  baseline\t默认。元素放置在父元素的基线上。\n                      sub\t垂直对齐文本的下标。\n                      super\t垂直对齐文本的上标\n                      top\t把元素的顶端与行中最高元素的顶端对齐\n                      text-top\t把元素的顶端与父元素字体的顶端对齐\n                      middle\t把此元素放置在父元素的中部。\n                      bottom\t使元素及其后代元素的底部与整行的底部对齐。\n                      text-bottom\t把元素的底端与父元素字体的底端对齐。\n                      length\t将元素升高或降低指定的高度，可以是负数。\n                      %\t使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。\n                      inherit\t规定应该从父元素继承 vertical-align 属性的值。\n  }\n')])])]),e("ol",{attrs:{start:"14"}},[e("li",[t._v("text-overflow  向用户发出未显示的溢出内容信号")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  // 一行溢出\n  p {\n    overflow:hidden; //超出的文本隐藏\n    text-overflow:ellipsis; //溢出用省略号显示\n    white-space:nowrap; //溢出不换行\n  }\n\n  // 两行溢出\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box; //作为弹性伸缩盒子模型显示。\n    -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列\n    -webkit-line-clamp: 2; //显示的行\n  }\n\n  p {\n    text-overflow:  clip\t修剪文本。\n                    ellipsis\t显示省略符号来代表被修剪的文本。\n                    string\t使用给定的字符串来代表被修剪的文本。\n  }\n")])])]),e("ol",{attrs:{start:"15"}},[e("li",[t._v("text-shadow 文本阴影")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  p {\n    text-shadow:  h-shadow\t必需。水平阴影的位置。允许负值。\n                  v-shadow\t必需。垂直阴影的位置。允许负值。\n                  blur\t可选。模糊的距离。\n                  color\n  }\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);