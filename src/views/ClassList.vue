<template>
  <!-- <cardFilter @cName="aa(cName)" /> -->
  <cardList />
</template>

<script>
import cardList from '@/components/cardList.vue';
import cardFilter from '@/components/cardFilter.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    cardList,
    // cardFilter,
  },
  setup() {
    const router = useRouter();

    const goclassForm = () => {
      router.push({
        name: 'ClassForm',
      });
    };

    // const aa = (cName) => {
    //   console.log(cName);
    // };

    return {
      goclassForm,
      //aa,
    };
  },
};
</script>
<style></style>
