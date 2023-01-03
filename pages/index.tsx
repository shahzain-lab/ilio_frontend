import type { NextPage } from 'next'
import ContentsCards from '../components/home/ContentsCards'
import { StyledContainer } from '../styles/pages/Home.styles'

const Home: NextPage = () => {
  return (
      <StyledContainer>
        <ContentsCards></ContentsCards>
      </StyledContainer>
  )
}

export default Home
