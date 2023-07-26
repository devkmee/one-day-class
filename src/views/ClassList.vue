<template>
  <classSearch />
  <cardList />
</template>

<script>
import cardList from '@/components/cardList.vue';
import classSearch from '@/components/classSearch.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    classSearch,
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
