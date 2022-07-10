import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import SeriesContents from './SeriesContents';

const SeriesContainer = ({ seriesObj }) => {
  const [seriesObjKey, setSeriesObjKey] = useState([]);
  const [isChecked, setIsChecked] = useState([]);

  useEffect(() => {
    setSeriesObjKey(Object.keys(seriesObj));
  }, [seriesObj]);

  useEffect(() => {
    seriesObjKey.forEach(() => setIsChecked(prev => [...prev, false]));
  }, [seriesObjKey]);

  const checkedHandler = async index => {
    const changeCheck = await isChecked.map((isCheck, i) => {
      if (i === index) return (isCheck = !isCheck);
      else return isCheck;
    });
    setIsChecked(changeCheck);
  };

  return (
    <>
      {seriesObjKey.map((serieses, index) => (
        <SeriesCard key={index}>
          {seriesObj[seriesObjKey[index]][0].cover ? <SeriesCover imgCover={`${seriesObj[seriesObjKey[index]][0].cover}`} /> : null}
          <SeriesInfo>
            <h3>{serieses}</h3>
            <p>{seriesObj[`${seriesObjKey[index]}`].length} posts</p>
            <ForCheckBox id="ForCheck" key={index} isCheck={isChecked[index]}>
              <input
                type="checkbox"
                id={`check${index}`}
                value=""
                checked={isChecked ? isChecked[index] : false}
                onChange={() => checkedHandler(index)}
              />
              <label htmlFor={`check${index}`}>
                <Image src="/icon/arrow-bottom.png" alt="arrow-bottom-button" width={32} height={37} />
              </label>
            </ForCheckBox>
          </SeriesInfo>
          <SeriesList isCheck={isChecked[index]}>
            {seriesObj[`${seriesObjKey[index]}`].map((data, key) => (
              <Link href={`/post/${data.link}`} key={key}>
                <a>
                  <SeriesContents data={data} />
                </a>
              </Link>
            ))}
          </SeriesList>
        </SeriesCard>
      ))}
    </>
  );
};

export default SeriesContainer;

const SeriesCard = styled.div`
  border: 1px solid var(--color-line);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  word-break: break-all;
  min-width: 360px;
`;

const SeriesInfo = styled.div`
  width: 100%;
  display: inline-flex;
  padding: 10px 0;
  h3 {
    width: 80%;
    font-size: var(--fontSize-2xl);
    margin: 0;
  }
  p {
    width: calc(20% - 40px);
    font-style: italic;
    font-size: var(--fontSize-sm);
    color: var(--color-grey-text);
    text-align: right;
    margin-right: 20px;
    line-height: 40px;
    min-width: 50px;
  }
`;
const ForCheckBox = styled.div`
  img {
    transition: all 0.5s;
    transform: ${({ isCheck }) => (isCheck ? 'rotate(180deg)' : '')};
  }
`;
const SeriesList = styled.div`
  display: ${({ isCheck }) => (!isCheck ? 'none' : '')};
`;

const SeriesCover = styled.div`
  background-image: url(${({ imgCover }) => imgCover});
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 878px;
  height: 200px;
  border-radius: 3px;
`;
