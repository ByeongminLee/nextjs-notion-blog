import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import Tags from '../Tags';

const PostCard = ({ data }) => {
  const { id, created_time, properties } = data;
  const url = id.replace(/\-/g, '');
  const title = properties.Title.title[0].plain_text;
  const tagsData = properties.Tags.multi_select;
  const description = properties.Description.rich_text.length !== 0 ? properties.Description.rich_text[0].plain_text : null;

  const date = properties.Date.date !== null ? properties.Date.date.start : null;

  const series = properties.Series.select !== null ? properties.Series.select.name : null;

  const dateHandler = date => {
    if (!date) return { year: '00', month: '00', day: '00' };
    const year = date.substring(0, 4);
    const month = parseInt(date.substring(5, 7));
    const day = parseInt(date.substring(8, 10));
    return { year, month, day };
  };

  const { year, month, day } = dateHandler(date);

  return (
    <Card>
      <Series>{series}</Series>
      <Link href={`/post/${url}`}>
        <a>
          <Title>title: {title}</Title>
          {description ? <Description>description : {description}</Description> : <Description></Description>}
        </a>
      </Link>

      <TagsContainer>
        <Tags data={tagsData} />
      </TagsContainer>

      <Date>
        <Image src="/icon/calender.png" alt="calender" width={14} height={14} />
        <span>
          {year}년 {month}월 {day}일
        </span>
      </Date>
    </Card>
  );
};

export default PostCard;

const Card = styled.div`
  width: 100%;
  min-width: 360px;
  word-break: break-all;
  padding: 30px 0;
  border-bottom: 0.5px solid var(--color-line-card);
  a {
    :hover {
      text-decoration: underline;
    }
  }
`;

const Series = styled.h4`
  color: var(--color-grey-text);
  font-size: var(--fontSize-sm);
  font-weight: 900;
  margin: 0;
`;

const Title = styled.h3`
  font-size: var(--fontSize-3xl);
  color: var(--color-primary-text);
  font-weight: 700;
  margin: 0;
`;

const Description = styled.p`
  font-size: var(--fontSize-md);
  color: var(--color-primary-text);
  font-weight: 300;
  padding: 10px 0;
  margin: 0;
`;

const TagsContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 0;
`;

const Date = styled.div`
  width: 15%;
  min-width: 120px;
  text-align: right;
  float: right;

  span {
    padding: 0 5px;
    vertical-align: top;
    font-size: var(--fontSize-sm);
    color: var(--color-grey-text);
  }

  ::after {
    clear: both;
  }
`;
