import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()


/**
 * 要输出给第三方小程序使用的自定义组件,必须声明全局组件
 * 如果只是淡出你的引入,不声明全局组件,build模式会无法正常输出组件
 */
import test from './components/test'
Vue.component('test',test)


// 插件接口输出使用特殊的API
__uniPluginExports = {
    hello: function() {
        console.log('Hello plugin!')
    }
}
