import styled from "styled-components";

export const StyledContainer = styled.main`
position: fixed;
 z-index: 1;
 overflow: hidden;
`

export const StyledNavLayout = styled.main`
 position: fixed;
 inset: 0;
 background: rgba(0, 0, 0, 0.7);
 z-index: 1;
 height: 100%;
 overflow: hidden;
`

export const StyledModelContent = styled.div`
 position: fixed;
 z-index: 10;
 height: 340px;
 bottom: 0;
 width: 100%;
 background: #FFFFFF;
 padding: 10px 63px;
 border-radius: 16px 16px 0px 0px;
`

export const StyledLink = styled.div`
 border-bottom: 1px solid #EEEEEE;
 padding: 20px 0;
 display: flex;
 align-items: center;
`

export const StyledLogOutLink = styled.div`
 padding: 20px 0;
 display: flex;
 align-items: center;
`

export const StyledLinkText = styled.span`
width: 100%;
 font-family: 'Inter';
 font-style: normal;
 font-weight: 500;
 padding-left: 15px;
 font-size: 14px;
 line-height: 17px;
 text-transform: capitalize;
 color: #000000;
 display: flex;
 justify-content: space-between;
`
export const StyledMock = styled.span`
width: 100%;
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