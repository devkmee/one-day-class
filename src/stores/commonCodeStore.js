import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { moneyUnit } from '@/stores/moneyUnitStore';

export const commonStore = defineStore('commonCodeStore', () => {
  const moneyUnitStore = moneyUnit();
  const cateList = ref([]);

  //카테고리 불러오기
  const getCategory = async () => {
    const cateList = ref([]);
    try {
      const res = await axios.get(
        `http://localhost:5000/categoryCode?_sort=cateCd&_order=asc`,
      );
      cateList.value = res.data;
      console.log('스토어 함수 ', cateList.value);
    } catch (err) {
      console.log('getCategory err : ', err);
      cateList.value = 0;
    }

    return cateList;
  };

  //상세조회
  const selectClass = async (clsId) => {
    const resCls = ref({});
    // console.log('clsId : ', clsId);
    try {
      const res = await axios.get(`http://localhost:5000/class/${clsId}`);
      resCls.value = {
        ...res.data,
      };
      resCls.value.price = moneyUnitStore.numberUnit(resCls.value.price);
      console.log('resCls.value', resCls.value, res.data);
    } catch (err) {
      console.log('selectClsView err : ', err);
    }

    // console.log('resCls', cls);

    return resCls;
  };
  return { cateList, getCategory, selectClass };
});
