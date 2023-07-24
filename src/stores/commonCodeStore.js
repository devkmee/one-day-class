import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const commonCode = defineStore('commonCodeStore', () => {
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
  return { cateList, getCategory };
});
