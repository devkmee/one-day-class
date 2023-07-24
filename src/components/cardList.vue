<template>
  <section class="houses" id="houses">
    <div class="container">
      <div class="section-header">
        <div class="section-header__content">
          <h4 class="sub-title">CLASS</h4>
          <h2 class="title">One Day Class</h2>
        </div>
      </div>
      <!--카드리스트 시작-->
      <div class="section-content">
        <div class="row">
          <!--item start-->
          <div
            class="col-md-4 col-sm-6"
            v-for="item in classArr"
            :key="item.id"
          >
            <RouterLink :to="`/class/${item.id}`">
              <div class="house-card">
                <div class="house__thumb">
                  <img
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="house__meta">
                    <a href="#">{{ item.cateNm }}</a>
                  </div>
                </div>

                <div class="house__content">
                  <div class="house__content__main">
                    <h5 class="title">{{ item.clsName }}</h5>
                  </div>
                </div>
                <div class="house__content__bottom">
                  <div class="info-wrap">
                    <div class="info info-left">
                      <i class="bi bi-geo-alt-fill"></i>
                      <span> {{ item.area }}</span>
                    </div>
                    <div class="info info-right">
                      <i class="bi bi-currency-dollar"></i>
                      <span> {{ moneyUnitStore.numberUnit(item.price) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
          <!--item end-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { commonCode } from '@/stores/commonCodeStore';
import { moneyUnit } from '@/stores/moneyUnitStore';

export default {
  setup() {
    const commonCodeStore = commonCode();
    const moneyUnitStore = moneyUnit();

    const classArr = ref([]);
    const cateList = commonCodeStore.cateList;

    let totalCnt = ref(0);
    let curPage = ref(1);
    let limit = 9;

    onMounted(() => {
      selectClassList(curPage);
    });

    //클래스 목록
    const selectClassList = async (page = curPage.value) => {
      try {
        const res = await axios.get(
          `http://localhost:5000/class?_sort=id&_order=desc&_page=${page}&_limit=${limit}`,
        );
        classArr.value = res.data;
        totalCnt.value = res.headers['x-total-count'];
        //console.log(res.headers);
        //console.log(res.data);
        //console.log(totalCnt);
      } catch (err) {
        console.log('selectClassList err : ', err);
      }
    };

    //클래스 상세보기
    const goDetail = (classId) => {
      router.push({
        name: 'ClassDetail',
        params: { id: classId },
      });
    };

    return {
      commonCodeStore,
      moneyUnitStore,

      classArr,
      totalCnt,
      cateList,

      selectClassList,
      goDetail,
    };
  },
};
</script>

<style></style>
