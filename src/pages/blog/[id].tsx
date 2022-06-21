import { client } from "../libs/client";
import { GetStaticPaths, NextPage } from "next";
import { Blog, Context } from "../../types/blog";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Layout } from "../../components/layout";

type Props = {
  blog: Blog;
};

const BlogId: NextPage<Props> = ({ blog }: Props) => {
  return(
    <Layout title={blog.title}>
      <main>
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </main>
    </Layout>
  )
} 

export const getStaticPaths: GetStaticPaths = async () => {
  const data: MicroCMSListResponse<Blog> = await client.get<MicroCMSListResponse<Blog>>({
    endpoint: "blog",
  });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: Context) => {
  const id: string = context.params.id;
  const data: MicroCMSListResponse<Blog> = await client.get<MicroCMSListResponse<Blog>>({
    endpoint: "blog",
    contentId: id
  });

  return {
    props: {
      blog: data,
    },
  };
};

export default BlogId;
