import DefaultTheme from 'vitepress/theme'
import MyLayout from './components/MyLayout.vue'
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from "vitepress";
import mediumZoom from 'medium-zoom';
import MyBadge from './components/MyBadge.vue';
// import { CalendarHeatmap } from 'vue3-calendar-heatmap';
// import pkg from 'vue3-calendar-heatmap';
// const { CalendarHeatmap } = pkg;
import * as VueCalendarHeatmap from 'vue3-calendar-heatmap'
const { CalendarHeatmap } = VueCalendarHeatmap;
// import Demo from './components/Calendar/Demo.vue';
import HomePageCalendar from './components/Calendar/HomePageCalendar.vue';
import Calendar100 from './components/Calendar/Calendar100.vue';
// import Tweet from "vue-tweet";
// import { Bar } from 'vue-chartjs'

// import 'uno.css'
import './styles/mathjax3.css';
import './styles/index.css'
import './styles/color.css'
import 'vue3-calendar-heatmap/dist/style.css'

import BiliComment from './components/BiliComment.vue';
import BiliCommentTest from './components/BiliCommentTest.vue';
// import LineChartx from './components/LineChartx.vue';

export default {
    ...DefaultTheme,
    // 注释掉就会取消评论系统，断网时评论系统会影响路由变化的内容刷新
    Layout: MyLayout,

    // medium-zoom 配置 
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

    // 注册全局组件 （来自：https://github.com/vuejs/vitepress/pull/1239/files#r1009146503）
    // enhanceApp({ app, router, siteData }) {
    //     app.component("BiliComment",BiliComment);
    //     app.component("BiliCommentTest",BiliCommentTest);
    //     // app.component("Tweet",Tweet);
    //     // app.component("LineChartx",LineChartx);
    // },

    // 注册全局组件 
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        ctx.app.component("BiliComment",BiliComment);
        ctx.app.component("BiliCommentTest",BiliCommentTest);
        ctx.app.component("MyBadge",MyBadge);
        ctx.app.component("CalendarHeatmap",CalendarHeatmap);
        // ctx.app.component("Demo",Demo);
        ctx.app.component("HomePageCalendar",HomePageCalendar);
        ctx.app.component("Calendar100",Calendar100);
    }
}
