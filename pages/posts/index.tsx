import Layout from '../../components/layout';
import { CMS_NAME } from '../../lib/constants';
import Container from '../../components/container';
import HeroPost from '../../components/hero-post';
import Post from '../../types/post';
import { getAllPosts } from '../../lib/api';
import MoreStories from '../../components/more-stories';
import Head from 'next/head';
import { FEED_POST, generateRSSFeed } from '../../lib/generateRSSFeed';

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME} | Blog</title>
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
    'ogImage',
    'excerpt',
  ]);

  const articles: FEED_POST[] = allPosts.map((post) => {
    return {
      content: post.content,
      fileName: post.slug,
      meta: {
        date: new Date(post.date),
        description: post.excerpt,
        title: post.title
      }
    };
  });

  generateRSSFeed(articles);

  return {
    props: { allPosts },
  };
};
