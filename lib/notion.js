import { Client } from '@notionhq/client';
import { TOKEN } from './notionKey';

const notion = new Client({ auth: TOKEN });

export const getDatabase = async databaseId => {
  const res = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  return res.results;
};
