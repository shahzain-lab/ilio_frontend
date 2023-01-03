import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// redux
import { useDispatch } from 'react-redux'
import { handleClose } from '../state/features/NavModelSlice'
// styles
import { 
    StyledContainer,
    StyledLink,
    StyledModelContent,
    StyledNavLayout,
    StyledLogOutLink,
    StyledLinkText,
    StyledMock
         } from '../styles/layout/NavModel.styled'

const NavModel = () => {
    const dispatch = useDispatch();
    
  return (
    <StyledContainer>
        <StyledNavLayout onClick={() => dispatch(handleClose())} />
        <StyledModelContent>
           
           {/* Profile */}
          <Link href={'/'}>
            <StyledLink>
                <Image
                  src={'/assets/user.svg'}
                  alt="User logo"
                  width="24" 
                  height="24"
                /> 
              <StyledLinkText>Profile</StyledLinkText>
            </StyledLink>
          </Link>

           {/* Messages */}
          <Link href={'/messages'}>
           <StyledLink>
            <Image
              src={'/assets/envelope.png'}
              alt="envelop logo"
              width="24" 
              height="24"
             /> 
             <StyledLinkText>
               <span>Messages</span> 
              <StyledMock>12</StyledMock>   
             </StyledLinkText>
           </StyledLink>
          </Link>

           {/* Favorites */}
          <Link href={'/favorites'}>
            <StyledLink>
             <Image
                src={'/assets/heart.png'}
                alt="heart logo"
                width="24" 
                height="24"
              /> 
              <StyledLinkText>Favorites</StyledLinkText>
            </StyledLink>
          </Link>

           {/* Settings */}
          <Link href={'/settings'}>
            <StyledLink>
              <Image
                src={'/assets/settings.png'}
                alt="settings logo"
                width="24" 
                height="24"
              /> 
              <StyledLinkText>Settings</StyledLinkText>
            </StyledLink>
          </Link>

           {/* Log Out */}
              <StyledLogOutLink>
                 <Image
                  src={'/assets/log-out.png'}
                  alt="log-out logo"
                  width="24" 
                  height="24"
                /> 
                <StyledLinkText>Log Out</StyledLinkText>
              </StyledLogOutLink>

        </StyledModelContent>
    </StyledContainer>
  )
}

export default NavModel