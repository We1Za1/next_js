1.熟悉项目搭建 使用 npx create-next-app@latest
or
yarn create next-app 搭建next.js脚手架 删除不需要的部分，开始搭建自己的页面

2.页面结构:page:用来存储所有的页面；public：用来放置一些静态资源；styles：用来存放样式

3.使用Link 和 Route 进行页面跳转：
Link 需要被引入 import Link from 'next/link' 才能够使用，且，关于 Link 有个小坑，就是Link标签内必须有且只有一个标签，例如
<Link  href="/pageB"><a>PageB</a></Link>，并且，跳转的路径 href 需要写在 Link 标签内部，这与React解决路由问题的做法不一样

同样的 Route 也需要被引入才能够使用 import Route from 'next/router'
使用方法：Route.push("/pageA")
