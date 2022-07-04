import Link from "next/link";
import styled from "styled-components";

type Contents = {
  totalCount: number;
}

const PageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`

const PageLi = styled.div`
  border: 0.25rem none;
  border-radius: 0.25rem;
  background-color: #ffffff;
  padding: 0.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
`

export const Pagination = ({ totalCount }: Contents) => {
  const PER_PAGE: number = 5;

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  return(
    <>
      <PageDiv>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number: number, index: number) => (
        <Link key={index} href={`/blog/page/${number}`}>
          <PageLi>
            <a>{number}</a>
          </PageLi>
        </Link>
      ))}
      </PageDiv>
    </>
  );
};
