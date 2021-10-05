import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Logo from '../atoms/Logo'
import Image from 'next/image'
import { CartContext } from '../../contexts/CartContext'

export default function Header (props) {
    const [showMenu, setShowMenu] = useState(false)
    const { productsInCart } = useContext(CartContext)
    useEffect(() => {
        if(window){
            // Check if big screen
             setShowMenu(window.innerWidth >= 968)
        }
    }, [])

    const shoppinCartIcon = () => {
      return <Link href="/carrello">
                <a>
                  <IconCartContainer>
                    <Image src="/icons/shopping-cart-blue.png" width="24" height="24"/>
                    <ProductsNumInCart>{productsInCart.length}</ProductsNumInCart>
                 </IconCartContainer>
                </a>
            </Link>
    }

    return(
        <MyHeader>
          <TopContainer>
                <Link href="/">
                   <a><Logo /></a>
                </Link>
             <MobileCartIcon>
                { shoppinCartIcon() }
             </MobileCartIcon>
            <MobileMenuIconContainer onClick={() => setShowMenu(!showMenu)}>
              {!showMenu
                ? <>
                <MobileMenuLine />
                <MobileMenuLine />
                <MobileMenuLine />
                  </>
                : <ClosingIcon>x</ClosingIcon>}
            </MobileMenuIconContainer>
          </TopContainer>
        {showMenu &&
          <nav>
            <Ul>
              <Link href="/"><A>HOME</A></Link>
              <Link href="/macchie-della-pelle"><A>MACCHIE DELLA PELLE</A></Link>
              <Link href="/prodotti"><A>PRODOTTI</A></Link>
              <Link href="/contatti"><A>CONTATTI</A></Link>
              <DesktopCartIcon>
                { shoppinCartIcon() }
             </DesktopCartIcon>
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
const IconCartContainer = styled.div`
      position: relative;
      top: 64px;
    @media(min-width: 1200px){
        top: 0;
    }
`
const ProductsNumInCart = styled.span`
      background-color: ${({ theme }) => theme.colors.backgroundGrey};
      border-radius: 50%;
      padding: 1px 6px;
      font-size: 11px;
      color: ${({ theme }) => theme.colors.blue};
    @media(min-width: 1200px){
        
    }
`
const MobileCartIcon = styled.div`
    @media(min-width: 1200px){
        display: none;
    }
`
const DesktopCartIcon = styled.div`
        display: none;
    @media(min-width: 1200px){
        display: block;
        position: relative;
        left: 20px;
        bottom: 2px;
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
const MobileMenuIconContainer = styled.div`
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
const MobileMenuLine = styled.div`
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

