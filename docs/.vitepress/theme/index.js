import Theme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'

// import 'uno.css'
import './styles/index.css'
import './styles/color.css'

import BiliComment from './components/BiliComment.vue';

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
    enhanceApp({ app, router, siteData }) {
        app.component("BiliComment",BiliComment);
        // app.component("VPFeature",VPFeature);
        // app.component("VPFeatures",VPFeatures);
            // app is the Vue 3 app instance from `createApp()`. router is VitePress'
            // custom router. `siteData`` is a `ref`` of current site-level metadata.
        }
}
