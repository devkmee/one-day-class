<template>
  <div>
    <table class="table table-bordered">
      <tr>
        <td>
          <img
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            alt="..."
          />
        </td>
        <tr>
          <td></td>
        </tr>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { ref, onMounted } from "vue";

export default {
  setup(){
    const route = useRoute();

    const clsId = route.id;
    const cls = ref({
      clsId : 0,
      clsName : '',
      teacher : '',
      expln : '',
      area : '',
      cateCd : '',
      studentMax : '',
      timeStart : '',
      timeEnd : '',
      price : '',
      status : 0
    });

    onMounted(() => {
      selectClsView();
    });

    //상세조회
    const selectClsView = async () => {
      try{
        const res = await axios.get(`class`);
      } catch (err) {
        
      }
    };

    return {
      clsId,
      cls
    }
  }
}
</script>

<style lang="scss" scoped></style>
