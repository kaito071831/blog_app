import Link from "next/link";
import styled from "styled-components";

type Contents = {
  totalCount: number;
}

const PageDiv = styled.div`
  display: flex;
`

export const Pagination = ({ totalCount }: Contents) => {
  const PER_PAGE: number = 5;

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  return(
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number: number, index: number) => (
        <li key={index}>
          <Link href={`/blog/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
