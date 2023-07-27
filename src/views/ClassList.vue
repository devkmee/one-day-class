<template>
  <div>
    <cardList />
  </div>
</template>

<script>
import cardList from '@/components/cardList.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    cardList,
  },
  setup() {
    const router = useRouter();

    const goclassForm = () => {
      router.push({
        name: 'ClassForm',
      });
    };

    return {
      goclassForm,
    };
  },
};
</script>
<style></style>
