const SeriesContents = ({ data }) => {
  console.log(data);
  const title = data.Title.title[0].plain_text;
  const description = data.Description.rich_text.length !== 0 ? data.Description.rich_text[0].plain_text : null;
  return (
    <div>
      <p>title : {title}</p>
      <p>desc : {description}</p>
    </div>
  );
};

export default SeriesContents;
