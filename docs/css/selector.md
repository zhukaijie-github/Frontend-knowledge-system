# 选择器

## 通配符
> 匹配所有元素
```
  * {
    margin: 0;
  }
```

## 标签选择器
```
  a {}
  p {}
```

## id 选择器
```
  #app {}
```

## class类 选择器
```
  .menu {}
```

## 后代选择器（空格）
```
  div p .nav { }
```

## 子元素选择器 ( > )
```
  div > p {}
```

## 相邻兄弟选择器 （ + ）
```
  span + p {  }
```

## 通用兄弟选择器 （~）
```
  span ~ p { }
```

## 伪类选择器 

> 伪类，就是定义元素的特殊样式

```
  a:hover {}
  a:link {}
  a:first-child {}
```

## 伪元素选择器

> 伪元素，可以显示在页面上的元素

```
  ::before {}
  ::after {}
  ::selection {}
  ::first-letter {}
  ::first-line {}
```

## 属性选择器

1. [attribute] 选择带有 target 的所有元素 
```
  div[data-id] {
    color: red;
  }
```

2. [attribute=value] 选择带有 target="_blank" 属性的所有元素。 
```
  a[target="_blank"] {
    color: blue;
  }
  
  input[type="text"] {
    line-height: 20px;
  }
```

3. [attribute~=value] 选择 attribute 属性包含单词 value 的所有元素。
```
  // div class类名中包含box 的所有元素
  div[class~=box] {
    width: 30px;
    height: 20px;
    background: red;
  }
```

4. [attribute|=value] , [attribute^=value] 选择 attribute 属性为 value 开头的所有元素
```
  div[class|=el] {
    width: 30px;
    height: 20px;
    background: red;
  }

  div[class^=xl] {
    width: 30px;
    height: 20px;
    background: blue;
  }
```

5. [attribute$=value] 选择 attribute 属性以 value 结尾的所有元素, `注意value后面不能带空格，带了空格就变成了以空格结尾的`
```
  div[class$=box] {
    width: 30px;
    height: 20px;
    background: yellow;
  }
```

6. [attribute*=value] 选择 attribute 属性包含 value 的所有元素
```
  div[class*=box] {
    width: 30px;
    height: 20px;
    background: yellow;
  }
```


