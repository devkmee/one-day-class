<template>
  <!-- Advance Search option start -->
  <div class="advance-search__wraper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!--메인 검색 DIv-->
          <div class="advance-search">
            <form action="#" class="inline-form">
              <div class="input-group">
                <label for="searchClsName" class="fw-bold fs-3"
                  >클래스 이름</label
                >
                <input
                  v-model="searchClsName"
                  name="searchClsName"
                  id="searchClsName"
                  type="text"
                />
              </div>
              <div class="input-group">
                <label for="searchSidoCd" class="fw-bold fs-3">시도</label>
                <select
                  v-model="searchSidoCd"
                  @change="setSigList(cls.sidoCd)"
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
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const sidoList = ref([]);
    const sigList = ref([]);

    let searchClsName = ref('');
    let searchSidoCd = ref('11');
    let searchSigCd = ref('');
    const classList = ref([]);
    let curPage = 1;
    const limit = 6;

    onMounted(() => {
      setSidoList();
    });

    //시도 목록세팅
    const setSidoList = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/sidoCd?_sort=CTP_KOR_NM&_order=asc`,
        );
        sidoList.value = res.data;
        setSigList('11');
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

    //클래스 목록
    const searchClassList = async (page = curPage) => {
      try {
        const res = await axios.get(
          `http://localhost:5000/class?&sidoCd_like=_${searchSidoCd.value}&sigCd_like=_${searchSigCd.value}&sort=id&_order=desc&_page=${page}&_limit=${limit}`,
        );
        classList.value = res.data;
        console.log('res.data : ', res.data);
      } catch (err) {
        console.log('searchClassList err : ', err);
      }
    };

    return {
      sidoList,
      sigList,
      searchClsName,
      searchSidoCd,
      searchSigCd,

      setSidoList,
      setSigList,
      searchClassList,
    };
  },
};
</script>

<style></style>
