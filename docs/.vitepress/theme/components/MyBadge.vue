<script setup lang="ts">
defineProps<{
  hue: number
  text?: string
}>()
</script>

<template>
  <span class="MyBadge">
    <slot>{{ text }}</slot>
  </span>
</template>

<style scoped>
.MyBadge {
  display: inline-block;
  margin-left: 2px;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 0 8px;
  line-height: 18px;
  font-size: 13px;
  font-weight: 600;
  transform: translateY(-2px);
  /* 亮色主题颜色（次要） */
  border-color: hsla(v-bind('hue'), 83%, 30%, 0.25);
  color: hsl(v-bind('hue'), 90%, 40%);
  background-color: hsla(v-bind('hue'), 83%, 30%, 0.05);
}

.dark .MyBadge {
  /* 暗色主题颜色（主要）红341 黄45 绿153 灰0,0% */
  border-color: hsla(v-bind('hue'), 83%, 50%, 0.25);
  color: hsl(v-bind('hue'), 90%, 60%);
  background-color: hsla(v-bind('hue'), 83%, 50%, 0.05);
}

h2 .MyBadge {
  border-radius: 11px;
  line-height: 20px;
}
</style>