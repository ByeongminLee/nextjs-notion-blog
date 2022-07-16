/**
 * posts 데이터에서 모든 태그를 중복을 제거한 배열로 반환
 * @param {object} posts notion post data
 * @returns 중복 제거한 전체 태그 리스트 배열
 */
const tagListHandler = posts => {
  const dupArr = [];
  posts.map(data => {
    if (data.properties.Tags.multi_select.length !== 0) {
      data.properties.Tags.multi_select.map(value => {
        dupArr.push(value.name);
      });
    }
  });
  const set = new Set(dupArr);
  return [...set];
};

export default tagListHandler;
