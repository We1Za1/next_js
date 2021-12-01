1.熟悉项目搭建 使用 npx create-next-app@latest
or
yarn create next-app 搭建next.js脚手架 删除不需要的部分，开始搭建自己的页面

2.页面结构:page:用来存储所有的页面；public：用来放置一些静态资源；styles：用来存放样式

3.使用Link 和 Route 进行页面跳转：
Link 需要被引入 import Link from 'next/link' 才能够使用，且，关于 Link 有个小坑，就是Link标签内必须有且只有一个标签，例如
<Link  href="/pageB"><a>PageB</a></Link>，并且，跳转的路径 href 需要写在 Link 标签内部，这与React解决路由问题的做法不一样

同样的 Route 也需要被引入才能够使用 import Route from 'next/router'
使用方法：Route.push("/pageA")

4.自定义组件，在本项目中 about 为我自己定义的一个button组件，采用hooks的写法，参数 {children} 用来接收使用该组件时传递的内容

5.使用query来进行参数传递，父组件写法为: <Link  href="/querry_test?name=test_B"><a>translate B</a></Link>或是
Route.push("/querry_test?name=test_C")}} 也可以包装成对象 Route.push({pathname:'/querry_test',query:{name:'test_C'}
而子组件需要引入 import {withRouter} from 'next/router'; 然后采用hooks的写法 接收参数 {router}，读取参数采用 {router.query.name}
最后我们需要向外暴露的是 export default withRouter(组件名称)

6.路由的6个钩子事件：
routeChangeStart  ----------------路由跳转时触发
routeChangeComplete   ------------路由跳转结束触发
beforeHistoryChange   ------------路由跳转时History发生变化触发
routeChangeError   ---------------路由跳转发生错误触发
hanshChangeStart   ---------------哈希路由开始跳转触发
hashChangeComplete   -------------哈希路由跳转结束触发

7.利用 <style jsx> 可以在组件内部进行的样式的编写，但不推荐

8.阅读 NEXT.js 文档，里面对于脚本注入有很大优化，包括3种属性，可以选择在何时加载脚本

