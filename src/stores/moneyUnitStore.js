import { defineStore } from 'pinia';
import { ref } from 'vue';

export const moneyUnit = defineStore('moneyUnitStore', () => {
  /**
   * 숫자 1000단위 콤마 추가
   * @param {int} orgNumber 문자열 형식 숫자
   * @returns {string} 콤마가 추가된 문자열 숫자
   */
  const numberUnit = (orgNumber) => {
    const unitedNumber = ref(0);
    unitedNumber.value = orgNumber
      //.toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

    return unitedNumber;
  };

  /**문자열에서 특정문자 제거
   * @param {string} orgString 문자열
   * @returns {string} 특정문자가 제거된 문자열
   */
  const deleteChar = (orgString) => {
    const result = ref('');

    if (orgString.length >= 1) {
      result.value = orgString.replace(/,/g, '');
    } else {
      result.value = '';
    }

    return result;
  };

  return { numberUnit, deleteChar };
});
