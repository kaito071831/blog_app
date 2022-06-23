import styled from "styled-components"
import { Contents } from "../components/content"
import { pc } from "../styles/media"

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

export const History = () => {
  return(
    <Contents bgColor="#d4ae69">
      <HistoryH2>History</HistoryH2>
      <div>
        <HistoryContent>
          <HistoryP>2016/04-2021/03</HistoryP>
          <HistoryDiv>
            <h3>国際高等専門学校 グローバル情報学科</h3>
            <p>プログラミングの基礎, 会計の基礎を学習</p>
          </HistoryDiv>
        </HistoryContent>
        <HistoryContent>
          <HistoryP>2019/08</HistoryP>
          <HistoryDiv>
            <h3>NTT-ME インターン</h3>
            <p>電話・インターネット回線の構築の疑似体験</p>
          </HistoryDiv>
        </HistoryContent>
        <HistoryContent>
          <HistoryP>2021/04-</HistoryP>
          <HistoryDiv>
            <h3>金沢工業大学 情報工学科</h3>
            <p>コンピューターやシステム開発について学習</p>
          </HistoryDiv>
        </HistoryContent>
        <HistoryContent>
          <HistoryP>2021/04-</HistoryP>
          <HistoryDiv>
            <h3>株式会社CirKit Webエンジニア インターン</h3>
            <p>システム開発部にてインターン。金沢工業大学の学食で利用されているサービスSAKITOの開発に従事</p>
            <p>Ruby / Ruby on Rails / Python</p>
          </HistoryDiv>
        </HistoryContent>
        <HistoryContent>
          <HistoryP>2021/08</HistoryP>
          <HistoryDiv>
            <h3>株式会社TSOne エンジニア インターン</h3>
            <p>来客者受付システムの開発</p>
            <p>Python / Flask</p>
          </HistoryDiv>
        </HistoryContent>
        <HistoryContent>
          <HistoryP>2021/09</HistoryP>
          <HistoryDiv>
            <h3>株式会社タスク エンジニア インターン</h3>
            <p>コッペパン購入システムの開発</p>
            <p>JavaScript / GoogleAppsScript</p>
          </HistoryDiv>
        </HistoryContent>
      </div>
    </Contents>
  )
}
