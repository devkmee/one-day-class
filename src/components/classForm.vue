<template>
  <div>
    <!-- contact-us section start -->
    <section class="contact-us" id="contact-us">
      <div class="container">
        <div class="section-header">
          <div class="section-header__content">
            <h4 class="sub-title">CLASS</h4>
            <h2 class="title">클래스 등록하기</h2>
          </div>
        </div>
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
              <form @submit.prevent="saveClass">
                <div class="mb-5">
                  <div class="mb-3">
                    <label for="clsName" class="form-label">클래스 이름</label>
                    <input
                      v-model="cls.clsName"
                      type="text"
                      class="form-control"
                      id="clsName"
                    />
                  </div>
                </div>
                <div class="flex-box">
                  <div>
                    <label class="form-label" for="cateCd">카테고리</label>
                    <select
                      v-model="cls.cateCd"
                      class="form-select"
                      id="cateCd"
                      name="cateCd"
                    >
                      <!-- <v-if ="!cateList.length"><option>err</option></v-if>
                      <v-else> -->
                      <option
                        v-for="item in cateList"
                        :key="item.cateCd"
                        :value="item.cateCd"
                      >
                        {{ item.cateName }}
                      </option>
                      <!-- </v-else> -->
                    </select>
                  </div>
                  <div>
                    <label class="form-label" for="status">모집상태</label>
                    <select
                      v-bind="cls.status"
                      class="form-select"
                      id="status"
                      name="status"
                    >
                      <option value="1" selected>모집중</option>
                      <option value="2">모집마감</option>
                      <option value="0">비공개</option>
                    </select>
                  </div>
                </div>
                <div class="flex-box">
                  <div>
                    <label class="form-label" for="area">지역</label>
                    <select
                      v-model="cls.area"
                      class="form-select"
                      id="area"
                      name="area"
                    >
                      <option selected>Open this select menu</option>
                    </select>
                  </div>
                  <div>
                    <label class="form-label" for="price">가격</label>
                    <input
                      v-model="cls.price"
                      type="text"
                      id="price"
                      name="price"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="flex-box">
                  <div>
                    <label class="form-label" for="studentMax">최대 인원</label>
                    <input
                      v-model="cls.studentMax"
                      type="text"
                      id="studentMax"
                      name="studentMax"
                      class="form-control"
                    />
                  </div>
                  <div>
                    <label class="form-label" for="time">소요시간 </label>
                    <input
                      v-model="cls.time"
                      class="form-control"
                      id="time"
                      name="time"
                      type="text"
                      de
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="expln">클래스 소개</label>
                  <textarea
                    v-model="cls.expln"
                    class="form-control"
                    id="expln"
                    name="expln"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg">
                  저장
                </button>
                <button type="button" class="btn btn-secondary btn-lg">
                  취소
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- contact-us section end -->
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const cateList = ref([]);

    const cls = ref({
      clsImg: 0,
      clsName: '',
      teacher: '김강사',
      cateCd: 1,
      status: '',
      area: '',
      price: '',
      studentMax: '',
      time: '',
      expln: '',
    });

    onBeforeMount(() => {
      setCateList();
    });

    const setCateList = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/categoryCode?_sort=cateCd&_order=asc`,
        );
        cateList.value = res.data;
      } catch (err) {
        console.log('setCateList err : ', err);
      }
    };

    // const validationCheck = () => {
    //   const valiChk = false;

    //   console.log('cls : ', cls);
    //   return valiChk;
    // };

    //초기화
    // const resetClass = () {

    // };

    //클래스 저장
    const saveClass = async () => {
      //validationCheck();
      try {
        let res;
        const data = {
          clsImg: cls.value.clsImg,
          clsName: cls.value.clsName,
          teacher: cls.value.teacher,
          cateCd: cls.value.cateCd,
          status: cls.value.status,
          area: cls.value.area,
          price: cls.value.price,
          studentMax: cls.value.studentMax,
          time: cls.value.time,
          expln: cls.value.expln,
        };
        res = await axios.post('http://localhost:5000/class', data);
        console.log(res);
      } catch (err) {
        console.log('err : ', err);
      }
    };
    return {
      cateList,
      cls,

      //validationCheck,
      saveClass,
      setCateList,
    };
  },
};
</script>

<style scoped>
.flex-box {
  display: flex;
}
.flex-box > div {
  flex: 1;
  margin: 0px 20px 20px 0px;
}
</style>
