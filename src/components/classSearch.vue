<template>
  <!-- Advance Search option start -->
  <div class="advance-search__wraper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!--메인 검색 DIv-->
          <div class="advance-search">
            <form @submit.prevent class="inline-form">
              <div class="input-group">
                <label for="searchClsName" class="fw-bold fs-3"
                  >클래스 이름</label
                >
                <input
                  v-model="searchClsName"
                  @keyup.enter="searchClassList()"
                  name="searchClsName"
                  id="searchClsName"
                  type="text"
                />
              </div>
              <div class="input-group">
                <label for="searchSidoCd" class="fw-bold fs-3">시도</label>
                <select
                  v-model="searchSidoCd"
                  @change="setSigList(searchSidoCd)"
                  name="searchSidoCd"
                  id="searchSidoCd"
                >
                  <option v-if="!sidoList.length">
                    시도를 불러오지 못했습니다
                  </option>
                  <option
                    v-else
                    v-for="item in sidoList"
                    :key="item.CTPRVN_CD"
                    :value="item.CTPRVN_CD"
                  >
                    {{ item.CTP_KOR_NM }}
                  </option>
                </select>
              </div>
              <div class="input-group">
                <label for="searchSigCd" class="fw-bold fs-3">시군구</label>
                <select
                  v-model="searchSigCd"
                  name="searchSigCd"
                  id="searchSigCd"
                >
                  <option v-if="!sigList.length">시도를 선택해주세요</option>
                  <option
                    v-else
                    v-for="item in sigList"
                    :key="item.SIG_CD"
                    :value="item.SIG_CD"
                  >
                    {{ item.SIG_KOR_NM }}
                  </option>
                </select>
              </div>
              <div class="input-group">
                <button
                  @click="searchClassList()"
                  class="btn btn-primary"
                  type="button"
                >
                  검색
                </button>
              </div>
            </form>
          </div>

          <!--카테고리 검색 Div-->
          <div class="cate-search">
            <h1><span class="badge rounded-pill text-bg-primary">New</span></h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Advance Search option end -->
</template>

<script>
import { ref, onMounted, getCurrentInstance } from 'vue';
import axios from 'axios';

export default {
  emits: ['get-classList'],
  setup() {
    const { emit } = getCurrentInstance();

    let curPage = 1;
    const limit = 6;
    const classList = ref([]);
    const sidoList = ref([]);
    const sigList = ref([]);

    let searchClsName = ref('');
    let searchSidoCd = ref('00');
    let searchSigCd = ref('');

    onMounted(() => {
      resetSearchParams();
      setSidoList();
      searchClassList();
    });

    //검색어 초기화
    const resetSearchParams = () => {
      searchClsName.value = '';
      searchSidoCd.value = '00';
      searchSigCd.value = '';
    };

    //시도 목록세팅
    const setSidoList = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/sidoCd?_sort=CTPRVN_CD&_order=asc`,
        );
        sidoList.value = res.data;
        setSigList('00');
      } catch (err) {
        console.log('setSidoList err : ', err);
      }
    };

    //시군구 목록세팅
    const setSigList = async (sidoCd) => {
      try {
        const res = await axios.get(
          `http://localhost:5000/sigCd?&SIG_CD_like=${sidoCd}&_sort=SIG_KOR_NM&_order=asc`,
        );

        //시도에 해당하는 시군구 필터링
        sigList.value = res.data;
        sigList.value = sigList.value.filter((e) =>
          e.SIG_CD.startsWith(sidoCd),
        );
        //시군구 기본값 세팅
        searchSigCd.value = sigList.value[0].SIG_CD;
      } catch (err) {
        console.log('setSigList err : ', err);
      }
    };

    //클래스 목록 검색
    const searchClassList = async (page = curPage) => {
      let axiosUrl = '';
      //전체 지역 검색용 url 세팅
      if (searchSidoCd.value == '00') {
        axiosUrl = `http://localhost:5000/class?&clsName_like=${searchClsName.value}&sort=id&_order=desc&_page=${page}&_limit=${limit}`;
        //특정 지역 검색용 url 세팅
      } else {
        axiosUrl = `http://localhost:5000/class?&clsName_like=${searchClsName.value}&sidoCd_like=${searchSidoCd.value}&sigCd_like=${searchSigCd.value}&sort=id&_order=desc&_page=${page}&_limit=${limit}`;
      }
      try {
        const res = await axios.get(axiosUrl);
        classList.value = res.data;
      } catch (err) {
        console.log('searchClassList err : ', err);
      }
      emit('get-classList', classList);
    };

    return {
      classList,
      sidoList,
      sigList,
      searchClsName,
      searchSidoCd,
      searchSigCd,

      resetSearchParams,
      setSidoList,
      setSigList,
      searchClassList,
    };
  },
};
</script>

<style></style>
