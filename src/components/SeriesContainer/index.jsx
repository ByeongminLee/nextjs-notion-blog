import { useEffect, useState } from 'react';
import SeriesContents from './SeriesContents';

const SeriesContainer = ({ seriesObj }) => {
  //   const seriesObjKey = Object.keys(seriesObj);

  const [seriesObjKey, setSeriesObjKey] = useState([]);

  useEffect(() => {
    setSeriesObjKey(Object.keys(seriesObj));
  }, [seriesObj]);

  return (
    <>
      {seriesObjKey.map((serieses, i) => (
        <>
          <h4>시리즈 : {serieses}</h4>
          <p>카운트 {seriesObj[`${seriesObjKey[i]}`].length}</p>
          {seriesObj[`${seriesObjKey[i]}`].map((data, key) => (
            <>
              <SeriesContents key={key} data={data} />
            </>
          ))}
        </>
      ))}
    </>
  );
};

export default SeriesContainer;
