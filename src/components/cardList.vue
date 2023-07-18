<template>
  <div class="cardDivBox">
    <ul>
      <!--카드-->
      <li v-for="item in classArr" :key="item.id">
        <RouterLink :to="`class/detail/${item.id}`">
          <div class="card border-primary mb-3">
            <img
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.className }}</h5>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const classArr = ref([]);

    let totalCnt = ref(0);
    let curPage = ref(1);
    let limit = 6;

    onMounted(() => {
      selectClassList(curPage);
    });

    const selectClassList = async (page = curPage.value) => {
      try {
        const res = await axios.get(
          `http://localhost:5000/class?_sort=id&_order=desc&_page=${page}&limit=${limit}`,
        );
        //console.log("res", res);
        classArr.value = res.data;
        totalCnt.value = res.headers['x-total-count'];
        //console.log(res.headers);
        //console.log(res.data);
        //console.log(totalCnt);
      } catch (err) {
        console.log('selectClassList err : ', err);
      }
    };

    const goDetail = (classId) => {
      router.push({
        name: 'ClassDetail',
        params: { id: classId },
      });
    };

    return {
      classArr,
      totalCnt,

      selectClassList,
      goDetail,
    };
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}
ul li {
  flex: 33% 0 0;
  width: calc(100% / 3);
  padding: 20px;
}
.card {
  padding: 10px;
}
</style>
