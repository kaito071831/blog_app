import type { NextPage, GetStaticProps } from "next";
import Link from "next/link"

import type { Blog } from "../../types/blog"
import { client } from "../../libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Layout } from "../../components/layout";
import { Contents } from "../../components/content";
import styled from "styled-components";
import Image from "next/image";
import { Category } from "@mui/icons-material";

const DEFAULT_ICON = require('../../../public/image/my_icon.png')

const ContentsBox = styled.div`
  height: 100vh;
`

const BlogH2 = styled.h2`
  font-size: 2rem;
  color: #ffffff;
`

const BlogDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items:stretch;
`

const TitleBox = styled.div`
  padding: 1rem;
  display: inline;
`

const BodyBox = styled.div`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 20rem;
  padding: 0 1rem;
`

const BlogUl = styled.ul`
  list-style: none;
`

const BlogLi = styled.li`
  margin-bottom: 2rem;
`

const BlogContent = styled.div`
  border: 0.25rem;
  border-radius: 1rem;
  border-style: none;
  background-color: #ffffff;
  display: inline-block;
  padding: 1rem;
`

const LabelBox = styled.div`
  text-align: left;
  margin-top: 0.5rem;
`

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
        <Contents bgColor="#16228e">
          <ContentsBox>
            <BlogH2>kaito071831 Blog</BlogH2>
            <div>
              <BlogUl>
                {blog.map((blog: Blog) => (
                  <BlogLi key={blog.id}>
                    <Link href={`/blog/${blog.id}`}>
                      <BlogContent>
                        <TitleBox>{blog.title}</TitleBox>
                        <BlogDiv>
                          <div>
                            <Image
                              src={blog.image ? blog.image : DEFAULT_ICON}
                              width={50}
                              height={50}
                            />
                          </div>
                          <div>
                            <BodyBox>{blog.body?.replaceAll(/<[^>]+>/g, "")}</BodyBox>
                            <LabelBox>タグ: {blog.category && `${blog.category.category}`}</LabelBox>
                          </div>
                        </BlogDiv>
                      </BlogContent>
                    </Link>
                  </BlogLi>
                ))}
              </BlogUl>
            </div>
          </ContentsBox>
        </Contents>
      </Layout>
    </>
  );
};

export default BlogIndex;
