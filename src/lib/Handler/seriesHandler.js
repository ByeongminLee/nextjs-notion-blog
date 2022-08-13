/**
 * 기존 post 데이터를 시리즈 별로 객체로 변환해서 반환
 * @param {object} posts notion post data
 * @returns 시리즈별 오브젝트 반환
 */
const seriesHandler = posts => {
  const obj = new Object();
  posts.map(data => {
    const seriesValue = data.properties.Series.select;
    if (seriesValue !== null) {
      if (!obj[`${seriesValue.name}`]) {
        obj[`${seriesValue.name}`] = new Array();
      }
      data.properties['link'] = data.id.replace(/\-/g, '');
      data.properties['cover'] = data.cover ? data.cover.external.url : null;
      obj[`${seriesValue.name}`].push(data.properties);
    }
  });
  return obj;
};

export default seriesHandler;
