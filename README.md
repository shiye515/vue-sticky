# vue-sticky-position
vue sticky 定位组件 [live demo](https://shiye515.github.io/vue-sticky/)

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/vue-sticky-position.svg?style=flat-square
[npm-url]: http://npmjs.org/package/vue-sticky-position
[download-image]: https://img.shields.io/npm/dm/vue-sticky-position.svg?style=flat-square
[download-url]: https://npmjs.org/package/vue-sticky-position

##简介（Intro）

- 除了vue之外不依赖其他库
- 如果浏览器支持 sticky 定位，则使用原生方式，不添加滚动监听

## install

[![vue-sticky-position](https://nodei.co/npm/vue-sticky-position.png)](https://npmjs.org/package/vue-sticky-position)

`npm install vue-sticky-position`

## 用法
```html
    <sticky>
        <div class="stickyed">sticky</div>
    </sticky>
```

如果项目中有用单文件 Vue 组件，推荐如下用法。
```javascript
import Sticky from 'vue-sticky-position/src/Sticky'
export default {
    components: {
        Sticky
    }
}
```

如果项目中不用单文件 Vue 组件
```javascript
import Sticky from 'vue-sticky-position'
export default {
    components: {
        Sticky
    }
}
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>top</td>
          <td>Number</td>
          <td>0</td>
          <td>定位时距离顶部的距离</td>
        </tr>
        <tr>
          <td>bottom</td>
          <td>Number</td>
          <td>0</td>
          <td>定位时距离底部的距离</td>
        </tr>
        <tr>
          <td>z-ndex</td>
          <td>Number</td>
          <td>10</td>
          <td>css中的z-index值</td>
        </tr>
    </tbody>
</table>
