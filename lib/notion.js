import { Client } from '@notionhq/client';
import { TOKEN } from './notionKey';

const notion = new Client({ auth: TOKEN });

export const getDatabase = async databaseId => {
  const res = await notion.databases.query({
    database_id: databaseId,
  });

  return res.results;
};
