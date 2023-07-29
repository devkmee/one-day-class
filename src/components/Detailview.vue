<template>
  <div>
    <!-- contact-us section start -->
    <section class="contact-us" id="contact-us">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-5">
            <div class="section-banner">
              <img
                v-if="cls.id != ''"
                :src="getImageUrl()"
                class="card-img-top"
              /><img
                v-else
                :src="`https://source.unsplash.com/random/300x250/?${cls.cateNm}`"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="section-header__content v2">
              <h4 class="sub-title">CLASS</h4>
              <h2 class="title">{{ cls.clsName }}</h2>
              <ul class="icon-list">
                <li>
                  <h2>
                    <i class="bi bi-person-circle"></i>
                    <span> {{ cls.teacher }}</span>
                  </h2>
                </li>
              </ul>
              <ul class="icon-list">
                <li>
                  <i class="bi bi-geo-alt-fill"></i>
                  <span> {{ cls.sidoNm }} {{ cls.sigNm }}</span>
                </li>
                <li>
                  <i class="bi bi-stopwatch-fill"></i>
                  <span>{{ cls.time }}시간</span>
                </li>
                <li>
                  <i class="bi bi-people-fill"></i>
                  <span>최대 {{ cls.studentMax }}명</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M62.4 53.9C56.8 37.1 38.6 28.1 21.9 33.6S-3.9 57.4 1.6 74.1L51.6 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H72.9l56.7 170.1c4.5 13.5 17.4 22.4 31.6 21.9s26.4-10.4 29.8-24.2L233 288h46L321 455.8c3.4 13.8 15.6 23.7 29.8 24.2s27.1-8.4 31.6-21.9L439.1 288H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H460.4l50-149.9c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2L392.9 224H329L287 56.2C283.5 42 270.7 32 256 32s-27.5 10-31 24.2L183 224h-64L62.4 53.9zm78 234.1H167l-11.4 45.6L140.4 288zM249 224l7-28.1 7 28.1H249zm96 64h26.6l-15.2 45.6L345 288z"
                    />
                  </svg>
                  <span>{{ cls.price }} 원</span>
                </li>
              </ul>
              <p class="text">
                {{ cls.expln }}
              </p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col text-center">
              <button
                type="button"
                class="btn btn-primary m-3"
                @click="goUpdate()"
              >
                수정
              </button>
              <button
                type="button"
                class="btn btn-secondary m-3"
                @click="deleteClass"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- contact-us section end -->
  </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from 'vue';
import { moneyUnit } from '@/stores/moneyUnitStore';
import router from '@/router';

export default {
  setup() {
    const route = useRoute();
    const moneyUnitStore = moneyUnit();

    const clsId = route.params.id;
    const cls = ref({});

    onBeforeMount(() => {
      selectClsView();
    });

    //상세조회
    const selectClsView = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/class/${clsId}`);
        cls.value = {
          ...res.data,
        };
        cls.value.price = moneyUnitStore.numberUnit(cls.value.price);
        //console.log(res);
      } catch (err) {
        console.log('selectClsView err : ', err);
      }
    };

    //이미지 url 생성
    const getImageUrl = () => {
      const imgUrl = new URL(
        `/src/assets/images/${cls.value.id}.jpg`,
        import.meta.url,
      ).href;
      //console.log('cls.value.id : ', cls.value.id);
      //console.log('imgUrl : ', imgUrl);
      return imgUrl;
    };

    //수정화면 이동
    const goUpdate = () => {
      router.push({
        name: 'ClassUpdate',
        params: { id: clsId },
      });
    };

    //목록으로 이동
    const goClassList = () => {
      router.push({
        path: '/classList',
      });
    };

    //클래스 삭제
    const deleteClass = async () => {
      console.log('clsId : ', clsId);
      try {
        await axios.delete(`http://localhost:5000/class/${clsId}`);
        alert('클래스가 삭제되었습니다');
        goClassList();
      } catch (err) {
        console.log('deleteClass err', err);
      }
    };

    return {
      clsId,
      cls,

      goUpdate,
      goClassList,
      deleteClass,
      getImageUrl,
    };
  },
};
</script>

<style scoped></style>
