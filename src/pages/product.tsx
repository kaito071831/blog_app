import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Contents } from "../components/content";
import { Layout } from "../components/layout";
import styled from "styled-components";
import { pc, sp } from "../styles/media";

const KAITO_HP = require('../../public/image/my_site.png');
const TASK_CONTROL = require('../../public/image/task-control-app.herokuapp.com_.png');
const KTimer = require('../../public/image/KTimer.png');
const WORK_APP = require('../../public/image/work_app.png');

const ProductIndex = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
`

const ProductContent = styled.div`
  border: 0.5rem #000000 double;
  border-radius: 1rem;
  margin: 1rem auto;
  padding: 1.75rem;
`

const ProductLink = styled.a`
  cursor: pointer;
` 

const ProductSpan = styled.span`
  ${pc`
    font-size: 1rem;
  `}
  ${sp`
    font-size: 0.75rem;
  `}
`

const ProductDt = styled.dt`
  float: left;
  clear: left;
  margin: 0.25rem 0;
  font-family: 'Rubik Moonrocks', cursive;
  ${sp`
    width: 100%;
  `}
  ${pc`
    width: 6rem;
  `}
`

const ProductDd = styled.dd`
  float: left;
  margin: 0.25rem 0;
  font-family: 'Noto Sans JP', sans-serif;
  ${sp`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  `}
`

const ProductTech = styled.div`
  display: inline-block;
  border: none;
  border-radius: 0.25rem;
  color: #1d90ed;
  background-color: #e4e4e4;
  padding: 0.1rem;
  ${pc`
    display: inline-block;
    margin-right: 0.5rem;
  `}
  ${sp`
    display: block;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  `}
`

export type Product = {
  title: string;
  url: string;
  src: any;
  height: number;
  width: number;
  detail: string;
  tech: string[];
}

export const Products: Product[] = [
  {
    title: "ポートフォリオサイト",
    url: "https://github.com/kaito071831",
    src: KAITO_HP,
    height: 0,
    width: 0,
    detail: "自分のポートフォリオサイト",
    tech: ['TypeScript', 'Next.js', 'React', 'Vercel', 'microCMS'],
  },
  {
    title: "TaskControl",
    url: "https://task-control-app.herokuapp.com/",
    src: TASK_CONTROL,
    height: 0,
    width: 0,
    detail: "ToDo管理サービス",
    tech: ['Ruby', 'Ruby on Rails', 'Tailwind CSS', 'jQuery', 'Heroku'],
  },
  {
    title: "KTimer",
    url: "https://github.com/kaito071831/Practice",
    src: KTimer,
    height: 300,
    width: 600,
    detail: "キッチンタイマー",
    tech: ['Java'],
  },
  {
    title: "業務用メモ",
    url: "https://github.com/kaito071831/MultipleMemo",
    src: WORK_APP,
    height: 370,
    width: 270,
    detail: "商店・飲食店向け記録用メモアプリケーション",
    tech: ['Java'],
  },
]

const Product: NextPage = () => {
  return(
    <>
      <Layout title='Product | kaito071831'>
        <Contents bgColor="#74b3e7">
          <h1>Product</h1>
          <ProductIndex>
            {Products.map((product: Product, index: number) => (
              <ProductContent id={product.title} key={index}>
                <div>
                  <h2>{product.title}</h2>
                  <Link href={product.url} passHref>
                    <ProductLink>
                      <Image
                        src={product.src}
                        height={product.height != 0 ? product.height : 0}
                        width={product.width != 0 ? product.width : 0}
                        alt={product.title}
                      />
                    </ProductLink>
                  </Link>
                </div>
                <div>
                  <dl>
                    <ProductSpan>
                      <ProductDt>説明</ProductDt>
                      <ProductDd>{product.detail}</ProductDd>
                    </ProductSpan>
                    <ProductSpan>
                      <ProductDt>使用技術</ProductDt>
                      <ProductDd>
                        {product.tech.map((tc: string, index: number) => (
                          <ProductTech key={index}>
                            <span>{tc}</span>
                          </ProductTech>
                        ))}
                      </ProductDd>
                    </ProductSpan>
                  </dl>
                </div>
              </ProductContent>
            ))}
          </ProductIndex>
        </Contents>
      </Layout>
    </>
  )
}

export default Product;
