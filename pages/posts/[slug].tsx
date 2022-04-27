import Container from '../../components/container';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../types/post';
import { generateRSSFeed } from '../../lib/generateRSSFeed';
import fs from 'fs';

type Props = {
  post: PostType
  morePosts: PostType[]
}

const Post = ({ post }: Props) => {
  return (
    <Layout>
      <Container>
        <article className="mb-32">
          <Head>
            <title>
              {post.title} | {CMS_NAME}
            </title>
            <meta property="og:image" content={post.ogImage.url}/>
          </Head>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
          />
          <PostBody content={post.content}/>
        </article>

      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
