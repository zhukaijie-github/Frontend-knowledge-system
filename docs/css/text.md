# 文本属性

## 字体

1. font-family
```
.p1 {
  font-family: "Times New Roman", Times, serif;
}
```
可以使用@font-face 自定义字体
```
@font-face: {
  font-family: 'my font';
  src: url('/fonts/my.woff2') format('woff2'),
       url('/fonts/my.woff') format('woff);
}
```

2. font-size  
字体大小，单位可以是px, em , rem, vw, vh等

3. font-style 字体样式，属性主要用于指定斜体文本  
   此属性可设置三个值：

```
    - normal - 文字正常显示
    - italic - 文本以斜体显示
    - oblique - 文本为“倾斜”（倾斜与斜体非常相似，但支持较少）
```

4. font-weight 设置字体粗细  

```
    font-weight:  normal; 默认
                  bold; 粗
                  bolder; 更粗
                  lighter; 更细
                  inherit; 继承父元素
                  100~900; 数字表示粗细
```


## 文本 

> 主要列一下在开发中经常用到的

1. text-align 对齐
```
  text-align: left;
              right;
              center;
              justify; 文本两端对齐，使每一行具有相等的宽度，并且左右边距是直的
```

2. 文本方向
```
  p {
    direction: ltr; // 左方向
               rtl; // 右方向
               inherit; // 继承
    unicode-bidi: normal | embed | bidi-override | isolate | isolate-override | plaintext | inherit
  }

```

3. 装饰 text-decoration
   有以下三个属性
      - text-decoration-color
      - text-decoration-style
      - text-decoration-line
```
  text-decoration:  none	默认。定义标准的文本。
                    underline	定义文本下的一条线。
                    overline	定义文本上的一条线。
                    line-through	定义穿过文本下的一条线。
                    blink	定义闪烁的文本。
                    inherit	规定应该从父元素继承 text-decoration 属性的值。

  p {
    text-decoration: none;                     /*没有文本装饰*/
    text-decoration: underline red;            /*红色下划线*/
    text-decoration: underline wavy red;       /*红色波浪形下划线*/
  }
```

4. 文本转换  
   大小写或者首字母大写
```
  p {
    text-transform: none	默认。定义带有小写字母和大写字母的标准的文本。
                    capitalize	文本中的每个单词以大写字母开头。
                    uppercase	大写字母。
                    lowercase	小写字母。
                    inherit	规定应该从父元素继承 text-transform 属性的值。
  }
```

5. 文本缩进
```
  p {
    text-indent: 20px; 固定值
                 20%; 百分比
                 inherit; 继承父元素
  }
```

6. 颜色
```
  p {
    color: #fffff; // 16进制数
           rgb(255,255,255); // rgb形式
           rgba(255,255,255, 0.8); // rgba形式
  }
```

7. 字符间距
```
  p {
    letter-spacing: normal; 没有间距
                    12px; 数值，可以是负数-12px
                    inherit; 继承
  }
```

8. 指定元素内的空白处理 white-space
```
  p {
    white-space: pre; // 保留空白
                 nowrap; // 文本不会换行，直到遇到<br />才会换行
                 pre-wrap; // 保留空白，正常换行
                 pre-line; // 合并空白序列，保留换行
                 inherit; // 继承
  }
```

9. 单词间距 word-spacing
```
  p {
    word-spacing: normal; 没有间距
                  12px; 数值，可以是负数-12px
                  inherit; 继承
  }
```

10. word-break 指定了怎样在单词内断行。
```
  p {
    word-break: normal; // 默认
                break-all; // 对于non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行。
                break-word; // 将在文本可能溢出其容器的确切位置创建一个断点
                keep-all; // CJK 文本不断行。 Non-CJK 文本表现同 normal。
  }
```

11. word-wrap  （overflow-wrap  在CSS 3 中被重命名为overflow-wrap）  
是用来说明当一个不能被分开的字符串太长而不能填充其包裹盒时，为防止其溢出，浏览器是否允许这样的单词中断换行
```
  p {
    word-wrap: normal	只在允许的断字点换行（浏览器保持默认处理）。
               break-word	在长单词或 URL 地址内部进行换行。
  }
```

12. line-height  行高
```
  p {
    line-height: 12px; // 具体数值
                  1.5; // 字体大小的倍数
                  20%; // 基于字体大小的百分百
                  inherit; // 继承
  }
```

13. verctical-align 垂直对齐, 基于**inline, inline-block** 和 **table-cell** 的元素
    [参考资料](https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align)
```
  p {
    display: inline-block;
    verctical-align:  baseline	默认。元素放置在父元素的基线上。
                      sub	垂直对齐文本的下标。
                      super	垂直对齐文本的上标
                      top	把元素的顶端与行中最高元素的顶端对齐
                      text-top	把元素的顶端与父元素字体的顶端对齐
                      middle	把此元素放置在父元素的中部。
                      bottom	使元素及其后代元素的底部与整行的底部对齐。
                      text-bottom	把元素的底端与父元素字体的底端对齐。
                      length	将元素升高或降低指定的高度，可以是负数。
                      %	使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。
                      inherit	规定应该从父元素继承 vertical-align 属性的值。
  }
```

14. text-overflow  向用户发出未显示的溢出内容信号
```
  // 一行溢出
  p {
    overflow:hidden; //超出的文本隐藏
    text-overflow:ellipsis; //溢出用省略号显示
    white-space:nowrap; //溢出不换行
  }

  // 两行溢出
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; //作为弹性伸缩盒子模型显示。
    -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
    -webkit-line-clamp: 2; //显示的行
  }

  p {
    text-overflow:  clip	修剪文本。
                    ellipsis	显示省略符号来代表被修剪的文本。
                    string	使用给定的字符串来代表被修剪的文本。
  }
```

15. text-shadow 文本阴影
```
  p {
    text-shadow:  h-shadow	必需。水平阴影的位置。允许负值。
                  v-shadow	必需。垂直阴影的位置。允许负值。
                  blur	可选。模糊的距离。
                  color
  }
```
