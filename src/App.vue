<script setup>
import { RouterView } from 'vue-router';
import CommonHeader from './components/CommonHeader.vue';
import CommonFooter from './components/CommonFooter.vue';
</script>

<template>
  <CommonHeader />
  <RouterView class="content" />
  <CommonFooter />
</template>

<style scoped>
.content {
  min-height: 70vh;
}
</style>
