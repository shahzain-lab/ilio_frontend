import React from 'react'
import { contents } from '../../model/contents'
import ContentCard from './ContentCard'
import { StyledCards } from './HomeComponents.styles'

const ContentsCards = () => {
  return (
    <StyledCards>
        {contents.map((content, i) => (
            <ContentCard key={i} content={content} />
        ))}
    </StyledCards>
  )
}

export default ContentsCards