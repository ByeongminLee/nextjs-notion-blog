/**
 * 합쳐진 데이터를 각 날짜 별로 반환
 * 만약 데이터가 없을시 00값으로 반환
 * @param {string} date 날짜 데이터
 * @returns year(년), month(월), day(일)을 반환
 */
const dateHandler = date => {
  if (!date) return { year: '00', month: '00', day: '00' };
  const year = date.substring(0, 4);
  const month = parseInt(date.substring(5, 7));
  const day = parseInt(date.substring(8, 10));
  return { year, month, day };
};

export default dateHandler;
