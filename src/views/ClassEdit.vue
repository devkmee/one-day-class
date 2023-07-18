<template>
  <div><h1>클래스등록/수정</h1></div>
  <classForm />
</template>

<script>
import { reactive, toRefs } from 'vue';
import classForm from '@/components/classForm.vue';

export default {
  components: {
    classForm,
  },
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
