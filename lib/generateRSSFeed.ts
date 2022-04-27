import fs from 'fs';
import { Feed } from 'feed';
import { CMS_NAME, COPYRIGHT, DESCRIPTION, GITHUB } from './constants';
export interface FEED_POST  {
  content: any;
  fileName: string;
  meta: {
    date: Date;
    description: string;
    title: string;
  }
}

export const generateRSSFeed = (articles: FEED_POST[]) => {
  const site = 'https://juan.irizar.dev'
  const blogUrl = `${site}/posts`;
  const author = {
    name: 'Juan C. Irizar',
    email: 'juan@irizar.dev',
    link: 'https://github.com/jcirizar',
  };

  const feed = new Feed({
    title: `Articles by ${CMS_NAME}`,
    updated: new Date(),
    description: DESCRIPTION,
    id: site,
    link: blogUrl,
    generator: GITHUB,
    language: 'en',
    feedLinks: {
      rss2: `${site}/feed.xml`,
    },
    author,
    copyright: COPYRIGHT
  });

  articles.forEach((post: FEED_POST) => {
    const {
      content,
      fileName,
      meta: { date, description, title },
    } = post;
    const url = `${blogUrl}/${fileName}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content,
      author: [author],
      date: new Date(date),
    });
  });

  fs.writeFileSync('public/feed.xml', feed.rss2());
};
