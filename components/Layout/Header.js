import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Logo from '../atoms/Logo'

export default function Header (props) {
    const [showMenu, setShowMenu] = useState(false)
    useEffect(() => {
        if(window){
            // Check if big screen
             setShowMenu(window.innerWidth >= 968)
        }
    }, [])

    return(
        <MyHeader>
          <TopContainer>
                <Link href="/">
                   <a><Logo /></a>
                </Link>
            <MobileIconContainer onClick={() => setShowMenu(!showMenu)}>
              {!showMenu
                ? <>
                <IconLine />
                <IconLine />
                <IconLine />
                  </>
                : <ClosingIcon>x</ClosingIcon>}
            </MobileIconContainer>
          </TopContainer>
        {showMenu &&
          <nav>
            <Ul>
              <Link href="/"><A>HOME</A></Link>
              <Link href="/"><A>ALTRAPELLE</A></Link>
              <Link href="/"><A>MACCHIE DELLA PELLE</A></Link>
              <Link href="/"><A>PRODOTTI</A></Link>
              <Link href="/"><A>CONTATTI</A></Link>
            </Ul>
          </nav>}
        </MyHeader>
    )
}

const MyHeader = styled.div`
     background-color: #fff;
    @media(min-width: 1200px){
        display: flex;
        justify-content: space-between;
        padding: 0 ${({ theme }) => theme.desktopContainer};
    }
`

const TopContainer = styled.div`
    text-align: center;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    @media(min-width: 1200px){
        justify-content: center;
    }
`
const Ul = styled.ul `
    list-style: none;
    @media(min-width: 1200px){
        display: flex;
        justify-content: center;
        position: relative;
        top: 55px
    }
`
const A = styled.a `
    text-decoration: none;
    color: ${({ theme }) => theme.colors.greyText};
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    display: block;
    padding-bottom: 10px;
    @media(min-width: 1200px){
        margin: 0 20px;
        padding-bottom: 2px;
          &:hover {
          cursor: pointer;
          color: ${({ theme }) => theme.colors.blue};
          border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
      } 
    }
`
const MobileIconContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundGrey};
    width: 30px;
    padding: 8px 5px;
    text-align: center;
    height: 22px;
    position: relative;
    top: 60px;
    border-radius: 4px;
    @media (min-width: 1200px) {
       display: none;
  }
`
const IconLine = styled.div`
    height: 2px;
    width: 20px;
    background-color: ${({ theme }) => theme.colors.blue};;
    margin: 4px auto
`
const ClosingIcon = styled.div`
    font-size: 23px;
    font-weight: 400;
    position: relative;
    bottom: 8px;
    color: ${({ theme }) => theme.colors.blue};
`

