import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Contents } from "../components/content";
import { Layout } from "../components/layout";
import styled from "styled-components";

const KAITO_HP = require('/public/image/my_site.png');
const TASK_CONTROL = require('/public/image/task-control-app.herokuapp.com_.png');
const KTimer = require('/public/image/KTimer.png');
const WORK_APP = require('/public/image/work_app.png');

const ProductIndex = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
`

const ProductContent = styled.div`
  border: 0.25rem #000000 solid;
  border-radius: 1rem;
  margin: 1rem auto;
  padding: 1rem;
`

const products = [
  {
    title: "ポートフォリオサイト",
    url: "https://github.com/kaito071831",
    src: KAITO_HP,
    detail: "自分のポートフォリオサイト",
    tech: ['TypeScript', 'Next.js', 'React', 'Vercel', 'microCMS'],
  },
  {
    title: "TaskControl",
    url: "https://task-control-app.herokuapp.com/",
    src: TASK_CONTROL,
    detail: "ToDo管理サービス",
    tech: ['Ruby', 'Ruby on Rails', 'Tailwind CSS', 'jQuery', 'Heroku'],
  },
  {
    title: "KTimer",
    url: "https://github.com/kaito071831/Practice",
    src: KTimer,
    detail: "キッチンタイマー",
    tech: ['Java'],
  },
  {
    title: "業務用メモ",
    url: "https://github.com/kaito071831/MultipleMemo",
    src: WORK_APP,
    detail: "商店・飲食店向け記録用メモアプリケーション",
    tech: ['Java'],
  },
]

const Product: NextPage = () => {
  return(
    <>
      <Layout title="Product | kaito071831">
        <Contents bgColor="#2fdc2f">
          <ProductIndex>
            {products.map((product) => (
              <ProductContent>
                <div>
                  <Link href={product.url}>
                    <Image
                      src={product.src}
                    />
                  </Link>
                </div>
                <div>
                  <p>{product.title}</p>
                  <p>{product.detail}</p>
                  {product.tech.map((tc) => (
                    <p>{tc}</p>
                  ))}
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
