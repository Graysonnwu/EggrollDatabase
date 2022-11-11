<template>
    <br><br><br><br>
    <div class="HPCalendar">
        <br>
        <div class="CMbox">
            <CalendarHeatmap
                :values="data"
                :end-date="new Date('2019-12-31')"
                :round="5"
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
                :round="5"
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
    
        <div class="CMbox">
            <CalendarHeatmap
                :values="data"
                :end-date="new Date('2021-12-31')"
                :round="5"
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
            <div class="CMyear">2021年（216~373期）</div>
        </div>

        <div class="CMbox">
            <CalendarHeatmap
                :values="data"
                :end-date="new Date('2022-12-31')"
                :round="5"
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
            <div class="CMyear">2022年（374~510期）</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
	import { data } from './data';
</script>

<style scoped>

.HPCalendar {
    display: block;
    border-top: 2px solid var(--vp-c-bg-soft);
    /* border-radius: 12px; */
    /* background-color: var(--vp-c-bg-soft); */
    transition: border-color 0.25s, background-color 0.25s;
    text-align:center;
}

.CMyear {
    position: absolute;
    text-align: center;
    font-size: 10px;
    color:#777;
    bottom: 0px;
}

.CMbox {
    display: inline-flex;
    justify-content: center;
    position: relative;
    padding: 20px 0;
    /* margin-bottom: 30px; */
    /* padding: 0 10px; */
    width: 100%;
    max-width: 575px;
}

@media (min-width: 960px) {
    .CMbox {
        width: 45%;
    }
}

/* .testColor {
    color:
    #ffffff,#f2f7fe,#e4eefd,#d6e5fb,
    #c7dcfa,#bad5f9,#a7caf7,#8ab8f4,
    #71b2f9,#81a6f2,#859cf2,#8893f1,
    #8d84f0,#9078ef,#9569ee,#a54ff5;
} */

</style>