import styled from '@emotion/styled';
import Link from 'next/link';
import { useEffect } from 'react';

const PostCard = ({ data }) => {
  const { id, created_time, properties } = data;
  const url = id.replace(/\-/g, '');
  const title = properties.Title.title[0].plain_text;
  const tags = properties.Tags.multi_select.map(value => {
    return value.name;
  });
  const description = properties.Description.rich_text.length !== 0 ? properties.Description.rich_text[0].plain_text : null;

  const date = properties.Date.date.start;

  const dateHandler = date => {
    const year = date.substring(0, 4);
    const month = parseInt(date.substring(5, 7));
    const day = parseInt(date.substring(8, 10));

    return { year, month, day };
  };

  const { year, month, day } = dateHandler(date);

  return (
    <>
      <Link href={`/post/${url}`}>
        <a>
          <Title>title: {title}</Title>
          {description ? <Description>description : {description}</Description> : null}
        </a>
      </Link>
      <Date>
        {year}년 {month}월 {day}일
      </Date>
    </>
  );
};

export default PostCard;

const Title = styled.h3``;

const Description = styled.p``;

const Date = styled.span``;
