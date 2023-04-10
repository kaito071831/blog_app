import styled from "styled-components"
import { Contents } from "../components/content"
import { pc, sp, tab } from "../styles/media"

const HistoryH2 = styled.h2`
  color: #000000;
  font-size: 2rem;
`

const HistoryContent = styled.div`
  margin-bottom: 4rem;
  ${pc`
    overflow: hidden;
    margin: 0;
    position: relative;
    padding-left: 2rem;
  `}
`

const HistoryP = styled.p`
  ${pc`
    width: 7rem;
    float: left;
    margin-top: 1rem;
  `}
`

const HistoryDiv = styled.div`
  ${pc`
    width: 85%;
    float: left;
    border-left: 0.25rem #000000 solid;
  `}
  ${tab`
    padding: 0 1rem;
  `}
  ${sp`
    padding: 0 1rem;
  `}
  &:before {
    ${pc`
      content: '';
      width: 1rem;
      height: 1rem;
      background: #6fc173;
      position: absolute;
      left: 8.7rem;
      top: 2rem;
      border-radius: 100%;
    `}
  }
`

type Career = {
  date: string;
  content: string;
  detail: string;
  tech?: string; 
}

const careers: Career[] = [
  {
    date: "2016/04-2021/03",
    content: "国際高等専門学校 グローバル情報学科",
    detail: "プログラミングの基礎, 会計の基礎を学習",
  },
  {
    date: "2019/08",
    content: "NTT-ME インターン",
    detail: "電話・インターネット回線の構築の疑似体験",
  },
  {
    date: "2021/04-2023/03",
    content: "金沢工業大学 工学部 情報工学科",
    detail: "コンピューターやシステム開発について学習"
  },
  {
    date: "2021/04-2023/03",
    content: "株式会社CirKit Webエンジニア インターン",
    detail: "システム開発部にてインターン。金沢工業大学の学食で利用されているサービスSAKITOの開発,HPの保守に従事。",
    tech: "Ruby / Ruby on Rails / Python / JavaScript(TypeScript) / React",
  },
  {
    date: "2021/08",
    content: "株式会社TSOne エンジニア インターン",
    detail: "来客者受付システムの開発",
    tech: "Python / Flask",
  },
  {
    date: "2021/09",
    content: "株式会社タスク エンジニア インターン",
    detail: "コッペパン購入システムの開発",
    tech: "JavaScript / GoogleAppsScript",
  },
  {
    date: "2023/04-",
    content: "株式会社ゆめみ入社",
    detail: "サーバーサイドエンジニア",
    tech: undefined
  }
]

export const History = () => {
  return(
    <Contents bgColor="#d4ae69">
      <HistoryH2>History</HistoryH2>
      <div>
        {careers.map((career: Career) => (
          <HistoryContent key={career.content}>
            <HistoryP>{career.date}</HistoryP>
            <HistoryDiv>
              <h3>{career.content}</h3>
              <p>{career.detail}</p>
              <p>{career.tech}</p>
            </HistoryDiv>
          </HistoryContent>
        ))}
      </div>
    </Contents>
  )
}
