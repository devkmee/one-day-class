<template>
  <div><h1>Class List</h1></div>
  <cardFilter @cName="aa(cName)" />
  <cardList />
  <div>
    <v-col cols="12" sm="6" md="4"> </v-col>
  </div>
</template>

<script>
import cardList from '@/components/cardList.vue';
import cardFilter from '@/components/cardFilter.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    cardList,
    cardFilter,
  },
  setup() {
    const router = useRouter();

    const goclassForm = () => {
      router.push({
        name: 'ClassForm',
      });
    };

    const aa = (cName) => {
      console.log(cName);
    };

    return {
      goclassForm,
      aa,
    };
  },
};
</script>
<style></style>
