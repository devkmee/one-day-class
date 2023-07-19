<template>
  <div class="filterDivBox">
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
