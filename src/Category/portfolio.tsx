import styled from "styled-components"
import { Contents } from "../components/content"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import Image from "next/image";
import Link from "next/link";
import { Products } from "../pages/product";
import { pc, sp } from "../styles/media";

import type { Product } from "../pages/product"

SwiperCore.use([Pagination, Navigation]);

const ProductH2 = styled.h2`
  color: #cfffffff;
  font-size: 2rem;
`

const ProductDiv = styled.div`
  ${pc`
    padding: 0 20rem;
  `}
  ${sp`
    padding: 2rem;
  `}
`

const ProductA = styled.a`
  cursor: "pointer";
`

type Image = {
  src: any;
  href: string;
}

const images: Image[] = Products.map((product: Product) => {
  return(
    {
      src: product.src,
      href: `/product#${product.title}`
    }
  )
})

export const Portfolio = () => {
  return(
    <>
      <Contents bgColor="#666666">
        <ProductH2>Product</ProductH2>
        <ProductDiv>
          <Swiper
            slidesPerView={1}
            pagination = {{
              clickable: true,
            }}
            navigation
            loop={true}
          >
            {images.map((image: Image, index: number) => (
              <SwiperSlide key={index}>
                <Link href={image.href} passHref>
                  <ProductA>
                    <Image
                      src={image.src}
                      layout="responsive"
                      width={640}
                      height={400}
                    />
                  </ProductA>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </ProductDiv>
      </Contents>
    </>
  )
}
