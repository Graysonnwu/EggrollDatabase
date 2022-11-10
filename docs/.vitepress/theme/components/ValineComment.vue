<template>
    <br>
    <div class="page-edit-read">
    <span class="leancloud-visitors" data-flag-title="Your Article Title">
          <em class="post-meta-item-text">阅读量： </em>
          <i class="leancloud-visitors-count"></i>
        </span>
    </div>
    <br>
    <div id="vcomment"></div>
</template>



<script setup lang="ts">
    import { watch, onMounted } from "vue";
    import { useRoute } from "vitepress";
    
    const route = useRoute();
    
    const initValine = () => {
      let path = location.origin + location.pathname;
      document.getElementsByClassName("leancloud-visitors")[0].id = path;
      new Valine({
        el: "#vcomment",
        appId: "lpIhd6ixKkz0aNeNxoiMayIr-gzGzoHsz", // your appId
        appKey: "3pI5Pe8OVJQ4MeKlZ5d8QMpU", // your appKey
        notify: false,
        verify: false,
        path: path,
        visitor: true,
        avatar: "mm",
        placeholder:
          "说点什么吧……好不容易加上的评论功能呢……😭\n名字随便起，邮箱是回复收到通知的（暂时没有后端所以不会收到通知），网址是点击你名字跳转的，建议起个名字就行了。\n后续看看能不能转移到Waline",
      });
    };
    
    watch(
      () => route.path,
      () => {
        console.log("监听路由变化");
        initValine();
      }
    );
    
    onMounted(() => {
      remoteImport('//unpkg.com/valine/dist/Valine.min.js').then(() => initValine());
    });
    
    function remoteImport(url) {
      return new Promise((resolve) => {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", url);
        head.appendChild(script);
    
        script.onload = function () {
          resolve();
        };
      });
    }
</script>

<!-- <script setup lang="ts">
import { onMounted } from "vue"
onMounted(async () => {
    const Valine = await(await import('valine')).default
    new Valine({
        el: '#vcomment',
        appId: 'lpIhd6ixKkz0aNeNxoiMayIr-gzGzoHsz',
        appKey: '3pI5Pe8OVJQ4MeKlZ5d8QMpU',
        placeholder: '说点什么吧……好不容易加上的评论功能呢……😭\n名字随便起，邮箱是回复收到通知的，网址是点击你名字跳转的',
        avatar: 'monsterid',
        visitor: true,
    })
})
</script> -->