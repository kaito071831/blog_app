import styled from "styled-components"
import { Contents } from "../components/content"

const KAITO_HP = require('/public/image/my_site.png');
const TASK_CONTROL = require('/public/image/task-control-app.herokuapp.com_.png');
const KTimer = require('/public/image/KTimer.png');

const ProductH2 = styled.h2`
  color: #c4eedeb7;
  font-size: 2rem;
`


const products = [
  {
    title: "ポートフォリオサイト",
    src: KAITO_HP,
    detail: "自分のポートフォリオサイト",
    tech: [],
  },
  {
    title: "TaskControl",
    src: TASK_CONTROL,
    detail: "ToDo管理サービス",
    tech: [],
  },
  {
    title: "KTimer",
    src: KTimer,
    detail: "キッチンタイマー",
    tech: [],
  },
  {
    title: "業務用メモ",
    src: "",
    detail: "商店・飲食店向け記録用メモアプリケーション",
    tech: [],
  },
]

export const Portfolio = () => {
  return(
    <>
      <Contents bgColor="#666666">
        <ProductH2>Product</ProductH2>
        <div>
          
        </div>
      </Contents>
    </>
  )
}
