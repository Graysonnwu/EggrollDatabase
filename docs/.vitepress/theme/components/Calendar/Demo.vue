<template>
	<div :style="{display: 'flex', justifyContent: 'center', padding: '10px 0'}">
		<CalendarHeatmap
            dark-mode
			:values="data"
			:end-date="new Date('2020-04-10')"
			:round="2"
            style="width:95%;max-width: 600px;"
			:range-color="['#88888822', '#88888822', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']"
            no-data-text="无数据"
            tooltip-unit="睡前消息"
            max="101"
		/>
	</div>
</template>

<script lang="ts" setup>
	// import { defineComponent} from 'vue';
	import { data } from './data';
    

	// export default defineComponent({
	// 	name : 'Demo',
	// 	setup() {
	// 		return {
	// 			data,
	// 		};
	// 	}
	// });
</script>