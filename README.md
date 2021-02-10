# 几枝-M | Jizhi-M

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)

支持自定义新标签页的 Chrome 扩展，几枝将在新标签页上展示中国传统色的层叠波浪动画效果搭配经典诗词。

A Chrome extension with custom new tab page featuring Chinese poems and P5.js enabled noise waves in traditional Chinese colors

## 原版功能更改请查看[更新日志](./CHANGELOG.md)

## Jizhi-M 修改内容 ##

- 替换全部 **CRLF** 为 **LF** , 解决 build 报错问题
- 默认字体更换为 **霞骛文楷** 
- 添加 **DogeDoge搜索引擎** 
- 去除 **Firefox构建** 
- 添加 `// eslint-disable-line no-unused-vars` 以解决 build 报错问题
- 跟进 **几枝 | Jizhi** 最新更改
- 添加 **#66ccff** , **#ee0000** , **#9999ff** 三种死宅 Wave 配色

---
## 使用方法： Chrome/Edge 本地装载

### Chrome: ###

> - 下载最新的 release 打包文件并解压
>
> - 地址栏输入 `chrome://extensions/` 进入插件管理页面
>
> - 打开右上角开发者模式（Developer mode）
>
> - 点击左上角 **Load unpacked** 按钮并选取解压得到的 **文件夹**
>
> - 「几枝-M」装载成功，打开新标签页试试吧

### Edge: ###

> - 下载最新的 release 打包文件并解压
> - 地址栏输入 `edge://extensions/` 进入插件管理页面
> - 打开左下角开发人员模式
> - 点击右上角 **加载解压缩的扩展** 按钮并选取解压得到的 **文件夹** 
> - 「几枝-M」装载成功，打开新标签页试试吧

![jizhi-2.1.0 gif](https://github.com/unicar9/jizhi/blob/master/examples/jizhi-2.1.0.gif)
![jizhi gif](https://github.com/unicar9/jizhi/blob/master/examples/jizhi.gif)

## 开发 ##

克隆文件 `git clone`

运行 `yarn` 

运行 `yarn build` 

生成 **builds** 文件夹(仅包含 Chrome 的 build 文件以及压缩包,切记：应使用 LF 而不是 CRLF)**

## 示例

![jizhi bg 1](https://github.com/unicar9/jizhi/blob/master/examples/jizhi-bg-1.jpg)
![jizhi bg 2](https://github.com/unicar9/jizhi/blob/master/examples/jizhi-bg-2.jpg)
![jizhi bg 3](https://github.com/unicar9/jizhi/blob/master/examples/jizhi-bg-3.jpg)

## 鸣谢

- 默认使用的字体为[霞骛文楷](https://github.com/lxgw/LxgwWenKai)
- 使用的字体为[方正金陵系列](http://www.foundertype.com/index.php/FontInfo/index/id/202#)的金陵细简体。
- 层叠的波浪动画效果是利用[P5.js](http://p5js.org/)实现的。
- 诗词名句调用使用[古诗词·一言 API](https://gushi.ci/)。
- 中国传统色名称及色号参考了以下来源：
  - [中国色－中国传统颜色](http://zhongguose.com/)
  - [Traditional Chinese Colors | 中国传统颜色](http://boxingp.github.io/traditional-chinese-colors/)
  - [中国传统色彩](https://color.uisdc.com/)
  - [最全！超美中国传统色 含 RGB、CMYK 色值！值得收藏！](https://www.weibo.com/ttarticle/p/show?id=2309404248238352952773)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/arthur-zheng"><img src="https://avatars1.githubusercontent.com/u/4089684?v=4" width="100px;" alt="Arthur Zheng"/><br /><sub><b>Arthur Zheng</b></sub></a><br /><a href="https://github.com/unicar9/jizhi/commits?author=arthur-zheng" title="Code">💻</a> <a href="#ideas-arthur-zheng" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/unicar9/jizhi/issues?q=author%3Aarthur-zheng" title="Bug reports">🐛</a> <a href="#design-arthur-zheng" title="Design">🎨</a></td>
    <td align="center"><a href="https://xnngs.cn"><img src="https://avatars3.githubusercontent.com/u/38936252?v=4" width="100px;" alt="xnng"/><br /><sub><b>xnng</b></sub></a><br /><a href="https://github.com/unicar9/jizhi/commits?author=xnng" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
