<template>
  <div>
    <cardList />
  </div>
</template>

<script setup>
import cardList from '@/components/cardList.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goclassForm = () => {
  router.push({
    name: 'ClassForm',
  });
};
</script>
<style></style>
