<template>
    <div class="CMbox">
        <CalendarHeatmap
            :values="data"
            :end-date="new Date('2019-12-31')"
            :round="2"
            style="width: 97%;"
            :range-color="['#88888822', '#88888822', '#71b2f9', '#859cf2', '#8d84f0', '#9569ee']"
            no-data-text="无数据"
            tooltip-unit="期 睡前消息"
            :locale="{
                months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                days: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                on: '于',
                less: '',
                more: '',
                }"
        />
        <div class="CMyear">2019年（1~59期）</div>
    </div>
    <div class="CMbox">
        <CalendarHeatmap
            :values="data"
            :end-date="new Date('2020-12-31')"
            :round="2"
            style="width: 97%;"
            :range-color="['#88888822', '#88888822', '#71b2f9', '#859cf2', '#8d84f0', '#9569ee']"
            no-data-text="无数据"
            tooltip-unit="期 睡前消息"
            :locale="{
                months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                days: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                on: '于',
                less: '',
                more: '',
                }"
        />
        <div class="CMyear">2020年（60~215期）</div>
    </div>
</template>

<script lang="ts" setup>
	import { data } from './data';
</script>

<style scoped>

.CMyear {
    position: absolute;
    text-align: center;
    font-size: 10px;
    color:#777;
    bottom: -20px;
}

.CMbox {
    display: inline-flex;
    justify-content: center;
    position: relative;
    margin-bottom: 30px;
    /* padding: 0 10px; */
    width: 100%;
}

/* .testColor {
    color:
    #ffffff,#f2f7fe,#e4eefd,#d6e5fb,
    #c7dcfa,#bad5f9,#a7caf7,#8ab8f4,
    #71b2f9,#81a6f2,#859cf2,#8893f1,
    #8d84f0,#9078ef,#9569ee,#a54ff5;
} */

</style>