<script setup>
    import { ref } from 'vue';
    const props = defineProps({
        name:String,
        content:String,
    });
    const name = ref(props.name)._rawValue;
    const content = ref(props.content)._rawValue;
    // const name = "这是我的名称";
    // const content = "过去中国搞建设虽然也有通过无人区的铁路，但是绝大多数铁路至少有一端是人口稠密地区，这条敦格铁路的两端，敦煌19万人口，格尔木也只有20万人口出头，为什么要为这两个小城市修一条直通的铁路呢？";
    function getBackgroundColor(stringInput) {
        let stringUniqueHash = [...stringInput].reduce((acc, char) => {
            return char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0);
        return `hsl(${stringUniqueHash % 360}, 95%, 35%)`;
    }
    const hsl_bg_color = getBackgroundColor(name)
    console.log(name, hsl_bg_color,content)
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
                <!-- 评论内容 -->
                <p v-if="content" v-html="content"></p>
            </div>
        </div>
      <div style="clear:both;display:block;margin-bottom: 10px;"> </div>
    </div>
</template>

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
  border-radius:300px;
}

.comment .avatar #name{
  color:white;
  font-size:20px;
  margin:0px;
  padding-top:6px;
  text-align:center;
  
}

.comment .wrapper{
    float:left;
    width:calc(100% - 80px);
    margin:10px 0px 5px 15px;
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


#ds p{
  font-size:12px;
  color:#212121;
  opacity:0.6;
}

#ds p:hover{
  cursor:pointer;
  opacity:1.0;
}
</style>

<!-- <style>
.comment{
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-size: 12px;
    line-height: 1.5;
    color: #222;
    margin: 0;
    font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    padding: 22px 0 0 80px;
}
</> -->


