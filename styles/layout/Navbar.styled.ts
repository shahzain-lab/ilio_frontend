import styled from 'styled-components';

export const StyledNavbar = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
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
    and (max-device-width: 712px) {
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
    and (max-device-width: 1216px) 
    and (-webkit-min-device-pixel-ratio: 1) {
      padding: 0 69px;
  }
`


export const StyledLinks = styled.ul`
 width: 600px;
 display: flex;
 justify-content: space-around;
 align-items: center;

  /* (Small Tablets/screens) Portrait and Landscape */
  @media only screen 
    and (min-device-width: 712px) 
    and (max-device-width: 912px) {
      width: 700px;
  }
 
   /* Hide links on Wearables/IPhone/Google/Galaxy/HTC devices */
  @media only screen 
    and (max-device-width: 712px) {
      display: none;
  }
`
export const StyledLogo = styled.div`
  margin-right: 218.33px;
  
  
   /* Hide links on Wearables/IPhone/Google/Galaxy/HTC devices */
   @media screen 
    and (max-device-width: 712px) 
    and (-webkit-device-pixel-ratio: 2) {
    margin-right: 0px;
  }

  /* (Small Tablets/screens) Portrait and Landscape */
  @media only screen 
    and (min-device-width: 712px) 
    and (max-device-width: 912px) {
    margin-right: 78px;
  }

  /* (IPads/Tablets) Portrait and Landscape */
  @media only screen 
    and (min-device-width: 912px) 
    and (max-device-width: 1216px) 
    and (-webkit-min-device-pixel-ratio: 1) {
    margin-right: 90px;
  }
  
`

export const StyledLink = styled.li`
 position: relative;
 height: 56px;
 display: flex;
 align-items: center;
 list-style: none;
 font-family: 'Inter';
 font-style: normal;
 font-weight: ${(props: {active: boolean}) => props.active ? '600':'500'};
 font-size: 16px;
 line-height: 17px;
 text-transform: capitalize;
 color: ${(props: {active: boolean}) => props.active ? '#000':'#485562'};
`;

export const StyledNavProps = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const StyledCreatePost = styled.div`
  border: 1px solid #EEF1F6;
  margin-right: 24px;
  display: flex;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 60px;
  width: 94px;
  height: 40px;

  
   /* Hide message on Wearables/IPhone/Google/Galaxy/HTC devices */
   @media only screen 
    and (max-device-width: 712px) {
      display: none;
  }
`

 export const StyledPlusTitle = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
  color: #485562;
 `

export const StyledMock = styled.span`
 position: absolute;
 width: 24px;
 height: 20px;
 border-radius: 16px;
 background: #F61B1B;
 font-family: 'Inter';
 font-style: normal;
 font-weight: 600;
 font-size: 12px;
 line-height: 15px;
 display: flex;
 align-items: center;
 text-transform: capitalize;
 justify-content: center;
 color: #FFFFFF;
 right: -22%;
 top: 15%;
`;

export const StyledActiveBar = styled.div`
 position: absolute;
 width: 100%;
 bottom: 5%;
 background: #FF385C;
 border-radius: 4px;
 height: 4px;
`;

export const StyledPlusIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #EEF1F6;
    border-radius: 60px;
    padding: 4px;
    margin-right: 24px;
 
   /* Hide plus icon on Wearables/IPhone/Google/Galaxy/HTC devices */
   @media only screen 
    and (min-device-width: 712px) {
      display: none;
  }
`;

export const StyledMenuAvatar = styled.span`
  
   /* Hide menu icon on Wearables/IPhone/Google/Galaxy/HTC devices */
   @media only screen 
    and (min-device-width: 712px) {
      display: none;
  }
`

export const StyledUserAvatar = styled.div`
   float: right;
    width: 40px;
    height: 40px;
    background: #EEF1F6;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

   /* Hide user icon on Wearables/IPhone/Google/Galaxy/HTC devices */
  @media only screen 
    and (max-device-width: 712px) {
      display: none;
  }
`;