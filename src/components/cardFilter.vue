<template>
  <div class="filterDivBox">
    <div>
      <v-text-field
        label="클래스 검색"
        v-model="cName"
        @keyup.enter="searchCName"
        prepend-inner-icon="mdi-map-marker"
        variant="solo"
      ></v-text-field>
    </div>
    <div></div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  emits: ['cName'],
  setup(props, { emit }) {
    let cName = ref('');

    const searchCName = () => {
      console.log('자식 : ', cName.value);
      emit('cName');
    };

    return {
      cName,

      searchCName,
    };
  },
};
</script>

<style lang="scss" scoped></style>
