import { defineStore } from 'pinia';
import { ref } from 'vue';

export const moneyUnit = defineStore('moneyUnitStore', () => {
  const numberUnit = (orgNumber) => {
    //1000단위 콤마 추가
    const unitedNumber = ref(0);
    unitedNumber.value = orgNumber
      //.toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    console.log('orgNumber : ' + orgNumber);
    console.log('unitedNumber : ' + unitedNumber.value);

    return unitedNumber;
  };

  /**문자열에서 특정문자 제거
   * orgString : 문자열
   * paramChar : 제거할 문자
   */
  const deleteChar = (orgString) => {
    const result = ref('');

    if (orgString.length >= 1) {
      result.value = orgString.replace(/,/g, '');
    } else {
      result.value = '';
    }
    console.log('result : ', result.value);

    return result;
  };

  return { numberUnit, deleteChar };
});
