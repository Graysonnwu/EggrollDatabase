<script setup>
import DefaultTheme from 'vitepress/theme'
import ValineComment from './ValineComment.vue';
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <ValineComment />
    </template>
  </Layout>
</template>