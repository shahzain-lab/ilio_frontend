import type { NextPage } from 'next'
import ContentsCards from '../components/home/ContentsCards'
import AppHead from '../layout/Head'
import { StyledContainer } from '../styles/pages/Home.styles'

const Home: NextPage = () => {
  return (
    <>
      <AppHead title='Home Page' />
      <StyledContainer>
        <ContentsCards></ContentsCards>
      </StyledContainer>
    </>
  )
}

export default Home
