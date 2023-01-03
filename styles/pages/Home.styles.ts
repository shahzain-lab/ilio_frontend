import styled from 'styled-components';

export const StyledContainer = styled.main`
padding: 0 97px;

   /* Wearables */
   @media 
      (max-device-width: 320px) { 
      padding: 0 5px;
   }

  /* (IPhone) Portrait and Landscape */
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
      padding: 0 24px;
  }

  /* Google/Galaxy */
  @media screen 
    and (min-device-width: 480px) 
    and (max-device-width: 712px)  
    {
      padding: 0 42px;
  }

  /* (Small Tablets/screens) Portrait and Landscape */
  @media only screen 
    and (min-device-width: 712px) 
    and (max-device-width: 912px) {
      padding: 0 60px;
  }

  /* (IPads/Tablets) Portrait and Landscape */
  @media only screen 
    and (min-device-width: 912px) 
    and (max-device-width: 1164px) 
    and (-webkit-min-device-pixel-ratio: 1) {
      padding: 0 69px;
  }
`