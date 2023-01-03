import Image from 'next/image';
import React, { useState } from 'react'
import { 
  StyledCard, StyledDesc, StyledH3, StyledH4, StyledImage, StyledPrice, StyledPriceBox, StyledTitle, StyledTitleBox } from './HomeComponents.styles';

interface IContent {
  image: string;
  name: string;
  para: string;
  description: string;
  price: string;
  adTop?: string;
  liked: boolean;
}

interface Props {
    content: IContent
}

const ContentCard = ({ content }: Props) => {
  const [likes, setLikes] = useState<string[]>([])

  const toggleLike = (id: string) => {
    let likeItems: string[] = []
    if(likes.includes(id)) {
      likeItems = likes.filter(like => like !== id);
    }
    if(!likes.includes(id)) {
      likeItems = [...likes, id];
    }
    setLikes(likeItems)
  }
  return (
    <StyledCard>
       <StyledImage>
          <Image 
           src={content.image}
           alt={content.name}
           fill
           style={{borderRadius: '12px'}}
          />
       </StyledImage>
        <StyledH3>{content.name}</StyledH3>
        <StyledTitleBox>
            <StyledTitle>{content.para}</StyledTitle>
            <StyledH4>{content?.adTop}</StyledH4>
        </StyledTitleBox>
        <StyledPriceBox>
            <StyledPrice>${content.price}</StyledPrice>
            {likes.includes(content.image) ? (
                <Image 
                  src={'/assets/demos/heart-filled.svg'}
                  alt='heart'
                  width={'24'}
                  height={'24'}
                  style={{cursor: 'pointer'}}
                  onClick={() => toggleLike(content.image)}
                />
               ):(
                <Image 
                  src={'/assets/demos/heart.svg'}
                  alt='heart'
                  width={'24'}
                  height={'24'}
                  style={{cursor: 'pointer'}}
                  onClick={() => toggleLike(content.image)}
                />
            ) }
        </StyledPriceBox>
        <StyledDesc>{content.description}</StyledDesc>
    </StyledCard>
  )
}

export default ContentCard