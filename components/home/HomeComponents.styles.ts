import styled from 'styled-components';

export const StyledCards = styled.div`
 display: grid;
 grid-template-columns: repeat(5, 1fr);
 gap: 24px;
 padding-top: 16px;
   
   /* Wearables */
   @media 
      (max-device-width: 320px) { 
      grid-template-columns: 1fr;
   }

  /* (IPhone) Portrait and Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
      grid-template-columns: 1fr;
  }
   
  /* Google/Galaxy */
  @media screen 
    and (min-device-width: 480px) 
    and (max-device-width: 712px) {
     grid-template-columns: repeat(2, 1fr);
  }

  /* (Small Tablets/screens) Portrait and Landscape */
  @media only screen 
    and (min-device-width: 712px) 
    and (max-device-width: 912px) {
     grid-template-columns: repeat(3, 1fr);
  }

  
  /* (IPads/Tablets) Portrait and Landscape */
  @media only screen 
    and (min-device-width: 912px) 
    and (max-device-width: 1164px) 
    and (-webkit-min-device-pixel-ratio: 1) {
     grid-template-columns: repeat(4, 1fr);
  }

`

export const StyledCard = styled.main`
  /* width: 230px;  */
`
export const StyledH3 = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  padding-top: 10px;
  font-size: 14px;
  line-height: 17px;
  text-transform: lowercase;
  color: #000000;
`

export const StyledImage = styled.div`
  width: inherit;
  height: 177px;
  position: relative;
   
  /* (IPhone) Portrait and Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
  height: 281px;
  }
`

export const StyledTitle = styled.main`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  line-height: 15px;
  text-transform: lowercase;
  color: #485562;
  font-weight: 300;
  font-size: 12px;
`
export const StyledH4 = styled.h4`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: capitalize;
  color: #000000;
`

export const StyledTitleBox = styled.main`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding-top: 3px;
`
export const StyledPriceBox = styled.main`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 5px 0;
`

export const StyledPrice = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  text-transform: capitalize;
  color: #2CA551;
  font-size: 16px;
  
`

export const StyledDesc = styled.p`
  font-family: 'Inter';
  font-style: normal;
  text-transform: capitalize;
  color: #485562;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  
`