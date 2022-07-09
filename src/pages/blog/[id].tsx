import { client } from "../../libs/client";
import { GetStaticPaths, NextPage } from "next";
import { Blog, Category, Context } from "../../types/blog";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Layout } from "../../components/layout";
import { Contents } from "../../components/content";
import styled from "styled-components";
import { pc, sp } from "../../styles/media";
import Link from "next/link";
import Image from "next/image";
import { TwitterTimelineEmbed } from "react-twitter-embed";

type Props = {
  blog: Blog;
  bloglist: Blog[];
};

const BlogContent = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  padding: 2rem;
  margin: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  ${pc`
    width: 70%;
  `}
  ${sp`
    width: 100%;
    margin: 0 0 1rem 0;
  `}
`

const BlogFont = styled.span`
  color: #000000;
`

const TitleFont = styled(BlogFont)`
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
`

const BlogBody = styled.div`
  color: #000000;
  font-size: 1rem;
`

const TimeFont = BlogBody

const BlogDisplay = styled.div`
  ${pc`
    display: flex;
  `}
  ${sp`
    display: block;
    padding: 1rem;
  `}
`

const NavContent = styled(BlogContent)`
  ${pc`
    width: 30%;    
  `}
  ${sp`
    width: 100%;
    margin: 0;
  `}
`

const Menu = styled.div`
  padding: 0.5rem;

  border-bottom: 0.1rem #8e8989 solid;
  cursor: pointer;
`

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
    contentId: id,
  });

  const list: MicroCMSListResponse<Blog> = await client.get<MicroCMSListResponse<Blog>>({
    endpoint: "blog",
    queries: {
      limit: 5,
      offset: 0,
    },
  });

  return {
    props: {
      blog: data,
      bloglist: list.contents,
    }
  };
};

const BlogId: NextPage<Props> = ({ blog, bloglist }: Props) => {
  return(
    <>
      <Layout title={blog.title}>
        <Contents bgColor="#3e4cc9">
          <BlogDisplay>
            <BlogContent>
              <TitleFont>{blog.title}</TitleFont>
              <BlogBody>
                <div><TimeFont>{new Date(Date.parse(blog.publishedAt)).toLocaleString('ja-JP')}</TimeFont></div>
                <BlogBody>ラベル:{blog.category && blog.category.map((cat: Category) => (cat.category)).join()}</BlogBody>
              </BlogBody>              
              {blog.image && 
                <div>
                  <Image
                    src={blog.image?.url as string}
                    height={blog.image?.height}
                    width={blog.image?.width}
                    alt={blog.title}
                  />
                </div>
              }
              <BlogBody
                dangerouslySetInnerHTML={{
                  __html: `${blog.body}`,
                }}
              />
            </BlogContent>
            <NavContent>
              <div>メニュー</div>
              <nav>
                <div>
                  {bloglist.map((blog: Blog) => (
                    <Link key={blog.id} href={`/blog/${blog.id}`}>
                      <Menu>
                        <p>{blog.title}</p>
                        <span>タグ:{blog.category && blog.category.map((cat: Category) => (cat.category)).join()}</span>
                      </Menu>
                    </Link>
                  ))}
                </div>
                <div>
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="kaito071831"
                    options={{height: 400}}
                  />
                </div>
              </nav>
            </NavContent>
          </BlogDisplay>
        </Contents>
      </Layout>
    </>
  )
} 

export default BlogId;
