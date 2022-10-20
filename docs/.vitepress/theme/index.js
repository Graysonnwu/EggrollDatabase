import Theme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import { onMounted } from 'vue';
import mediumZoom from 'medium-zoom';

// import 'uno.css'
import './styles/mathjax3.css';
import './styles/index.css'
import './styles/color.css'

import BiliComment from './components/BiliComment.vue';
import BiliCommentX from './components/BiliCommentX.vue';

// import VPFeature from './components/VPFeature.vue';
// import VPFeatures from './components/VPFeatures.vue';

// export { default } from 'vitepress/theme'

// defaultTheme.enhanceApp = ({ app }) => {
//     app.component('VPFeature', VPFeature)
//     app.component('VPFeatures', VPFeatures)
// }

export default {
    ...Theme,
    // override the Layout with a wrapper component that injects the slots
    Layout: MyLayout,

    // 目前有个bug，route变化后点击放大图片就不起作用了，可能需要一个watcher
    // https://github.com/vuejs/vitepress/issues/854
    setup() {
        onMounted(() => {
            // // ![](path/to/file.jpg){data-zoomable} 带后缀的注册
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
            
            // ![](path/to/file.jpg) 全局注册
            mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
        });
    },

    // 注册评论组件
    enhanceApp({ app, router, siteData }) {
        app.component("BiliComment",BiliComment);
        app.component("BiliCommentX",BiliCommentX);
        // app.component("VPFeature",VPFeature);
        // app.component("VPFeatures",VPFeatures);
            // app is the Vue 3 app instance from `createApp()`. router is VitePress'
            // custom router. `siteData`` is a `ref`` of current site-level metadata.
    },
}
