<template>
  <classSearch @get-classList="getClassList" />
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
            v-for="item in itemList"
            :key="item.id"
          >
            <RouterLink :to="`/class/${item.id}`">
              <div class="house-card">
                <div class="house__thumb">
                  <img
                    v-if="item.id != ''"
                    :src="getImageUrl(item.id)"
                    class="card-img-top"
                  /><img
                    v-else
                    :src="`https://source.unsplash.com/random/?${item.cateNm}/${item.id}`"
                    class="card-img-top"
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
                      <span> {{ item.sidoNm }} {{ item.sigNm }}</span>
                    </div>
                    <div class="info info-right">
                      <span>
                        {{ moneyUnitStore.numberUnit(item.price) }}원</span
                      >
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
//import axios from 'axios';
import classSearch from '@/components/classSearch.vue';
import { ref } from 'vue';
import { moneyUnit } from '@/stores/moneyUnitStore';

export default {
  components: {
    classSearch,
  },
  setup() {
    const moneyUnitStore = moneyUnit();
    const itemList = ref([]);

    const getClassList = (classList) => {
      itemList.value = classList.value;
    };

    //이미지 url 생성
    const getImageUrl = (id) => {
      const imgUrl = new URL(`/src/assets/images/${id}.jpg`, import.meta.url)
        .href;
      //console.log('id : ', id);
      //console.log('imgUrl : ', imgUrl);
      return imgUrl;
    };

    //클래스 상세보기
    const goDetail = (classId) => {
      router.push({
        name: 'ClassDetail',
        params: { id: classId },
      });
    };

    return {
      moneyUnitStore,
      itemList,

      getClassList,
      getImageUrl,
      goDetail,
    };
  },
};
</script>

<style></style>
