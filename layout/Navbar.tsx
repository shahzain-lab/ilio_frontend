import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleOpen } from '../state/features/NavModelSlice'
import { RootState } from '../state/store/store'
import { 
   StyledLinks,
   StyledUserAvatar,
   StyledNavbar,
   StyledNavProps,
   StyledLink,
   StyledActiveBar,
   StyledLogo, 
   StyledMock,
   StyledCreatePost,
   StyledPlusTitle,
   StyledPlusIcon,
   StyledMenuAvatar} from '../styles/layout/Navbar.styled'
import NavModel from './NavModel'

const Navbar = () => {
  const router = useRouter();
  const isOpen = useSelector((state: RootState) => state.navModel.isOpen)
  const dispatch = useDispatch()

  return (
    <>
    
    <StyledNavbar>
      <StyledLogo>
        {/* App logo */}
        <Image
          src={'/assets/logo.svg'}
          alt="App logo"
          width="36" 
          height="20"
        />
      </StyledLogo>

      {/* Nav Links */}
        <StyledLinks>
          <StyledLink active={router.pathname === '/'}>
            <Link href={'/'}>Home</Link>
            {router.pathname === '/' && (
            <StyledActiveBar />
            )}
          </StyledLink>

          <StyledLink active={router.pathname === '/messages'}>
            <StyledMock>12</StyledMock>
            <Link href={'/messages'}>Messages</Link>
            {router.pathname === '/messages' && (
            <StyledActiveBar />
            )}
          </StyledLink>

          <StyledLink  active={router.pathname === '/favorites'}>
            <Link href={'/favorites'}>Favorites</Link>
            {router.pathname === '/favorites' && (
            <StyledActiveBar />
            )}
          </StyledLink>

          <StyledLink  active={router.pathname === '/settings'}>
            <Link href={'/settings'}>Settings</Link>
            {router.pathname === '/settings' && (
            <StyledActiveBar />
            )}
          </StyledLink>

        </StyledLinks>
        <StyledNavProps>

        {/* Desktop and tablets */}
           <StyledCreatePost>
             <Image
                  src={'/assets/plus-icon.svg'}
                  alt="User logo"
                  width="28" 
                  height="28"
                  />
             <StyledPlusTitle>
               Post
             </StyledPlusTitle>
           </StyledCreatePost>
            <StyledUserAvatar>
                <Image
                  src={'/assets/user.svg'}
                  alt="User logo"
                  width="20" 
                  height="20"
                />
            </StyledUserAvatar>

        {/* Small devices (IPhone/Galaxy) */}
          <StyledPlusIcon>
             <Image
                  src={'/assets/plus-icon.svg'}
                  alt="User logo"
                  width="32" 
                  height="32"
                  style={{background: '#EEF1F6', borderRadius: '50%'}}
              />
          </StyledPlusIcon>
          <StyledMenuAvatar
            onClick={() => dispatch(handleOpen())}
          >
             <Image
               src={'/assets/menu-icon.svg'}
               alt="User logo"
               width="24" 
               height="24"
             />
            </StyledMenuAvatar>
        </StyledNavProps>
    </StyledNavbar>
    
    {/* open menu model */}
    {isOpen && (
       <NavModel />
    )}
    </>
  )
}

export default Navbar