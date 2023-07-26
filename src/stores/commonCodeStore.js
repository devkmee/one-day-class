import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { moneyUnit } from '@/stores/moneyUnitStore';

export const commonCode = defineStore('commonCodeStore', () => {
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
    const cls = ref([]);
    console.log('clsId : ', clsId);
    try {
      const res = await axios.get(`http://localhost:5000/class/${clsId}`);
      cls.value = {
        ...res.data,
      };
      cls.value.price = moneyUnitStore.moneyUnit(cls.value.price);
      console.log(res);
    } catch (err) {
      console.log('selectClsView err : ', err);
    }

    return cls;
  };
  return { cateList, getCategory, selectClass };
});
