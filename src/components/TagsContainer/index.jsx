import Tag from '@/components/Tags/Tag';

const TagsContainer = ({ tagsList }) => {
  return (
    <>
      {tagsList.map((value, key) => (
        <Tag key={key} data={value} />
      ))}
    </>
  );
};

export default TagsContainer;
