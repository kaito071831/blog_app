import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticPaths } from "next";
import Link from "next/link";
import { Contents } from "../../../components/content";
import { Layout } from "../../../components/layout";
import { Pagination } from "../../../components/Pagination";
import { client } from "../../../libs/client";
import { Blog, Context } from "../../../types/blog";


type Props = {
  blog: Blog[];
  totalCount: number;
}

const PER_PAGE = 5;

export const getStaticPaths: GetStaticPaths = async() => {
  const repos: MicroCMSListResponse<Blog> = await client.get<MicroCMSListResponse<Blog>>({
    endpoint: "blog",
  })

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);

  const paths: string[] = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo: number) => `/blog/page/${repo}`);

  return { paths, fallback: false };
};

export const getStaticProps = async(context: Context) => {
  const id: number = context.params.id as unknown as number;

  const data = await client.get<MicroCMSListResponse<Blog>>({
    endpoint: "blog",
    queries: { offset: (id - 1)*5, limit: 5}
  });

  return {
    props:{
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};

const BlogPageId = ({ blog, totalCount }: Props) => {
  return(
    <>
      <Layout title="Blog">
        <Contents bgColor="#3e4cc9">
          <div>
            <ul>
              {blog.map((blog: Blog) => (
                <Link key={blog.id} href={`/blog/${blog.id}`}>
                  <li>
                    <a>{blog.title}</a>
                  </li>
                </Link>
              ))}
            </ul>
            <Pagination totalCount={totalCount} />
        </div>
      </Contents>
      </Layout>
    </>
  )
}

export default BlogPageId;
