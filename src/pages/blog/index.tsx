import type { NextPage, GetStaticProps } from "next";
import Link from "next/link"

import type { Blog } from "../../types/blog"
import { client } from "../../libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Layout } from "../../components/layout";

type Props = {
  blog: Blog[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data: MicroCMSListResponse<Blog> = await client.get<MicroCMSListResponse<Blog>>({
    endpoint: "blog",
  });

  return {
    props: {
      blog: data.contents,
    }
  }
}

const BlogIndex: NextPage<Props> = ({ blog }: Props) => {
  return(
    <>
      <Layout title="Blog">
        <div>
          <ul>
            {blog.map((blog) => (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <a>{blog.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default BlogIndex;
