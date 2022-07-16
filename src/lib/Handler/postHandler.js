/**
 * post data Handler
 */

const getTitle = post => {
  if (!post.properties.Title) return 'EMPTY TITLE';
  return post.properties.Title.title[0].plain_text;
};
const getUrl = post => {
  return post.id.replace(/\-/g, '');
};
const getTagsData = post => {
  return post.properties.Tags.multi_select;
};
const getDescription = post => {
  if (post.properties.Description.rich_text.length !== 0) return post.properties.Description.rich_text[0].plain_text;
  else return null;
};
const getDate = post => {
  if (post.properties.Date.date !== null) return post.properties.Date.date.start;
  else return null;
};
const getSeries = post => {
  if (post.properties.Series.select !== null) return post.properties.Series.select.name;
  else return null;
};

const getPost = post => {
  const url = getUrl(post);
  const title = getTitle(post);
  const description = getDescription(post);
  const tagsData = getTagsData(post);
  const date = getDate(post);
  const series = getSeries(post);

  return { url, title, description, tagsData, date, series };
};

export { getPost, getTitle, getUrl, getTagsData, getDescription, getDate, getSeries };
