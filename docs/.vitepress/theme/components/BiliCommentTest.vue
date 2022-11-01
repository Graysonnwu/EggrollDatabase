<script setup lang="ts">
    import { ref } from 'vue';
    const props = defineProps<{
        name:String,
        content:String,
        time?:String,
        like?:String,
        reply?:String,
        uid?:String,
    }>()
    const namex = ref(props.name)['value'];
    // const contentx = ref(props.content)['value'];
    // const timex = ref(props.time)['value'];
    // const likex = ref(props.like)['value'];

    // 头像背景颜色根据昵称变化
    function getBackgroundColor(stringInput) {
        let stringUniqueHash = [...stringInput].reduce((acc, char) => {
            return char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0);
        return `hsl(${stringUniqueHash % 360}, 95%, 35%)`;
    }
    const hsl_bg_color = getBackgroundColor(namex)
    // console.log(namex,timex,likex,contentx)

    // 用B站api获取头像 https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuMedalAnchorInfo?ruid={uid} 具体在返回值树状结构的[data][rface]
    
</script>

<template>
    <div class ="comment">
        <!-- 头像 -->
        <div class ="avatar">
        <p id ="name">{{name[0]}}</p>
        </div>
        <div class="wrapper">
            <!-- 昵称 -->
            <div class ="username">{{name}}</div>
            <div class ="user-comment">
                <!-- 评论内容，添加插槽方式 -->
                <p v-if="content" v-html="content"></p>
                <p style="font-size: 15px;"><slot></slot></p>
                <!-- 评论信息（时间、赞踩） -->
                <div v-if="time" class ="comment-info" style="display:inline;">
                    <!-- 时间戳 -->
                    <span style="margin-right: 20px">{{time}}</span>
                    <!-- 赞 -->
                    <span style="margin-right: 20px"><svg style="width: 16px; height: 16px; display:inline; margin-right:5px; margin-bottom:-2px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg><span>{{like}}</span></span>
                    <!-- 踩 -->
                    <span style="margin-right: 20px"><svg style="width: 16px; height: 16px; display:inline; margin-right:5px; margin-bottom:-2px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3933" width="200" height="200"><path d="M594.112 872.768a34.048 34.048 0 0 1-29.12-10.816c-11.264-13.248-15.872-24.064-21.504-40.064l-1.92-5.632c-5.632-16.128-12.8-36.864-27.712-63.232-25.344-44.928-50.24-74.432-86.144-97.024-23.104-14.528-43.648-26.432-65.024-32.64V203.84a4570.24 4570.24 0 0 1 339.072 4.672c38.656 2.048 72 21.12 88.896 52.032 21.504 39.36 47.232 95.744 63.552 163.008 16.448 67.52 21.568 123.776 22.592 163.008 0.448 16.832-13.44 32.256-35.392 32.256h-197.248a32 32 0 0 0-28.608 46.336l0.128 0.32 0.64 1.28 2.56 5.568c2.176 4.8 5.12 11.776 8.384 20.16 6.528 17.088 13.568 39.04 16.768 60.416 4.928 33.344 3.712 60.16-9.344 84.992-14.08 26.688-30.016 33.728-40.576 34.944z m97.728-190.016h149.568c52.8 0 100.864-40.128 99.392-97.92a846.336 846.336 0 0 0-24.32-176.448 742.016 742.016 0 0 0-69.632-178.56c-29.248-53.44-84.48-82.304-141.824-85.248-55.68-2.88-138.24-5.952-235.712-5.952-96 0-183.488 3.008-244.672 5.76-66.368 3.136-123.328 51.392-130.944 119.872a1380.608 1380.608 0 0 0-0.768 296.704c7.68 72.768 70.4 121.792 140.032 121.792h97.728c13.76 0 28.16 5.504 62.976 27.392 24.064 15.168 42.432 35.264 64.448 74.368 11.968 21.12 17.472 36.864 22.976 52.736l2.048 5.888c6.656 18.88 14.336 38.4 33.216 60.416 19.456 22.72 51.456 36.736 85.184 32.768 35.2-4.096 67.776-26.88 89.792-68.672 22.208-42.112 21.888-84.8 16-124.288a343.04 343.04 0 0 0-15.488-60.608zM298.688 205.568v413.184H232.96c-40.512 0-72.448-27.712-76.352-64.512a1318.912 1318.912 0 0 1 0.64-282.88c3.904-34.816 32.896-61.248 70.4-62.976 20.8-0.96 44.736-1.92 71.04-2.816z" p-id="3934" fill="#9499a0"></path></svg></span>
                
                </div>
                <!-- 回复 -->
                <p class="reply" v-if="reply" v-html="reply"></p>
            </div>
        </div>
        <!-- 底部空白行，没有info高度15px，有info高度10px -->
        <div v-if="!time" style="clear:both;display:block;margin-bottom: 5px;"> </div>
        <div style="clear:both;display:block;margin-bottom: 10px;"> </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.comment{
  width:100%;
  height:auto;
  margin:10px auto;
  background:transparent;
  border-radius: 15px;
  margin-bottom: 10px;
  /* border-style:solid;
  border-color:var(--vp-c-brand); */
  box-shadow:0 0 10px 10px #00000034;
}

.comment .avatar{
  float:left;
  width:40px;
  height:40px;
  margin:16px 0px 0px 16px;
  /* background: hsl(145, 95%, 35%); */
  background: v-bind('hsl_bg_color');
  border-radius:50%;
}

.comment .avatar #name{
  color:white;
  font-size:20px;
  margin:0px;
  /* padding-top:6px; */
  line-height: 40px;
  text-align:center;
  
}

.comment .wrapper{
    float:left;
    width:calc(100% - 80px);
    margin:10px 0px 0px 15px;
}

.comment .wrapper .username{
  float:left;
  color:#FB7299;
  margin:0px;
  padding:0px;
  font-size:13px;
  font-weight: bold;
}

.comment .wrapper .user-comment{
  /* float:bottom; */
  margin:24px 0px 0px 0px;
  padding:0px;
}

.comment .wrapper .user-comment p{
  color:var(--vp-c-text-1);
  margin:0px;
  padding:0px;
  position:relative;
  font-size:15px;
  line-height: 24px;
}

.comment .wrapper .user-comment .comment-info{
  color:var(--vp-c-text-2);
  font-size:13px;
  margin:0px;
  padding:0px;
  position:relative;
  line-height: 24px;
}

.comment .wrapper .user-comment .reply{
  padding-left: 15px;
  border-left: 2px solid #7777776d;
  margin-top: 5px;
}

#ds p{
  font-size:12px;
  color:#212121;
  opacity:0.6;
}

#ds p:hover{
  cursor:pointer;
  opacity:1.0;
}

/* @media (min-width: 640px) {
.comment .avatar{
  width:30px;
  height:30px;
}
}

@media (min-width: 960px) {
.comment .avatar{
  width:20px;
  height:20px;
}
} */
</style>
