import Theme from 'vitepress/theme'
import MyLayout from './components/MyLayout.vue'
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from "vitepress";
import mediumZoom from 'medium-zoom';
// import Tweet from "vue-tweet";
// import { Bar } from 'vue-chartjs'

// import 'uno.css'
import './styles/mathjax3.css';
import './styles/index.css'
import './styles/color.css'

import BiliComment from './components/BiliComment.vue';
import BiliCommentTest from './components/BiliCommentTest.vue';
// import LineChartx from './components/LineChartx.vue';

// import VPFeature from './components/VPFeature.vue';
// import VPFeatures from './components/VPFeatures.vue';

// export { default } from 'vitepress/theme'

// defaultTheme.enhanceApp = ({ app }) => {
//     app.component('VPFeature', VPFeature)
//     app.component('VPFeatures', VPFeatures)
// }

export default {
    ...Theme,
    // 注释掉就会取消评论系统，断网时评论系统会影响路由变化的内容刷新
    // Layout: MyLayout,

    /**  medium-zoom 配置 
    - 目前有个bug，route变化后点击放大图片就不起作用了，可能需要一个watcher
    https://github.com/vuejs/vitepress/issues/854
    - 10-23 更新：根据上面的代码自己改了下，但是逻辑一团糟，功能倒是实现了，希望有大佬能改一下
    - 10-28 更新：自己改了下，修复了刷新会导致页面只加载底部部分的bug **/
    setup() {
        const route = useRoute();
        const zoom = () => {
            // ![](path/to/file.jpg){data-zoomable} 带后缀的注册
            // new mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
            // ![](path/to/file.jpg) 全局注册
            new mediumZoom('.main img', { background: '#000000d3' });
        }
        onMounted(() => {
            zoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => zoom()),
        )
    },

    // 注册评论组件
    enhanceApp({ app, router, siteData }) {
        app.component("BiliComment",BiliComment);
        app.component("BiliCommentTest",BiliCommentTest);
        // app.component("Tweet",Tweet);
        // app.component("LineChartx",LineChartx);
        // app.component("VPFeature",VPFeature);
        // app.component("VPFeatures",VPFeatures);
            // app is the Vue 3 app instance from `createApp()`. router is VitePress'
            // custom router. `siteData`` is a `ref`` of current site-level metadata.
    },

    // extends: Bar,
    // mounted () {
    //     this.renderChart(data, options)
    // }
}
