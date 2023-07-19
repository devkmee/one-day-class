<template>
  <div>
    <!-- contact-us section start -->
    <section class="contact-us" id="contact-us">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-5">
            <div class="section-banner">
              <img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
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
                    <span> {{ cls.teacher }} 강사</span>
                  </h2>
                </li>
              </ul>
              <ul class="icon-list">
                <li>
                  <i class="bi bi-geo-alt-fill"></i>
                  <span> {{ cls.area }}</span>
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
                  <i class="bi bi-coin"></i>
                  <span>{{ cls.price }} 원</span>
                </li>
              </ul>
              <p class="text">
                {{ cls.expln }}
              </p>

              <a href="#" class="btn btn-primary">문의하기</a>
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
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const route = useRoute();

    const clsId = route.params.id;
    const cls = ref({
      id: 0,
      clsImg: 0,
      clsName: '',
      teacher: '',
      expln: '',
      area: '',
      cateCd: '',
      studentMax: '',
      timeStart: '',
      timeEnd: '',
      price: '',
      status: 0,
    });

    onMounted(() => {
      selectClsView();
    });

    //상세조회
    const selectClsView = async () => {
      console.log('clsId : ', clsId);
      try {
        const res = await axios.get(`http://localhost:5000/class/${clsId}`);
        cls.value = {
          ...res.data,
        };
        console.log(res);
      } catch (err) {
        console.log('selectClsView err : ', err);
      }
    };

    return {
      clsId,
      cls,
    };
  },
};
</script>

<style lang="scss" scoped></style>
